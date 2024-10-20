Function.prototype.MyApply = function (context, ...args) {
  if (typeof this !== 'function')  {
    throw new Error('not function')
  }

  context = context || window
  context.fn = this
  
  let result = args ? context.fn(...args) : context.fn()
  delete context.fn
  
  return result
}