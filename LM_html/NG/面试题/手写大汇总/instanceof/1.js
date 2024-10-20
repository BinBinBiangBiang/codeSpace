function myInstanceOf(obj, type) {
  let proto = Object.getPrototypeOf(obj);

  while (true) {
    if (!proto) return false;
    if (proto === type.prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}