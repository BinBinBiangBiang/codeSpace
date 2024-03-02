function a(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      console.log('a')
      resolve()
    },1000)
  })
}

function b(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      console.log('b')
      reject('c')
    },500)
  })
}

function c(){
  console.log('1'+'c');
}

Promise.all([a(),b()]).then(
  (res) =>{
    console.log(res);
    c()
  },
  (error) =>{
    console.log(error);
  }
)

