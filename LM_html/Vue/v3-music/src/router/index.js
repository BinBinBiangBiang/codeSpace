// 完成路由的配置  url 和 component的配置
import { createRouter, createWebHashHistory } from 'vue-router';

// createWebHashHistory 在PC端的兼容性更好 现在基本没什么区别了 在一些老式机中可以会体现
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      // App.vue 是用来挂载的 不是用来写具体的
      component: () => import('@/views/Root.vue'),
      redirect:{name: 'discover'},
      children: [
        {
          path: 'discover',
          name: 'discover',
          component :() => import('@/views/discover/Discover.vue')
        }
      ]
    }
  ]
})
export default router