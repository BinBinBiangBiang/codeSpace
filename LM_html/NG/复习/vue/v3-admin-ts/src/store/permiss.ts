// store 提供数据 , router 提供角色数据
import { defineStore } from 'pinia';
interface ObjectList{
    [key:string]:string[]
}


// 需要给我们提供不同角色的权限
export const usePermissStore = defineStore('permiss',() => {
  // 组件间会有数据需求，你当前用户的权限有哪些
  const keys = localStorage.getItem('ms_keys')
  return {
    key:keys?JSON.parse(keys):[],
    // 角色列表
    roleList:<ObjectList>{
      admin:['1','2','3','4'],
      user:['1'],  // user只能访问1，访问其他的报错403
      
    },
    setKeys(val){
      this.key = val
    }
  }
})