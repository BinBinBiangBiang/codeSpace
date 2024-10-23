class LRUCache {
  constructor(limit) {
      this.cache = new Map();
      this.limit = limit;
  }

  set(key, value) {
      // 添加或更新缓存条目
      this.cache.set(key, value);

      // 检查缓存是否超过限制
      if (this.cache.size > this.limit) {
          // 删除最旧的条目
          const oldestKey = this.cache.keys().next().value;
          this.cache.delete(oldestKey);
      }
  }

  get(key) {
      // 获取缓存条目
      let temp = null
      if (this.cache.has(key)) {
          temp = this.cache.get(key)
          this.cache.delete(key)
          this.cache.set(key, temp)
      }
      return temp;
  }
}

// 示例用法
const cache = new LRUCache(3); // 设置缓存的最大条目数为 3

cache.set('key1', 'value1');
cache.set('key2', 'value2');
cache.set('key3', 'value3');

console.log(cache.get('key1')); // 输出: value1
console.log(cache.get('key2')); // 输出: value2
console.log(cache.get('key3')); // 输出: value3

cache.set('key4', 'value4'); // 超过限制，删除最旧的条目 'key1'

console.log(cache.get('key1')); // 输出: null
console.log(cache.get('key2')); // 输出: value2
console.log(cache.get('key3')); // 输出: value3
console.log(cache.get('key4')); // 输出: value4