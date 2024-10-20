function Child(name, age) {
  Parent.apply(this, ...args)
  this.name = name
  this.age = age
}

function Parent(name) {
  this.name = name
}

Child.prototype = new Parent()
Child.prototype.constructor = Child