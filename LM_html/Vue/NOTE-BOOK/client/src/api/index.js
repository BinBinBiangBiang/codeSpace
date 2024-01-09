import axios from 'axios'
import { showFailToast,showSuccessToast } from 'vant';

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/json'  // 告诉后端你传的文件是什么格式

// 请求拦截

// 响应拦截
axios.interceptors.response.use(res => {
  if (res.status !== 200) {  // 程序报错
    showFailToast('服务端异常');
  } else {
    if (res.data.code !== '8000') {  // 逻辑性错误
      showFailToast(res.data.msg);
      return Promise.reject(res)
      // return res
    }else{
      // showSuccessToast(res.data.msg);
      return res.data
    }
  }
})

export default axios