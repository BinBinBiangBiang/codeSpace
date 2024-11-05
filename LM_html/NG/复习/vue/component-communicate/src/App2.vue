<template>
  <div>
    <h4>子父组件通讯</h4>
    <Head @add="handle"/>
    <div class="body">
      <ul>
        <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Head from '@/components/body2/Head.vue'
export default {
  components: {
    Head
  },
  data() {
    return {
      lists: ['html'],
    }
  },
  methods:{
    handle(val){
      this.lists.push(val)
    }
  }
}
</script>

<style lang="less"></style>
