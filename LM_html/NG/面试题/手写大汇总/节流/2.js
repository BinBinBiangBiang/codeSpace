function throttle(fn, delay) {
  let timer = Date.now()
  return function(...args) {
    if (Date.now() - timer >= delay) {
      timer = Date.now()
      return fn.apply(this, args)
    }
  }
}