<template>
  <div>
    用户，{{user}}
  </div>
</template>

<script setup>
// 使用了 Vue 3 中的 Composition API 中的 defineProps 函数。这个函数是用于在 setup 函数中定义接收的 props 的工具
// 从 Vue 模块中导入 defineProps 函数。这个函数是 Vue 3 Composition API 中的一个工具函数。
  import { defineProps } from 'vue';
  //使用 defineProps 函数定义接收的 props。在方括号中列出了组件要接收的 props 名称，这里只有一个叫做 user 的 prop。
  defineProps(['user'])
</script>

<style scoped>

</style>