Function.prototype.MyBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  
  context = context || window
  const self = this
  
  const F = function () {}
  F.prototype = this.prototype

  const bound = function (...innerArgs) {
    const isConstructor = this instanceof F
    const result = self.apply(isConstructor ? this : context, args.concat(innerArgs))
    return isConstructor ? result : (typeof result === 'object' && result !== null ? result : this)
  }
  bound.prototype = Object.create(F.prototype)
  return bound
}