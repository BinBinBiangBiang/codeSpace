// 500.给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

// 美式键盘 中：

// 第一行由字符 "qwertyuiop" 组成。
// 第二行由字符 "asdfghjkl" 组成。
// 第三行由字符 "zxcvbnm" 组成。

// 示例 1：

// 输入：words = ["Hello","Alaska","Dad","Peace"]
// 输出：["Alaska","Dad"]
// 示例 2：

// 输入：words = ["omk"]
// 输出：[]
// 示例 3：

// 输入：words = ["adsdf","sfd"]
// 输出：["adsdf","sfd"]
 

var findWords = function(words) {
  let str1 = 'qwertyuiop';
  let str2 = 'asdfghjkl';
  let str3 = 'zxcvbnm';
  
  let ans = [];
  for(let i = 0;i<words.length;i++){
      let temp = words[i].toLowerCase().split('');
      if(temp.every((el) => str1.includes(el)) || temp.every((el) => str2.includes(el)) || temp.every((el) => str3.includes(el))){
          ans.push(words[i]);
      }
  }
  return ans;
};