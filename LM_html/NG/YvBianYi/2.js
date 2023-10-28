function fn(a){
  console.log(a);  // function a(){}
  var a = 123
  console.log(a); // 123
  function a(){}  // 函数声明
  console.log(a); // 123
  var b =function (){}  // 函数表达式
  console.log(b); // fucntion (){}
  function d() {}
  var d = a
  console.log(d);
}

// AO : {
//   a : undefined,  function a() {} 123
//   b : undefined, function () {}
//   c : undefined, function d() {}123,
// }

fn(1)