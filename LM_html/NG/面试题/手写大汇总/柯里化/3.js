function curry(fn, args) {
  const len = fn.length

  args = args || []

  return function (...args2) {
    const newArgs = [...args, ...args2]
    if (newArgs.length < len) {
      return curry.apply(this, [fn, newArgs])
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