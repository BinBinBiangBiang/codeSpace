function myNew(fn, args) {
  if (typeof fn !== 'function') {
    throw new Error('not a function')
  }

  let obj = {}
  obj = Object.create(fn.prototype)

  const result =  fn.apply(obj, args)

  const flag = result && (typeof result === 'object' || typeof result === 'function')

  return flag ? result : obj
}