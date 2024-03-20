- 什么是diff 算法
    - VUE/React 等现代MVVM开发框架基于VDOM的
    - 组件渲染返回VDOM，VDOM 通过DOM 显示
    - 当响应式数据更新后，会生成新的VDOM
    - 比较新旧两模虚拟DOM树，并找到差异的算法，叫diff算法

- 为什么要使用diff算法？
  怎么聊？ 
    从时间复杂度开始 聊到性能不好

  - 不适用diff算法的话，时间复杂度为O(n^3)
      - 每一个节点都跟另一棵树的所有节点都比较 O(n) key
        v-if/v-show v-for
            todolist 翻页
      - 相同key 节点 所有的属性又要比对下

      - 比对完所有结点  O(n)

- diff 算法
  Vue2 时代的
  - 简单diff 算法
    只做同层的对比，type变了就不再对比子节点 跨层需要比较的场景比较少
    
    

  - 双端diff

  VUE3的新diff
  - 递增子序列的diff 算法