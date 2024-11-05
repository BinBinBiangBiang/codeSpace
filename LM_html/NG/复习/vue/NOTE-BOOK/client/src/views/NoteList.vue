<template>
  <div class="note-list">
    <ul v-if="state.noteList.length">
      <li v-for="item in state.noteList" :key="item.id"  @click="goNoteDetail(item.id)" >
        <div class="img">
          <img :src="item.head_img" alt="">
        </div>
        <p class="time">{{ item.m_time }}</p>
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
    <p class="empty" v-else="state.noteList.length">当前分类下还没有文章哦</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import axios from '../api';
import { reactive } from 'vue';

const router = useRouter();

const route = useRoute();  // 当前路由详情
// console.log(router.currentRoute.value);
// console.log(route.query.title);
// 页面加载中发请求，拿到当前分类的数据

const state = reactive({
  noteList: []
})

onMounted(async () => {
  const { data } = await axios.post('/findNoteListByType', {
    note_type: route.query.title
  })
  state.noteList = data
  // console.log(data);
})



const goNoteDetail = (id) => {
  router.push({
    path: '/noteDetail',
    query: {
      id: id
    }
  })
}
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

    display: grid; // 第三种 grid布局
    grid-template-columns: 1fr 1fr; // 放几个1fr就是几列，几fr就表示占据几份
    grid-column-gap: 50px; // 列宽
    grid-row-gap: 30px;

    li {
      // width: 50%;
      // padding: 0 10px;
      // box-sizing: border-box;
      // float: left; // 第二种 浮动布局
      img {
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;
        // width: 2rem;
        // height: 2rem;
      }

      .time {
        font-size: 0.30rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }

      .title {
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