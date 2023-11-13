function xq(){
  return new Promise((resolve ,reject) => {
    setTimeout(() =>{
      console.log('龙哥相亲了！');
      resolve('相亲成功');
    },2000)
  })
}

function marry(){
  return new Promise((resolve ,reject) => {
    setTimeout(() =>{
      console.log('龙哥结婚了！');
      resolve()
    },1000)
  })
}

// xq()
// .then((res) => {
//   marry()
// })
// .then((res2) => {
//   bady();
// });

xq()
.then((res) => {
  console.log(res);
  return marry()
})
.then((res2) => {
  return bady();
})
.then((res3) => {
  bady2();
})



function bady(){
  return new Promise((resolve ,reject) => {
    setTimeout(() =>{
      console.log('小龙女出生了！');
      resolve()
    },1000)
  })
}

function bady2(){
  setTimeout(() =>{
    console.log('小龙二出生了！');
  },500);
}


