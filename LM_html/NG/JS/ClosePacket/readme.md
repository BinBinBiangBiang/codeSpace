# 调用栈
用来管理函数调用关系的一种数据结构

当一段函数执行完毕后，它的执行上下文就会出栈

# 作用域链
通过词法作用域来确定某作用域的 外层作用域，查找变量由内而外的这种链状关系，叫做作用域链。

# 闭包
(如何产生闭包，在一个函数声明另一个函数但不在函数内调用该函数，而是将这个函数return 到外面调用)
在js中，根据词法作用域的规则，内部函数总是可以访问其外部函数中声明的变量的，当内部函数被返回到
外部函数之外时。即使外部函数执行结束了，但是内部函数引用了外部函数的变量，那么这些变量依旧会被保存在内存中，
我们把这些变量的集合成为闭包

- 变量私有化

- 由于闭包会在栈中存留，造成内存泄漏（内存占用太多，不够用）