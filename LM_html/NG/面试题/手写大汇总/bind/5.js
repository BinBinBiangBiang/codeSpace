Function.prototype.MyBind = function (context, ...args1) {
  if (typeof this !== 'function') {
    throw new Error('not function')
  }

  context = context || window
  const self = this

  function F() {}
  F.prototype = self.prototype
  
  const bound = (...args2) => {
    const isConstructor = this instanceof F
    const result = self.apply(isConstructor ? this : context, args1.concat(args2))
    return isConstructor ? result : (typeof result === 'object' || typeof result === 'function') ? result : this
  }

  bound.prototype = Object.create(F.prototype)
  return bound
}