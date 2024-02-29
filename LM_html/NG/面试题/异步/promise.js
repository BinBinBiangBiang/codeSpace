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

  then(){
    //  

    // return new MyPromise((resolve, reject) =>{
    //   if(this.state === 'fulfilled'){
    //     resolve(this.value)
    //   }else if(this.state === 'rejected'){
    //     reject(this.reason)
    //   }else{
    //     this.onFullfilledCallbacks.push(resolve)
    //     this.onRejectedCallbacks.push(reject)
    //   }
    // })
  }
}


let p = new MyPromise((resolve, reject) =>{
  // reject(2)
  // resolve(1)
})

p.then(() =>{
  console.log('2');
},
() =>{
  console.log('error');
}
)

console.log(p);