const requestList = []

for (let i = 0; i < 100; i++) {
  requestList.push(
    () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (i === 30) {
            reject(new Error('出错啦！'))
          }
          console.log('done', i)
          resolve(i)
        }, 1000 * Math.random())
      })
  )
}

// 运行池
const pool = new Set();

// 等待队列
const waitQueue = [];

/**
 * @description: 限制并发数量的请求
 * @param {*} reqFn：请求方法
 * @param {*} max：最大并发数
 */
const request = (reqFn, max) => {
  return new Promise((resolve, reject) => {
    // 判断运行吃是否已满
    const isFull = pool.size >= max;

    // 包装的新请求
    const newReqFn = () => {
      reqFn()
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
        .finally(() => {
          // 请求完成后，将该请求从运行池中删除
          pool.delete(newReqFn);
          // 从等待队列中取出一个新请求放入等待运行池执行
          const next = waitQueue.shift();
          if (next) {
            pool.add(next);
            next();
          }
        });
    };

    if (isFull) {
      // 如果运行池已满，则将新的请求放到等待队列中
      waitQueue.push(newReqFn);
    } else {
      // 如果运行池未满，则向运行池中添加一个新请求并执行该请求
      pool.add(newReqFn);
      newReqFn();
    }
  });
};


// 使用Promise.allSettled来确保所有请求都完成
Promise.allSettled(requestList.map(item => request(item, 10)))
.then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log('Success:', result.value);
    } else {
      console.log('Rejected:', result.reason);
    }
  });
});