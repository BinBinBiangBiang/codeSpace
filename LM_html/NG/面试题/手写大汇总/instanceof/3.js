function myInstanceOf (left, right) {
  let proto = Object.getPrototypeOf(left)
  let prototype = right.prototype

  while (true) {
    if (proto === null) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(myInstanceOf(Object.prototype, Object))
console.log(Object.prototype instanceof Object)