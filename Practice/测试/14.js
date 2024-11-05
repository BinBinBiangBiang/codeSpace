let arr = [1, [2, [6, [7]]], [3, [4, 5, [3, [5]]]]]

function maxDepth(arr) {
  if (!Array.isArray(arr)) return 0
  let max = 0
  arr.forEach(item => {
    if (Array.isArray(item)) {
      max = Math.max(maxDepth(item), max)
    }
  })
  return max + 1
}

console.log(maxDepth(arr))