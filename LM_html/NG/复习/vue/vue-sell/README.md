# 项目开发流程
1. 创建全局的css文件 添加reset.css(在main.js中引入)

# 组件化
1. import 引入
2. components 注册
3. 使用


# 父子组件通讯
1. 父组件在子组件使用处绑定属性以传值
2. 子组件用props接受父组件传递过来的属性（props中的属性用法和data数据源一样）

# axios
1. 当请求跨域时，vueCli 允许我们配置一个代理用于规避跨域问题（只在开发环境中生效）

# 在App.vue中获取到了商家信息
1. 通过父向子传值的方式将数据传递给header组件进行展示






/--------------------------------------------------------------------------------------
安装axios
Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。

# 特性
从浏览器创建 XMLHttpRequests
从 node.js 创建 http 请求
支持 Promise API
拦截请求和响应
转换请求和响应数据
取消请求
超时处理
查询参数序列化支持嵌套项处理
自动将请求体序列化为：
JSON (application/json)
Multipart / FormData (multipart/form-data)
URL encoded form (application/x-www-form-urlencoded)
将 HTML Form 转换成 JSON 进行请求
自动转换JSON数据
获取浏览器和 node.js 的请求进度，并提供额外的信息（速度、剩余时间）
为 node.js 设置带宽限制
兼容符合规范的 FormData 和 Blob（包括 node.js）
客户端支持防御XSRF

npm i axios -S(简称 全称为--save) 
