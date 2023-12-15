import http from '@/utils/http';
// 模块，前后端 交流 数据模块封装
// localhost:3000/bannaer // 轮播图 axios

// 业务函数 

// 负责获得轮播图
export async function getBanner(){
  // get 统一 http 
  const {banners} = await http.get('/banner',{type:1})
  return banners
}

// 负责搜索的
export async function getSearchSuggest(keywords){
  const {result} = await http.get('/search',{keywords})
  return result
}