- vue 脚手架
    - npm init vite 
      <!-- 运行 npm init vite 会启动一个交互式的过程， -->
    1. 初始化vue项目，下载了项目模版 
    2. vite 脚手架 特点：快
      <!-- Vite 是一个现代化的前端构建工具，用于快速构建现代 Web 应用。它的特点之一是快速的开发服务器，
      利用 ES 模块的特性，以及对 Vue、React、和其他框架的支持。Vite 通过提前构建（pre-bundling）的方式实现了快速的开发环境和生产构建。 -->
    - cd rate 是我们的项目目录
      /src 开发目录

    - npm i 安装项目需要的依赖
      vue 3.0+
      vite
    
    - npm run dev  
      <!-- npm run dev 会执行 webpack-dev-server --mode development 命令。这通常用于启动一个开发服务器，以便在开发过程中实时预览你的应用程序。--mode development 是告诉 webpack 使用开发模式的选项。

      npm run build 会执行 webpack --mode production 命令。这通常用于构建生产环境下的应用程序，以便优化和最小化代码。--mode production 是告诉 webpack 使用生产模式的选项。

      npm run start 会执行 node server.js 命令。这可能用于启动一个 Node.js 服务器。 -->

    - npm run build 
    <!-- 当你运行 npm run build 时，它会触发 webpack 以生产模式构建项目，
    生成适合部署到生产环境的文件。这些文件通常包括优化过的 JavaScript、CSS、图像等资源。
    构建后的文件通常会存放在一个名为 dist 或 build 的目录中 -->


    - createApp(App).mount('#app')
    <!-- createApp(App)： 这部分使用 createApp 方法创建了一个 Vue 应用程序实例。createApp 是 Vue 3 提供的全新方法，
    用于创建一个应用实例。App 参数是你的应用的根组件，即应用的主要组件。在这里，App 是一个变量，通常是导入的根组件对象。

    .mount('#app')： 这部分使用 mount 方法将创建的 Vue 应用实例挂载到 HTML 元素上。#app 是一个选择器，
    它表示应用将被挂载到具有 id="app" 的 HTML 元素上。 -->


    # Vue项目

    - 把页面按组件划分 
        每个组件都是vue文件
        - html 结构
        - script js
        - style css


  - 组件化思想
      component
      普通开发的开发单元是html 标签 太低级了  没有复用性
      而vue 提供了组件的概念  组件天生可以复用
      组件是一堆html，css，js的集合，完成某个展示和功能


  - DOM 树 ->  组件树
      这个组件做过 ，可以不用写
      .vue的组件思想 可以分工干活


