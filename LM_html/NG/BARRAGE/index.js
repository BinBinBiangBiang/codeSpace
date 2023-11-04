// 当在html文件中的头部引入js文件时，由于编译器从上往下读，当读到js中的部分代码时，比如获取不到对应的元素，就会报错。
// 那么我们就得将外部js文件写在下面这个函数内
// window.onload = function() {

// }

// 历史弹幕
let data =[
  {value:'关注博主，点一下小心心♥(ˆ◡ˆԅ)',color:'red',fontSize:22,time:5},
  {value:'一键三连，冲冲冲',color:'green',fontSize:30,time:10},
  {value:'博主牛啊，关注了',color:'blue',fontSize:26,time:13}
]



// 整理弹幕数据

// 移动弹幕函数
CanvasBarrage.prototype.render = function(){
  // 清除画布
  this.clear()
  this.renderBarrage() // 弹幕绘制在画布上
  if(!this.isPaused){ // 播放状态
    // 递归，render函数自己调用自己，每隔16.7ms调用一次
    requestAnimationFrame(this.render.bind(this))
    /**
     * requestAnimationFrame是一个用于在浏览器中执行动画的方法。
     * 它会告诉浏览器在下一次重绘之前调用指定的回调函数，以便实现流畅的动画效果。

      在给定的代码中，this.render.bind(this)将当前对象的render方法绑定到this，
      确保在执行回调函数时，render方法的作用域仍然是当前对象。
      因此，requestAnimationFrame(this.render.bind(this))会在下一次浏览器重绘之前调用this.render方法，
      实现动画效果的更新。
     *  */
  }
}

function CanvasBarrage(canvas,video,opts = {}) {
  if(!canvas|| !video)  return
  
  this.video = video
  this.canvas = canvas

  // 设置canvas宽高和video保持一致
  this.canvas.width = video.width
  this.canvas.heigth = video.heigth

  // 获取画布
  this.ctx = canvas.getContext('2d')

  // 初始化弹幕
  let defOpts = {
    color:'#e91e63',
    fontSize:20,
    speed:1.5,
    opacity:0.5,
    data:[]
  }
  
  // 将defOpts和opts直接挂在this上面，我们调用colo时，直接使用this.color即可
  Object.assign(this,defOpts,opts)

  // 视频播放弹幕才出现
  // isPaused 视频是不是暂停状态
  this.isPaused = true

  // 获取到所有的弹幕
  this.barrages = data

  // 移动弹幕
  this.rander()
}

// let canvas = document.getElementById('canvas');
// new CanvasBarrage(canvas,video,{value:'xxx',color:'xxx',fontSize:'xx',time:'xx'})