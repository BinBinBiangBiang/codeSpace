class Sub {
  constructor() {
    this.subscribers = {}
  }

  subscribe(type, callback) {
    if (this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(callback)
  }

  publish(type, ...args) {
    const callbacks = this.subscribers[type]
    if (callbacks) {
      callbacks.forEach(cb => {
        cb(...args)
      })
    }
  }

  off(type, callback) {
    const callbacks = this.subscribers[type]
    if (!callbacks) {
      return
    } else {
      this.subscribers[type] = callbacks.filter(cb => cb !== callback)
    }
  }

  once(type, callback) {
    const onceFn = () => {
      callback()
      this.off(type, onceFn)      
    }
    this.subscribe(type, onceFn)
  }
}