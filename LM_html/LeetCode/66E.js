var plusOne = function(digits) {
  let n = digits.length;
  digits[n-1]++;
  let str = digits.map(String).join(''); // 先调用map(String)将整数数组转换字符串，然后调用join连接他们
  console.log(str);
  let ans = parseInt(str,10);  // 将字符串转化为整数
  return ans
};

arr = [1,2,3,4,5]
let n = plusOne(arr);
console.log(n)