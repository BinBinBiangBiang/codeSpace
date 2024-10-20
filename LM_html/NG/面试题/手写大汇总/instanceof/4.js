function myInstanceOf(obj, type) {
 let proto = Object.getPrototypeof(obj)
 while (true) {
  if (!proto) return false
  if (proto === type) {
    return true
  }
  proto = Object.getPrototypeOf(proto)
 }
}