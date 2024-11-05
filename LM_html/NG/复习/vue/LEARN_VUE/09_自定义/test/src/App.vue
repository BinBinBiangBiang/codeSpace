<template>
  <div>
    <Son ref="h1Ref"/>
    <h1>{{ h1Ref.num }}</h1>
  </div>
</template>

<script setup>
import Son from './components/son.vue';
import {ref,onMounted} from 'vue'

const h1Ref = ref(null)

onMounted(() => {
  console.log(h1Ref.value)
})
</script>

<style lang="less" scoped>

</style>