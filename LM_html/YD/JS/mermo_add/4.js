// 动态规划
let count = 0;
function fibonacci(n) {
  // let ans = []
  // ans[0] = 1;
  // ans[1] = 1;
  let a = 1,b =1;


  for (var i = 2; i < n; i++) {
    count++;
    // ans[i] = ans[i - 1] + ans[i - 2]
    [a,b] = [b,a+b];
  }
  // return ans[n - 1]
  return b;
}

console.time('fibonacci')
console.log(fibonacci(3000));
console.log(count)
console.timeEnd('fibonacci')