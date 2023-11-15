var maximizeSum = function(nums, k) {
  let arr = nums.sort((a,b) => {
     return  a - b;
  })
  const len = nums.length;
  console.log(arr)
  let ans = arr[len-1]*k +digui(k-1);
  return ans;
};

function digui(m){
  if(m === 1){
      return 1;
  }
  return m+digui(m -1);
}

nums = [4,4,9,10,10,9,3,8,4,2,5,3,8,6,1,10,4,5,3,2,3,9,5,7,10,4,9,10,1,10,4], k = 6

// console.log(maximizeSum(nums,k));

console.log(digui(6));