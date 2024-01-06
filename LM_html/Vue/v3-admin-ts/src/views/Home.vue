<template>
  <div>
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import vHeader from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'
</script>

<style lang="less" scoped>

</style>  