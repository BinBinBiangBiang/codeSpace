function add(a,b,c){
  return a + b + c;
}

// 有时候不会一次性给到，前端的交互
// js curry 柯里化
// 每次接收 一个参数

// 如何拿到一个函数的参数数量
// 函数名.length
// console.log(add.length);

// 函数的柯里化
function curry(fn){
  // 收集参数
  // 到位了 运行
  // 返回收集参数的函数

  // ...args => rest 运算符 args 是数组  数组在闭包空间
  // 
  let judge = (...args) =>{
    if(args.length === fn.length){
      return fn(...args)   // 推出条件
    }
    // 返回函数，继续收集参数
    return (...arg) => judge(...args,...arg)
  }

  return judge
}

add(1)(2)(3)

/***
 * 函数柯里化是一种将接受多个参数的函数转换为一系列接受单个参数的函数的技术。在这个实现中，curry函数接受一个函数fn作为参数，
 * 然后返回一个新的函数judge，这个新函数用于收集参数，直到收集到足够的参数后再执行原始函数fn。

让我来解释一下这段代码的逻辑：

首先，函数judge使用Rest参数...args来收集参数。这意味着judge可以接受任意数量的参数，并将这些参数存储在一个数组args中。

然后，judge检查当前收集到的参数数量是否等于原始函数fn的参数数量（fn.length）。如果收集到的参数数量等于fn的参数数量，那么就执行原始函数fn，
并将收集到的参数传递给它。

如果收集到的参数数量还不够，那么judge返回一个新的函数，这个新函数继续接受参数，并将之前收集到的参数和新的参数合并起来，然后递归调用judge函数。

最后，curry函数返回judge函数，这样我们就可以使用返回的judge函数来逐步收集参数，直到参数收集到位后执行原始函数。
 */