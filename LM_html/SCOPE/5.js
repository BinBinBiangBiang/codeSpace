function foo(str,a){
  eval(str);  // 可以直接将字符串转换为语句
  console.log(str,a);
}

foo('var b = 3',2)