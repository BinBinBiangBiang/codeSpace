// 118.给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

var generate = function(numRows) {
  let ans = [];
  for(let i = 0 ;i<numRows ;i++){
      let cur = new Array(i+1).fill(1);
      for(let j = 1;j< cur.length-1;j++){
          cur[j] = ans[i-1][j-1] + ans[i-1][j];
      }
      ans.push(cur);
  }
  return ans;
};

console.log(generate(5))