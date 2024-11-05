# JS 单线程


- 进程：CPU运行指令和保存上下文所需要的时间

- 线程：进程中的更小的单位描述了一段指令执行所需的时间

## 浏览器新开一个tab页面 就是新开一个进程
需要多个线程配合才能完成页面的展示
1. 渲染线程（GPU）
2. http请求线程
3. js引擎线程

渲染线程（GPU）和js引擎线程 是互斥的

# JS 单线程
- 以前将JS设置为单线程就是为了避免带来更多的内存占用，但是这样会导致速度变慢。  

优点：
  1. 节省内存
  2. 单线程没有锁的概念所以可以节省上下文切换的时间


# 异步
- 宏任务（macrotask）
script
setTimeout
setInterval
setImmediate
I/O
UI-rendering

- 微任务（microtask）
Promise的回调 => promise.then()
MutationObserver的回调
Process.nextTick()

# event-loop
1. 执行同步代码（这属于宏任务）
2. 当执行栈为空，查询是否有异步代码需要执行
3. 如果有异步，则执行微任务
4. 如果有需要，会渲染页面
5. 执行宏任务（这也叫下一轮的event-loop的开启）