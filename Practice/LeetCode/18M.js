// 18.给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
// 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] 
//（若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ans = [];
  if (n < 4) {
      return ans;
  }
  for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) {
          continue;
      }
      if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
          break;
      }
      if (nums[i] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) {
          continue;
      }
      for (let j = i + 1; j < n - 2; j++) {
          if (j > i + 1 && nums[j] == nums[j - 1]) {
              continue;
          }
          if( j > i + 1 && nums[i] + nums[j] + nums[j+1] +nums[j+2] > target){
              break;
          }
          if( j > i + 1 && nums[i] + nums[j] + nums[n-1] + nums[n-1] < target){
              continue;
          }
          let L = j + 1;
          let R = n - 1;
          while (L < R) {
              const sum = nums[i] + nums[j] + nums[L] + nums[R];
              if ( sum < target) {
                  L++;
              } else if (sum === target) {
                  ans.push([nums[i], nums[j], nums[L], nums[R]]);
                  while (L < R && nums[L] == nums[L + 1]) {
                      L++;
                  }
                  while (L < R && nums[R] == nums[R - 1]) {
                      R--;
                  }
                  R--;
              } else {
                  R--;
              }
          }
      }
  }
  return ans;
};


let arr = [1,5,8,4,3,6,2,5,8,4,1,3,6,8,4,2,5,6,4,2,3,7,1,0]

let ans = fourSum(arr,7);

console.log(ans)