let m // 压岁钱
let tokens = [1,3,5,6] // 已有玩具编号

const test = function(m, tokens) {
  const map = new Map(tokens)
  let i = 1
  let count = 0
  while (m >= i) {
    if (!map.has(i)) {
      if (m - i >=0) {
        m -= i
        count++
      } else {
        m = 0
      }
    }
    i++
  }
  return count
}