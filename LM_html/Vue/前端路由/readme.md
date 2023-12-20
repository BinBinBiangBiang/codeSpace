# 路由
服务端用来描述路径的

前端借鉴路由的称呼，来描述，url 和 组件 的映射关系

# 实现路由需要解决的问题
1. 如何修改URL还不引起页面的刷新
- 在要转到的地址前面加一个# 就可以解决上述问题
例如： https://www.baidu.com/ 转到 https://www.baidu.com/#/aaa

2. 如何知道url变化了呢

      // 当页面的哈希值发生变化时触发名为onHashChange的函数
      window.addEventListener('DOMContentLoaded',onHashChange)

      const routes = [
        {
          path: '#/home',
          component: '首页页面内容'
        },
        {
          path: '#/about',
          component: 'about page'
        }
      ]

      function onHashChange() {
        // location 在js中就是专门用来代表Window窗口的url的
        console.log(location.hash);
        routes.forEach((item, index) => {
          if (item.path === location.hash) {
            routerview.innerHTML = item.component
          }
        })
      }


# hash
在浏览器url后拼接 #xxxx 会被认为是hash值，而hash值的变更，是不会引起浏览器页面的刷新的


- 修改url的方式
1. a标签
2. 浏览器前进后退
3. window.location

以上方式导致url变更都会触发 hashchange 事件

# history 
history 提供了一个pushState 方法 ，可以修改url且不引起页面刷新，
提供了popState 事件 ，仅当浏览器前进后退时生效