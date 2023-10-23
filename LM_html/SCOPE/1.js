// 全局作用域
var a = 1
var b = 'helo world'

function foo() {
  // 函数作用域
  var c = true
  console.log(a)
  // 函数作用域
}


foo()

console.log(c)



// 全局作用域