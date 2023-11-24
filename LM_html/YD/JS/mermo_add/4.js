// 动态规划
let count = 0;
function fibonacci(n) {
  let ans = []
  ans[0] = 1;
  ans[1] = 1;

  for (var i = 2; i < n; i++) {
    count++;
    ans[i] = ans[i - 1] + ans[i - 2]
  }
  return ans[n - 1]
}

console.time('fibonacci')
console.log(fibonacci(3000));
console.log(count)
console.timeEnd('fibonacci')