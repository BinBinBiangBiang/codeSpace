<script setup>
// const todos = ref([
//   {text:'haha'}
// ])
// 以组件为开发单元
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'
const todoStore = useTodoStore()
import { useTodoStore } from './store/todo.js';

const { todos, addTodo } = useTodoStore();

// console.log(todoStore);
</script>

<template>
  <div>
    <TodoList :todos="todos" :addTodo="addTodo" />
  </div>
</template>

<style scoped></style>
