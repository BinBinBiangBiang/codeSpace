Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') {
    return new TypeError('not function')
  }
  context = context || window
  context.fn = this
  const result = context.fn(...args)

  delete context.fn

  return result
}