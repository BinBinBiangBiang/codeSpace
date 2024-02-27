let arr = [1,2,[3,[4],[5,6,[7,8,[9]]]]]

function flattenWithDFS(arr) {
  const stack = [...arr] // 将原数组转换为堆栈
  const result = [] 

  while (stack.length > 0) { // 当堆栈中有待处理元素时
    const current = stack.pop() // 取出堆栈顶部的元素

    if (Array.isArray(current)) { 
      stack.push(...current) // 将其所有元素压入堆栈
    } else {
      result.unshift(current) // 否则将非数组元素添加到结果数组的开头
    }
  }

  return result 
}

console.log(flattenWithDFS(arr));  // [1,2,3,4,5,6,7,8,9]