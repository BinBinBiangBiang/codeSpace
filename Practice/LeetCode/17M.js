// 17. 电话号码的字母组合

// 给定一个仅包含数字 2 - 9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



 

// 示例 1：

// 输入：digits = "23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
// 示例 2：

// 输入：digits = ""
// 输出：[]
// 示例 3：

// 输入：digits = "2"
// 输出：["a", "b", "c"]


// 提示：

// 0 <= digits.length <= 4
// digits[i] 是范围['2', '9'] 的一个数字。

// C++版

// class Solution {
//   private:
//       const string letterMap[10] = {
//           "",     // 0
//           "",     // 1
//           "abc",  // 2
//           "def",  // 3
//           "ghi",  // 4
//           "jkl",  // 5
//           "mno",  // 6
//           "pqrs", // 7
//           "tuv",  // 8
//           "wxyz", // 9
//       };
  
//   public:
//       string s;
//       vector<string> result;
//       void backtracking(const string& digits, int index) {
//           if (index == digits.size()) {
//               result.push_back(s);
//               return;
//           }
//           int digt = digits[index] - '0';
//           string letters = letterMap[digt];
//           for (int i = 0; i < letters.size(); i++) {
//               s.push_back(letters[i]);
//               backtracking(digits, index + 1);
//               s.pop_back();
//           }
//       }
//       vector<string> letterCombinations(string digits) {
//           s.clear();
//           result.clear();
//           if(digits.size() == 0){
//               return result;
//           }
//           backtracking(digits, 0);
//           return result;
//       }
//   };