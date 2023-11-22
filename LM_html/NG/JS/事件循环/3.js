// 按理来说是按我们下面的顺序执行，但是由于现在的浏览器给await的执行开小灶，await后面的代码不能当做.then进入微任务队列，而是直接执行

console.log('script start') // 1
async function async1() {
  await async2()
  console.log('async1 end') // 5
}
async function async2() {
  console.log('async2 end') // 4
}
async1()
setTimeout(function () {
  console.log('setTimeout') // 8
}, 0)
new Promise(resolve => {
  console.log('Promise') // 2
  resolve()
})
  .then(function () {
    console.log('promise1') // 6
  })
  .then(function () {
    console.log('promise2') // 7
  })
console.log('script end') // 3