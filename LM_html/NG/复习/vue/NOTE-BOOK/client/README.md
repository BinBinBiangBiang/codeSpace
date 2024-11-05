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



//-----------------------------------------------------------------------------------------------------
## 页面切换时变成平滑效果

<Transition name="move">
      <router-view></router-view>
</Transition>

样式：
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

//-----------------------------------------------------------------------------------------------------