let arr = [1, 2, [3, 4, [5, 6]]]

function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(flattenArray(arr));  // [ 1, 2, 3, 4, 5, 6 ]

const flatArr = (arr) => {
  let result = []
  const arr1 = arr.map((item, index) => {
    if ( Array.isArray(item)) {
      console.log('result1', result)
      return result = result.concat(flatArr(item))
    } else {
      console.log('result2', result)
      return result.push(item)
    }
  })
  console.log(arr1)
  return result
}

console.log(flatArr(arr))