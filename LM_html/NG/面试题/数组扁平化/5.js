let arr = [1,2,[3,[4],[5,6,[7,8,[9]]]]]

function flattenWithBFS(arr) {
  const queue = [arr]; // 创建队列，初始化为待处理的数组
  const result = []; 

  while (queue.length > 0) { 
    const levelItems = queue.shift(); // 取出队列首部的一层元素
    for (const item of levelItems) { // 遍历当前层级的每个元素
      if (Array.isArray(item)) { 
        queue.push(item); 
      } else {
        result.push(item); 
      }
    }
  }

  return result; 
}

console.log(flattenWithBFS(arr)); // [1,2,3,4,5,6,7,8,9]