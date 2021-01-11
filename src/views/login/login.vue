<template>
<div>
    <h1 class="top">大白鲜生后台登录</h1>
    <div class="login">
        <el-input
        placeholder="请输入账号"
        v-model="user"
        class="input"
        clearable>
      </el-input>
      <el-input 
      placeholdero="请输入密码" 
      v-model="password" 
      show-password
       class="input"></el-input>
      <el-input 
      v-model="yzm" 
      placeholder="请输入验证码结果"
      class="input in">
      </el-input>
      <span 
      class="yzm">
      <img 
      :src=yz
      >
      </span>
    </div>
    <div class="boox">
        <button @click="log">登录</button>
      <button><router-link to="/register">注册</router-link></button>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      user : '',
      password:'',
      yz : null,
      yzm : '',
      topo : '大白鲜生管理后台'
    }
  },
  beforeMount () {
    axios
    .get('http://39.106.94.75:9001/captcha/captchaImage?type=math')
    .then(thee => {
      thee == thee
      this.yz = 'http://39.106.94.75:9001/captcha/captchaImage?type=math'
    })
  },
  methods : {
    // yanzheng(){
    //   axios
    //   .get('http://39.106.94.75:9001/captcha/captchaImage?type=math')
    //   .then(res =>{
    //     res == res
    //     this.yz = 'http://39.106.94.75:9001/captcha/captchaImage?type=math'
    //   })
    // }
    log(){
      window.location = "/About"
        // axios
        // .post('http://39.106.94.75:9001/login',{
        //     accountName : this.user,
        //     password : this.password,
        //     vcode : this.yzm
        // })
        // .then(res =>{
        //     console.log(res);
        //     console.log(1111)
        // })
    }
  }
}

</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%;
    .input{
        width: 400px;
        margin-top: 30px;
        margin-left: 20%;
    }
    .in{
        width: 250px;
    }
    span{
        img{
            width: 100px;
            height: 50px;
            margin-left: 50px;
            border-radius: 10px;
        }
    }
}
.top{
    color: red;
    text-align: center;
    font-size: 20px;
}
.boox{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between; 
    align-items: center;
    button{
    width: 20%;
    height: 50%;
    margin-left: 10%;
    margin-right: 10%;
    }
}
</style>