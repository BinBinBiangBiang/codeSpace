Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    throw new Array('not function')
  }

  let context = context || window
  context.fn = this
  let result = args ? context.fn(...args) : context.fn()
  delete context.fn
  return result
}