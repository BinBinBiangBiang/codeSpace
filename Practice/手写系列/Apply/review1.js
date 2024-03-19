Function.prototype.myApply =  function(context, args) {
  if(typeof context !== 'function'){
    throw new Error('context must be a function');
  }

  context = context | window

  context.fn = this

  const result = args ? context.fn(args) :context.fn()

  delete context.fn

  return result
}