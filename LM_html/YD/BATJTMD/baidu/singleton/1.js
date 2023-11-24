// es6 class类
// 类是对象的一种抽象，提供了更结构化和面向对象的方式来创建和组织对象。在实际编码中，根据需求选择使用对象字面量、构造函数或者类来创建对象。
class SingleDog{
  show(){
    console.log('我是一个单例对象');
  }
}

const s1 = new SingleDog();
const s2 = new SingleDog();

console.log(s1 === s2) // false