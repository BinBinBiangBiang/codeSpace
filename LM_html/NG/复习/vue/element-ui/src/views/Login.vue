<template>
  <div>
    <div class="login">
      <div class="login-wrap">
        <div class="item">
          <span class="c1">账号：</span>
          <input type="text" v-model="account" placeholder="请输入账号">
        </div>
        <div class="item">
          <span class="c1">密码：</span>
          <input type="text" v-model="password" placeholder="请输入密码">
        </div>
        <div class="item">
          <button @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        account:'admin',
        password:'123',
      }
    },
    methods: {
      login(){
        // 获取用户输入的账号和密码 再发起请求传给后端
        console.log(this.account,this.password);
        if(this.account === '' || this.password === ''){
          alert('账号密码不能为空')
          return 
        }

        // console.log(this.$router);
        // this.$router.push({path :'/home',query:{user:this.account}});
        // this.$router.push({name :'home',params:{user:this.account}});
        this.$router.push({path :'/home',hash:`#${this.account}`});
      }
    }
  }
</script>

<style lang="less" scoped>
.login{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  background-image: url(../image/1.jpg);
  background-size: cover;
  .login-wrap{
    width: 400px;
    height: 300px;
    background: pink;
    border-radius: 10px;
    box-shadow: 0 0 100px #dedde1;
    padding: 20px;
    font-size: 26px;
    opacity: 70%;
    .item{
      display: flex;
      margin-top: 30px;
      .c1{
        font-style: italic;
        font-size: 26px;
        font-family: 隶书;
      }
      input{
        flex: 1;
        padding: 0 10px;
        border-radius: 50px;
      }
      button{
        font-size: 26px;
        flex: 1;
        border-radius: 100px;
        background-color: rgb(229, 182, 190);
        color: #fff;
        padding: 5px 0;
        cursor: pointer;
        font-family: 隶书;
      }
    }
  }
}
</style>