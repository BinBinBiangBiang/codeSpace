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

export default {
  data() {
    return {};
  },
  mounted() {
    // 订阅自定义事件，更新数据
    eventBus.$on('submitMessage', this.updateList);
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    }
  },
  methods: {
    updateList(message) {
      // 在这里可以对接收到的数据进行处理
      this.$store.commit('listsAdd', message);
    }
  },
  beforeDestroy() {
    // 在组件销毁前取消订阅，防止内存泄漏
    eventBus.$off('submitMessage', this.updateList);
  }
};
</script>

<style lang="less" scoped></style>
