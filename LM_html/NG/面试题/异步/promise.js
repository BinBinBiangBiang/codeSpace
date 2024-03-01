class MyPromise{
  constructor(executor) {
    this.state = 'pending'; // promise 的状态
    this.value = undefined; // 接收resolve的参数
    this.reason = undefined; // 接受reject的参数
    this.onFullfilledCallbacks = [] // 存放resolve的回调函数
    this.onRejectedCallbacks = [] // 存放reject的回调函数

    const resolve = (value) =>{
      if(this.state === 'pending'){
        this.state = 'fulfilled'
        this.value = value
        // 把then 中的回调触发掉
        this.onFullfilledCallbacks.forEach(callback => callback(value))
      }
    }

    const reject = (reason) =>{
      if(this.state === 'pending'){
        this.state = 'rejected'
        this.reason = reason
        this.onFullfilledCallbacks.forEach(callback => callback(reason))
      }
    }

    executor(resolve, reject);
  }

  then(onFulfilled, onRejected){
    // 把 onFulfilled 存起来，供resolve 调用
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => reason

    const newPromise = new MyPromise((resolve, reject) =>{
      if(this.state === 'fulfilled'){  // then 前面的promise对象状态是同步变更完成的
        setTimeout(() => { // 官方是微任务，我们宏任务简化一下 // 模拟异步执行
          try{
            const result = onFulfilled(this.value)
            resolve(result)  // 应该放result里面的resolve中的参数
          }catch(err){
            reject(err)
          }
        }, 0)
      }else if(this.state === 'rejected'){   
        setTimeout(() => {
          try{
            const result = onRejected(this.reason)
            resolve(result)
          }catch(err){
            reject(err)
          }
        }, 0)
      }else{
        this.onFullfilledCallbacks.push((value)=>{
          setTimeout(()=>{  // 保障将来onFulfilled在resolve中被调用时是一个异步函数
            try{
              const result = onFulfilled(value)
              resolve(result)  // 应该放result里面的resolve中的参数
            }catch(err){
              reject(err)
            }
          })
        })
        this.onRejectedCallbacks.push((reason)=>{
          setTimeout(()=>{  // 保障将来onRejected在reject中被调用时是一个异步函数
            try{
              const result = onRejected(reason)
              resolve(result)
            }catch(err){
              reject(err)
            }
          })
        })
      }
    })
    return newPromise;
  }

  static race(promises){
    return new MyPromise((resolve, reject) =>{
      // 看promises里面的哪个对象的状态先变更
      for(let promise of promises){
        promise.then(()=>{
          (value)=>{
            resolve(value)
          },
          (reason)=>{
            reject(reason)
          }
        })
      }
    })
  }
}


let p = new MyPromise((resolve, reject) =>{
  reject(2)
  resolve(1)
})

p.then(() =>{
  console.log('2');
},
() =>{
  console.log('error');
}
)

console.log(p);