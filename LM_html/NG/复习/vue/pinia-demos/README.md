如何创建一个Vue 项目

第一步：npm init vite // 安装vite脚手架
第二步：打开项目 npm i 装依赖
第三步：npm i vue-router // 安装router 进行单页面开发
第四步：npm i pinia // 安装pinia 和vuex类似

# vue3 全家桶

- vue 响应式组件开发
  - components
    - common
    - 业务组件
  - views/pages
  - UI组件库 element-plus
- vue-router
  SPA 快 传统的http 需要 request + response，重新加载很慢
  页面不会白一下
  缺点：SEO 搜索引擎差一点，vue-router开发的应用搜索引擎搜索到的更少 例如csdn搜索的大于掘金

- vuex/pinia
    前端可以管理数据
    有什么好处？  
    - => 确保数据流的正确性
        数据在组件中叫什么？  状态
    - 将数据与组件剥离，UI组件更单纯

    注意：小项目没必要用vuex ，vuex类似财务，你公司就两个人，你决定需要财务吗？

- vue 项目 数据 从后端到页面显示  经过的所有流程和关键环节
    比如：todos
    先到 MySQL/mongondb db / todods table
    然后通过 sql语句
    到 java/node 的内存   MVC
    router 
    resquest
    http GET :3000/todos
    axios  http.js index.js getTodoList
    store actions -> mutations->state
    组件 views/ -> props 传给子组件(UI化)
    UI Component + State + Router = SPA
    UI Component + State = App

- pinia?
        - 更简单
            store/todo.js defineStore 返回值命名 useTodoStore
            import { useTodoStore } from './store/todo.js' 
            const { todos } = useTodoStore()
        - 更现代
            hooks编程 use 开头
        - 为什么要这样搞？
            将数据和UI组件分离开




Vue 项目创建及全家桶开发指南
创建 Vue 项目
使用 Vite 脚手架创建项目：

npm init vite
打开项目并安装依赖：

npm install
安装 Vue Router 进行单页面开发：


npm install vue-router
安装 Pinia，一个类似 Vuex 的状态管理库：


npm install pinia

Vue 3 全家桶
Vue 响应式组件开发
组件结构：
components
common: 存放通用组件
业务组件: 针对具体业务的组件
views/pages: 页面级组件
UI 组件库: 使用 Element Plus 进行 UI 组件开发
Vue-Router
单页面应用 (SPA) 优势：
快速响应，无需重新加载整个页面
避免页面白屏闪烁
缺点：对 SEO 不友好，搜索引擎可能收录较少
Vuex/Pinia
前端数据管理的好处：

确保数据流的正确性：
数据在组件中称为“状态”
将数据与组件剥离，使 UI 组件更单纯
适用场景：

小项目可能无需使用 Vuex/Pinia，类比为财务，公司规模小是否需要财务的决策。
Vue 项目数据流程
数据从后端到页面显示的流程 (以 todos 为例)：
数据存储在 MySQL/MongoDB 的 todos 表中
通过 SQL 语句获取数据
数据通过 Java/Node 处理，经过 MVC 架构
数据通过路由传递，通过 HTTP 请求获取
Axios 发送 HTTP 请求：GET /todos
Store Actions -> Mutations -> State
组件 views/ 通过 Props 传递给子组件（UI 化）
UI Component + State + Router = SPA
UI Component + State = App
Pinia 简介
为什么使用 Pinia？
更简单：
使用 defineStore 定义状态，返回值命名为 useTodoStore
引入：import { useTodoStore } from './store/todo.js'
使用：const { todos } = useTodoStore()
更现代：
Hooks 编程，使用 use 开头
为什么这样搞？
将数据和 UI 组件分离开，使代码更清晰和易于维护。






