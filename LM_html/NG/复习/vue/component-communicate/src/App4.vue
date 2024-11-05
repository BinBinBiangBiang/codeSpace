<template>
  <div>
    <h4>任意两个组件通讯</h4>
    <Head />
    <List/>
  </div>
</template>

<script>
import Head from '@/components/body4/Head.vue'
import List from '@/components/body4/List.vue'
export default {
  components: {
    Head,
    List
  }
}
</script>

<style lang="less"></style>
