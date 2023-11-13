// =================================================================
// let flag = false

// function a(){
//   setTimeout(function(){
//     console.log("阿臻");
//     flag = true;
//   },1000);
// }

// function b(){
//   setTimeout( ()=>{
//     console.log('10亩地');
//   },2000)
// }

// a()
// if(flag){
//   b()
// }

// =================================================================
/**
 * 回调
 */
// let flag = false

// function a(){
//   setTimeout(function(){
//     console.log("阿臻");
//     b()
//   },1000);
// }

// function b(){
//   setTimeout( ()=>{
//     console.log('10亩地');
//   },0)
// }


// a()

let flag = false

function a(cb){
  setTimeout(function(){
    console.log("阿臻");
    cb()
  },1000);
}

function b(){
  setTimeout( ()=>{
    console.log('10亩地');
  },0)
}

a(b)
// =================================================================
