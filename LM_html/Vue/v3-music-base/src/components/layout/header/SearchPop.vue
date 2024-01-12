<template>
  <el-popover 
      popper-style="max-width: auto; padding: 0;"
      v-model:visible="showSearchView"
  >
  <!-- 插槽 -->
  <template #reference>
    <el-input 
        placeholder="搜索音乐、MV、歌单"
        :prefix-icon="Search"
        clearable
        @input="searchInput"
        @focus="showSearchView = true"
        @focusout="showSearchView = false"
        v-model="searchKeyWord"
    />
  </template>
  <div class="h-96">
    <el-scrollbar>
      <div class="pb-2.5">
        <div v-if="showHot">
          <div class="pt-2 pb-1.5 px-2.5">热门搜索</div>
            <div>
              <div v-for="(item,index) in searchHot" :key="item.searchWord" class="py-2.5 px-2.5 hover-text cursor-pointer flex
                  justify-between items-center text-xs 
              " @click="hotClick(item.searchWord)">
                  
                <span class="mr-1">{{ index + 1}}</span>
                <span>{{item.searchWord}}</span>
                <div class="text-red-300 text-xs">{{item.score.numberFormat()}}</div>
              </div>
          </div>
        </div>
        <SearchSuggest v-else/>
      </div>
    </el-scrollbar>
  </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { onMounted,ref } from 'vue'
import { Search } from '@icon-park/vue-next'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/search' 
import { debounce } from 'lodash'
import { getSearchHotDetail } from '@/api/index'
// 引入我们写的模型，也就是接口
import type { SearchHotDetail } from '@/models/search'
import SearchSuggest from './SearchSuggest.vue'

const { showSearchView,searchKeyWord,showHot }  = storeToRefs(useSearchStore())
// const searchStore = useSearchStore()
const { suggest } = useSearchStore()
const searchInput = debounce( () => {
  suggest(),500
})

// ts声明 调用我们之前写的接口进行类型限制
const searchHot = ref<SearchHotDetail[]>([])

const hotClick = (text:string) =>{
  searchKeyWord.value = text
  suggest()
  showSearchView.value = true;
}

onMounted(async() => {
  searchHot.value = await getSearchHotDetail()
})

</script>

<style lang="less" scoped>

</style>