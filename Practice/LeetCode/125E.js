// 125.如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

 

// 示例 1：

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。
// 示例 2：

// 输入：s = "race a car"
// 输出：false
// 解释："raceacar" 不是回文串。
// 示例 3：

// 输入：s = " "
// 输出：true
// 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
// 由于空字符串正着反着读都一样，所以是回文串。

var isPalindrome = function(s) {
  if(s == ''){
      return true;
  }
  let newS = s.replace(/[^a-zA-Z0-9]/g,'')
  let s1 = newS.toLowerCase();
  const len = newS.length;
  for(let i = 0,j = len-1;i<j;i++,j--){
      if(s1.charAt(i) === s1.charAt(j)){
          continue;
      }else{
          return false
      }
  }
  return true;
};


s = "0P";

console.log(isPalindrome(s));
