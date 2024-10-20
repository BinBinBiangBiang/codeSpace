function Parent (...args) {
  this.name = 'parent'
  this.play = [1, 2, 3]
}
Parent.prototype.callName = 'call'

function Child (...args) {
  Parent.apply(this, args)
  this.age = 18
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

let child1 = new Child()

child1.play.push(4)

let child2 = new Child()

console.log('child1', child1)
console.log('child2', child2.play)
console.log('xian', Child.prototype.constructor === Child)