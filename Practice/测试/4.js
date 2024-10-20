function addLargeNumbers(num1, num2) {
  // 确保num1是较长的那个数
  if (num1.length < num2.length) {
      [num1, num2] = [num2, num1];
  }

  let carry = 0;
  let result = '';
  // 从低位到高位进行相加
  for (let i = 0; i < num1.length || carry > 0; i++) {
      const digit1 = i < num1.length ? parseInt(num1[num1.length - 1 - i], 10) : 0;
      const digit2 = i < num2.length ? parseInt(num2[num2.length - 1 - i], 10) : 0;
      
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
  }

  return result;
}

// 使用示例
const a = '123';
const b = '312';
console.log(addLargeNumbers(a, b)); // 输出: "1111111110111111111011111111100"