在我们平时刷力扣算法题时数组的使用往往是占大多数的。而我们更多得了解一些数组中实用的自带方法往往会给我们的做题带来很大的便利，以下是对数组中自带方法的一个总结.

JavaScript中的数组自带方法主要可分为四大类


数组元素的增删改方法
数组元素的查询方法
数组元素的遍历方法
数组元素的排序方法


数组元素的增删改
1.push()

向数组末尾添加一个或者多个元素

js复制代码let arr1 = [1, 2, 3];
arr.push(4);
// arr1现在为[1, 2, 3, 4]

let arr2 = [1, 2, 3];
arr2.push(4,5,6)
// arr2现在为[1,2,3,4,5,6]

2.pop()

移除并返回数组的最后一个元素

js复制代码let arr = [1, 2, 3, 4];
let lastElement = arr.pop();
// arr现在为[1, 2, 3]，lastElement为4

3.unshift()

向数组开头添加一个或多个元素

js复制代码let arr1 = [2, 3];
arr1.unshift(1);
// arr1现在为[1, 2, 3]

let arr2 = [2, 3];
arr2.unshift(-1,0,1);
// arr2现在为[-1, 0, 1, 2, 3]

4.shift()

移除并返回数组的第一个元素

js复制代码let arr = [1, 2, 3];
let firstElement = arr.shift();
// arr现在为[2, 3]，firstElement为1

5.splice()


在指定位置添加或删除元素，也可进行元素的替换


array.splice(start, deleteCount, item1, item2, ...)
start：表示开始操作的位置，即从哪个索引开始操作。
deleteCount：可选参数，表示要删除的元素数量，如果为0或省略，则不删除元素。
item1, item2, ...：可选参数，表示要添加到数组的元素。


js复制代码// 1.删除元素
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(2, 2); // 从索引2开始删除2个元素
// arr1现在为[1, 2, 5]

// 2.添加元素
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0, 6, 7); // 从索引2开始不删除元素，添加6和7
// arr2现在为[1, 2, 6, 7, 3, 4, 5]

// 3.替换元素
let arr3 = [1, 2, 3, 4, 5];
arr3.splice(2, 2, 6, 7); // 从索引2开始删除2个元素，并添加6和7
// arr3现在为[1, 2, 6, 7, 5]

数组元素的查询
1.indexOf()

查找指定元素的第一个索引

js复制代码let arr = [1, 2, 3, 4, 3];
let index = arr.indexOf(3);
// index为2，第一个3的索引,而不会去找第二个元素的索引

2.lastIndexOf()

查找指定元素的最后一个索引

js复制代码let arr = [1, 2, 3, 4, 3];
let lastIndex = arr.lastIndexOf(3);
// lastIndex为4，最后一个3的索引

3.includes()

检查数组是否包含指定元素

js复制代码let arr = [1, 2, 3, 4, 5];
let isIncluded = arr.includes(2);
// idIncluded为true

4.find()

查找符合条件的第一个元素

js复制代码let arr = [1, 2, 4, 5];
let result = arr.find(element => element > 3);
// result为4，第一个满足条件的元素

5.findIndex()

查找符合条件的第一个元素的索引

js复制代码let arr = [1, 2, 4, 5];
let index = arr.findIndex(element => element > 3);
// index为2(元素4的索引)，第一个满足条件的元素的索引

数组元素的遍历方式
1.forEach()

对数组中的每个元素执行指定操作

js复制代码let arr = [1, 2, 3];
arr.forEach(element => console.log(element * 2));
// 控制台输出：2, 4, 6

2.map()

创建一个新数组，其中的元素是对原数组元素应用指定操作的结果

js复制代码let arr = [1, 2, 3];
let doubled = arr.map(element => element * 2);
// doubled为[2, 4, 6]

3.filter()

创建一个新数组，其中包含满足条件的元素

js复制代码let arr = [1, 2, 3, 4, 5, 6, 7];
let res = arr.filter(element => element % 2 === 0);
// res为[2, 4, 6]

4.reduce()

对数组元素执行累积操作


其原型为：array.reduce(callback(accumulator, currentValue, currentIndex, array) => xxx, initialValue)
其中，callback为用于执行累计操作的函数，函数接收四个参数.

accumulator：累积值，也称为累加器，是每次调用callback函数时的返回值。
currentValue：当前元素的值
currentIndex：当前元素的索引（可选参数）
array：原始数组（可选参数）
initialValue：可选参数，表示初始的累积值。如果提供了initialValue,它将会作为第一个调用函数时accumulator的初始值，否则数组的第一个元素将作为accumulator的初始值。
xxx：为要执行的操作
reduce方法通常用于执行累积操作，例如计算数组元素的总和、找到数组中的最大值或最小值等等。下面列出一些具体例子：



计算数组元素的总和

js复制代码let arr = [1, 2, 3, 4];
let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
// sum为10，元素求和


查找数组的最大值（最小值同理）

js复制代码let numbers = [20, 14, 7, 28, 50];
let max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
// max为50


拼接数组中的所有字符串

js复制代码let strings = ['Hello', ' ', 'World', '!'];
let combinedString = strings.reduce((accumulator, currentValue) => accumulator + currentValue, '');
// combinedString为'Hello World!'

5.reduceRight()

从右向左对数组元素执行累积操作

js复制代码let arr = [1, 2, 3, 4];
let product = arr.reduceRight((accumulator, current) => accumulator * current, 1);
// product为24，元素求积

6.some()

检查是否至少有一个元素满足条件

js复制代码let arr = [1, 2, 3, 4, 5];
let isHasNumber = arr.some(element => element % 2 === 0);
// isHasNumber为true

7.every()

检查是否所有元素都满足条件

js复制代码let arr = [2, 4, 6, 8];
let allEvenNumbers = arr.every(element => element % 2 === 0);
// allEvenNumbers为true

数组元素的排序和转换
1.sort()

对数组元素进行排序

js复制代码// 从小到大 升序
let arr = [3, 1, 2, 4];
arr.sort((a,b) => a-b);
// arr现在为[1, 2, 3, 4]

// 从大到小 降序
arr.sort((a,b) => b-a)
// arr现在为[4, 3, 2, 1]

2.reverse()

反转数组元素的顺序

js复制代码let arr = [1, 2, 3];
arr.reverse();
// arr现在为[3, 2, 1]

3.concat()

合并两个或多个数组

js复制代码let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
// 合并一个
let binArr1 = arr1.concat(arr2);
// binArr1为[1, 2, 3, 4]

// 合并多个
let binArr2 = arr1.concat(arr2, arr3);
// binArr2为[1, 2, 3, 4, 5, 6]

4.join()

将数组元素拼接成一个字符串

js复制代码let arr = ['HuaWei', 'XiaoMi', 'Vivo'];
let joined = arr.join(', ');
// joined为'HuaWei, XiaoMi, Vivo'

5.slice()

创建一个新数组，其中包含原数组的一部分元素，而不影响原始数组

js复制代码let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// 提取索引2到索引5（不包括5）的元素
let arr1 = arr.slice(2,5);
// arr1为[2,3,4]

// 提取索引2(包括索引2)到数组末尾的元素
let arr2 = arr.slice(2);
// arr2为[2, 3, 4, 5, 6, 7, 8];

// 原数组不受影响
console.log(arr)
// arr仍为[0, 1, 2, 3, 4, 5, 6, 7, 8]

