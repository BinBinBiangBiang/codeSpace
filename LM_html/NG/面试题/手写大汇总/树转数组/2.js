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


function treeToArr (tree) {
  const arr = []
  const stack = [...tree]

  while (stack.length) {
    const item = stack.shift()
    if (item.children && item.children.length) {
      stack.push(...item.children)
      delete item.children
    }
    arr.push(item)
  }

  return arr
}

console.log(treeToArr(treeData))
