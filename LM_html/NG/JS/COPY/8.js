let obj = { name: '小明', details:{ age: 25 } };
let objCopy = Object.assign({},obj);

objCopy.name = '小红';
objCopy.details.age = 30;

console.log(obj.name); // 输出: 小明，原对象未受影响
console.log(obj.details.age); // 输出: 30，原对象受影响