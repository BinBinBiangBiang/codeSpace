function myInstanceOf(obj, type) {
  let proto = Object.getPrototypeof(obj)
  while(true) {
    if (proto === type) return true
    if (!proto) return false
    proto = Object.getPrototypeOf(proto)
  }
}