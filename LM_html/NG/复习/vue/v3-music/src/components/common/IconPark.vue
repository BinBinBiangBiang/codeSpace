<template>
  <!-- 给项目带来图表  开源项目 -->
  <!-- 动态绑定属性的语法  举例：:is="icon"表示将组件或元素的is属性绑定到icon变量的值 -->
  <Component :is="icon" :theme="theme" :size="size" :spin="spin" :fill="fill" :strokeLinecap="strokeLinecap" 
  :strokeLinejoin="strokeLinejoin" :strokeWidth="strokeWidth">

  <!-- <Component>是一个动态组件，它的is属性被绑定到icon变量的值，这意味着根据icon变量的值来动态渲染不同的组件。
    而其他的属性（theme，size，spin，fill，strokeLinecap，strokeLinejoin，strokeWidth）则是将对应的变量的值绑定到组件的属性上，
    从而可以实现动态地控制组件的展示。 -->

  </Component>
</template>

<script setup >
//   定义父组件传过来的参数
// vue 组件的一件声明方式，本来是有各种图标, Component + is="icon"


// import { defineProps } from 'vue';    // 这里不引入defineProps也可以  因为使用次数太多  vue中默认将defineProps放在全局中 所以不引入也能用
// 子组件使用父组件传过来的props 先声明才能用 这就为了安全
defineProps(['icon', 'theme', 'size', 'spin', 'fill', 'strokeLinecap', 'strokeLinejoin', 'strokeWidth'])

// defineProps函数用于声明组件的props，并且可以在组件中使用它来定义props的类型和默认值
</script>

<style  scoped></style>