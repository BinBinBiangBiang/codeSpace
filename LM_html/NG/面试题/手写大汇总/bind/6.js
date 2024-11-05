Function.prototype.MyBind = function(context, ...args1) {
  if (typeof this !== 'funciton') {
    throw new TypeError('not function')
  }

  context = context || window
  let self = this

  function F() {}
  F.prototype = this.prototype

  const bound = (...args2) => {
    let isConstructor = this instanceof F
    let result = self.apply(isConstructor ? this : context, args1.concat(args2))
    return isConstructor ? result : (typeof result === 'object' || result !== null) ? result : this
  }

  bound.prototype = Object.create(F.prototype)
  return bound
}