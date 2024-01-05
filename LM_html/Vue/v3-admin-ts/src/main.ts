import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import { createPinia } from 'pinia'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
