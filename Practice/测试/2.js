// 定义一个原型对象
const prototypeObj = {
  inheritedProperty: 'I am from the prototype',
  anotherInheritedProperty: 'Another property from the prototype'
};

// 创建一个对象，并将其原型设置为 prototypeObj
const obj = Object.create(prototypeObj);
obj.ownProperty1 = 'I am an own property';
obj.ownProperty2 = 'Another own property';

// 使用 for...in 遍历 obj
for (const key of obj) {
  console.log(key, obj[key]);
}