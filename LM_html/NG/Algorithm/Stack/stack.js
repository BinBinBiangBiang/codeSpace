let stack = []  // 只使用数组的push和pop方法

stack.push('东北大板')
stack.push('小布丁')
stack.push('可爱多')
stack.push('巧乐兹')
stack.push('钟薛高')

// 出栈
while(stack.length){
  const top = stack.pop();
  console.log("我正在吃："+top)
}