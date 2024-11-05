// Car.prototype.name ='BMW'
// Car.prototype.lang = 4900
// Car.prototype.height = 1400 

// Car.prototype = {
//   name : 'BMW',
//   lang : 4900,
//   height : 1400
// }

function Car(owner,color) {
  this.name = '法拉利'
  this.lang = 4900
  this.height = 1400
  this.owner = owner
  this.color = color
}



var car1 = new Car('龙王','red')
var car2 = new Car('管管','green')

car1.name = '劳斯莱斯幻影'

console.log(car1.name)
console.log(car2.height)