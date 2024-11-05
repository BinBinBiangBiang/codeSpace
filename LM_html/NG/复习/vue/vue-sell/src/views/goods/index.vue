<template>
  <div class="goods">
    <div class="goods-content">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li class="menu-item" v-for="(item, index) in goods" :class="{ 'current': currentIndex === index }" :key="index"
            @click="selectMenu(index)">
            <span>
              <SupportIcon size="3" :type="item.type" v-if="item.type >= 0" />
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li class="food-list">
            <h1 class="title">热销榜</h1>
            <ul>
              <li class="food-item">
                <div class="pic">
                  <img
                    src="http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114"
                    alt="">
                </div>
                <div class="content">
                  <h2 class="name">梅菜扣肉</h2>
                  <p class="desc">咸粥</p>
                  <div class="extra">
                    <span class="count">月售1000份</span>
                    <span>好评10%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥10</span>
                    <span class="old">￥18</span>
                  </div>
                  <!-- + -->
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <div class="cart-wrapper">购物车</div>
  </div>
</template>

<script>
import { getGoods } from '@/api'
import SupportIcon from '@/components/support-icon/Support-icon.vue'
import BScroll from '@better-scroll/core'

export default {
  components: {
    SupportIcon
  },
  data() {
    return {
      goods: [],
      currentIndex: 0,
    }
  },
  created() {
    getGoods().then(res => {
      console.log(res);
      this.goods = res;
      // this.betterScroll();
      this.$nextTick(() => { // 写在$nextTick里面的回调函数会在页面加载完毕后才执行，这个是vue提供的方法 所有我们可以直接通过this访问到betterScroll()
        this.betterScroll();
      })
    })
  },
  methods: {
    betterScroll() {
      // 获取到menu-wrapper的dom结构
      new BScroll(this.$refs.menuWrapper, { // 不配置第二个参数的话 滑动区域点击事件就不生效了
        click: true,
      })
    },
    selectMenu(i) {
      this.currentIndex = i;
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/common/style/variable.less';

.goods {
  position: absolute;
  width: 100%;
  bottom: 46px;
  top: 177px;
  overflow: hidden;

  &-content {
    display: flex;
    height: 100%;

    .menu-wrapper {
      flex: 0 0 80px;
      background: @color-background-ssss;

      .menu-item {
        padding: 0 14px;
        font-size: @fontsize-small;
        height: 54px;
        display: flex;
        justify-content: center;
        align-items: center;

        &.current {
          background: #fff;
          font-weight: 700;
        }
      }
    }

    .foods-wrapper {
      flex: 1;
    }
  }

  .cart-wrapper {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    background: #aaa;
  }
}</style>