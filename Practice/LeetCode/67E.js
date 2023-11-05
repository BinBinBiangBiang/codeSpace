// 67.给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。


// ans.split('').reverse().join('') 是一种将字符串翻转的常见方法，它的意思如下：

// split('')：首先，将字符串 ans 拆分成一个字符数组。split('') 方法使用空字符串作为分隔符，
// 将字符串中的每个字符拆分为一个数组元素。这会将字符串转换为字符数组，每个字符都是数组的一个元素。

// reverse()：然后，使用 reverse() 方法反转字符数组的元素顺序，使字符数组中的元素从末尾到开头排列。

// join('')：最后，使用 join('') 方法将字符数组中的元素连接成一个字符串，不再有任何字符之间的间隔。
// 这会将字符数组重新合并成一个翻转后的字符串。

// 综合起来，ans.split('').reverse().join('') 可以将字符串 ans 中的字符顺序颠倒，得到它的翻转版本。
// 这种技巧在许多情况下很有用，例如，用于检查回文字符串或需要反转字符串的需求。
var addBinary = function(a, b) {
  let ans = "";
  let ca = 0;
  for(let i = a.length - 1, j = b.length - 1;i >= 0 || j >= 0; i--, j--) {
      let sum = ca;
      sum += i >= 0 ? parseInt(a[i]) : 0;
      sum += j >= 0 ? parseInt(b[j]) : 0;
      ans += sum % 2;
      ca = Math.floor(sum / 2);
  }
  ans += ca == 1 ? ca : "";
  return ans.split('').reverse().join('');
};




a = "11", b = "1";

console.log(addBinary(a, b));