import { get } from './axios.js';   //  这里{ get }之所以打括号是因为 get抛出来的这个函数定义为export  抛出来的是一个对象 需要解构才能用

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

export{
  getSeller,
  getGoods
}