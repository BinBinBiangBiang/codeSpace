// var b = 1

// function foo(a,b){
//   console.log(b);
//   console.log(a+b);
// }

// foo(2)

var b

function foo(a,b){
  console.log(a+b);
}

// 编译器只找到了var b 和function foo 给v8执行，执行foo(2)时，并为执行到b=1，所以b的值为undefined 最终输出结果为NaN
foo(2,b)

// b = 1


b = 1
// v8先执行了b = 1 ，先拿到了b的值，此时结果为3
foo(2,b)