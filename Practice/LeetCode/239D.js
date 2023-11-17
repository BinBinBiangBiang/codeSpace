// 239.给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
// 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

 

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]
 

// 暴力解法 超时
// var maxSlidingWindow = function(nums, k) {
//   const len = nums.length;
//   let left = 0;
//   let right = k-1;
//   let res = [];
//   while(right < len){
//       const max = calMax(left,right);
//       res.push(max);
//       left++;
//       right++;
//   }

//   function calMax(x,y){
//       let maxNum = -Infinity;
//       for(let i = x ; i<= y ; i++){
//           if(nums[i] > maxNum){
//               maxNum = nums[i];
//           }
//       }
//       return maxNum;
//   }
//   return res;
// };


// 滑动窗口 双向队列
var maxSlidingWindow = function(nums, k) {
  // 在窗口移动的过程中，只根据发生变化的元素对最大值进行更新
  const len = nums.length;
  const res = [];
  const deque = [];
  for(let i = 0 ; i < len ; i++){
      while(deque.length && nums[deque[deque.length -1]] <= nums[i]){
          deque.pop();
      }
      deque.push(i);

      // 对头的元素是否出去窗口了
      if(deque[0] <= i-k){
          deque.shift();
      }

      if(i >= k-1){
          res.push(nums[deque[0]]);
      }
  }

  return res;
};