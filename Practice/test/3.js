Person.prototype.money = 100;
function Person(name) {
  this.name = name;
}

// Person函数的显示原型
console.log(Person.prototype); // 输出: {}

const person1 = new Person('小明');
console.log(person1.__proto__);

// person1的隐式原型指向Person函数的显示原型
console.log(person1.__proto__ === Person.prototype); // 输出: true