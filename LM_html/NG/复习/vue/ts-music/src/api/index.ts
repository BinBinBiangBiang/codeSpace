// // 没有使用,也会警告
import type { Banner} from '../models/banner';
import type { Personalized } from '../models/personalized.ts';
import http from './http.ts'

// // ts 有完整的编译阶段  ts -> js ->
// // useBanner 用来做什么？ => 后端api 业务代码
export async function useBanner(){
  // 前端也有数据校验了，后端给我的数据我得验证，并不是所有数据都接收，要为用户负责  => ts 接口
  // http.get<> 泛型 返回值的类型是 Banner 数组
  const { banners } = await http.get<{banners:Banner[]}>('/banner',{type:1});
  return banners
}

// 看接口文档  亮点  JSDOC 生成 后端写给前端看的
export async function usePersonalized(){
  // 前端也有数据校验了，后端给我的数据我得验证，并不是所有数据都接收，要为用户负责  => ts 接口
  // http.get<> 泛型 返回值的类型是 Banner 数组
  const { result } = await http.get<{result:Personalized[]}>('/personalized',{type:1});
  return result
}

