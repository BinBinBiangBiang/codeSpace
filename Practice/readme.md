1. 撤回git add .
- git reset  // 需要注意的是，这种方法只是取消了add操作，文件的修改并没有被删除。如果需要完全撤销修改，还需要使用git checkout命令。
- 然后 git checkout


# JS vs TS
JS（JavaScript）是一种动态脚本语言，主要用于在网页上实现交互功能。它是一种解释性语言，不需要编译，可以直接在浏览器中执行。

TS（TypeScript）是一种由微软开发的开源编程语言，它是JavaScript的超集，意味着所有的JavaScript代码都可以在TypeScript中运行。TS添加了静态类型检查和其他一些新特性，使得代码更加可靠和易于维护。

因此，主要的区别在于类型系统。TS具有强大的静态类型检查，可以在编译时发现许多常见的错误，而JS则是动态类型语言，类型检查发生在运行时。 TS还可以编译成纯粹的JavaScript代码，因此可以与现有的JavaScript库和框架无缝集成。