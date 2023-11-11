let arr =['a','b','c']

let str = 'abcd'

let set = new Set([1,2,3,3,4,5,4])


/**for...of 循环是一种用于遍历可迭代对象（如数组、字符串、Map、Set 等）的循环结构。
 * 它提供了一种简洁的语法，让你能够直接访问每个元素的值，而不必关心索引。 */

// 数组
for(let item of arr){
  console.log(item)
}
console.log('================================')
// 字符串
for(let item of str){
  console.log(item)
}
console.log('================================')
// set
for(let item of set){
  console.log(item)
}
console.log('================================')
