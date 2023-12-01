// 387.给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

 

// 示例 1：

// 输入: s = "leetcode"
// 输出: 0
// 示例 2:

// 输入: s = "loveleetcode"
// 输出: 2
// 示例 3:

// 输入: s = "aabb"
// 输出: -1
 

// 提示:

// 1 <= s.length <= 105
// s 只包含小写字母

var firstUniqChar = function(s) {
  const map = new Map();
  const len = s.length;
  for(let i = 0 ; i<len ;i++){
      const cur = s[i];
      if(!(map.has(cur))){
          map.set(cur,1);
      }else{
          map.set(cur,map.get(cur) + 1);
      }
  }
  for(let j = 0;j<len;j++){
      const cur1 = s[j];
      if(map.get(cur1) == 1){
          return j;
      }
  }
  return -1;
};