// 手动实现一个深拷贝
let obj = {
  name: '管一',
  age: 18,
  like: {
    type: 'coding'
  }
}

function deepCopy(obj) {
  let objCopy = {}
  for (let key in obj) {
    if(Object.prototype.hasOwnProperty(key)){
      if (obj[key] instanceof Object) { // 判断obj[key] 是不是引用类型
        objCopy[key] = deepCopy(obj[key])
      } else {
        objCopy[key] = obj[key]
      }
    }
  }
  return objCopy;
}