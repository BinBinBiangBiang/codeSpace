import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'
import { inject,ref } from 'vue'

const ROUTE_KEY = '_router_'

function useRouter(){
  return inject(ROUTE_KEY)
}

function createRouter(options){
  return new Router(options)
}

function createWebHistory(){

}

function createWebHashHistory(){
  function bindEvents(fn){
    window.addEventListener('hashchange',fn)
  }
  return {
    bindEvents,
    url:window.location.hash.slice(1) || '/'
  }
}

class Router {
  constructor(options){
    this.history = options.history
    this.routes = options.routes
    this.current = ref(this.history.url)

    this.history.bindEvents(() =>{
      this.current.value = window.location.hash.slice(1)
    })
  }
  install(app){
    console.log(app);
    app.provide(ROUTE_KEY,this)
    // 注册全局组件router-link
    app.component('router-link',RouterLink)
    // 注册全局组件router-view
    app.component('router-view',RouterView)
  }
}

export{
  createRouter,
  createWebHashHistory,
  useRouter
}