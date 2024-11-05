// 包装类

// 结果为undefined
// var obj ={}
// console.log(obj.a)

// 结果为undefined
// var num = 123
// num.abc = 'hello'
// console.log(num.abc)

// var num = new Number(123);
// num.abc = 'hello';
// console.log(num.abc)
// console.log(num*2)  // 参与运算时会变成数字

// 原始类型数据不让挂属性，为什么下面代码不报错呢
// 而是输出undefined
// var str = 'abcd'
// console.log(str.length)    // ??????

// var num = 4
// num.len =3

// num.len = 3 在v8眼里会执行成一下代码
// var num = new Number(4)
// num.len = 3
// delete num.len

// new Number(4).len  // 隐式的包装类
// 执行到下述代码会执行成上面一行代码的样子
// console.log(num.len)

// 考点
// 数组--对象--引用类数据类型
// var arr = [1, 2, 3, 4, 5]
// arr.length =2 

// console.log(arr)

// 原始数据--字符串类型
var str = 'abcd'
str.length = 2
// 上述代码v8会读成下面这行代码
// new String('abcd').length = 2  然后按照原始值不能添加属性的规则直接delete


// 可以访问str.length , 但是不能修改他的值
console.log(str.length)
// 上述代码又读到了str.length,但之前的v8已经删了，所以v8又会在读成下述代码
// new String('abcd').length
// 最终结果为原来的长度4



// 面试题
var str = 'abc'
str += 1 // 'abc1'
var test = typeof (str)  //  'string'
console.log(test)
if (test.length == 6) {
  test.sign = 'typeOf的返回结果可能为String'
  // new String(test).sign = 'typeOf的返回结果可能为String'
  // delete
}
console.log(test.sign)  // v8读到test.sign 生成 new String(test).sign
