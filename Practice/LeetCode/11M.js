// 11.给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器

var arr = [5, 6, 4, 8, 7, 2, 1, 3];


var maxArea = function (height) {
  let n = height.length;
  console.log("n=" +n);
  let max = -1;
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      num1 = Math.min(height[i], height[j]) * (j - i)
      if(j<n-1){
        j++;
      }
      num2 = Math.min(height[i], height[j]) * (j - i)
      max = Math.max(max, num1, num2);
      console.log(max);
    }
  }
  return max;
};

console.log(maxArea(arr))

