const flat = (arr) => {
  let res = []
  arr.forEach(item => {
    if (!Array.isArray(item)) {
      res.push(item)
    } else {
      res = res.concat(flat(item, res))
    }
  })

  return res
}

const arr = [1, [2, [3, 4], 5], 6]
console.log(flat(arr))