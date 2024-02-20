<template>
  <div>
    <p>{{ state.count }}</p>
    <p>{{ num }}</p>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
// import { reactive } from './reactivity/reactive.js'
import { computed, watch, effect, watchEffect, onBeforeMount, reactive } from 'vue'

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

effect(
  () => {   // 类似生命周期一开始就执行  第二个参数为lazy,当值为true时，不会立即执行
  console.log('hello world',state.count);
  }, 
  { 
    lazy: false,
    scheduler:() => {  // 当调度函数生效的时候 副作用函数就不再触发
      console.log('调度器中的任务执行了');
    }
  }
)

// watch(() => state.count, () => {
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   }
// })

onBeforeMount(() => {
  console.log('111');
})

// watchEffect(
//   () => {
//     console.log('watchEffect', state.count);
//   },
//   {
//     flush: 'post',  //  使侦听器延迟到组件渲染完成之后再执行
//     onTrack() {   // 调度函数
//       console.log('onTrack 会在count收集依赖的环节被调用');
//     },
//     onTrigger() { // 调度函数
//       console.log('onTrigger 会在count依赖触发的环节被调用');
//     }
//   },

// )

</script>

<style lang="less" scoped></style>