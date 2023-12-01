// 345.给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

 

// 示例 1：

// 输入：s = "hello"
// 输出："holle"
// 示例 2：

// 输入：s = "leetcode"
// 输出："leotcede"
 

// 提示：

// 1 <= s.length <= 3 * 105
// s 由 可打印的 ASCII 字符组成

var reverseVowels = function(s) {
    let obj ={
        a:1,
        e:1,
        i:1,
        o:1,
        u:1,
        A:1,
        E:1,
        I:1,
        O:1,
        U:1
    }
    const len = s.length;
    for(let i = 0,j=len-1;i<=j;i++,j--){
        const cur1 = s.charAt(i);
        console.log(cur1);
        const cur2 = s.charAt(j)
        console.log(cur2);
        console.log("----------");
        if(cur1 in obj || cur2 in obj){
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp; 
        }
    }
  
    return s;
  
  };
  
  s = "leetcode"
  
  
  console.log(reverseVowels(s));