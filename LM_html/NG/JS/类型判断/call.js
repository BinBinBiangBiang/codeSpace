var obj = {
  a:1,
  // foo:foo
}

function foo(){
  console.log(this.a);
}

// Function.prototype.myCall = function(context){
//   if(!this instanceof Function){
//     throw new TypeError("myCall is not a function")
//   }
//   // 下面这种写法也可以
//   // if(!typeof this !== 'function'){
//     // throw new TypeError("myCall is not a function")
//   // }

//   context.fn = this
//   context.fn()  // 触发this隐式绑定规则
//   delete context.fn;
// }


//----------------------------------------------------------------
// 改进写法
Function.prototype.myCall = function(context){
  if(!this instanceof Function){
    throw new TypeError("myCall is not a function")
  }
  // 下面这种写法也可以
  // if(!typeof this !== 'function'){
    // throw new TypeError("myCall is not a function")
  // }

  let args = [...arguments].slice(1)  // 或者 Array.from(arguments).slice(1)

  context.fn= this
  let res = context.fn(...args)  // 触发this隐式绑定规则
  delete context.fn;
  return res;
}
//----------------------------------------------------------------
foo.myCall(obj)
console.log(foo.myCall(obj))
console.log(obj)