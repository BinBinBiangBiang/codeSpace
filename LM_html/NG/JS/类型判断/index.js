//--------------------------------------------------------------------
// 原始数据类型：
let str = 'hello' // String
let num = 123 // number
let flag = false // boolean 
let und =  undefined // undefined
let nu = null // null

// JS中的最大安全值  2 ** 53 (2的53次方，9007199254740992)
let  bigInt = 123n // big number
let s = Symbol('hello')


let s2 = Symbol('hello')

// 两种类型相同，但下述结果返回false
console.log(s===s2)
//--------------------------------------------------------------------
// 引用数据类型
let obj = {}
let arr =[]
let fn = function (){}
let date = new Date() 

