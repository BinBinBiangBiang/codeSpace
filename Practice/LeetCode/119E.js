// 119.给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
// 示例 1:

// 输入: rowIndex = 3
// 输出: [1,3,3,1]



/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex,YH) {
  return YH[rowIndex+1];
}

var YH = function(nums){
  let ans = [];
  for(let i = 0;i<nums;i++){
      let row = new Array(i+1).fill(1);
      for(let j = 1;j<ans.length;j++){
          row[j] = ans[i-1][j-1] + ans[i-1][j];
      }
      ans.push(row);
  }
  return ans;
}

let YHSJ = YH(5);
console.log(YHSJ)
let curRow = getRow(3,YHSJ);

console.log(curRow);