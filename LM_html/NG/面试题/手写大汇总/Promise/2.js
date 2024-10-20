class MyPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        this.onFulfilledCallbacks.forEach((cb) => {
          queueMicrotask(() => {
            cb(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = reason
        this.onRejectedCallbacks.forEach((cb) => {
          queueMicrotask(() => {
            cb(this.reason)
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

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    const newPromise = new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        queueMicrotask(() => {
          try {
            const result = onFulfilled(this.value)
            resolve(result)
          } catch (err) {
            reject(err)
          }
        })
      }

      if (this.status === 'rejected') {
        queueMicrotask(() => {
          try {
            const result = onRejected(this.reason)
            resolve(result)
          } catch (err) {
            reject(err)
          }
        })
      }

      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push(
          () => {
            queueMicrotask(() => {
              try {
                const result = onFulfilled(this.value)
                resolve(result)
              } catch (err) {
                reject(err)
              }
            })
          }
        )

        this.onRejectedCallbacks.push(
          () => {
            queueMicrotask(() => {
              try {
                const result = onRejected(this.reason)
                resolve(result)
              } catch (err) {
                reject(err)
              }
            })
          }
        )
      }
    })

    return newPromise
  }

  catch(onRejected) {
    return this.then(null, (reason) => {
      try {
        return onRejected(reason);
      } catch (err) {
        return new MyPromise((resolve, reject) => reject(err));
      }
    });
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let count = 0
      let result = []
      try {
        promises.forEach((item, index) => {
          item.then(
            (value) => {
              count++
              result[index] = value
              if (count === promises.length) {
                console.log('res', result)
                resolve(result)
              }
            },
            (reason) => {
              reject(reason)
            }
          )
        })
      } catch (err) {
        reject(err)
      }
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      try {
        let count = 0
        let result = []
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
      } catch (err) {
        reject(err)
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        try {
          promise.then(
            (value) => {
              resolve(value)
            },
            (reason) => {
              reject(reason)
            }
          )
        } catch (err) {
          reject(err)
        }
      })
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      let count = 0
      let result = []
      promises.forEach((promise, index) => {
        promise.then(
          (value) => {
            count++
            result[index] = {
              status: 'fulfilled',
              value: value
            }
            if (count === promises.length) {
              resolve(result)
            }
          },
          (reason) => {
            count++
            result[index] = {
              status: 'rejected',
              reason: reason
            }
            if (count === promises.length) {
              reject(result)
            }
          }
        )
      })
    })
  }
}


// -------------------------------------------------------------------------------------------------
// 测试

// const promise = new MyPromise((resolve, reject) => {
//   console.log('promise111')
//   setTimeout(() => {
//     console.log('111')
//     resolve('resolve1')
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
//     resolve('resolve2')
//   }, 5000)
// }).then(() => {
//   console.log('success111')
// })

// const promises = [promise1, promise]

// MyPromise.all(promises).then((res) => {
//   console.log('all', res)
// })


// 测试代码
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
