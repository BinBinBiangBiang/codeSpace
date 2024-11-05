// let str ='abcdefg'

// // console.log(str[2])
// console.log(str.at(2))

// // 增长字符串 其余补0

// // 从前面开始补，字符串会变到后面去
// console.log(str.padStart(20, '0'))
// // 从后面开始补，字符串会变到前面去
// console.log(str.padEnd(20, '0'))


//----------------------------------------------------------------
let obj = {
  a:1,
  b:2
}

// 将对象转化为字符串
let str = JSON.stringify(obj)
console.log(str)

// 字符串转回对象
let obj2 = JSON.parse(str)
console.log(obj2)
