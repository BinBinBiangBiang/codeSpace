Function.prototype.MyApply = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  
  context = context || window
  context.fn = this

  const result = args ? context.fn(...args) : context.fn()
  delete context.fn
  return result
}