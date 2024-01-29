<template>
  <div>
    <component :is="component" ></component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from '../myRouter/index.js'


const router = useRouter()   // 在当前组件注入了router

console.log(router);

const component = computed(() =>{
  // 如果当前的url是'/' , 就返回Home.vue
  const route = router.routes.find((route) =>{
    return route.path === router.current.value
  })
  return route ? route.component :null
})

</script>

<style lang="css" scoped>

</style>