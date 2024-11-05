// =================================================================
// 传统对象只能用字符串做key，所以下面案例添加数组作为key
// 会自动转换为字符串
// let obj = {
//   a: 1,
//   b: 2,
// }

// var arr = [1,2]
// obj[arr] = 3

// 输出：{ a: 1, b: 2, '1,2': 3 }
// console.log(obj)
// =================================================================

// 由于上述原因，由此map诞生了,(map可以用任意数据结构作为key，这弥补了传统对象的缺陷)
//
// 给map加默认值
// let map = new Map([
//   ['name','老六']
// ])

let map = new Map()
// 添加方法：map.set()

let obj = {a:1};
// map.set({a:1},'hello')
map.set(obj,'hello')

// 输出：Map(1) { { a: 1 } => 'hello' }
// console.log(map);

// 报错，上下两个{a:1}的地址不一样
// console.log(map.get({a:1}));

// 这样就可以拿到,输出hello
// console.log(map.get(obj));


/**
 * map的forEach遍历
 * 下述代码输出：value=hello key=[object Object] map=[object Map]
 */
map.forEach((value,key,map) =>{
  console.log("value="+value,"key="+key,"map="+map)
})