// 70.假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

// var climbStairs = function(n) {
//     let achec = {}
//     var fb = function (n){
//         if(n in achec){
//             return achec[n];
//         }else{
//             if(n < 3){
//                 achec[n] = n;
//             }else{
//                 achec[n] = fb(n-1) + fb(n-2);
//             }
//             return achec[n];
//         }
//     }
//     return fb(n);
// };

// var climbStairs = function(n) {
//     if(n == 1){
//         return 1;
//     }
//     let a = 1,b = 2;
//     for(let i = 2;i<n;i++){
//         [a,b] = [b,a+b];
//     }
//     return b;
// };

var climbStairs = function(n) {
  let ans = []
  ans[0] = 1;
  ans[1] = 2;
  for(let i = 2;i<n;i++){
      ans[i] = ans[i-1] + ans[i-2];
  }
  return ans[n-1];
};