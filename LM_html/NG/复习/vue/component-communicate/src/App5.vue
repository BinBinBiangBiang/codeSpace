<template>
  <div>
    <Head />
    <List/>
    <div>{{ vueStore.state.name }}</div>
  </div>
</template>

<script>
import Head from '@/components/body5/Head.vue'
import List from '@/components/body5/List.vue'
import { useStore } from 'vuex'

let vueStore = useStore()

export default {
  components: {
    Head,
    List
  },
  data(){
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style lang="less"></style>
