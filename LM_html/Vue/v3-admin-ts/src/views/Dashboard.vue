<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted } from 'vue'
import { eventBus } from '../store/EventBus';



const message = ref()

onMounted(()=>{
    eventBus.on('unreadLen', (data) => {
    message.value = data;
    });
})
</script>

<style lang="scss" scoped>

</style>