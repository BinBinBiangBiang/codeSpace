function test(arr) {
  // 交易一次
  const len = arr.length
  let max = 0
  for (let i = 0; i < len; i++) {
    let buy = arr[i]
    for (let j = i; j < len; j++) {
      max = Math.max(max, arr[j] - buy)
    }
  }
  return max
}



function test2(arr) {
  // 交易多次
  const len = arr.length
  const dp = new Array(len).fill(0).map(() => new Array(2))
  dp[0][0] = 0
  dp[0][1] = -arr[0] 
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + arr[i])
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - arr[i])
  }
  console.log(dp)
  return dp[len-1][0]
}

console.log(test2([1, 5, 3, 6, 4]))