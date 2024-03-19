## Vue 源码之compile

## 从VUE源码中学习到了什么？
  代码之美 和 逻辑能力  封装、抽象、性能、严谨
  vue框架是可以写出来的，调用api可以完成业务代码，未来更对写出这样的高质量代码，甚至是开源项目有着憧憬

- 正则表达式
  [\s]

- 闭包的使用
  - 在vue源码中，学习到了闭包的使用案例
  - compile 模块 由template字符串转虚拟DOM时，我们先tokenizer
    在tokenizer函数内部会闭包一个push方法 用于收集token的关键信息
    比如标签 属性 文本等 
    - 好处：闭包带来的变量的私有化，不影响外界 可读性就很好 把复杂留给自己

- 模块化
  - reactivity 响应式
    effect track trigger WeakMap
    proxy
    baseHander

  - compile
      template -> ast -> VDOM
      ?
      parse 函数负责 template 字符串的解析
      tokenizer 分词 将template字符串转换成分词
      <div id="#app">

  每个模块内部的功能也分工的很明确

  模版字符串 ->  tokens数组  -> 虚拟DOM(AST walk递归) -> helper(位运算) -> 代码
