<template>
  <div>
    <ul>
      <li v-for="banner in banners" :key="banner.targetId">
        <img :src="banner.pic">
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { onMounted,toRefs} from 'vue';
import { useBannerStore } from '../store/banner';
const { banners } = toRefs(useBannerStore())
const { getBanners } = useBannerStore();

onMounted(async() =>{
  await getBanners();
})


</script>

<style scoped>
img{
  width: 400px;
  height: 180px;
}
</style>