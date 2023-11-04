// 当在html文件中的头部引入js文件时，由于编译器从上往下读，当读到js中的部分代码时，比如获取不到对应的元素，就会报错。
// 那么我们就得将外部js文件写在下面这个函数内
// window.onload = function() {

// }

// **历史弹幕**
let data = [
  { value: '关注博主，点一下小心心', color: 'red', fontSize: 22, time: 5 },
  { value: '一键三连，冲冲冲', color: 'green', fontSize: 30, time: 10 },
  { value: '博主牛啊，关注了', color: 'blue', fontSize: 26, time: 13 }
]



// **整理弹幕数据**

// 移动弹幕函数
CanvasBarrage.prototype.render = function () {
  // 清除画布
  this.clear()
  this.renderBarrage() // 弹幕绘制在画布上
  if (!this.isPaused) { // 播放状态
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

// 书写清除画布的函数写到原型内
CanvasBarrage.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)  // clearRect()是canvas内的一个内置方法
}




// 书写弹幕绘制在画布上的函数renderBarrage()
CanvasBarrage.prototype.renderBarrage = function () {
  // 拿到视频的播放的时间
  let time = this.video.currentTime

  // 遍历所有的弹幕
  this.barrages.forEach(function (barrage) {

    // 每条弹幕自带一个renderEach方法
    if (time >= barrage.time && !barrage.flag) {
      // 弹幕初始化 被初始化的对象不再操作
      if (!barrage.isInit) {
        barrage.init()
        barrage.isInit = true
      }

      // 实现弹幕左移
      barrage.x -= barrage.speed
      barrage.renderEach()

      console.log(barrage);

      if (barrage.x < -barrage.width) { // 从左边出屏幕
        barrage.flag = true
      }
    }

  });

}

CanvasBarrage.prototype.add = function (obj) {
  this.barrages.push(new Barrage(obj, this))
}

function CanvasBarrage(canvas, video, opts = {}) {
  if (!canvas || !video) return

  this.video = video
  this.canvas = canvas

  // 设置canvas宽高和video保持一致
  this.canvas.width = video.width
  this.canvas.height = video.height

  // 获取画布
  this.ctx = canvas.getContext('2d')

  // 初始化弹幕
  let defOpts = {
    color: '#e91e63',
    fontSize: 20,
    speed: 1.5,
    opacity: 0.5,
    data: []
  }

  // 将defOpts和opts直接挂在this上面，我们调用colo时，直接使用this.color即可
  Object.assign(this, defOpts, opts)

  // 视频播放弹幕才出现
  // isPaused 视频是不是暂停状态
  this.isPaused = true

  // 获取到所有的弹幕
  this.barrages = this.data.map((item) => new Barrage(item, this))
  //将每一条弹幕都修饰一下（将每个对象都交给Barrage函数修饰一下）

  // 移动弹幕
  this.render()
}



// let canvas = document.getElementById('canvas');
// new CanvasBarrage(canvas,video,{value:'xxx',color:'xxx',fontSize:'xx',time:'xx'})

// 修饰一条弹幕
// context(上下文对象) -- 上一个函数的this，所以我们可以一层套一层得拿到所有的属性
Barrage.prototype.init = function () {
  this.color = this.obj.color || this.context.color
  this.fontSize = this.obj.fontSize || this.context.fontSize
  this.speed = this.obj.speed || this.context.speed
  this.opacity = this.obj.opacity || this.context.opacity

  // 每条弹幕的宽度
  let p = document.createElement('p')
  p.style.fontSize = this.fontSize + 'px'
  p.innerHTML = this.value
  // 直接把p标签放到body里面去，这会导致页面内多一个p标签，可以看到内容（有点不合理）
  document.body.appendChild(p)

  this.width = p.offsetWidth
  document.body.removeChild(p)

  //设置弹幕的初始位置
  this.x = this.context.canvas.width
  this.y = this.context.canvas.height * Math.random()

  // 上下方超出边界
  if (this.y < this.fontSize) {
    this.y = this.fontSize
  } else if (this.y > this.context.canvas.height - this.fontSize) {
    this.y = this.context.canvas.height - this.fontSize
  }
}
function Barrage(obj, context) {
  this.value = obj.value // 新弹幕的内容
  this.time = obj.time
  this.obj = obj
  this.context = context
}


Barrage.prototype.renderEach = function () {// 将这条弹幕绘制在画布上
  // 设置画布的文字字体和字号
  this.context.ctx.font = `${this.fontSize}px Arial`
  // 设置画布的文字颜色
  this.context.ctx.fillStyle = this.color
  // 绘制文字
  this.context.ctx.fillText(this.value, this.x, this.y)
}

// **发送弹幕**
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $text = document.getElementById('text')
let $btn = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')


// 点击事件，两种写法：
// 第一种：
// $btn.onclick = function (){
//   console.log(123)
// }

// 第二种：
$btn.addEventListener('click', function () {
  console.log(123)
})

// **创建整理弹幕的实例对象**
let canvasBarrage = new CanvasBarrage(canvas, video, {data}) // 当对象中的键和值共有共用同一个词是 可以只写一个 {data}
// video 播放的时候开始处理弹幕
video.addEventListener('play', function () {
  canvasBarrage.isPaused = false;
  canvasBarrage.render() // 处理每一条弹幕
})

function send() {
  // 读取文本内容
  let value = $text.value
  // 读取当前视频播放时间
  let time = video.currentTime
  // 拿到用户选中的颜色
  let color = $color.value
  let fontSize = $range.value
  let obj = { value: value, color: color, fontSize: fontSize, time: time }
  // console.log(obj)

  // 添加弹幕数据
  canvasBarrage.add(obj)
}


// 添加监听事件，当用户点击回车时也能发送
$btn.addEventListener('click', send)
$text.addEventListener('keyup', function (e) {
  console.log(e)
  if (e.keyCode == 13) {
    send()
  }
})



