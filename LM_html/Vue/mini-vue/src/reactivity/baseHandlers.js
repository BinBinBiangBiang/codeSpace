import { track,trigger } from './effect.js'

const get = createGettter()
const set = createSetter()

function createGettter(){
  return function get(target,key,receiver){
    // console.log('target对象被读取值了');
    const res = Reflect.get(target, key, receiver);  // target[key]
    // 这个属性究竟还有哪些地方用到？ 进行依赖收集
    track(target,key)
    return res;
  }
}

function createSetter(){
  return function (target, key, value, receiver) {
    console.log('target对象的' + key + '属性被修改为：' + value);
    // 比较新旧值，如果不同才进行更新，避免无限循环
    const oldValue = target[key];
    if (value !== oldValue) {
      var res = Reflect.set(target, key, value, receiver);
      // 需要记录下来此时是哪一个key的值变更了，再去通知其他依赖该值的函数生效 更新响应式视图（例如在Vue中，这里会触发组件的更新渲染）
      // 触发被修改的属性身上的副作用函数   触发依赖（被修改的key在哪些地方被用到了） 发布订阅
      trigger(target, key);
    }
    return res;
  }
}

export const mutableHandlers = {
  get,
  set,
}