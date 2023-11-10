// Person.prototype 原型 也是对象

Person.prototype.say = function () {
  return 'Hello,我是'+this.name 
}

function Person(){
  this.name = '肖总'
  this.age = 18
  // this.say = function(){
  //   return 'Hello, ' + this.name
  // }
}

let p = new Person()
let p2 = new Person()


console.log(p.say())
console.log(p2.say())