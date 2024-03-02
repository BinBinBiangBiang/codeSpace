function* foo(){ // 加了* 号之后我们叫这个函数为生成器函数
  let a = 0;
  yield a = 1; // yield 值在生成器函数中使用
  yield a = 2;
  yield a = 3;
  yield a = 4;
}

let gen = foo();  // 迭代对象

console.log(gen.next()) // { value: 1, done: false }
console.log(gen.next())
console.log(gen.return());