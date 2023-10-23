var a = 1

function foo(){
  var a = 2 
  // console.log(a)
  function bar(){
    console.log(a)
  }

  bar()
  // bar在foo函数内部调用，不会报错！
}

foo()

// bar函数放外面，而bar函数放在foo函数内部，并为被编译，所以执行的时候找不到函数bar，执行程序报错！
// bar()