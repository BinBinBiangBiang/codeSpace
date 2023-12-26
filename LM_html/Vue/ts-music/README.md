# typescript 让工资+10%

- 让前端像写Java一样写大型项目
   什么叫中大型项目呢？
    => 代码超过1w行
- vue/react + typescript

- es6
   什么东西是没有提供的？
      => 类型 JS是弱类型语言，类型定义不明确  容易出问题
      相比TS: let banners:[int] = [1,2,3]  上述是一个例子，就不存在上述问题。
- ts 是  js 的超集

- 给项目引入前端模型层
   - 路由已经不是后端的，前端也可以有
   - 前端也可以有自己的模型，MVVM

- UI 组件和数据管理的分离
   - store / components|views
   - pinia defineStore('todos' ,()=>{
      return {
         state,
         ...actions
      }
   }) useTodosStore
   - vue ref
   - 这里是唯一请求axios  接口的地方
   - app.use(createPinia())
   - 引入这个模块，执行useTodosStore 方法

const { todos } = toRefs(useTodosStore())
const { getTodos } = useTodosStore
   

- vue 项目开发设计模式
   - 越复杂的，只要是流程，其实很简单，只不过需要一本说明书
   - UI 组件 + 数据管理
   - 数据的流向
      backend -> models -> api -> store -> component
   - SPA
      router -> views -> components
   - APP = VUE + VueRoute + pinia + ts
   - 写UI组件
      ElementPlus(熟) + views + components(common|components) + Tailwindcss(熟) + 组件设计艺术

- App.vue 一个个组件慢慢搭
   <> defineProps 
   - 不要用 ts