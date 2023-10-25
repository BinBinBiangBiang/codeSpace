console.log('hello world')
/**
 * @func 返回固定格式的电话号码
 * @param array {1,2,3,4,5,6,7,8,9,0}
 * @return (123) 456-7890
 * @author Bin
 */
function phoneNumber(numbers) {
  var num1 = []
  var num2 = []
  for (var i = 0; i < 3; i++) {
    num1.push(numbers[Math.random() * 10])
  }
  for (var i = 0; i < 4; i++) {
    num2.push(numbers[Math.random() * 10])
  }
  let num3 = num1.map(String);
  let num4 = num2.map(String);
  return (num3 + '-' + num4)
}

let Number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// 第一种 ES5
// function phoneNumber(numbers) {
//   return "(" + numbers[0] + numbers[1] + numbers[2] + ")" + " " + numbers[3] + numbers[4] + numbers[5] + "-"
//     + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
// }

//es6箭头函数
// 对象 函数也是对象
// 变量的类型由值决定
// let phoneNumber;   // JS是弱类型语,不用声明类型； 此处为undefined  null 值为空
// 函数表达式
// 简版的函数 箭头函数

// 第二种
// phoneNumber = (numbers) =>{
//   return "(" + numbers[0] + numbers[1] + numbers[2] + ")" + " " + numbers[3] + numbers[4] + numbers[5] + "-"
//     + numbers[6] + numbers[7] + numbers[8] + numbers[9] + ""
// }

// 再变简单
// phoneNumber = (numbers) => `(${numbers[0]}${numbers[1]}${numbers[2]})
//  ${numbers[3]}${numbers[4]}${numbers[5]}
//  -${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`   
//字符串模版在这里不适合，如果不将代码换行，
//挤在一行太长了，可读性不高,而字符串模版如果换行的话
//输出结果也会换行，这与我要的结果不符，所以用字符串拼接更好





console.log(phoneNumber(Number))