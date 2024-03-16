# 数组上的一些方法

1. 增加元素 push unshift  splice concat 不影响原数组
2. 删除元素 pop shift splice slice不影响原数组,修改掉数组的
3. 改 reverse sort ,fill
4. 查 indexOf lastIndexOf 找不到元素返回-1,返回的下标并不会

includes
find遍历数组 ,返回第一个符合条件的元素

5. 遍历数组的方法

forEach map filter every some reduce

every要所有满足  ---> 联想到promise 的all方法,全部的promise对象都是fullfilled,才执行

- forEach 和 map 的区别
forEach  修改不了原数组,
return无法终止map的循环,
forEach中也没有break也没有continue


map  进行的过程中,会生成一个等长的原数组,每一次return的值为新数组的每一个元素,没有return的值为undefined


reduce((pre,item,i,arr)=>{
    return pre + item
},0)

返回值为pre的最终值,return 的值为返回的值,


6. 转换

转化为字符串,join()


对象的toString方法和数组的tostring方法不是同一个方法,对象的toString方法返回的是[object Object],数组的toString方法返回的是数组的字符串


# 字符串

1. 增加 concat  拼接两个字符串 padStart padEnd  前面和后面填充字符串 
2. 删除 substr  slice  subString

subString (start,end)切下标的范围是左闭右开
substr (start,num)切下标范围是左闭右闭,num为切割的数量

3. 改 replace (要修改的,修改之后的值)  
repeate(重复字符串的字数num) 
trim 只会去掉前后的空格  tirmLeft  trimRight  

toLocaleLowerCase()  toLowerCase() 
toLowerCase() toUpperCase()


4. 查 includes indexOf lastIndexOf s.charAt(index)  endsWith

5. 转化 charCodeAt 直接将字符转换为对应的unicode码
split(' '),去寻找到相应的字符,隔开,返回一个数组,如果是空格返回一个数组一个元素就是改数组

toString方法


# 3. == 和 === 的比较

# 4. 类型转化

# 5. 深浅拷贝
深浅拷贝,拷贝指的是讲一个对象中的元素复制到一个新的对象中,拷贝又分为浅拷贝和深拷贝
深拷贝会层层拷贝每一个属性,不受原对象修改值的影响

浅拷贝:Object.assign(),

数组解构,slice方法,concat方法

深拷贝:
在js中应该就这一个方法
JSON.parse(JSON.stringify(obj))
但是也有缺陷,无法被拷贝的 Symbol BigInt  function   undefined,以及对象属性循环引用成环

structuredClone()不能拷贝symbol,function

# 6.谈谈你对闭包的理解

=> 闭包不只有return内部函数才会产生闭包

- 是什么
  根据词法作用域的规则,函数的嵌套关系,内部函数一定能访问到它外部函数的变量，当内部函数对外部函数中的变量存在引用且
  被提到外部函数之外调用，即使外部函数执行完毕，它的执行上下文也无法完全销毁，而是会将内部函数引用的变量作为一个集合
  保留在调用栈中，该集合被称为闭包

  - 作用
    1. 定义私有变量
    2. 封装模块
    3. 延长变量的声生命周期

  - 缺点：
    1. 内存泄漏


# 7. 说一说原型
  - 是什么
    原型是一个对象，分为隐式原型和显示原型，隐式原型是对象上的__proto__属性，显示原型是函数
    上的 prototype 属性，当我们要访问一个对象的属性时，js引擎不仅会在对象上查找，还会查找对象的
    隐式原型，顺着隐式原型层层往上查找，直到找到null.对象的隐式原型等于创建该对象的构造函数的显示原型


    1. 函数的__proto__ == Function.prototype 箭头函数除外
    2. Object.create(null)

# 8. js中如何实现继承
-----------------------------------------------------------------------------------------------------------------
1. 原型链继承 
  缺点1 --- 多个实例之间公用了同一个原型，属性会相互影响
  缺点2 --- 子类无法给父类传参 局限性比较大

function Parent(){
  this.name = 'Tom'
}

function Child(){
  this.age = 18
}

实现 ： Child.prototype = new Parent()    // Child的原型等于Parent 但Parent一定要是一个对象 所以要new一下

-----------------------------------------------------------------------------------------------------------------
2. 构造函数继承
  缺点1 --- 无法继承到父类上的属性

function Parent(name){
  this.name = name
}

function Child(name){
  Parent.call(this,name)
  this.age = 18
}
-----------------------------------------------------------------------------------------------------------------

3. 组合继承(经典继承)
  - 相当与前两者加起来

  缺点 --- 父类被调用两次

function Parent(name){
  this.name = name
}

function Child(name){
  Parent.call(this,name)
  this.age = 18
}

Child.prototype = new Parent() 
-----------------------------------------------------------------------------------------------------------------
4. 原型式继承

let obj = {
  name:'Tom',
  age:18
}

let obj2 = Object.create(obj)

 缺点： 1. 多个对象共有了同一个原型，属性会相互影响
-----------------------------------------------------------------------------------------------------------------
5. 寄生组合继承法

function Parent(name){
  this.name = name
}

function Child(name){
  Parent.call(this,name)
  this.age = 18
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child


# 9. 说说你对this的理解
  - 是什么？
  this是js中的一个关键字，用于代表函数作用域的指向

  - 绑定规则：
  1. 默认绑定  -- 函数在哪个词法作用域中生效，this就指向哪个词法作用域,词法作用域要找到底
  2. 隐式绑定  -- 当函数被一个对象所拥有且调用，this指向该对象
  3. 隐式丢失  -- 多个对象链式调用函数，this指向最近的对象
  4. 显示绑定  -- call apply bind
  5. new绑定   -- this 指向实例对象

  - 箭头函数
  箭头函数没有this，写在箭头函数内的this会指向外层不是箭头函数的this
