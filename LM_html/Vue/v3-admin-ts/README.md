- 何为TypeScript？
   JavaScript 的超集

- 如何使用ts？
   - 像js一样来写
   - 加点啥？
      - 类型检测
         在什么地方加类型检测？
            => 你在乎的地方，也就是容易出错的地方（数据）


- 为什么element-plus 图标引入要搞的这么复杂呢？
   - 按需加载
      图标库有点大，如果用户使用别的图标，省空间
   - 你可以有其他的选择
      你可以使用其他的图标库，比如element-ui，iconfont，阿里的iconfont，iconpark，iconfont.cn等等
   - 单独安装图标库
      app.component() 全局挂载一下  以后在我们的开发中，我们用到哪几个就挂载哪些

## ts
如何使用ts？
- 先写js就好，再做点加法 => 在你在乎的数据上加TS约束
在什么地方加？
- 最关心的数据中加约束
   哪些是你最关心的数据呢？
      - ref
      - reactive
      - props
      - store
      - 函数的参数

//---------------------------------------------------------------------
# Element-plus 字体图标的使用 

- 如何使用element-plus 字体图标？
   - 首先安装对应的图标库
   - 然后在main.ts中引入图标库
   - 然后在main.ts中注册图标库

1. 要使用element-plus的图标，必须安装对应的图标库
- npm i @element-plus/icons-vue

2. import * as语法用于将一个模块的所有导出内容作为一个命名空间对象导入。
在这种情况下，import * as ElementPlusIconsVue将@element-plus/icons-vue模块中的所有导出内容作为ElementPlusIconsVue对象导入。
这意味着在使用时，需要通过ElementPlusIconsVue对象来访问模块中的所有导出内容。
这种方式可以方便地将一个模块的所有导出内容组织在一个对象中，避免了可能的命名冲突。

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

3. 将ElementPlusIconsVue对象中的所有组件注册到app对象中。
for(const [key,component ]of Object.entries(ElementPlusIconsVue)){
  app.component(key,component)
}

//-----------------------------------------------------------------------------------------------------------------
- npm i -D unplugin-auto-import unplugin-vue-components

这个指令是用来在Node.js项目中使用npm（Node Package Manager）安装两个开发依赖包 unplugin-auto-import 和 unplugin-vue-components。

npm i 是 npm install 的简写，用于安装依赖包。
-D 表示将这两个包安装为开发依赖（devDependencies），这意味着它们只会在开发过程中使用，而不会包含在生产环境中。
unplugin-auto-import 是一个用于自动导入 JavaScript 模块的插件，它可以帮助简化代码中的模块导入语句。
unplugin-vue-components 是一个用于自动导入 Vue 组件的插件，它可以帮助简化在 Vue 项目中的组件导入。
因此，这条指令的作用是在当前的 Node.js 项目中安装这两个开发依赖包，以便在开发过程中使用它们。