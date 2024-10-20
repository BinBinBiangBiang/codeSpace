Function.prototype.myBind = function (context, ...args1) {
  if (typeof this !== "function") {
    throw new TypeError("not function");
  }

  context = context || window;
  const self = this;

  // 创建一个继承自原函数原型的对象
  const F = function() {};
  F.prototype = this.prototype;
  const bound = function(...args2) {
    // 检查是否通过new调用
    const isConstructor = this instanceof F;
    const result = self.apply(isConstructor ? this : context, args1.concat(args2));
    return isConstructor ? result : (typeof result === 'object' && result !== null ? result : this);
  };
  bound.prototype = Object.create(F.prototype);
  return bound;
};

// bind返回的函数是否可以通过new调用也不改变this的正确指向  示例代码
a = 9;

fn1 = function (a, b) {
  this.a = 1;
  console.log('this.a', this.a);
  console.log(this, a, b);
};

const obj = {
  a: 0
};

fn2 = fn1.myBind(obj, 1, 2);
console.log('----------------')
fn2()
console.log('----------------')

const fn3 = new fn2(3);
console.log('fn3', fn3);