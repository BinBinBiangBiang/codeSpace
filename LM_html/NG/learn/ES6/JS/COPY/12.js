let obj = { name: '小明', value: { a: 1, b: 2 } };
let deepCopy = JSON.parse(JSON.stringify(obj));

deepCopy.name = '小红';  // 修改第一层内容

console.log(obj);  // 输出：{ name: '小明', value: { a: 1, b: 2 } } 原始对象obj的值没有受影响

deepCopy.value.a =  3;  // 修改第二层内容

console.log(obj);  // 输出：{ name: '小明', value: { a: 1, b: 2 } } 原始对象obj的值没有受影响