// 415.给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

 

// 示例 1：

// 输入：num1 = "11", num2 = "123"
// 输出："134"
// 示例 2：

// 输入：num1 = "456", num2 = "77"
// 输出："533"
// 示例 3：

// 输入：num1 = "0", num2 = "0"
// 输出："0"

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  let i = len1-1;
  let j = len2-1;
  let add = 0;
  let ans = [];
  while(i>=0 || j >=0 || add != 0){
      const x = i >= 0 ? num1[i] - '0' : 0;
      const y = j >= 0 ? num2[j] - '0' : 0;
      const result = x + y + add;
      ans.push(result % 10);
      add = Math.floor(result / 10);
      i--;
      j--;
  }
  return ans.reverse().join("");
};

var addStrings = function(num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  let i = len1-1;
  let j = len2-1;
  let add = 0;
  let ans = [];
  while(i>=0 || j >=0 || add != 0){
      const x = i >= 0 ? num1[i] - '0' : 0;
      const y = j >= 0 ? num2[j] - '0' : 0;
      const result = x + y + add;
      ans.push(result % 10);
      add = Math.floor(result / 10);
      i--;
      j--;
  }
  return ans.reverse().join("");
};