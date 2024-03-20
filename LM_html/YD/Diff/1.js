const oldChildren = n1.children
const newChildren = n2.children

let lastIndex = 0
// 遍历新的 children
for (let i = 0; i < newChildren.length; i++) {
  const newVNode = newChildren[i]
  let j = 0
  let find = false
  // 遍历旧的 children
  for (j; j < oldChildren.length; j++) {
    const oldVNode = oldChildren[j]
    // 如果找到了具有相同 key 值的两个节点，则调用 patch 函数更新
    if (newVNode.key === oldVNode.key) {
      find = true
      patch(oldVNode, newVNode, container)

      // 处理移动...
      if (j < lastIndex) {
        const prevVNode = oldChildren[j - 1]
        if (prevVNode) {
          // 插入元素比新增元素 性能好很多 insertElementBefore
          const anchor = prevVNode.el.nextSibling;   // 前面已经排好的节点的下一个真实DOM的节点
          insert(newVNode.val, container, anchor)
        }
      } else { // 不需要移动
        // 更新 lastIndex
        lastIndex = j
      }

      break //跳出循环，处理下一个节点
    }
  }
  // 没有找到就是新增了
  if (!find) {
    const prevVNode = newChildren[i - 1]
    let anchor = null
    if (prevVNode) {
      anchor = prevVNode.el.nextSibling
    } else {
      anchor = container.firstChild
    }
    patch(null, newVNode, container, anchor)
  }
}
