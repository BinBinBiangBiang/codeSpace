var nextGreaterElement = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const map = new Map();
  for (let i = 0; i < len2; i++) {
    map.set(nums2[i], i);
  }
  for (let i = 0; i < len1; i++) {
    const cur = map.get(nums1[i]);
    if(cur === len2 - 1){
      nums1[i] = -1;
    }else{
      for (let j = cur + 1; j < len2; j++) {
        if (nums2[j] > nums1[i]) {
          nums1[i] = nums2[j];
          break;
        }
        if (j == len2 - 1) {
          nums1[i] = -1;
        }
      }
    } 
  }
  return nums1;
};

nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2]
// nums1 = [2,4], nums2 = [1,2,3,4]

console.log(nextGreaterElement(nums1, nums2));