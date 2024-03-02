function  request(num){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(num * 10);
    },1000)
  })
}

function* gen(){
  const num1 = yield request(1);
  const num2 = yield request(num1);
  const num3 = yield request(num2);
  return num3;
}

// function generatorToAsync(generatorFn){ // 把 generatorFn 变更成具有async功能的函数
//   const gen = generatorFn()
//   return function (){ // 具有async功能的函数
//     return new Promise((resolve, reject) =>{
//       const next1 = gen.next()
//       next1.value.then(res1 =>{    
//         const next2 = gen.next(res1)
//         next2.value.then(res2 =>{
//           const next3 = gen.next(res2);
//           next3.value.then(res3 =>{
//             resolve(res3)
//           })
//         });
//       }) 
//     });
//   }
// }

function generatorToAsync(generatorFn){ // 把 generatorFn 变更成具有async功能的函数
  return function (){ // 具有async功能的函数
    const gen = generatorFn()
    return new Promise((resolve, reject) =>{
      function loop(key,arg){
        let res = null;
        res = gen[key](arg)  // gen.next(arg)  // 得到一个对象 格式如下： {value: Promise{},done: false}
        const {value,done} = res
        if(done){ // 递归的出口
          return resolve(value)
        }else{
          Promise.resolve(value).then(val =>{ // 10   Promise.resolve() 接收一个Promise对象为参数，会直接读取到该参数对象中resolve中的值
            // console.log(val);
            loop('next',val)
          })  
        }
      }
      loop('next')  
    });
  }
}

const asyncFn = generatorToAsync(gen)
// console.log(asyncFn);
asyncFn().then((res)=>{
  console.log(res);
})