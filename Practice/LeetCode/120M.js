// 120.给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

 

// 示例 1：

// 输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 输出：11
// 解释：如下面简图所示：
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
// 示例 2：

// 输入：triangle = [[-10]]
// 输出：-10
 

// 提示：

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
 

// 进阶：

// 你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题吗？

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const m = triangle.length;
  const dp = new Array(m).fill(0).map(()=>new Array(triangle[m-1].length).fill(0));
  let ans = Infinity;
  dp[0][0] = triangle[0][0];
  for(let i = 1;i<m;i++){
      dp[i][0] = dp[i-1][0]+triangle[i][0];
      dp[i][i] = dp[i-1][i-1] +triangle[i][i];
      if(m == 2){
          ans = Math.min(dp[i][i],dp[i][i-1]);
      }
      for(let j = 1;j<i;j++){
          dp[i][j] = Math.min(dp[i-1][j] ,dp[i-1][j-1])+triangle[i][j];
          // if(i == m-1){
          //     ans = Math.min(ans,dp[i][j],dp[m-1][0]);
          // }
      }
  }
  // ans = Math.min(ans,dp[m-1][triangle[m-1].length-1]);
  const lastn = dp[m-1].length
  for(let i = 0;i<lastn;i++){
      ans = Math.min(ans,dp[m-1][i]);
  }
  return ans;
};