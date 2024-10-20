function deepClone(obj, map = new WeakMap) {
  if (obj === null || typeof obj !== 'object') return obj

  if (map.get(obj)) return map.get(obj)

  const newObj = Array.isArray(obj) ? [] : {}

  // 将当前对象及其克隆后的副本存入WeakMap
  map.set(obj, newObj)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key], map) : obj[key]
    }
  }

  return newObj
}