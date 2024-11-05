<template>
  <div class="bd">
    <div class="common-layout">
    <el-container>
      <el-header>
        <span>东华理工大学教务信息管理平台</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <!-- $route 代表当前的url地址 -->
            <!-- 欢迎{{$route.params.user}} -->
            <!-- 欢迎{{$route.query.user}} -->
            <!-- 欢迎{{$route.params.user}} -->
            欢迎{{ $route.hash.slice(1) }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item>个人详情</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="200px">
          我的应用
        </el-aside>
        <el-main>
          <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
            <el-tab-pane label="选课汇总">相关课程...</el-tab-pane>
            <el-tab-pane label="进度查询">课程进度查询</el-tab-pane>
            <el-tab-pane label="">不合格学生名单</el-tab-pane>
            <el-tab-pane label="我的选课">我的选课</el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

.bd{
  background: #534f4f;
}

.common-layout {
  height: 100vh;
  background :#fff;
  .el-container {
    height: 100%;
    
    .el-header {
      background-color: rgb(181, 147, 235);
      height: 80px;
      line-height: 80px;
      font-size: 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .el-dropdown-link {
        font-size: 24px;
        cursor: pointer;
        color: var(--el-color-primary);
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>