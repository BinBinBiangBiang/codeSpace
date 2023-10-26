/*
2520.给你一个整数 num ，返回 num 中能整除 num 的数位的数目。

如果满足 nums % val == 0 ，则认为整数 val 可以整除 nums 。
*/

var countDigits = function(num) {
  let ans = 0;
  let arr = [];
  console.log(arr.length);
  let i = 0;
  let num1 =num;
  while(num>0){
      arr[i] = num % 10;
      console.log(arr[i]);
      i++;
      num = num / 10;
      console.log(num)
      num = Math.floor(num);
      console.log(num)
  }
  console.log(arr.length);
  for(let j = 0 ;j <arr.length;j++){
      if((num1 % arr[j]) == 0){
          ans++;
      }
  }
  return ans;
};

console.log(countDigits(121))