function deepClone(obj, map = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (map.has(obj)) {
    return map.get(obj)
  }


  const objType = Object.prototype.toString.call(obj)
  let newObj

  switch (objType) {
    case '[object Array]':
      newObj = []
      break
    case '[object Object]':
      newObj = {}
      break
    case '[object Date]':
      newObj = new Date(obj)
      break
    case '[object RegExp]':
      newObj = new RegExp(obj)
      break
    case '[object Map]':
      newObj = new Map()
      for (let [key, val] in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj.set(key, deepClone(val, map))
        }
      }
      break
    case '[object Set]':
      newObj = new Set()
      for (let val of obj) {
        newObj.add(deepClone(val, map))
      }
      break
  }

  if (objType === '[object Array]' || objType === '[object Object]') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepClone(obj[key], map)
      }
    }
  }

  return newObj

}

const obj = { a: 1, b: 2, c: { d: 3 } }
const arr = [1, 2, 3, [2, { a: 1, b: [2, [3, { c: 3 }]] }]]
const objNull = null
const symbol = Symbol('symbol')
const newObj = deepClone(obj)
const newArr = deepClone(arr)
const newObjNull = deepClone(objNull)
const newSymbol = deepClone(symbol)
console.log('newObj', newObj)
console.log('newArr', newArr)
console.log('newObjNull', newObjNull)
console.log('newSymbol', newSymbol)

const date = new Date().getSeconds()
console.log(date)
setTimeout(() => {
  console.log(deepClone(date))
}, 1000)