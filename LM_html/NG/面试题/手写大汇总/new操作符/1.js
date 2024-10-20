function myNew(fn, ...args) {
  if (typeof fn !== 'function') {
    return new Error('请输入一个函数')
  }

  let obj = {}
  obj = Object.create(fn.prototype)
  // 考虑到new操作符中使用了Object.create 方法 而Object.create方法也使用了new操作符 互相嵌套 
  // 可以使用这个代替Object.create实现类似效果
  // obj.__proto__ = fn.prototype  
  const result = fn.apply(obj, args)

  const flag = result && (typeof result === 'object' || typeof result === 'function')

  return flag ? result : obj
}