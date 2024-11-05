import { defineStore } from 'pinia'
import { getSearchSuggest } from '@/api/index' 
import type { SearchSuggest } from '@/models/search'

export const useSearchStore = defineStore('search',{
  state:() => {
    return{
      showSearchView:false,
      searchKeyWord:'',
      suggestData:{} as SearchSuggest,  // 歌手singer 以及歌单album 都是suggestData的一个键
    }
  },
  getters:{
    showHot: state => state.searchKeyWord === ''
  },
  actions:{
    async suggest(){
      // 这个数据suggestData 并不是ref数据 他是一个proxy
      this.suggestData = await getSearchSuggest(this.searchKeyWord)
    }
  }
})