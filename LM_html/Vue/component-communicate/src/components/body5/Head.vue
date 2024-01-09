<template>
  <div>
    <div class="head">
      <input type="text" name="" v-model="message">
      <button type="button" @click="submit">确定</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    submit() {
      // 发布自定义事件，传递数据
      eventBus.$emit('submitMessage', this.message);
      this.message = '';
    }
  }
};
</script>

<style lang="css" scoped></style>
