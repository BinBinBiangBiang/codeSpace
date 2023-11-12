function Person(name) {
  this.name = name;
}

// 添加一个方法到Person函数的显示原型
Person.prototype.sayHello = function() {
  console.log(`Hello，我是${this.name}.`);
};

const person1 = new Person('小美');
const person2 = new Person('小明')

// person1、person2都继承了Person函数的显示原型上的方法
person1.sayHello(); // 输出: Hello，我是小美.
person2.sayHello(); // 输出: Hello，我是小明.