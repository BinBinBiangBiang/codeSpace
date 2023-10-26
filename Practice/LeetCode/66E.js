/* 
66.给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。
*/

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