// 1137.泰波那契序列 Tn 定义如下： 

// T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

// 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

 

// 示例 1：

// 输入：n = 4
// 输出：4
// 解释：
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// 示例 2：

// 输入：n = 25
// 输出：1389537

/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//     let ans = [];
//     ans[0] = 0;
//     ans[1] = 1;
//     ans[2] = 1;
//     for (let i = 3; i <=n; i++) {
//         ans[i] = ans[i - 1] + ans[i - 2] + ans[i - 3];
//     }
//     return ans[n];
// };

// var tribonacci = function (n) {
//     if(n == 0){
//         return 0;
//     }
//     let a = 0 ,b = 1,c =1;
//     for(let i = 3 ;i<=n;i++){
//         [a,b,c] = [b,c,a+b+c];
//     }
//     return c;
// };

var tribonacci = function (n) {
  let memo = {}
  var foo = function (n) {
      if (n in memo) {
          return memo[n];
      } else {
          if (n < 3) {
              if (n == 2) {
                  memo[n] = 1;
              } else {
                  memo[n] = n;
              }
          } else {
              memo[n] = foo(n - 1) + foo(n - 2) + foo(n - 3);
          }
          return memo[n];
      }
  }
  return foo(n);
};

