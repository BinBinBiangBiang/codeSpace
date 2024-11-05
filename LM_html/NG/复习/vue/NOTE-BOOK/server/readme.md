# server
1. navicat 连接 MySQL
2. 创建一个 名为 noteBook 的库
3. 在noteBook 上右键导入sql文件（运行SQL文件）

4. 配置了router接口   > 文件夹 routes
5. 创建了MySQL的配置文件(通常创建在config文件下的index.js) > 文件夹config
6. 做mysql连接  > 文件夹controlles   
7. 在node上安装mysql库，此库非彼库，是用来连接mysql的 建议安装mysql2 不然可能报错
```bash
npm i mysql2
```
8. 封装了登录 sql函数



# 跨域
- 浏览器的同源策略
https://127.0.0.1:3000/login

https : 协议
127.0.0.1 : 服务器的ip地址(域名)
3000 : 服务器的端口号

以上三者全部相同，才算是同源

1. cors 跨域资源共享
- npm i  koa2-cors
安装解决跨域问题的插件

//-------------------------------------------------------------------------------------
// 自己拓展的笔记
# 后端项目开发流程

1. npm init -y
2. npm i koa 
- koa是什么？
    koa是一个基于nodejs的web开发框架，它可以让你快速的搭建一个web服务。

3. 创建一个app.js,该文件是入口文件，在该文件中，我们需要引入koa，并创建一个app实例，然后调用listen方法，监听端口号3000。
```javascript
const Koa = require('koa');
const app = new Koa();

app.listen(3000);
```
4. 我们在app.js中定义一个路由规则，当访问/hello时，返回hello world

Koa 天生不能处理



