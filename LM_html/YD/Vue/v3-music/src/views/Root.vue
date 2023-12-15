

<template>
  <!-- <div class="w-56 h-56 bg-green-500"></div> -->
  <!-- w-screen/h-screen  会占据整个屏幕的宽度/高度 flex 弹性布局的启动 -->
  <!-- 原子性样式 用与开发很方便 -->
  <div class="w-screen h-screen flex item-strentch overflow-hidden">
    <div class="w-56 h-screen flex-shrink-0">
      <Menu />
    </div>
    <div class="flex-1 flex flex-col">
      <div class="h-14">
        <Header />
      </div>
      <div class="flex-1 overflow-hidden">
        <!-- <ElButton>按钮</ElButton> -->
        <ElScrollbar>
          <div class="container max-auto">
            <router-view />
          </div>
        </ElScrollbar>
      </div>
    </div>
  </div>
</template>

<script setup>
  // 下面这样写不算高级
// import Menu from './components/layout/menu/Menu.vue'
// import { onMounted } from 'vue'
import Menu from '@/components/layout/menu/Menu.vue'
import Header from '@/components/layout/header/Header.vue'
// import Discover from '@/views/discover/Discover.vue'
// import { getBanner } from '@/utils/api.js'

// 请求发送的时机在何时？
// onMounted(async() => {
//   const  data = await getBanner();
//   console.log(data);
// })
</script>

<style scoped>

</style>