function MyCreate(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}