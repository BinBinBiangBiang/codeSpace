// 后台系统
// 为什么用createWebHistory不用createWebHashHistory？
/**
 * 因为createWebHistory使用HTML5的history API来管理路由，这样可以在URL中使用更加美观和语义化的路径，
 * 而不是传统的带有#符号的路径。另外，使用createWebHistory还可以更好地支持浏览器的前进和后退功能，
 * 提供更加流畅的用户体验。相比之下，createWebHashHistory使用的是URL的hash部分来管理路由，
 * 这种方式在URL中会出现#符号，不够美观且不利于搜索引擎优化
 * 
 * 什么情况下用createWebHashHistory？
 * 如果你需要支持一些老旧浏览器，它们不支持HTML5的history API，那么createWebHashHistory是一个更好的选择，
 * 因为它使用URL的hash部分来管理路由，这种方式在老旧浏览器中也能正常工作。
 * 
 * 移动端就没上面这个问题，因为移动端都支持HTML5的history API
 */


import { createRouter, createWebHistory } from 'vue-router'
import { usePermissStore } from '../store/permiss';
import Home from '../views/Home.vue'  // 直接引入 只能用于首页，它一定会被编译，其他页面我不点击的话按理来说不需要先编译，这会拖慢性能


// const data = usePermissStore() // hooks
// console.log(data);
// 路由配置
// 设置数组 如果你是admin 你能拿到的数据就是[1,2,3] 如果你是user 你只能拿到[1]
const routes = [
  {
    path:'/',
    redirect:'/dashboard' // 重定向  背后是状态码 302
  },
  {
    path:'/home',
    name:'Home', // useRouter push
    component: Home, // Layout
    children: [
      {
        path:'/dashboard',
        name:'dashboard',
        meta:{
          title:'系统首页',   // 在路由守卫的时候去设置
          permiss:'1' // 为不同用户设置权限，哪些页面可以看吗？
        },
        component: () => import('../views/Dashboard.vue')
      },
      {
        path:'/table',
        name:'basetable',
        meta:{
          title:'表格',   // 在路由守卫的时候去设置
          permiss:'2' // 为不同用户设置权限，哪些页面可以看吗？
        },
        // 动态挂载路由，当你真需要跳转到这个页面时，它会进行异步挂载路由
        component: () => import('../views/Table.vue')
      }
    ]
  },
  {
    path:'/403',
    name:'403',
    meta:{
      title:'没有权限'
    },
    component: () => import('../views/403.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) =>{
  document.title = `${to.meta.title} | 后台管理系统`
  // 登录后的用户角色
  // const role = localStorage.getItem('ms_username')
  const role = 'user'
  const permiss = usePermissStore();
  console.log(permiss);
  if(!role && to.path !== '/login'){
    next('/login')
  }else if(to.meta.permiss && !permiss.roleList[role].includes(to.meta.permiss)){
    next('/403')
  }else{
    next()
  }
})

export default router