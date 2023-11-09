var arr = [1, [2, [3, 4]]]

// 递归
function flatten(arr) {
  var result = []
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
       var newArr = flatten(arr[i]);
       result = result.concat(newArr);
    }else{
      result.push(arr[i]);
    }
  }

  return result
}

console.log(flatten(arr));


// 判断一个元素是不是数组的两种方法：
//（typeof()在这里不适用了，他会将数组判断成对象类）
// 1. xxx instanceof Array  
// 2. Array.isArray(xxx)

// 数组合并
// 1. arr1.concat(arr2)
// 2. [].concat(arr1,arr2)