<template>
  <div class="header" @click="showDetail">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <!-- v-if:"seller.supports" 如果seller.supports 存在 下面这段动物结构 就加载 -->
        <div class="support" v-if="seller.supports">  
          <!--  -->
          <SupportIcon size="1" :type="seller.supports[0].type"/>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count" v-if="seller.supports">{{seller.supports.length}}个</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>

    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="iconfont icon-youjiantou"></i>
    </div>

    <div class="bg" v-if="seller.avatar" :style="{backgroundImage: `url(${seller.avatar})`}"></div>
    <header-detail v-show="detailShow" @hide="handle"/> 
  </div>

</template>

<script>
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import HeaderDetail from '@/components/header-detail/Header-detail.vue'
export default {
  components: {
    SupportIcon,
    HeaderDetail
  },
  props: {
    seller:{
      type: Object,
      default:() =>{}
    }
  },
  data(){
    return {
      detailShow: false,
    }
  },
  methods: {
    showDetail(){
      this.detailShow = true;
    },
    handle(val){
      this.detailShow = val;
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';
@import '@/common/style/mixin.less';

.header {
  position: relative;
  background: @color-background-ss;

  .content-wrapper {
    display: flex;
    padding: 24px 12px 18px 24px;
    position: relative;

    .avatar {
      width: 64px;
      height: 64px;

      img {
        width: 100%;
        border-radius: 2px;
      }
    }

    .content {
      flex: 1;
      margin-left: 16px;
      color: @color-white;

      .title {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .brand {
          width: 30px;
          height: 18px;
          // background-image: url('./brand@2x.png');
          .bg-image('brand');
          background-size: cover;
        }

        .name {
          margin-left: 6px;
          font-size: @fontsize-large;
          font-weight: bold;
        }
      }

      .description {
        font-size: @fontsize-small;
        margin-bottom: 8px;
      }

      .support {
        display: flex;
        align-items: center;

        .text {
          font-size: @fontsize-small-s;
          margin-left: 4px;
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 14px;
      padding: 0 8px;
      height: 24px;
      text-align: center;
      background: @color-background-sss;
      border-radius: 14px;
      display: flex;
      align-items: center;
      color: @color-white;
    }

    .count {
      font-size: @fontsize-small-s;
    }

    .iconfont {
      font-size: @fontsize-small-s;
      margin-left: 2px;

      .icon-youjiantou {
        font-size: @fontsize-medium;
      }
    }
  }

  .bulletin-wrapper {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 0 8px;
    background-color: @color-background-sss;
    color: @color-white;
  }

  .bulletin-title{
    // width: 22px;  由于该容器处于弹性盒子，且所在的盒子为span标签内 行内元素 不能设置宽高  
    flex: 0 0 22px;
    height: 12px;
    .bg-image('bulletin');
    background-size: 100% 100%;
  }

  .bulletin-text{
    flex:1;
    margin-left: 4px;
    font-size: @fontsize-small-s;
    white-space: nowrap; // 字体不换行，强制在同一行
    overflow: hidden;  // 超出则隐藏
    text-overflow: ellipsis; // 文本超出部分变为省略号
  }

  .icon-youjiantou{
    flex: 0 0  10px;
    font-size: @fontsize-small-s;
  }

  .bg{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: 100% 100%;
    z-index: -1;
    filter: blur(10px);
  }

}</style>