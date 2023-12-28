<template>
  <li class="todo" :class="{ completed: todo.done}">
    <div class="view">
      <label  v-text="todo.text"></label>
    </div>
  </li>
</template>

<script setup>
defineProps({
  todo: {
    type:Object,
  }
})
</script>

<style lang="scss" scoped>

</style>