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

