// 3.给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

var lengthOfLongestSubstring = function(s) {
  let ans = 0 ;
  let left = 0;
  const set = new Set();
  for(let right = 0;right < s.length;right++){
      const c = s[right];
      while(set.has(c)){
          set.delete(s[left++]);
      }
      set.add(c);
      ans = Math.max(ans,right-left+1);
  }
  return ans; 
};

let str = 'abcabddsdjiedida'

console.log(lengthOfLongestSubstring(str));