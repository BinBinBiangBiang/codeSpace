// =================================================================
// 浅拷贝
// let a = {name : 'BiangBiang'}
// let b = Object.create(a)

// a.name = '管一'

// console.log(b.name)


// =================================================================
// Object.assign为深拷贝????? 看下面的案例
// let a = {name:'BiangBiang'}
// let b = Object.assign({},a)

// a.name = '管一'

// console.log(b.name);

// =================================================================
// Object.assign为浅拷贝
let a = {
  name:'BiangBiang',
  like:{
    n: 'coding'
  }
}
let b = Object.assign({},a)

a.name = '管一'
a.like.n ='running'

console.log(b);  // { name: 'BiangBiang', like: { n: 'running' } }\

// =================================================================
// 以下都是浅拷贝
let arr = [1,2,3,{a:10}]
// --- 得到一个与原数组相同新数组 ---
// let newArr = [].concat(arr)  
// let newArr = arr.slice(0)
// let newArr = [...arr]
let newArr = arr.toReversed().reverse()
arr[3].a = 100
console.log(newArr);
