class PubSub {
  constructor() {
    this.subscribers = {}
  }

  subscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = []
    }
    this.subscribers[eventType].push(callback)
  }

  publish(eventType, ...args) {
    const callbacks = this.subscribers[eventType]
    if (callbacks) {
      callbacks.forEach(callback => {
        callback(...args)
      })
    }
  }

  off(eventType, callback) {
    if (!this.subscribers[eventType]) {
      return
    }
    const callbacks = this.subscribers[eventType]
    if (callbacks) {
      this.subscribers[eventType] = callbacks.filter(item => {
        item !== callback
      })
    }
  }

  once(eventType, callback) {
    const onceCallback = () => {
      callback()
      this.off(eventType, onceCallback)
    }
    this.subscribe(eventType, onceCallback)
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



// pubsub.publish('click')