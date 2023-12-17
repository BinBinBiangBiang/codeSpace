function deepClone(obj, clonedObjects = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 检查是否已经拷贝过该对象，避免循环引用导致无限递归
  if (clonedObjects.has(obj)) {
    return clonedObjects.get(obj);
  }

  let clone;

  // 处理数组
  if (Array.isArray(obj)) {
    clone = [];
    clonedObjects.set(obj, clone);
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i], clonedObjects);
    }
  }
  // 处理对象
  else if (obj instanceof Object) {
    clone = {};
    clonedObjects.set(obj, clone);
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key], clonedObjects);
      }
    }
  }

  return clone;
}


// let obj = { a: 1 };
// obj.self = obj;
// let clonedObjects = new WeakMap()
// let objCopy = deepClone(obj, clonedObjects);
// console.log(objCopy);

let obj = {
  a: undefined,
  b: function() {},
  c: Symbol('symbol'),
  d: BigInt(123),
  nested: {
    e: [1, 2, 3],
    f: { g: 'hello' }
  }
};

let clonedObj = deepClone(obj);

console.log(clonedObj);




/**
 * 当你使用 JSON.parse(JSON.stringify(obj)) 进行深拷贝时，它无法处理一些特殊的数据类型，例如 undefined、function、Symbol、bigint，
 * 以及无法处理循环引用。为了解决这些问题，你编写的 deepClone 方法采用了一些技术和策略：

1. 递归深拷贝：
deepClone 方法使用递归深度遍历对象和数组，确保每个嵌套层次都被正确拷贝。对于每个对象或数组元素，递归调用 deepClone，确保它们也被正确处理。

javascript
Copy code
for (let i = 0; i < obj.length; i++) {
  clone[i] = deepClone(obj[i], clonedObjects);
}
2. 使用 WeakMap 处理循环引用：
WeakMap 是一个弱映射表，它允许你在没有内存泄漏风险的情况下将对象作为键存储在其中。在 deepClone 中，clonedObjects 是一个 WeakMap，
用于跟踪已经拷贝过的对象。

javascript
Copy code
if (clonedObjects.has(obj)) {
  return clonedObjects.get(obj);
}
如果对象已经在 clonedObjects 中存在，说明这是一个循环引用，直接返回已经拷贝过的对象，避免无限递归。

3. 对象属性判断：
在递归过程中，使用 obj.hasOwnProperty(key) 来确保只拷贝对象自身的属性，而不是原型链上的属性。这样可以避免意外地拷贝到不应该被拷贝的属性。

javascript
Copy code
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    clone[key] = deepClone(obj[key], clonedObjects);
  }
}
总结：
你的 deepClone 方法通过递归、使用 WeakMap 处理循环引用、以及正确判断对象属性，有效地解决了深拷贝过程中可能遇到的问题，
确保了对特殊数据类型和循环引用的正确处理。这种方法通常是处理深拷贝的一种有效手段，尤其适用于需要考虑特殊情况的场景。
 */