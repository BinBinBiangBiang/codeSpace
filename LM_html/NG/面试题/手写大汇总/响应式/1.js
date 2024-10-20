// 简易版响应式实现
let onWatch = function (obj, setBind, getLogger) {
  let handler = {
    get(target, property, receiver){
      getLogger(target, property)
      return Reflect.get(target, property, receiver)
    },
    set(target, property, value, receiver) {
      setBind(target, value, property)
      return Reflect.set(target, property, value)
    }
    
  }

  return new Proxy(obj, handler)
}

let obj = {
  name: 'zhangsan',
  age: 18
}

let p = onWatch(obj, (target, value, property) => {
  console.log(`${property}属性从${target[property]}被修改为${value}`)
}, (target, property) => {
  console.log(`${property} = ${target[property]}`)
})

p.name = 'lisi'
console.log(p.age)