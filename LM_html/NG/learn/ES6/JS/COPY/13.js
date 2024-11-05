let obj = { a: undefined, b: function() {}, c: Symbol('symbol'), d: BigInt(123) };
let deepCopy = JSON.parse(JSON.stringify(obj));
console.log(deepCopy); // 输出: { a: null, b: null, c: null, d: 123 }
