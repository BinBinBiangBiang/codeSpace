import { track,trigger} from './effect.js'
import { reactive } from './reactive.js';

export function ref(val) {  // 将原始数据类型数据变成响应式
  return createRef(val);
}

function createRef(val) {
  // 判断val是否已经是响应式
  if(val.__v_isRef){
    return val;
  }

  // 将val变成响应式
  return new RefImpl(val)
}

class RefImpl {
  constructor(val) {
    this.__v_isRef = true; // 给每一个被ref操作的属性添加标记
    this._value = convert(val);
  }

  get value() { // 读取响应式数据
    // 为this对象做依赖收集
    track(this, 'value');
    return this._value;
  }

  set value(newVal) {
    if(newVal !== this._value) {
      this._value = convert(newVal);
      trigger(this, 'value', newVal);   // 触发掉 'value' 上的所有副作用函数
    }
  }
}

function convert(val){
  if(typeof val !== 'object' || typeof val === null){
    return val;
  }else{
    return reactive(val);
  }
}