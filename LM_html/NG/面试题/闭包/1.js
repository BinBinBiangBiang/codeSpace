// 模拟私有变量

function Counter() {
  let count = 0; // 私有变量
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    }
  };
}

let counter = Counter();
counter.increment(); // count现在是1，但外部无法直接访问count变量
console.log(counter.getCount()); // 输出1