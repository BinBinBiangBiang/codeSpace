<template>
  <div>
    <p>{{ state.count }}</p>
    <p>{{ num }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { reactive } from './reactivity/reactive.js'
import { computed, watch, effect } from 'vue'

const state = reactive({
  count: 1,
  msg: 2
})


const num = computed(() => {
  return state.count * 10
})
const state1 = reactive({
  num: 1,
})

const add = () => {
  state.count++
}

effect(() => {   // 类似生命周期一开始就执行  第二个参数为lazy,当值为true时，不会立即执行
  console.log('hello world');
}, { lazy: false })

watch(() => state.count, () => {
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
})

</script>

<style lang="less" scoped></style>