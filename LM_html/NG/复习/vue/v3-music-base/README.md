- 项目亮点
   - 在搜索的时候使用了防抖，做了性能优化，使用lodash库中的debounce函数
      使用方法：
         先安装： npm i lodash
         导入：import debounce from 'lodash';

- 插槽的使用

父组件：
<Test>
    <!-- 第一种书写方式 -->
    <template #header>  
      <h1>Header</h1>
    </template>
    <!-- --------------------------------------------------------- -->
    <!-- 第二种书写方式 -->
    <!-- <header>              
      <h1>Header</h1>
    </header>
    <div>123</div> -->
    <!-- footer这个插槽即使你放在header前面，还是会先展示header 展示顺序取决于你的组件定义的顺序，这里是Test-->
    <template #footer>
      <h1>footer</h1>
    </template>    
    <!-- <footer>
      <h1>footer</h1>
    </footer> -->
  </Test>

子组件：
<template>
  <div>
    <slot name="header"></slot>
    <slot/>
    <slot name="footer"></slot>
  </div>
</template>


- 简历
  - 先完成再完美
  - pdf
  - 花点钱开个会员 使用金山office 格式
  - 不要有错别字

- 搜索功能介绍
  - 使用了vue全家桶 + ts ，项目结构清晰合理
  - 使用ELementPlus 它提供的El-Popover、ElInput，实现了搜索热点、搜索结果的展示
  - 使用lodash 实现防抖，完成搜索性能优化
  - 歌曲播放数，使用了拓展Number原型链的方式优化展示
  - 充分的数据流设计，将应用开发分为 UI 组件 + store 

- 给面试官介绍pinia 使用
   - 选用pinia 更简单 更hooks 化
   - 基于dev-tools 页面状态和数据状态的统一
   - 搜索模块数据流的专门设计
      - state showSearchView searchKeyword suggestData
      - getters showHot  
      - actions suggest()函数里面调用api下index中的获取suggest的函数，也就是拿数据

- 请介绍一个你设计的比较复杂的组件
    - 搜索组件
    - 状态比较复杂
        除了keyword searchResult 外 我还打理了showPropview hotList
    - 我怎么解决这个问题的呢？
      引入pinia 并提前设计数据流
    - suggest的组件粒度很OK，分成很多个组件
      SearchPopover
        ElPopOver
          ElInput slot
          SearchSuggest
    - 还使用了ts models 定义了interface 