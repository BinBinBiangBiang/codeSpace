import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/common/style/reset.css' 
// import '@/common/style/variable.less'  (可在用的到的页面引入该文件 ，并不是每个文件都需要引入)

createApp(App).use(router).mount('#app')
