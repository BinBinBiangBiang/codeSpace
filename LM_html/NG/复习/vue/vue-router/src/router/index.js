import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../views/homeChild/newest.vue'


const routes = [
  {
    path: '/',
    redirect: '/home'  // 这里的作用是打开网页就默认来到home下 永远不会去到根路径'/'下
  },
  {
    path: '/home', // 必须叫path
    component: Home,
    children: [
      {
        path : '/home',
        redirect:'/home/newest'    // 网页重定向 如果你来到了home 就默认来到newest
      },
      {
        path : 'newest',
        component: Newest
      },
      {
        path : 'recommend',
        component: () => import('../views/homeChild/recommend.vue')
      }
    ]
  },
  {
    path: '/about', // 必须叫path
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),  // 路由history模式，另一种为hash模式
  routes: routes   // 键的名字必须为routes 但值的名字可以随便 这里也叫routes是为了方便直接简写为 routes (键值名相同) 
})

export default router 