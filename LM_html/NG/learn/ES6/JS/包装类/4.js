// 构造函数
function Person(name, age,sex){
  this.name = name;
  this.age = age;
  this.sex = sex;

  // 下述new会使得在函数内生成一个this对象,并返回
  // let this = {
  //   name:name,
  //   age:age,
  //   sex:sex
  // }

  // return this;
}

let p = new Person('海军',18,'boy')


// function Person(name, age, sex){
//   var that ={}
//     that.name=name,
//     that.age=age,
//     that.sex=sex
//     return that
// }

// let p1 = Person('程总',18)
// let p2 = Person('梓帆',19)

// console.log(p1)
