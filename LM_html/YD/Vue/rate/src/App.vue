<script setup>
// import Rate from './components/Rate.vue'
import JMain from './components/JMain.vue'
import JHead from './components/JHead.vue'
import JSide from './components/JSide.vue'
import JAdver from './components/JAdver.vue'
import JFoot from './components/JFoot.vue'
</script>
  


<template>
  <div class="header">
    <JHead />
  </div>

  <div class="body">
    <div class="aside">
      <JSide />
    </div>
    <div class="main">
      <JMain />
    </div>
    <div class="right">
      <JAdver />
    </div>
  </div>

  <div class="foot">
    <JFoot/>
  </div>

</template>

<style>
  .body{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .aside{
    width: 150px;
    background: blue;
    height: 500px;
    padding-bottom: 0;
  }

  .main{
    flex: 1;
    background: green;

  }

  .right{
    width: 200px;
    height: 500px;
    background: pink;
  }

  .foot{
    background: red;
    margin-top: 15px;
    height: 100px;
  }
</style>
