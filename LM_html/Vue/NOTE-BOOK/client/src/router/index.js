import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   redirect:{name:'login'},
  //   meta:{
  //     title:'登录'
  //   }
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      title:'注册'
    }
  },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: () => import('../views/NoteClass.vue'),
    meta:{
      title:'笔记分类'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 开启路由守卫
const whitePath = ['/login', '/register'] 
router.beforeEach((to,from,next) =>{
  // console.log(to ,from);
  document.title = to.meta.title;
  if(!whitePath.includes(to.path)){
    if(!sessionStorage.getItem('userInfo')){ // 没登录
      router.push('/login')
      return
    }else{
      next();
      return;
    }
  }
  next(); // next() 放行
})

export default router