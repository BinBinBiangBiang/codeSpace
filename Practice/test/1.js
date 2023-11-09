var intersection = function(nums1, nums2) {
  let obj = {};
  const set1 = new Set();
  const set2 = new Set();
  let ans =[];
  for(let i = 0 ;i<nums1.length;i++){
      const cruNum1 = nums1[i];
      if(!set1.has(cruNum1)){
          set1.add(cruNum1);
      }
  }
  console.log(set1)
  for(let i = 0 ;i<nums2.length;i++){
      const cruNum2 = nums2[i];
      if(!set2.has(cruNum2)){
          set2.add(cruNum2);
      }
  }
  set1.forEach((value) => {
    if(set2.has(value)){
      ans.push(value);
    }
  })
  return ans;
};

nums1 = [4,9,5], nums2 = [9,4,9,8,4]

console.log(intersection(nums1, nums2));