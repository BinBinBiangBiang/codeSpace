// 算法题 判断两个数据类型是否相等
function deepEqual(a, b) {
  // 如果两个值是同一个对象，直接返回 true
  if (a === b) return true;

  // 如果类型不同，直接返回 false
  if (typeof a !== typeof b) return false;

  // 处理基本类型
  if (a && typeof a !== 'object') {
      return a === b;
  }

  // 处理 null
  if (a === null || b === null) {
      return a === b;
  }

  // 处理 Date 类型
  if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
  }

  // 处理 RegExp 类型
  if (a instanceof RegExp && b instanceof RegExp) {
      return a.toString() === b.toString();
  }

  // 处理 Set 类型
  if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      for (let item of a) {
          if (!b.has(item)) return false;
      }
      return true;
  }

  // 处理 Map 类型
  if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      for (let [key, val] of a) {
          if (!deepEqual(b.get(key), val)) return false;
      }
      return true;
  }

  // 处理 ArrayBuffer 类型
  if (a instanceof ArrayBuffer && b instanceof ArrayBuffer) {
      if (a.byteLength !== b.byteLength) return false;
      let aBuffer = new Uint8Array(a);
      let bBuffer = new Uint8Array(b);
      for (let i = 0; i < a.byteLength; i++) {
          if (aBuffer[i] !== bBuffer[i]) return false;
      }
      return true;
  }

  // 处理 TypedArray 类型
  if (a.constructor === b.constructor && a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
      }
      return true;
  }

  // 处理函数类型
  if (typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
  }

  // 处理普通对象或数组
  if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
          if (!deepEqual(a[i], b[i])) return false;
      }
      return true;
  } else if (typeof a === 'object' && typeof b === 'object') {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);
      if (keysA.length !== keysB.length) return false;
      for (let key of keysA) {
          if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
      }
      return true;
  }

  // 如果以上条件都不满足，返回 false
  return false;
}

// 示例
console.log(deepEqual(1, 1)); // true
console.log(deepEqual("hello", "hello")); // true
console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 })); // true
console.log(deepEqual(new Date(), new Date())); // false
console.log(deepEqual(new Date(1600000000000), new Date(1600000000000))); // true
console.log(deepEqual(new Set([1, 2]), new Set([1, 2]))); // true
console.log(deepEqual(new Map([[1, 'one']]), new Map([[1, 'one']]))); // true
console.log(deepEqual(new ArrayBuffer(8), new ArrayBuffer(8))); // false (不同实例)
console.log(deepEqual(new Uint8Array([1, 2]), new Uint8Array([1, 2]))); // true
console.log(deepEqual(function() {}, function() {})); // false
console.log(deepEqual(function() {}, function() {})); // false (函数比较取决于具体实现)
console.log(deepEqual({ a: { b: { c: 1 } } }, { a: { b: { c: 1 } } })); // true