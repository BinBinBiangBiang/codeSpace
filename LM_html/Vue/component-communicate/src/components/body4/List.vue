<template>
  <div>
    <div class="body">
      <ul>
        <li v-for="(item, index) in lists" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // 取出公共数据源中的lists
  computed: mapState(['lists'])
}
</script>

<style lang="less" scoped></style>