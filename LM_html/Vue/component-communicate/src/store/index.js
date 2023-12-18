import { createStore } from 'vuex'

const store = createStore({
  // 仓库里面的数据源，所有页面公有的
  // 但其他页面不能改变这里的数据
  state(){
    return {
      lists:['html','css','js']
    }
  },
  // 只能通过自己的写的方法进行修改，外部想办法拿到这个方法
  mutations:{ // methods
    listsAdd(state,val){
      if(!val) return  
      state.lists.push(val);
    } 
  }
})

export default store