import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible' // 自动设置根字体大小
import router from './router/index.js'
import './assets/style/reset.css'
import { Form, Field, CellGroup,Icon,Uploader,ActionSheet  } from 'vant';

// 1. 引入你需要的组件
import { Button } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
app.use(Uploader)
app.use(Icon)
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(ActionSheet);
  
app.mount('#app')
