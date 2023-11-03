Car.prototype.name ='BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400 

function Car(owner,color) {
  // this.name = 'BMW'
  // this.lang = 4900
  // this.height = 1400
  this.owner = owner
  this.color = color
}

var car1 = new Car('龙王','red')
var car2 = new Car('管管','green')

car1.color = 'pink'

// 实例对象只能修改自己的属性，其他实例对象不会受影响
// car1.name = '红旗'


// 要改只能通过原型来改
// Car.prototype.name = '红旗'

// 实例对象是不能删除原型上的属性的
// delete car1.name


// 只能靠原型自己删除
// delete Car.prototype.name;

console.log(car1.name)
console.log(car2.name)