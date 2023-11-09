var arr = [1, [2, [3, 4]]]

// var nerArr = arr.flat(1) // 数组的扁平化

var newArr = arr.flat(Infinity) // 把多维数组降为一维数组  Infinity 无穷次

console.log(nerArr);