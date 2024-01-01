const util = require('util')

const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, 5],
    e: () => {
      console.log(6);
    }
  }
}

// console.log(util.inspect(obj, {depth: Infinity}));  //把对象转换为字符串

// console.log(util.format('%s:%s', 'foo', 'bar'));   // 格式化参数，后面格式化成前面我们想要的类型
// console.log(util.format('%d + %d = %d', 1, 2, 3));
// console.log(util.format('hello %j', {name: 'Tom'}));  // %j 对象

console.log(util.types.isArrayBuffer([]));
console.log(util.types.isDate(new Date()));