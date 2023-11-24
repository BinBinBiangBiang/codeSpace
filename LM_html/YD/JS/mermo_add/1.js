// 永远不要相信用户的输入

function add(a, b) {
  // ...代表参数？
  if (arguments.length != 2) {
    throw new Error('参数错误！');
  }
  if (typeof a != 'number' || typeof b != 'number') {
    throw new Error('请传入整数');
  }
  return a + b;
}

function memoize(fn) {
  if (typeof fn != 'function') {
    throw new Error('请传入函数')
  }
  var cache = {} // key:value O(1) 空间换时间
  return function () {
    // 唯一性
    var key = arguments.length + Array.prototype.join.call(arguments, ',');
    if (key in cache) {
      return cache[key]
    } else {
      return  cache[key] = fn.apply(this, arguments);
    }
  }
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));

// js 不严格 编译阶段
// try{
//   add()
// }catch(e){
//   console.log(e);
// }


// try{
//   console.log(add(1,2));
// }catch(e){
//   console.log(e);
// }

// console.log(add(1,2));
