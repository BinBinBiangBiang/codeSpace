var front = document.getElementsByClassName('front-cover')[0]
var book = document.getElementsByClassName('book')[0]
console.log(book)
var card = document.getElementsByClassName('card')[0]
console.log(card)
var shadow = document.getElementsByClassName('shadow')[0]
console.log(shadow)
var hold = false
var clamp = function (val, min, max) {
  return Math.max(min, Math.min(val, max))
}

// 鼠标是否按下 onmousedown
front.onmousedown = function () {
  hold = true
}

// 鼠标松开
window.onmouseup = function () {
  hold = false
}

window.onmousemove = function (e) {
  if (hold) {
    // 修改左半本书的角度，卡片旋转，阴影倾斜
    var deg = clamp((window.innerWidth / 2 - e.x + 300) / 300 * -90, -180, 0)

    front.style.transform = `rotateY(${deg}deg)`

    // 整本书立起来 60+deg /8
    book.style.transform = `rotateX(${deg / 8 + 60}deg)`
    // 卡片 deg/2
    card.style.transform = `rotateX(${deg / 2}deg)`
    // 阴影倾斜 deg/8
    shadow.style.transform = `skew(${deg / 8}deg)`
  }
}

