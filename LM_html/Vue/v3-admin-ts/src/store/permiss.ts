// store 提供数据 , router 提供角色数据
import { defineStore } from 'pinia';
interface ObjectList{
    [key:string]:string[]
}


// 需要给我们提供不同角色的权限
export const usePermissStore = defineStore('permiss',() => {
  return {
    // 角色列表
    roleList:<ObjectList>{
      admin:['1','2','3','4'],
      user:['1'],  // user只能访问1，访问其他的报错403
      
    }
  }
})