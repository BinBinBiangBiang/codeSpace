<template>
  <transition name="fade">
    <div class="header-detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <h1 class="name">店铺名称</h1>
        </div>
        <!-- @click.stop 阻止事件的冒泡，防止点击子容器同时点击到父容器了 -->
        <div class="detail-close" @click.stop="hideDetail">X</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    hideDetail(){  // 子父组件通讯
      this.$emit('hide',false)   // 向父组件抛出参数  this.$emit(事件名称,参数)   负责创建一个hide事件
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

  .header-detail{
    position: fixed;  // 相对于最大的容器定位（手机就为手机屏幕，电脑就为电脑屏幕）
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 999;
    background: @color-background-s;
    color: @color-white;
    backdrop-filter: blur(10px);  // 将这个容器盖住的部分虚化 ， 本身自己不虚化
    // 下面这四个类名 是之前我们使用transtion标签时，自动会加上这些类 这四个类名都是vue中的transtion封装好的 使用transtion标签就会有下面这个过程
    // 不过样式得自己设置
    // 下面这两个类名是在标签内的内容快要出现时会自动添加上的类名
    &.fade-enter-from,&.fade-leave-to{
      opacity: 0;
      background: @color-background;
    }
    // 下面两个类名是在出现的过程中会具有的类名
    &.fade-enter-active,&.fade-leave-active{
      transition: all 0.5s ease;
    }
    // .detail-wrapper{

    // }

    .detail-close{
      width: 30px;
      height: 30px;
      position: fixed;
      bottom: 30px;
      left: 50%;
      margin-left: -15px;
      text-align: center;
      line-height: 30px;
    }
  }
</style>