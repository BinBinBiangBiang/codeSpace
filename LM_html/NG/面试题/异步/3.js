function a() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('a')
      resolve('ok')
    }, 1000)
  })
}

function b() {
  setTimeout(() => {
    console.log('b')
  }, 500)
}

// 第一种方式 写在回调函数里面
// a()
//   .then((res) => {
//     b()
//   })

// 第二种方式 也可以直接将b写在括号内部，直接当做函数触发，因为.then一定会生成一个回调函数
a()
  .then(b)  




