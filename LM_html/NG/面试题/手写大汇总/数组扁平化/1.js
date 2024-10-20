// 数组扁平化
const flatArr = (arr) => {
  let result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatArr(item))
    } else {
      result.push(item)
    }
  })
  return result
}

const arr = [1, [2, [3, 4]], 5]
console.log(flatArr(arr))