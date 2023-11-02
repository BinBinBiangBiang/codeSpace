// 对象的创建
//1. var obj = {} // 对象字面量|对象直接量

//2. Object() // 构造函数

// 3. 自定义构造函数
// 构造函数就像工厂 可以批量化生成对象
function Car(color) {
  this.name ='BMW'
  this.height = '1400'
  this.lang ='4900'
  this.weight = '10000'
  this.color = color
}

let car1 = Car('pink')  // 实例对象
let car2 = Car('green')

// 内置构造函数
// 4. Object.create({})  





