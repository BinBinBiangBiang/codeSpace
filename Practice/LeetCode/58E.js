// 58.给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

// 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

// 示例 1：

// 输入：s = "Hello World"
// 输出：5
// 解释：最后一个单词是“World”，长度为5。

var lengthOfLastWord = function (s) {
  let s1 = ' ';
  const arr = s.split('');
  let len = s.length;
  let n = len;
  let j = 0;
  let curmax;
  if (n == 1) {
      return 1;
  }
  for (let i = len - 1; i >= 0; i--) {

      if (arr[n - 1] === ' ') {
          n--;
          j++;
          continue;
      }

      if (arr[i] === ' ') {
          return n - i - 1;
      }

      if(i == 0){
          return len-j;
      }
      if(i == 0 && arr.indexOf(s1) === -1){
          return len;
      }

      if (i == 0) {
          return 1;
      }

  }
};

s = "Hello World"

console.log(lengthOfLastWord(s)); 