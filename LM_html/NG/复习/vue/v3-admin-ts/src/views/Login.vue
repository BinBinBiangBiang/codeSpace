<template>
  <div class="login-wrap">
      <div class="ms-login">
          <div class="ms-title">后台管理系统</div>
          <!-- v-model 双向绑定 性能不好 表单的目的是收集数据  -->
          <el-form 
              :model="param" 
              :rules="rules" 
              ref="login"
              autofocus
              label-width="0px"
              class="ms-content"
          >
              <el-form-item  prop="username">
                  <el-input
                      placeholder="请输入用户名"
                      v-model="param.username" />
              </el-form-item>
              <el-form-item  prop="password">
                  <el-input
                      type="password"
                      placeholder="请输入密码"
                      @keyup.enter="submitForm(login)"
                      v-model="param.password" />
              </el-form-item>
              <div class="login-btn">
                  <el-button type="primary" 
                  @click="submitForm(login)">登录</el-button>
              </div>
          </el-form>
      </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { usePermissStore } from '../store/permiss'
import { useRouter } from 'vue-router'
import type { FormInstance } from 'element-plus'

// usePermissStore：自定义的用于管理用户权限的store。
const permiss = usePermissStore();

// useRouter：用于获取Vue Router实例的函数。
const router = useRouter();
interface LoginInfo {
  username: string;
  password: string;
}
// 和ref 区别  复杂reactive ref通常用于原始数据类型，reactive 用于复杂数据类型 
// reactive：用于创建响应式对象的函数。

// 创建一个ref引用login，用于引用登录表单的实例。在组件的生命周期内，login会被设置为表单的引用。
const login = ref();
console.log(login.value);
onMounted(() => {
  console.log(login.value);
})
const param = reactive<LoginInfo>({
  username: '',
  password: ''
})

// 定义了表单验证规则，要求用户名和密码不能为空
const rules = {
  username: [
      {
          // 表示该字段是必填的，用户必须输入用户名才能通过验证。
          required: true,
          // : 表示在验证失败时显示的错误消息，即当用户名为空时，将显示 '请输入用户名'。
          message: '请输入用户名',
          // 表示在失去焦点时进行验证。也可以设置为其他值，比如 'change'，表示在值改变时验证。
          trigger: 'blur'
      }
  ],
  password: [
      {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
      }
  ]
}
// submit event  elementplus  formEl 
// FormInstance：Element Plus库的表单实例类型。
const submitForm = (formEl :FormInstance | undefined) => {
  if (!formEl) {
      return;
  }
  // formEl.validate：这是 Element Plus 表单实例的方法，用于触发表单验证。它接受一个回调函数作为参数，在表单验证完成后调用此回调函数。
  // 回调函数，接收一个参数 valid，表示表单是否通过验证。
  formEl.validate((valid) => {
      if (valid) {
          ElMessage.success('登录成功')
          localStorage.setItem('ms_username', param.username);
          const keys = permiss
              .roleList[param.username == 'admin'?'admin':'user'];
              //localStorage.setItem('ms_username', param.username)：将用户名存储在本地存储中。
          localStorage.setItem('ms_keys', JSON.stringify(keys))  
          permiss.setKeys(keys)
          router.push('/dashboard')
      } else {
          ElMessage.error('请校验表单')
      }
  })
}


</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>