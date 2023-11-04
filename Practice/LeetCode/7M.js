// 7.给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。

var reverse = function(x) {
  let str2 =''
  let ans;
  if(x >= 0){
      let str1 = x.toString();
      for(let i = str1.length;i>=0;i--){
          str2+=str1.charAt(i)
      }
      ans = Number(str2)
      if(ans > Math.pow(2,31)-1){
          return 0;
      }else{
          return ans;
      }
  }else{
      x = Math.abs(x);
      let str1 = x.toString();
      for(let i = str1.length;i>=0;i--){
          str2+=str1.charAt(i)
      }
      ans = Number(str2);
      ans = ans*(-1);
      if(ans < -1*Math.pow(2,31)){
          return 0;
      }else{
          return ans;
      }
  }
};