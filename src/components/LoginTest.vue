<template>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button type="primary" @click.native="handleClick">登录</mt-button>
    </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  import router from '../router'

    export default {
        name: 'user',
        data ()
    {
        return {
          msg: 'user message',
          username:'',
          password:''
        }
    },
    methods:{
      handleClick(){
        let instance = Toast('提示信息');
        setTimeout(() => {
          instance.close();
        }, 2000);
        if(true){
//          window.location.href='/index';
            router.push({ name: 'Index', params: { userId: 123 }})
        }
      }
    }
    }
</script>
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
