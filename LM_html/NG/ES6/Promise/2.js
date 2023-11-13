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

xq().then((res) => {
  marry().then((res2) => {
    bady();
  });
})


function bady(){
  setTimeout(() =>{
    console.log('小龙女出生！');
  },500);
}

