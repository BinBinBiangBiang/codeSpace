Function.prototype.MyBind = function(context, ...args1) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  
  context = context || window
  const self = this
  
  function F() {}
  F.prototype = this.prototype
  
  const bound = function(...args2) {
    const isConstructor = this instanceof F
    const result = self.apply(isConstructor ? this : context, [...args1, ...args2])
    return isConstructor ? result : (typeof result === 'object' || typeof result === 'function') ? result : this
  }
  bound.prototype = Object.create(F.prototype)

  return bound
}

a = 9;

fn1 = function (a, b) {
  this.a = 1;
  console.log('this.a', this.a);
  console.log(this, a, b);
};

const obj = {
  a: 0
};

fn2 = fn1.MyBind(obj, 1, 2);
console.log('----------------')
fn2()
console.log('----------------')

const fn3 = new fn2(3);
console.log('fn3', fn3);