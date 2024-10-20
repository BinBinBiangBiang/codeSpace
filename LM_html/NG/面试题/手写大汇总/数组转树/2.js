const flatData = [
  { id: 1, parentId: null, name: 'A' },
  { id: 2, parentId: 1, name: 'B' },
  { id: 3, parentId: 1, name: 'C' },
  { id: 4, parentId: 2, name: 'D' },
  { id: 5, parentId: 2, name: 'E' },
  { id: 6, parentId: 3, name: 'F' },
  { id: 7, parentId: 3, name: 'G' },
  { id: 8, parentId: 4, name: 'H' },
  { id: 9, parentId: 4, name: 'I' },
  { id: 10, parentId: 5, name: 'J' },
  { id: 11, parentId: 5, name: 'K' },
  { id: 12, parentId: 6, name: 'L' },
  { id: 13, parentId: 6, name: 'M' },
  { id: 14, parentId: 7, name: 'N' },
  { id: 15, parentId: 7, name: 'O' }
];

function arrToTree (arr) {
  const map = {}
  const tree = []
  arr.forEach(item => {
    map[item.id] = item
  })

  arr.forEach(item => {
    if (!item.parentId) {
      tree.push(item)
    } else {
      const parent = map[item.parentId]
      if (parent) {
        if (!parent.children) {
          parent.children = []
        }
        parent.children.push(item)
      }
    }
  })
  
  return tree
}

const treeData = arrToTree(flatData)
console.log(JSON.stringify(treeData, null, 2))