//---------------------------------------------------------------------------------
// 不使用Reflect
const obj1 = {
  a: 1,
  b: 2,
  get c() {
    return this.a + this.b
  }
}

const proxy1 = new Proxy(obj1, {
  get(target, key) {
    console.log('read', key)
    return target[key]
  }
})

proxy1.c

//---------------------------------------------------------------------------------
// 使用Reflect

const obj2 = {
  a: 1,
  b: 2,
  get c() {
    return this.a + this.b
  }
}

const proxy2 = new Proxy(obj2, {
  get(target, key) {
    console.log('read', key)
    return Reflect.get(target, key, proxy2)
  }
})

proxy2.c