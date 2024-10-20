class SuperTask {
  constructor(max) {
    this.tasks = []
    this.runNun = 0
    this.max = max
  }
  run(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({ task, resolve, reject });
      this.runTask()
    })
  };
  runTask() {
    if (this.runNun < this.max && this.tasks.length) {
      this.runNun++
      let { task, resolve, reject } = this.tasks.shift()
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runNun--
          this.runTask()
        })
    }
  }
}


const timer = (delay) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        try {
          resolve()
          // throw new Error('错误');
        } catch (error) {
          reject(error);
        }
      }, delay)
    } catch (e) {
      reject(e)
    }
  })
}
const p = new SuperTask(5);
const addPromise = (delay, taskName) => {
  p.run(() => timer(delay))
    .then(() => {
      console.log(`任务${taskName}完成`);
    }).catch((err) => {
      console.log(`任务${taskName}失败`, err);
    })
}
addPromise(1000, 1)
addPromise(500, 2)
addPromise(1500, 3)
addPromise(2000, 4)
addPromise(800, 5)
addPromise(1200, 6)
addPromise(700, 7)
addPromise(300, 8)
addPromise(900, 9)
addPromise(400, 10)
addPromise(1000, 1)
addPromise(500, 2)
addPromise(1500, 3)
addPromise(2000, 4)
addPromise(800, 5)
addPromise(1200, 6)
addPromise(700, 7)
addPromise(300, 8)
addPromise(900, 9)
addPromise(400, 10)