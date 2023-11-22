function A(){
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      console.log('异步A完成');
      resolve();
    }, 1000);
  })
}

function B(){
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      console.log('异步B完成');
      resolve();
    }, 500);
  })
}

function C(){
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      console.log('异步C完成');
      resolve();
    }, 100);
  })
}

//----------------------------------------------------------------
// 这个写法也不太好看
// A()
// .then(() => {   // .then虽然默认会返回promise对象。但是当.then的回调有人为返回promise对象时，.then默认的proimse会失效
//   return B()
// }) 
// .then(() => {
//     C();
// })


//----------------------------------------------------------------
async function foo(){    // 函数前面加上一个async 相当于 函数内部返回了一个return new Promise(function(resolve,reject) {})
  await A();
  await B();
  await C();
}

foo()