// 383.给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

 

// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true
 

// 提示：

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote 和 magazine 由小写英文字母组成

var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  const len1 = ransomNote.length;
  const len2 = magazine.length;
  for (let i = 0; i < len2; i++) {
      const cur = magazine[i];
      if (!map.has(cur)) {
          map.set(cur, 1);
      } else {
          map.set(cur, map.get(cur) + 1)
      }
  }
  for (let j = 0; j < len1; j++) {
      const cur1 = ransomNote[j];
      if (!map.has(cur1) || map.get(cur1) <= 0) {
          return false
      }
      map.set(cur1, map.get(cur1) - 1);
  }
  return true;
};