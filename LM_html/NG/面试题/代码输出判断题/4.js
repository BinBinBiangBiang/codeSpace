// 考察原型和引用类型的问题

const obj = {
  name: 'xxx',
  books: ['a', 'b'],
}

function createObject(o) {
  function F() { }
  F.prototype = o
  const fObj = new F()
  fObj.name = 'yyy'
  fObj.books.push('c')
  return fObj
}

const newObj = createObject(obj)

console.log('obj', obj)
console.log('newObj', newObj)