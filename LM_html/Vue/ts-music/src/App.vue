<script setup lang="ts">
// import { useBanner }  from './api/index';
// import type { Banner } from './models/banner';
import { usePersonalizedStore } from './store/personalized';
import Banner from './components/Banner.vue'
import { onMounted,toRefs} from 'vue';



const { personalizedMv } = toRefs(usePersonalizedStore())
const { getPersonalized } = usePersonalizedStore();

onMounted(async() =>{
  await getPersonalized();
})

</script>

<template>
  <Banner/>
  
  <ul>
    <li v-for="mv in personalizedMv" :key="mv.id">
      <img :src="mv.picUrl">
    </li>
  </ul>
</template>

<style scoped>
img{
  width: 400px;
  height: 180px;
}
</style>
