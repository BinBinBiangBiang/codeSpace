var obj = {
  a:1,
  b:2,
  c:3
}

with(obj){
  a = 3
  b = 4
  c = 5
  d = 6  // with(){} 当修改对象中不存在的属性时，会将该属性直接泄露到全局作用域
}

console.log(obj)

// with(){} 当修改对象中不存在的属性时，会将该属性直接泄露到全局作用域 所以这里可以直接输出d的值
console.log(d)