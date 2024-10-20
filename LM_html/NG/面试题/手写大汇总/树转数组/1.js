const treeData = [
  {
    id: 1,
    parentId: null,
    name: 'A',
    children: [
      {
        id: 2,
        parentId: 1,
        name: 'B',
        children: [
          { id: 4, parentId: 2, name: 'D' },
          { id: 5, parentId: 2, name: 'E' }
        ]
      },
      {
        id: 3,
        parentId: 1,
        name: 'C',
        children: [
          { id: 6, parentId: 3, name: 'F' },
          { id: 7, parentId: 3, name: 'G' }
        ]
      }
    ]
  }
];

function treeToArr (arr) {
  let stack = [...arr]
  const result = []

  while (stack.length) {
    const node = stack.shift()
    if (node.children && node.children.length) {
      stack.push(...node.children)
      delete node.children
    }
    result.push(node)
  }
  return result
}

console.log(treeToArr(treeData))
