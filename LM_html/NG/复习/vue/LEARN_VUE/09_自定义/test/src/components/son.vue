<template>
  <div>
      <div>我是son组件</div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const num = ref(1);
// const num = 1

// const sum = ref()

setTimeout(() => {
  num.value = 2
}, 1000)

defineExpose({
  num,
})
</script>

<style lang="less" scoped>

</style>