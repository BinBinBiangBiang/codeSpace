console.log('开始');

setTimeout(() => {
  console.log('时间结束，执行');
}, 1000);

Promise.resolve().then(() => {
  console.log('Promise 执行');
});

console.log('结束');
