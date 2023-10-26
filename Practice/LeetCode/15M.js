/**
 * 15.给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
    你返回所有和为 0 且不重复的三元组。

    注意：答案中不可以包含重复的三元组。
 */

let nums = [-5,-1,-1,0,0,1,1,4,5,5,-2,4,-8]

var threeSum = function(nums) {
  let ans = [];
  let n = nums.length;
  if(n<3 || nums == null)
      return ans;
  nums.sort((a,b)=> a -b);
  for(let i = 0;i< n;i++){
      if(nums[i] > 0){
          break;
      }
      if(i>0 && nums[i] == nums[i-1]){
          continue;
      }
      let L = i+1;
      let R = n-1;
      while(L<R){
          const sum = nums[i] + nums[L] +nums[R];
          if(sum == 0){
              ans.push([nums[i],nums[L],nums[R]]);
              while(L<R && nums[L] == nums[L+1]){
                  L++;  // 去重
              }
              while(L<R && nums[R] == nums[R-1]){
                  R--;  // 去重
              }
              L++;
              R--;
          }else if(sum < 0){
              L++;
          }else if(sum > 0){
              R--;
          }
      }
  }
  return ans;
};

let arr = threeSum(nums)

console.log(arr)