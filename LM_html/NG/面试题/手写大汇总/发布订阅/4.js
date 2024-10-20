class Sub {
  constructor () {
    this.subscriber = {}
  }

  emit(type, callback) {
    if (!this.subscriber[type]) {
      this.subscriber[type] = []
    }
    this.subscriber[type].push(callback)
  }

  on(type, ...args) {
    const callbacks = this.subscriber[type]
    if (callbacks) {
      callbacks.forEach(callback => callback(...args))
    }
  }
  
  off(type, callback) {
    const callbacks = this.subscriber[type]
    this.subscriber[type] = callbacks.filter(cb => cb !== callback)
  }

  once(type, callback) {
    const oneFn = (...args) => {
      callback(...args)
      this.off(type, oneFn)
    }
    this.emit(type, oneFn)
  }
}