function curry(fn, ...args) {
  let len = fn.length
  args = args || []
  return function () {
    let newArgs = [...args, ...arguments]
    if (len > newArgs.length) {
      return curry.apply(this, [fn, ...newArgs])
    } else {
      return fn.apply(this, newArgs)
    }
  }
}

const add = (a, b, c) => {
  console.log(a + b + c)
}
const curryAdd = curry(add)
curryAdd(1)(2)(3)