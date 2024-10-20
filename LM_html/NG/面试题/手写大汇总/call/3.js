Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== 'function') {
    return new TypeError('not function')
  }
  context = context || window
  context.fn = this
  const result = args ? context.fn(...args) : context.fn()
  delete context.fn
  return result
}

function foo(a, b) {
  console.log(this.name, a, b)
}

const obj = { name: 'obj' }

foo.myCall(obj, 1, 2)

console.log(1 == true)
console.log({}.valueOf())
console.log(Object.keys({}))