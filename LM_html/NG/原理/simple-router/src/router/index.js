// import { createRouter,createWebHistory } from 'vue-router'
import { createRouter,createWebHashHistory} from './myRouter/index.js'
import Home from '../views/Home.vue'
import About from  '../views/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router

