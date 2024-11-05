<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <!-- v-model 双向绑定，通常用在表单中为了收集数据，但是缺点是性能不好 -->
      <!-- :rule="rules" 表示将表单的校验规则绑定到 Vue 实例中的 rules 对象上，用于表单的校验。 -->
      <el-form 
               :model="param" 
               :rule="rules" 
               ref="login"
               autofocus
               label-width="0px"
               class="ms-content"    
      >
        <el-form-item label="用户名" prop="username">
          <el-input 
              v-model="param.username" 
              placeholder="请输入用户名">
          </el-input>
          <el-input 
              type="password" 
              v-model="param.password" 
              @keyup.enter="submitForm(login)"
              placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button @click="submitForm(login)">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface LoginInfo{
  username:string;
  password:string;
}

// reactive 和ref 区别 =>ref适用于包装基本类型数据，而reactive适用于包装普通对象。
const param = reactive({
  username:'',
  password:'',
})

const submitForm = reactive({
  if(!formEl){
    return
  }
});

const rules = {
  username:[
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password:[
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
}

</script>

<style lang="scss" scoped>

</style>