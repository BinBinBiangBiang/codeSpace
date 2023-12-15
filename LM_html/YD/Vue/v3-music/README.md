# vue 网易云音乐

- 界面
    npm init vite 开发脚手架
- 后台
    netsea
    :3000
- 前后端分离的全栈开发

- 做之前先给npm换源（我这里已经换好了 以后不用换了）
npm config set registry https://registry.npmmirror.com

- tailwindcss  可以提升60%以上的css开发  => 原子化css开发
    -  npm i -D tailwindcss postcss autoprefixer  后面两张这里不讲 先用（这几个工具可以使css写的更快）
    上述指令 npm i -D 是安装在开发阶段所需要的工具  安装完后可以在package.json文件中的devDependencies中可以找到

    - npx tailwindcss init -p  
        npx 执行安装或者未安装的包
        GPT解释：这个命令的含义是使用npx执行tailwindcss命令行工具，初始化一个新的tailwindcss项目，并生成一个JavaScript格式的配置文件（tailwind.config.js）。

    - tailwind.css
      使用

    - 在上述生成的配置文件的content中配置./src/**/*.{vue,js,ts,jsx,tsx}  使得src下的所有{}内这些后缀文件都支持tailwindcss


- 切页面
- vue组件化思维
    - 根组件 App.vue
    - layout 组件
      - Menu
      - Header

- vite.config.js 是 vite 工程化的配置文件
    - alias 短路径
        @ -> ./src 回城

- 企业级vue开发框架 element-plus PC 版
    里面有好多组件可以拿来就用
    Vue 是渐进式的MVVM 开发框架  解决的是一个开发模式
    element-plus 是一个组件库 提供一系列的UI组件  可以找到我们想要得组件

- 给vite写了一段是vite中的组件自动引入的代码 如下
-  npm i -D unplugin-auto-import unplugin-vue-components
  解释：
  unplugin-auto-import用于自动导入JavaScript模块，而unplugin-vue-components用于自动导入Vue组件。


- 通用组件
    /components/common/
    不属于特定的组件，具有极高的复用性，在多个项目中可以重复复用

- 图标字体库
    - 要用到哪些图标
        import {} from '@icon-park/vue-next'

- 断点调试法
    当我们开始想写项目的时候，在GitHub上找一个开源项目 ，有看不懂的地方加上断点，一路跟下去，这是优秀的代码学习方法
    - 组件和数据分离
      我们封装组件是为了让组件"干净" ，里面就只有template 和 script 以及css 数据分离开来
    - 数据统一管理 
      - 分成api.js 和 http.js
        - api.js
        其中api.js封装的是业务接口，函数名字自带解释
        - http.js
          复用axios的底层封装


- 开发文档
    - 前端需要响应式数据
    - 数据请求要分离到utils.api.js中
    - 后端是个黑盒子
      理解以下几个事情：
        1. 基于http
            由axios提供  它封装了get方法
        2.  给后端看的开发文档
            /url GET/POST params {}
            response 什么？

    - 以后写自己的项目
        - Laf 做后端
            - 在Laf里面用相应的数据库
            - 写相应的云函数
            - 写一个开发文档 这就是亮点

- 有哪些种组件？
    - 父子组件
    - 页面组件
        用vue-router来配置
    - 通用组件
        components/common/

    - 框架UI组件
    - 业务组件 / components

- 路由的组件流程
    - router 配置文件夹
    - views/ 页面级别组件
    - 路由接管了应用
        会有好多页面的，view比components 级别高
    - App.vue router-view Root.vue
    - 其他各个页面，多级路由














/----------------------------------------------------------------------------------------------------
1.在package.json文件中 
devDependencies和dependencies有什么区别
  解释：
  dependencies：这个属性用来指定项目在运行时所依赖的模块，也就是生产环境下需要的模块。这些模块会被安装到生产环境中，用于项目的正常运行。

  devDependencies：这个属性用来指定项目在开发过程中所依赖的模块，也就是开发环境下需要的模块。这些模块通常是一些开发工具、测试框架或者编译工具，不会被包含在最终的生产环境中。

/----------------------------------------------------------------------------------------------------
2.
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

其中./src/**/*.{vue,js,ts,jsx,tsx}是为了使得src下的所有{}内这些后缀文件都支持tailwindcss