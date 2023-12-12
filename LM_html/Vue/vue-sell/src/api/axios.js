import axios from 'axios'

const baseUrl = ''

export function get(url){  // export 直接抛出这个函数体  可以在其他文件内引入
  return function(params = {}){  // params 为前端向后端传的参数
    return axios.get(baseUrl + url,{
      params: params   // 允许向后端传递的参数
    }).then(res =>{
      const { errno , data } = res.data;
      if(errno === 0 ){  // 代表没有错误
        return data;
      }
    })
  }
}

// export default get


// let resFn = get('/seller')
// resFn().then(data => {
  
// })