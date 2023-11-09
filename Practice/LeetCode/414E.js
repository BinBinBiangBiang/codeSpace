// 414.给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

var thirdMax = function(nums) {
  let nums1 = nums.sort((a,b) => {
      return b-a;
  })
  console.log(nums1)
  const set = new Set();
  let i = 0;
  let j = 0;
  while(i < nums1.length){
      const curNum = nums1[i++];
      if(!(set.has(curNum))){
          set.add(curNum);
          j++;
          console.log("1")
      }
      
      if(j == 3){
          return curNum
      }
  }
  if(j<3){
    return nums1[0];
  }  
  set.forEach(value =>{ 
    console.log(value)
  })
  
}; 

num = [2, 2, 3, 1]
num1 = [1,2]

console.log(thirdMax(num1));

