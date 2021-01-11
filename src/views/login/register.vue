<template>
<div>
    <h1 class="top">大白鲜生后台注册</h1>
    <input 
    type="text"
    placeholder="账号"
    v-model="userName">
    <input 
    type="password"
    placeholder="密码"
    v-model="userPwa">
    <input 
    type="password"
    placeholder="确认密码"
    v-model="userPwat">
    <input 
    type="text"
    placeholder="手机号"
    v-model="userNuber">
    <input 
    type="text"
    placeholder="验证码"
    class="yanz"
    v-model="userYz">
    <button @click=yanz class="zhuc"><span>点击获取</span></button>
    <div class="boox">
       <button><router-link to="/login">登录</router-link></button>
      <button @click="rst">注册</button>
    </div>
</div>
</template>
<script>
//
import axios from 'axios'
export default {
    data(){
        return{
            userName: '',
            userPwa: '',
            userPwat: '',
            userNuber: '',
            userYz: ''
        }
    },
    methods:{
        rst(){
            axios
            .post('http://39.106.94.75:9001/system/user/add',{
                accountName : 'userName',
                password : 'userPwa',
                mobile : 'userNuber'
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        },
        yanz(){
            console.log(1)
        }
    }
}
</script>
<style lang="less" scoped>
input{
    width: 50%;
    height: 20px;
    margin-top: 30px;
    margin-left: 20%;
}
.yanz{
    width: 35%;
    height: 20px;
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
.zhuc{
    display: block;
    margin-top: 30px;
    float: right;
    margin-right: 30%;
}
</style>