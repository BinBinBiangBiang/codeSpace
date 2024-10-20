function curry (fn, args) {
  let len = fn.length

  args = args || []

  return function() {
    let newArgs = [...args, ...arguments]
    if (len > newArgs.length) {
      return curry.call(this,fn, ...newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}