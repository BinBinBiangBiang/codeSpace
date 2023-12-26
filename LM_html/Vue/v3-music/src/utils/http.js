import axios from 'axios'
// Axios 是一个基于 Promise 的现代化的 HTTP 客户端库，用于浏览器和 Node.js 环境

// Axios 相比fetch XHR 的优势  复用性、App而不是页面  进行统一管理
axios.defaults.baseURL = 'http://localhost:3000'
// 
axios.defaults.timeout = 10*1000;
//  图片上传
axios.defaults.maxBodyLength =5*1024*1024;

const http = {
  get(url,params = {}){
    return new Promise((resolve,reject) =>{
      // xhr , fetch
      // 请求的抽象
      axios
        .get(url,{params})
        .then((res)=>{
          resolve(res.data);
        })
        .catch((err)=>{
          reject(err.data);
        })
    })
  }
}

export default http;



