// 187.DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。

// 例如，"ACGAATTCCG" 是一个 DNA序列 。
// 在研究 DNA 时，识别 DNA 中的重复序列非常有用。

// 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。

 

// 示例 1：

// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]
// 示例 2：

// 输入：s = "AAAAAAAAAAAAA"
// 输出：["AAAAAAAAAA"]
 

let s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";

var findRepeatedDnaSequences = function (s) {
  let len = s.length;
  let obj1 = {};
  let obj2 = {};
  let ans = [];
  for (let i = 0; i < len - 9; i++) {
      let left = i;
      let right = i + 10;
      let curStr = s.slice(left, right)
      if (!(curStr in obj1)) {
          obj1[curStr] = 1;
      } else {
          obj2[curStr] = 1;
      }
  }
  let keys = Object.keys(obj2);
  for (let i = 0; i < keys.length; i++) {
      ans[i] = keys[i];
  }
  return ans;
};

console.log(s.length)

console.log(findRepeatedDnaSequences(s));