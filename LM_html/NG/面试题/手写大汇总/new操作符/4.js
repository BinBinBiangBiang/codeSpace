function MyNew(fn, ...args) {
  if (typeof fn !== 'function') {
    return new Error('请输入一个函数')
  }
  let obj = {}
  obj = Object.create(fn.prototype)

  const result = fn.apply(obj, args)

  const flag = result && (typeof result === 'object' || typeof result === 'function')
  
  return flag ? result : obj
}