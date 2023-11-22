var findLHS = function(nums) {
  const len = nums.length;
  let max = 0;
  for(let i = 0; i < len ;i++){
      let left = i;
      let right = i+1;
      const curNum = nums[i];
      let n = 1;
      while(right<=len-1){
          if(nums[right] - curNum == 1 || nums[right] == curNum){
              n++;
          }
          right++
      }
      right = i+1;
      max = Math.max(max,n);
      n = 1;
      while(right<=len-1){
          if(nums[right] - curNum == -1 || nums[right] == curNum){
              n++;
          }
          right++
      }
      max = Math.max(max,n);
  }
  return max;
};

nums = [1,3,2,2,5,2,3,7];

console.log(findLHS(nums));