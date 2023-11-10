// Car.prototype.name = '法拉利'

function Car(owner,color) {
  this.name ='法拉利'
  this.lang = 4900
  this.height = 1400
  this.owner = owner
  this.color = color
}

var car1 = new Car('老六', 'red');
var car2 = new Car('老五', 'green');


Car.prototype.name = '布加迪'
console.log("老六的车："+car1.name)
console.log("老五的车："+car1.name)