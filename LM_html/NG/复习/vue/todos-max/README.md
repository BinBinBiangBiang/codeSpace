# 复杂组件设计

- 组件公式
  UI Component + store
  组件不要超过100行
  会涉及到性能 + 复用




- 组件树
  在开发时看到一个页面，先想下组件树划分，然后再开始写代码。
  App.vue
    TodoList.vue
      TodoItem.vue
组件树是什么？
组件树是指组件的树形结构，组件树的根节点是组件树的根组件，组件树的子节点是组件树的子组件。

- 组件树的作用
组件树的作用是什么？
组件树的作用是用来描述组件的结构，组件树的作用是用来描述组件的层级关系。

- 组件树的特点
组件树的特点是什么？
组件树的特点是用来描述组件的结构，组件树的特点是用来描述组件的层级关系。

- 复杂数组业务组件
    - 数据驱动页面
    - 积累常见的做法
        - todos filterTodos
        - tabs 切换
            - 标记选中状态 visibility = 'all | active | completed'
            - 样式部分动态绑定类名 :class = "{selected: visibility === key}"
            - click 事件 @click="visibility = key"
