<template>
  <div>
    <!-- parent-component="item" 父组件给子组件传值 这里传的是字符串，无需要v-bind绑定-->
    <ItemContainer parent-component="item"/> 
  </div>
</template>

<script>
import ItemContainer from '@/components/ItemContainer.vue'
import { mapActions } from 'vuex'
  export default {
    components:{
      ItemContainer,
    },
    created(){
      this.getQuestionListAction()
    },
    methods:{
      ...mapActions(['getQuestionListAction'])
    }
  }
</script>

<style lang="less" scoped>

</style>