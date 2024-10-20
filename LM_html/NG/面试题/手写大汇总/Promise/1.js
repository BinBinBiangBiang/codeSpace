// 手写promise
class MyPromise {
  static status = {
    PENDING: 'pending',
    REJECTED: 'rejected',
    FULLFILLED: 'fullfilled',
  }

  constructor(executor) {
    // 初始化状态
    this.status = MyPromise.status.PENDING
    // 初始化resolve的值
    this.value = undefined
    // 初始化reject的值
    this.reason = undefined
    // 初始化成功的回调函数
    this.onFullfilledCallback = []
    // 初始化失败的回调函数
    this.onRejectedCallback = []

    const resolve = (value) => {
      if (this.status === MyPromise.status.PENDING) {
        this.value = value
        this.status = MyPromise.status.FULLFILLED
        this.onFullfilledCallback.forEach((fn) => {
          queueMicrotask(() => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === MyPromise.status.PENDING) {
        this.reason = reason
        this.status = MyPromise.status.REJECTED
        this.onRejectedCallback.forEach((fn) => {
          queueMicrotask(() => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFullFilled, onRejected) {
    onFullFilled = typeof onFullFilled === 'function' ? onFullFilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => reason

    const newPromise = new Promise((resolve, reject) => {
      if (this.status === MyPromise.status.FULLFILLED) {
        queueMicrotask(() => {
          try {
            const result = onFullFilled(this.value)
            resolve(result)
          } catch (err) {
            reject(err)
          }
        })
      }
      if (this.status === MyPromise.status.REJECTED) {
        queueMicrotask(() => {
          try {
            const result = onRejected(this.reason)
            resolve(result)
          } catch (err) {
            reject(err)
          }
        })
      }
      if (this.status === MyPromise.status.PENDING) {
        this.onFullfilledCallback.push(() => {
          queueMicrotask(() => {
            try {
              const result = onFullFilled(this.value)
              resolve(result)
            } catch (err) {
              reject(err)
            }
          })
        })
        this.onRejectedCallback.push(() => {
          queueMicrotask(() => {
            try {
              const result = onRejected(this.reason)
              resolve(result)
            } catch (err) {
              reject(err)
            }
          })
        })
      }
    })
    return newPromise
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let count = 0, result = []
      promises.forEach((promise, index) => {
        promise.then(
          (value) => {
            count++
            result[index] = value
            if (count === promises.length) {
              resolve(result)
            }
          },
          (reason) => {
            reject(reason)
          }
        )
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise.then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            reject(reason)
          }
        )
      })
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      let count = 0, result = []
      promises.forEach((promise, index) => {
        promise.then(
          (value) => {
            resolve(value)
          },
          (reason) => {
            count++
            result[index] = reason
            if (count === promises.length) {
              reject(result)
            }
          }
        )
      })
    })
  }
}

// const promise = new MyPromise((resolve, reject) => {
//   console.log('promise111')
//   setTimeout(() => {
//     console.log('111')
//     resolve('resolve')
//   }, 5000)
// }).then(() => {
//   console.log('success111')
// })

// new MyPromise(async (resolve, reject) => {
//   console.log('promise222')
//   await promise
//   await new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('222')
//       resolve('resolve')
//     }, 3000)
//   }).then(() => {
//     console.log('success2')
//   })
//   console.log('success222')
// })

// const promise1 = new MyPromise((resolve, reject) => {
//   console.log('promise111')
//   setTimeout(() => {
//     console.log('111')
//     resolve('resolve')
//   }, 5000)
// }).then(() => {
//   console.log('success111')
// })

// const promises = [promise1, promise]

// MyPromise.all(promises).then((res) => {
//   console.log(res)
// })


// ---------------------------------------------------------------------------------------
// Promise.all() 测试
// 创建两个不同的 MyPromise 实例
const promise1 = new MyPromise((resolve, reject) => {
  console.log('promise111');
  setTimeout(() => {
    console.log('111');
    resolve('resolve1');
  }, 3000);
});

const promise2 = new MyPromise((resolve, reject) => {
  console.log('promise222');
  setTimeout(() => {
    console.log('222');
    resolve('resolve2');
  }, 4000);
});

const promises = [promise1, promise2];

MyPromise.all(promises).then((res) => {
  console.log('all', res); // 输出结果应为 ['resolve1', 'resolve2']
}).catch((err) => {
  console.log('err', err);
})

// MyPromise.race(promises).then((res) => {
//   console.log(res); // 输出结果应为 'resolve1'
// }, (reason) => {
//   console.log(reason);
// }).catch((err) => {
//   console.log(err);
// })

// MyPromise.any(promises).then((res) => {
//   console.log(res); // 输出结果应为 'resolve1'
// }, (reason) => {
//   console.log(reason);
// }).catch((err) => {
//   console.log(err);
// })