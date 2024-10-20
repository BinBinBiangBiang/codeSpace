function myObjectCreate(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn()
}