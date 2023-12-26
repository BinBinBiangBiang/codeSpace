// hooks 函数式编程思想
import { defineStore } from "pinia";
import { ref } from "vue";
import type { Banner } from "../models/banner";
import { useBanner } from "../api";

// 仓库的分支  专门用来放banner的数据
// 定义了一个名为useBannerStore的仓库实例，使用 defineStore 函数。"banner" 是该仓库的名称，这个名称在整个应用中必须是唯一的。
export const useBannerStore = defineStore("banner", () =>{
  const banners = ref<Banner[]>([]);
  const getBanners = async () =>{
    if(banners.value.length ) return 
    banners.value = await useBanner();
  }
  return {
    banners,
    getBanners,
  }
})