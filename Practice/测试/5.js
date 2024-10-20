function maxDepth(arr) {
  if (!Array.isArray(arr)) return 0
  let max = 0
  arr.forEach(item => {
    const dep = maxDepth(item)
    if (dep > max) {
      max = dep
    }
  })
  return max + 1
}

console.log(maxDepth([1, 2, [3, 4, [5, 6]]]))