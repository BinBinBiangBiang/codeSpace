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
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  watch:{
    msg(newVal){
      this.lists.push(newVal)
    }
  },
  data() {
    return {
      lists: ['html'],
      message: ''
    }
  }
}
</script>

<style lang="less" scoped></style>