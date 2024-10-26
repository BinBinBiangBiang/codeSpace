function createFunctions1() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () { return i; });
  }
  return arr;
}
var funcs1 = createFunctions1();
// console.log(funcs1)
console.log(funcs1[0]()); // 输出 3
console.log(funcs1[1]()); // 输出 3 
console.log(funcs1[2]()); // 输出 3

function createFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    (function (i) {
      arr.push(function () { return i; });
    })(i);
  }
  return arr;
}

var funcs2 = createFunctions2();
// console.log(funcs2)
console.log(funcs2[0]()); // 输出 0
console.log(funcs2[1]()); // 输出 1
console.log(funcs2[2]()); // 输出 2