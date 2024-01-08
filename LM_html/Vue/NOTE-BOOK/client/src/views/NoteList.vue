<template>
  <div class="note-list">
    <ul>
      <li>
        <div class="img">
          <img src="https://pic1.zhimg.com/v2-c74c6380773befb9f601dee60ac30c2f_r.jpg?source=1940ef5c" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭猪脚饭猪脚饭猪脚饭猪脚饭猪脚饭猪脚饭猪脚饭猪脚饭</p>
      </li>
      <li>
        <div class="img">
          <img src="https://pic1.zhimg.com/v2-c74c6380773befb9f601dee60ac30c2f_r.jpg?source=1940ef5c" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭</p>
      </li>
      <li>
        <div class="img">
          <img src="https://pic1.zhimg.com/v2-c74c6380773befb9f601dee60ac30c2f_r.jpg?source=1940ef5c" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭</p>
      </li>
      <li>
        <div class="img">
          <img src="https://pic1.zhimg.com/v2-c74c6380773befb9f601dee60ac30c2f_r.jpg?source=1940ef5c" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭</p>
      </li>
      <li>
        <div class="img">
          <img src="https://pic1.zhimg.com/v2-c74c6380773befb9f601dee60ac30c2f_r.jpg?source=1940ef5c" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭</p>
      </li>
      <li>
        <div class="img">
          <img src="https://pic1.zhimg.com/v2-c74c6380773befb9f601dee60ac30c2f_r.jpg?source=1940ef5c" alt="">
        </div>
        <p class="time">2023/05/20</p>
        <p class="title">今天去吃了猪脚饭</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
// 页面加载中发请求，拿到当前分类的数据




</script>

<style lang="less" scoped>
.note-list {
  width: 100%;
  padding: 1rem 0.667rem 0;
  box-sizing: border-box;
  ul {
    // display: flex;  // 第一种 弹性布局
    // flex-wrap: wrap;
    // justify-content: space-between;

    // overflow: auto;  // 第二种 浮动布局

    display: grid;  // 第三种 grid布局
    grid-template-columns: 1fr 1fr ; // 放几个1fr就是几列，几fr就表示占据几份
    grid-column-gap:50px;  // 列宽
    grid-row-gap: 30px;
    li {
      // width: 50%;
      // padding: 0 10px;
      // box-sizing: border-box;

      // float: left; // 第二种 浮动布局
      img {
        width: 100%;
        // width: 2rem;
        // height: 2rem;
        border-radius: 0.27rem;
      }
      .time{
        font-size: 0.30rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }
      .title{
        width: 3.5rem;
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; // 超出部分打省略号
      }
    }
  }
}
</style>