class PubSub {
  constructor() {
    this.subscribers = {}
  }

  // 订阅
  subscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = []
    }
    this.subscribers[eventType].push(callback)
  }

  // 发布
  publish(eventType, ...data) {
    const callbacks = this.subscribers[eventType]
    if (callbacks && callbacks.length > 0) {
      callbacks.forEach(cb => {
        cb(...data)
      })
    }
  }

  // 取消订阅
  off(eventType, cb) {
    if (!this.subscribers[eventType]) {
      return
    }
    const callbacks = this.subscribers[eventType]
    this.subscribers[eventType] = callbacks.filter(item => item !== cb)
  }

  // 只订阅一次
  once(eventType, cb) {
    const fn = (...args) => {
      cb(...args)
      this.off(eventType, fn)
    }
    this.subscribe(eventType, fn)
  }
}

let ev = new PubSub()

const fn1 = (a, b) => {
  console.log(a, b, 'fn1')
}
const fn2 = (a, b) => {
  console.log(a, b, 'fn2');
}
const fn3 = (a, b) => {
  console.log(a, b, 'fn3');
}

ev.subscribe('run', fn1)

ev.once('run', fn2)

ev.subscribe('run', fn3)
// ev.off('run', fn3)

// ev.publish('run', 1, 1)
// ev.publish('run', 2, 2)
ev.publish('run', 3, 3)