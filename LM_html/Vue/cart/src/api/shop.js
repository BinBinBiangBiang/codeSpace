// api 中存放接口
// shop?
// 大型项目 以index.js 作为入口
// 每个模块的接口为一个文件 shop.js 为商城的接口

// vuex 读|写 读可以随便读 但是改不能随便修改


// 变量以下划线 '_' 开头是什么意思？  => 私有的  意味着它只能在当前作用域内访问，而不能被外部访问。
const _products = [
  { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2 },
  { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10 },
  { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, 'inventory': 5 }
]

export default {
  // 阅读后端接口文档，actions 要调用的方法
  getProducts(cb){  // cb => 回调函数callback
    // 利用setTimeout 模拟 axios 的请求 说明要花时间
    setTimeout(() => {
      cb(_products)
    }, 100)
  },
  buyProducts(products,cb,errorCb){
    setTimeout(()=>{
      // 
      (Math.random() > 0.5) ? cb() :errorCb()
    },100)
  }
  
}

