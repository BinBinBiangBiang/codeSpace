// 20.给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

var isValid = function(s) {
  if(s.length % 2 != 0){
      return false;
  }

  if(s.length === 0){
      return true;
  }

  const stack = [];
  
  const map = {
      '(': ')',
      '[': ']',
      '{': '}'
  }

  for(let i = 0 ; i<s.length;i++){
      const char = s[i];

      if(map[char]){
          stack.push(char);
      }else{
          // 判断此时栈顶元素是否和你拿到的 右括号匹配
          const top = stack.pop();
          if(char !== map[top]){
              return false;
          }
      }
  }
  return stack.length === 0;
};

let arr = '(){[]}'

console.log(isValid(arr));