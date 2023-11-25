// - map 遍历，callback 返回值 新的数组
// 1. parseInt(1,0,[1,2,3]);   10进制 对应1
// 1. parseInt(2,1,[1,2,3]);   1进制不可能有2
// 1. parseInt(3,2,[1,2,3]);   2进制不可能有3

console.log([1,2,11,4,5,6,7,8,9,10].map(parseInt));
