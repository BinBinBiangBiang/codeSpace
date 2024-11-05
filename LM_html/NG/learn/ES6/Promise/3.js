function a(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log('a');
      reject();
    },1000)
  })
}

function b(){
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      console.log('b');
      resolve();
    },1500)
  })
}

function c(){
  console.log('c');
}

// Promise.all([a(),b()]).then(c)

// all必须要接收到的所有的promise状态都为resolve ，then才会调用

// .catch() 用来接收promise中的reject


// race 里面
Promise.race([a(),b()]).then(c).catch((err) => {console.log(err);})