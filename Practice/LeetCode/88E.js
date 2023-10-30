// 88.给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
// 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，
// 后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

// 普通解法，暴力循环
// var merge = function(nums1, m, nums2, n) {
//     for(let i = m,j=0;i<m+n;i++,j++){
//         nums1[i] = nums2[j]
//     }
//     nums1.sort((a,b)=>a-b);
//     return nums1;
// };

// 优化算法（这里也没优化多少，有时时间还更长） 双指针队列思想
var merge = function(nums1, m, nums2, n) {
  const ans = new Array(m+n).fill(0);
  let p1 = 0;
  let p2 = 0;
  let cur ;
  while(p1<m || p2<n){
      if(p1 == m ){
          cur = nums2[p2++];
      }else if(p2 == n){
          cur = nums1[p1++];
      }else if(nums1[p1] <nums2[p2]){
          cur = nums1[p1++];
      }else{
          cur = nums2[p2++]
      }
      ans[p1+p2-1] = cur;
  }
  for(let i = 0;i<m+n;i++){
      nums1[i] = ans[i];
  }
  return ans;
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

console.log(merge(nums1,m,nums2,n));
