let n = 123;
let str = 'hello';
let arr = [1, 2, 3];
let func = function() {};

console.log(Object.prototype.toString.call(n));   // 输出: "[object Number]"
console.log(Object.prototype.toString.call(str));   // 输出: "[object String]"

console.log(Object.prototype.toString.call(arr));   // 输出: "[object Array]"
console.log(Object.prototype.toString.call(func));  // 输出: "[object Function]"

// 通过字符串截取，可以返回指定类型，如下：

console.log(Object.prototype.toString.call(n).slice(8, -1));   // 输出: "Number"
console.log(Object.prototype.toString.call(arr).slice(8, -1));   // 输出: "Array"
