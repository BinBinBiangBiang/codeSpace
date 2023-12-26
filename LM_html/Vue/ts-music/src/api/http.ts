import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.timeout = 10 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
  (response) => response,
  function(error){
    return Promise.reject(error)
  }
)

interface Http {
  get<T>(url: string, params?: unknown): Promise<T>;
}

const http: Http = {
  get<T>(url: string, params?: unknown): Promise<T> {
    // 实际的http请求逻辑在这里实现
    // 这里只是一个示例，实际上应该使用真正的http请求库进行请求
    return new Promise((resolve, reject) => {
      // 这里可以使用真正的http请求库来发送请求
      // 示例中直接返回一个空的Promise，实际应该发送真正的http请求
      // resolve({ data: null }); // 这里只是一个示例，实际应该返回真实的数据
      axios
        .get(url,{params})
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data)
        })
    });
  }
};

export default http;
