// 434.统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

// 请注意，你可以假定字符串里不包括任何不可打印的字符。

// 示例:

// 输入: "Hello, my name is John"
// 输出: 5
// 解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。

var countSegments = function (s) {
    let n = 0;
    const len = s.length;
    for(let i = 0;i<len;i++){
        if((i == 0 || s[i-1] === ' ') && s[i] !== ' '){
            n++;
        }
    }
    return n;
};

s = "                "
console.log(s[1]+'--',s[2]+'--',s[3]+'--');

console.log(countSegments(s));