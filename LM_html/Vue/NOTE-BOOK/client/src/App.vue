<template>
  <div>
    <Transition name="move">
      <router-view></router-view>
    </Transition>
    <!-- 上面这种会报警告，下面这种不会,但是下面这种在平滑效果时会消失 -->
    <!-- <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.move-enter-active,.move-leave-active{
  // 设置页面跳转动画： ease-out 淡出
  transition: all 0.5s ease-out;
}

// move-enter-from 设置页面从透明度多少开始 也就是下面我们设置的opacity 到不透明（这个是默认的）
// move-leave-to 设置页面从哪个位置开始 也就是我们设置的transform: translateX(10px); 到页面的为止（这个也是默认的）
// 总的来说就是给页面设置了一个
.move-enter-from,.move-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
</style>