1. 移动端适配  npm add amfe-flexible
2. 常见标签样式初始化  
3. 用移动的的UI框架 -vant
4. axios 封装




//-----------------------------------------------------------------------------------------------------
import { onBeforeMount,onMounted,onUnmounted,onBeforeUnmount } from 'vue'

// console.log('编译完了',document.querySelector('.note-list'));

// onBeforeMount(()=>{
//   console.log('onBeforeMount',document.querySelector('.note-list'));
// });

// onMounted(()=>{
//   // 要拿动物结构只能在 挂载完之后才能拿到 也就是在onBeforeMount之后
//   console.log('onMounted',document.querySelector('.note-list'));
// });

// onUnmounted指的是页面销毁的时候触发
// onBeforeUnmount(()=>{
//   console.log('onBeforeUnmount',document.querySelector('.note-list'));
// });
// onUnmounted(()=>{
//   console.log('onUnmounted',document.querySelector('.note-list'));
// });