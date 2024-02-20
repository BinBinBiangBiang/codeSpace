// 副作用收集
const targetMap = new WeakMap();
let activeEffect = null;

export function effect(fn, options = {}) {
  const effeftFn = () => {
    try {
      activeEffect = effeftFn;
      return fn()
    } finally {
      activeEffect = null;
    }
  }
  if (!options.lazy) {
    effeftFn();
  }
  effeftFn.scheduler = options.scheduler
  return effeftFn
}

// 为某个属性添加 effect
export function track(target, key) {
  // targetMap = {  // 存成这样
  //   target: {
  //     key:[effect1,effect2,effect3,...]
  //   },
  //   target2: {
  //     key:[effect1,effect2,effect3,...]
  //   },
  // }

  let depsMap = targetMap.get(target);

  if (!depsMap) { // 初次读取到值 收集effect
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let deps = depsMap.get(key);
  if (!deps) { // 该属性还未添加任何effect
    deps = new Set();
  }
  if (!deps.has(activeEffect) && activeEffect) {
    // 存入一个effect函数
    deps.add(activeEffect)
  }

  depsMap.set(key, deps)
}

// 触发某个属性 effect
export function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) { // 该属性没有添加任何effect
    return
  }
  const deps = depsMap.get(key);
  if (!deps) { // 该属性没有添加任何依赖
    return
  }
  deps.forEach(effectFn => {  // 将该属性上的所有的副作用函数全部触发
    if (effectFn.scheduler) {
      effectFn.scheduler()
    } else {
      effectFn();
    }
  })
}