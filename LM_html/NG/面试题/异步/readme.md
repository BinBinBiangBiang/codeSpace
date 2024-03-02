# js为什么要有异步
因为js是单线程的编程语言，同一时间只能执行一个任务


# js为什么不设计成多线程
1. 节约内存
2. 没有锁，解锁的过程，节约上下文切换的时间

# 请你聊一聊异步的发展史
- 是什么
  js中从最早的异步处理方式到现在的最新的异步处理方式

- 发展史
处理异步解决方式：
1. 回调函数: 问题 -> 代码维护十分困难(回调地狱)
2. promise 
面试官可问：
  promise是如何将异步处理成同步的？
    - 1. promise 当中维护了一个状态，state，值为： pending、fulfilled、rejected
      目的是让promise的状态一经改变，无法再被修改，也就保证了 then 和 catch 不可能同时触发

    - 2. 内部的resolve函数会修改state为fulfilled，并触发then中的回调，
         reject函数会修改state为rejected

    - 3. then:
         1. 默认返回一个promise对象，状态为fulfilled
         2. 当then前面的promise状态为fulfilled时，then中的回调函数会执行，
            当then前面的promise状态为rejected，then中的第二个回调函数会执行
            当then前面的promise状态为pending时，then中的回调函数被缓存起来交给resolve或者reject执行

    - 4. all：
         1. 有一个为reject 也就是状态为rejected 就直接执行reject  全真则真，一假则假
    - 5. any：
         1. 有一个为resolve也就是状态为fulfilled就直接执行resolve 全假则假 一真则真


3. Generator
  1. 可以分段执行，可以暂停
  2. 可以检测每一个阶段的返回值
  3. 可以知道是否执行完毕
  4. 可以借助 Thunk 和 co 模块 处理异步，但是写法复杂，所以generator 函数的意思其实是为了打造async/await


4. async/await
  是什么？ 
    - 1. ES6 的一种新的处理异步代码的解决方案
    - 2. 缺点： 没有错误补货机制 -> 如何解决？ 自己在外面套一层try catch 
         优点： 代码简洁，可读性好
    - 3. async/await 是由 promise 和 generator 函数实现的，本质是在generator 函数
    的基础上通过递归的方式来自动执行一个又一个的next函数，当done为true时，执行完毕，结束递归，返回结果

    
