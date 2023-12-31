//14. 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

 

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
 

var longestCommonPrefix = function(strs) {
  if(strs.length == 0 || strs == null){
          return "";
      }

      let length = strs[0].length;
      let count = strs.length;

      for(let i = 0 ; i < length ;i++){
          let c = strs[0].charAt(i);
          for(let j = 1 ; j < count ;j++ ){
              if(i == strs[j].length || strs[j].charAt(i) != c){
                  return strs[0].substring(0,i);
              }
          }
      }
      
      return strs[0];
};