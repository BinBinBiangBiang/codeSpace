# 页面生命周期
uniapp 提供了 页面生命周期，比如上拉加载，下拉刷新，页面渲染完成。。。 钩子函数

# 应用生命周期
整个app应用的状态变化，只能在App.vue 里面使用

# 全局变量
1. Vue.prototype.name = '测试名称' （options API）
2. 在App.vue中设置
```javascript
globalData:{
	name:'全局的名称'
}
```


<!-- 路由跳转,不用引入,uniapp内封装好了 -->