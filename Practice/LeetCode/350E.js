// 350.给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，
// 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。


var intersect = function(nums1, nums2) {
  const obj1 = {}
  const obj2 = {}
  const len1 = nums1.length
  const len2 = nums2.length
  let ans = []
  for(let i = 0;i<len1;i++){
      const curNum1 = nums1[i]
      if(!(curNum1 in obj1)){
          obj1[curNum1] = 1;
      }else{
          obj1[curNum1]++;
      }
  }
  for(let i = 0;i<len2;i++){
      const curNum2 = nums2[i]
      if(!(curNum2 in obj2)){
          obj2[curNum2] = 1;
      }else{
          obj2[curNum2]++;
      }
  }
  for(let i = 0;i<len2;i++){
      const curnum = nums2[i]

      if((curnum in obj1)){
          const n = obj1[curnum] > obj2[curnum] ? obj2[curnum] : obj1[curnum];
          for(let i = 0;i<n;i++){
              ans.push(curnum);
          }
          delete obj1[curnum];
      }
  }
  console.log(obj1);
  return ans; 
};


nums1 = [1,2,2,1], nums2 = [2,2]



console.log(intersect(nums1, nums2));