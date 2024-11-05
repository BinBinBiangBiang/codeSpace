class Sub {
  constructor() {
    this.subscribers = {}
  }

  on(type, cb) {
    if (!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(cb)
  }

  emit(type, ...args) {
    const callbacks = this.subscribers[type]
    if (callbacks.length) {
      callbacks.forEach(cb => {
        cb(...args)
      })
    }
  }

  off(type, cb) {
    if (!this.subscribers[type]) return 
    const callbacks = this.subscribers[type]
    this.subscribers[type] = callbacks.filter(item => cb !== item )
  }

  once(type, cb) {
    const onceFn = (...args) => {
      cb(...args)
      this.off(onceFn)
    }
    this.on(type, onceFn)
  }
}