class PubSub {
  constructor() {
      this.subscribers = {};
  }

  // 订阅某个事件
  subscribe(event, callback) {
      if (!this.subscribers[event]) {
          this.subscribers[event] = [];
      }
      this.subscribers[event].push(callback);
  }

  // 取消订阅某个事件
  unsubscribe(event, callback) {
      if (this.subscribers[event]) {
          this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
      }
  }

  // 发布事件
  publish(event, data) {
      if (this.subscribers[event]) {
          this.subscribers[event].forEach(callback => callback(data));
      }
  }
}

// 创建一个PubSub实例
const pubsub = new PubSub();

// 定义两个订阅者
const subscriber1 = (data) => console.log(`Subscriber 1 received: ${data}`);
const subscriber2 = (data) => console.log(`Subscriber 2 received: ${data}`);

// 订阅'news'事件
pubsub.subscribe('news', subscriber1);
pubsub.subscribe('news', subscriber2);

// 发布'news'事件
pubsub.publish('news', 'Latest news from JavaScript world!');

// 取消订阅
pubsub.unsubscribe('news', subscriber1);

// 再次发布'news'事件
pubsub.publish('news', 'Another piece of news!');