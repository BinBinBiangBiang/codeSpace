const curry = (fn, args = []) => {
 let len = fn.length

 return function () {
  const newArgs = [...args, ...arguments]
  if (newArgs.length < len) {
    return curry.apply(this, [fn, newArgs])
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