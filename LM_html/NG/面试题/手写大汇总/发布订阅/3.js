class PubSub {
  constructor() {
    this.subscriber = {}
  }

  subscribe(type, callback) {
    if (!this.subscriber[type]) {
      this.subscriber[type] = []
    }
    this.subscriber[type].push(callback)
  }

  publish(type, ...args) {
    const callbacks = this.subscriber[type]
    if (callbacks) {
      callbacks.forEach(callback => {
        callback(...args)
      })
    }
  }

  off(type, callback) {
    const callbacks = this.subscriber[type]
    if (callbacks) {
      this.subscriber[type] = callbacks.filter(cb => cb !== callback)
    } else {
      return
    }
  }

  once(type, callback) {
    const fn = (...args) => {
      callback(...args)
      this.off(type, callback)
    }
    this.subscribe(type, fn)
  }
}

const pubsub = new PubSub()
pubsub.subscribe('click1', (name) => {
  console.log(`订阅事件：${name} 发布了`)
})

pubsub.subscribe('click2', (name) => {
  console.log(`订阅事件：${name} 发布了`)
})

pubsub.subscribe('click2', () => {
  console.log('click2')
})

// pubsub.once('click1', () => {
//   console.log('once')
// })

pubsub.publish('click1', '刘子曦')
pubsub.publish('click2', '11')
pubsub.off('click2')



// pubsub.publish('click')