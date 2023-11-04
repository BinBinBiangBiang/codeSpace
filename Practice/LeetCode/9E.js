// 9.给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。

var isPalindrome = function(x) {
  if(x<0 || ((x %10 == 0) && x!= 0))
          return false;
          
      let cur = 0;
      while( cur < x){
          cur = cur*10 + x % 10;
          x = Math.floor(x/10);
      }
      return (cur == x) || (Math.floor(cur/10) == x) ;
};
