// var a = 1
// function foo(){
//   console.log(this.a)
// }


// 只能在浏览器中执行 vs自带的Node环境没有windows
// ----------------------------------------------------------------
// 运行结果undefined
// function foo(){
//   var a = 2;
//   this.bar()
// }

// function bar(){
//   console.log(this.a);
// }

// foo()

// ----------------------------------------------------------------
// 运行结果：undefined
// function foo(){
//   var a = 2;
//   bar()
// }

// function bar(){
//   // 不能通过this来引用词法作用域（foo（）内）里面的内容
//   console.log(this.a);
// }

// foo()
// ----------------------------------------------------------------
// 也是undefined
// this不能引用词法作用域，自己也不行
// function bar(){
//   var b = 3;
//   console.log(this.b);
// }

// bar()
// ----------------------------------------------------------------

// b = 0  

// foo()为函数，它没有词法作用域（这只是一个称呼，指的是函数在谁的里面我们就成这个为词法作用域，但函数本身没有词法作用域），
// 只有作用域。
// function foo(){
//   var b = 1;
//   bar()
// }


// function bar(){
//   var b = 3;
//   console.log(this.b);
// }

// foo()
// ----------------------------------------------------------------

// 最后结果为0
// b = 0;

// function foo(){
//   var b = 1;
//   bar()
// }

// function baz(){
//   b = 2;
//   bar()
// }


// function bar(){
//   var b = 3;
//   console.log(this.b);
// }

// foo()

// ----------------------------------------------------------------

// 最后结果还是0
// b = 0;

// function foo(){
//   var b = 1;
  
//   function bar(){
//     var b = 3;
//     baz();
//   }
//   function baz(){
//     b = 2;
//     console.log(this.b);
//   }
//   bar()
// }

// foo()
// ----------------------------------------------------------------










