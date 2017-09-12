<template>
    <div>
      <!--<mt-header fixed title="fixed top"></mt-header>-->

      <!--<mt-header title="long long long long title">-->
        <!--<router-link to="/" slot="left">-->
          <!--<mt-button icon="back">back</mt-button>-->
        <!--</router-link>-->
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      <!--</mt-header>-->

      <mt-header title="直供平臺">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="goBack">返回</mt-button>
          <!--<mt-button @click="handleClose">關閉</mt-button>-->
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>


      <mt-search v-model="value">
        <mt-cell
          v-for="item in results"
          :key="item.id"
          :title="item.title"
          :value="item.value">
        </mt-cell>
      </mt-search>

      <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <img slot="icon" src="../assets/logo.png">
          首頁
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <img slot="icon" src="../assets/logo.png">
          分類
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <img slot="icon" src="../assets/logo.png">
          購物車
        </mt-tab-item>
        <mt-tab-item id="tab4" v-on:click="myPro()">
          <img slot="icon" src="../assets/logo.png">
          我的
        </mt-tab-item>
      </mt-tabbar>

    </div>
</template>
<script>
  import router from '../router'
    export default {
        name: 'user',
        data ()
    {
        return {
          msg: 'user message',
          selected:'tab2',
          value:'',
          results:[
            {
              id:1,
              title:'阿莫西林',
              value:'XXXX'
            },
            {
              id:2,
              title:'ttttt',
              value:'XXXX'
            }
          ]
        }
    },
    methods:{
      handleClose(){

      },
      goBack(){

      },
      myPro(){
        router.push({ name: 'user', params: { userId: 123 }})
      },
      valueWatchhMethod(){

      }
    }, watch: {
      selected: function (val, oldVal) {
        if(val == 'tab4'){
          router.push({ name: 'Login', params: { userId: 123 }})
        }
        if(val == 'tab3'){
          router.push({ name: 'Cart', params: { userId: 123 }})
        }
      },
      // 方法名
      value: 'valueWatchhMethod',
        // 深度 watcher
        results: {
        handler: function (val, oldVal) { /* ... */ },
        deep: true
      }
    }
    }
</script>
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
</style>
