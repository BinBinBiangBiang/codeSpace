# map + parseInt 经典题

- 我在解决这道题的时候去看了mdn文档
    Map callback 的返回值是由callback的每一项组成的一个新数组
    callback 在执行的时候会接受到 1.item（当前项）  2.index 下标  3.array 数组本身（可省略不写） （item，index,[...]） 

    parseInt 就是当前的callback item， 可选的参数radix？进制表达


    index默认为 10进制
    index为0的话  无效使用0进制   => 所以（1,0） => 1
    index为1的话  item为2  一进制中找不到2  => 所以（2,1） => NaN
    index为2的话  item为3  二进制中找不到3  => 所以(3,2) => NaN 