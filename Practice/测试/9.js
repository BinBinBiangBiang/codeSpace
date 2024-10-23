function containsRepeatingLetter(str) {
  const len = str.length
  if (len === 1) return false
  let left = 0, right = 1
  while (right !== len) {
    if (str[left] === str[right]) {
      right === len
      return true
    } else {
      left++
      right++
    }
  }
  return false
}

// 判断一个字符是否是纯字母
function test() {
  return /^[a-zA-Z]+$/.test('asasas1s2s3s')
}

console.log(containsRepeatingLetter('asasas1s2s3s'))