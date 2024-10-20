function curry (fn, args) {
  const len = fn.length

  // 递归执行时传递的上一次参数 第一次执行 [] 第二次执行 [1]
  args = args || []
  return function () {
    // 将上一次参数和这次参数进行合并 得到新的参数数组
    const newArgs = [...args, ...arguments]
    // 如果剩余参数的个数小于 fn 的参数个数，则继续递归
    if (newArgs.length < len) {
      return curry.call(this, fn, newArgs)
    } else {
      // 否则执行 fn
      return fn.apply(this, newArgs)
    }
  }
}


// 
function curry2 (fn, args) {
  const len = fn.length

  args = args || []

  return function() {
    const newArgs = [...args, ...arguments]
  
    if (len > newArgs.length) {
      return curry2(fn, newArgs)  
    } else {
      return fn.apply(this, newArgs)
    }
  }
}

function add(a, b, c) {
  return a + b + c
}

const curriedAdd = curry(add)
console.log(curriedAdd(1)(2)(3))