/**
 * 异步池函数
 * @param {number} limit - 并发限制
 * @param {Array<Function>} tasks - 任务数组，每个任务是一个返回 Promise 的函数
 * @returns {Promise<Array<any>>} - 返回一个包含所有任务结果的 Promise
 */
async function asyncPool(limit, tasks) {
  const executing = []; // 当前正在执行的任务
  const results = []; // 存储所有任务的结果

  for (let task of tasks) {
    const p = Promise.resolve().then(task); // 创建一个新的 Promise
    results.push(p); // 将任务的 Promise 存入结果数组
    console.log(results.length)
    if (limit <= tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1)); // 任务完成时从执行队列中移除
      executing.push(e); // 将任务加入执行队列

      if (executing.length >= limit) {
        // console.log('executing', executing)
        await Promise.race(executing); // 等待任意一个任务完成
      }
    }
  }

  return Promise.all(results); // 等待所有任务完成
}

// 示例任务
const tasks = Array.from({ length: 10 }, (_, i) => () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${i + 1} completed`);
    }, Math.random() * 1000);
  })
);

tasks.push(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('阻塞5秒')
    }, 5000)
  })
})

// 使用异步池
asyncPool(3, tasks)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });