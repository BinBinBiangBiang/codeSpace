// 509.斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

 

// 示例 1：

// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
// 示例 2：

// 输入：n = 3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
// 示例 3：

// 输入：n = 4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3

/**
 * @param {number} n
 * @return {number}
 */

// 递归求解
// var fib = function(n) {
//     return n < 2 ? n : fib(n-1)+fib(n-2);
// };

// 动态规划1
// var fib = function(n) {
//     if(n == 0){
//         return 0;
//     }
//     let a = 1,b =1;
//     for(let i = 2;i<n;i++){
//         [a,b] = [b,a+b]
//     }
//     return b;
// };

// 动态规划2
// var fib = function(n) {
//     if(n == 0){
//         return 0;
//     }
//     let ans = [];
//     ans[0] = 1;
//     ans [1] = 1;
//     for(let i = 2;i<n;i++){
//         ans[i] = ans[i-1] + ans[i-2]
//     }
//     return ans[n-1];
// };



// 记忆函数 优化算法
var fib = function(n) {
  var memo = {};
  var fibonacci = function(n) {
      if (n in memo) {
          return memo[n];
      } else {
          if (n < 2) {
              memo[n] = n;
          } else {
              memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
          }
          return memo[n];
      }
  }
  return fibonacci(n);
};

 