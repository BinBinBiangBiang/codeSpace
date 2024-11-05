<template>
  <div>
    <div class="head">
      <input type="text" name="" v-model="message">
      <button type="button" @click="submit">确定</button>
    </div>
  </div>
</template>

<script>
  // 导入 Vuex 中的 mapMutations 辅助函数
  import { mapMutations } from 'vuex'
  
  export default {
    // 数据部分
    data(){
      return {
        message: ''
      }
    },
    methods:{
      // 定义一个名为 submit 的方法
      submit(){
        // 调用 Vuex store 中的 listsAdd mutation 方法，将输入的数据添加到 Vuex store 中的 lists 状态中
        this.listsAdd(this.message);
        // 将输入框的值清空
        this.message = ''
      },
      // 使用 mapMutations 辅助函数，将 listsAdd mutation 映射到组件的 methods 中
      ...mapMutations(['listsAdd'])
    }
  }
</script>


<style lang="css" scoped></style>