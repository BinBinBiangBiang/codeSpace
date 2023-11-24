const memoized = require('./mermo.js')

var count = 0;

var fibonacci = function (n) {
  count++;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// 直接调用 memoized 函数
const memoizedFibonacci = memoized(fibonacci);

console.time('fibonacci');

console.log(memoizedFibonacci(44));

console.log(count);

console.timeEnd('fibonacci'); // 记忆函数 ， 闭包的高级功能

