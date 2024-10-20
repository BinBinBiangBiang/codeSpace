function deepClone(obj, map = new WeakMap()) {
  if (obj === null) return null; // 如果 obj 是 null 或者不是对象，则直接返回
  if (typeof obj !== 'object') return obj; // 原始类型直接返回

  if (map.get(obj)) return map.get(obj); // 检查是否已经克隆过该对象，防止循环引用

  let newObj;
  const typeOfObj = Object.prototype.toString.call(obj);

  switch (typeOfObj) {
    case '[object Array]':
      newObj = []; // 数组
      break;
    case '[object Date]':
      newObj = new Date(obj); // 日期
      break;
    case '[object RegExp]':
      newObj = new RegExp(obj); // 正则
      break;
    case '[object Map]':
      newObj = new Map(); // Map
      for (const [key, value] of obj) {
        newObj.set(key, deepClone(value, map));
      }
      break;
    case '[object Set]':
      newObj = new Set(); // Set
      for (const value of obj) {
        newObj.add(deepClone(value, map));
      }
      break;
    default:
      if (obj instanceof Error) { // 错误对象
        newObj = new obj.constructor(obj.message);
      } else {
        newObj = {}; // 普通对象
      }
  }

  // 将当前对象及其克隆后的副本存入WeakMap
  map.set(obj, newObj);

  // 对于普通对象和数组进行属性的递归复制
  if (typeOfObj === '[object Array]' || typeOfObj === '[object Object]') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepClone(obj[key], map);
      }
    }
  }

  return newObj;
}
// const obj = { a: 1, b: 2, c: { d: 3 } }
// const arr = [1, 2, 3, [2, { a: 1, b: [2, [3, { c: 3 }]] }]]
// const objNull = null
// const newObj = deepClone(obj)
// const newArr = deepClone(arr)
// const newObjNull = deepClone(objNull)
// console.log(newObj)
// console.log(newArr)
// console.log(newObjNull)

const date = new Date().getSeconds()
console.log(date)
setTimeout(() => {
  console.log(deepClone(date))
}, 1000)