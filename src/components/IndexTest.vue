<template>
    <div>
      <!--<mt-header fixed title="fixed top"></mt-header>-->

      <!--<mt-header title="long long long long title">-->
        <!--<router-link to="/" slot="left">-->
          <!--<mt-button icon="back">back</mt-button>-->
        <!--</router-link>-->
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      <!--</mt-header>-->

      <mt-header title="直供平台">
        <router-link to="/" slot="left">
          <mt-button icon="back" @click="goBack">返回</mt-button>
          <!--<mt-button @click="handleClose">關閉</mt-button>-->
        </router-link>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      </mt-header>


      <mt-search v-model="value" style="height: 200px;position: absolute;z-index: 999;width: 96%;">
        <mt-cell
          v-for="item in results"
          :key="item.id"
          :title="item.title"
          :value="item.value">
        </mt-cell>
      </mt-search>

      <!-- 轮播图部分 -->
      <!--<mt-swipe :auto="4000" style="height: 300px;">-->
        <!--<mt-swipe-item>1</mt-swipe-item>-->
        <!--<mt-swipe-item>2</mt-swipe-item>-->
        <!--<mt-swipe-item>3</mt-swipe-item>-->
      <!--</mt-swipe>-->




      <mt-swipe :auto="4000" style="height: 150px;margin-top: 44px;">
        <mt-swipe-item><div class="banner1 banner" style="background:url('../../static/img/banner1.jpg');background-size: cover;"></div></mt-swipe-item>
        <mt-swipe-item><div class="banner2 banner" style="background:url('../../static/img/banner2.jpg');background-size: cover;"></div></mt-swipe-item>
      </mt-swipe>



      <ul class="icon-list" style="padding-left: 0px">
        <li class="icon">
          <img src="../assets/scan.png" class="clear">
          <h4>订单管理</h4>
          <p>扫描盘点，手工盘点</p>
        </li>
        <li class="icon">
          <img src="../assets/ana.png" class="clear">
          <h4>渠道管理</h4>
          <p>扫描盘点，手工盘点</p>
        </li>
        <li class="icon">
          <img src="../assets/store.png" class="clear">
          <h4>订单发布</h4>
          <p>扫描盘点，手工盘点</p>
        </li>
        <li class="icon" @click="getOrders()">
          <img src="../assets/goods.png" class="clear">
          <h4>订单同步</h4>
          <p>快速同步渠道订单</p>
        </li>
        <li class="icon">
          <img src="../assets/download.png" class="clear">
          <h4>个人中心</h4>
          <p>信息管理，logo更换</p>
        </li>
        <li class="icon">
          <img src="../assets/store.png" class="clear">
          <h4>订单发布</h4>
          <p>扫描盘点，手工盘点</p>
        </li>
      </ul>


      <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <img slot="icon" src="../assets/logo.png">
          首页
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <img slot="icon" src="../assets/logo.png">
          分类
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <img slot="icon" src="../assets/logo.png">
          购物车
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
          selected:'tab1',
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
            },
            {
              id:3,
              title:'saaa阿莫西林',
              value:'XXXX'
            },
            {
              id:4,
              title:'aaattttt',
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
        //debugger
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

    .banner{
      width: 100%;
      min-height: 100%;
    }

    .icon-list{
      /*margin-top: 10px;*/
      /*height: 54%;*/
      height: 100%;
      overflow-y: scroll;
    }
    .icon-list img{
      width: 58px;
      height: 58px;
      /*float: left;*/
    }
    .icon-list .icon{
      /*height: 70px;*/
      width: 30%;
      /*padding: 0 20px 10px 20px;*/
      /*position: relative;*/
      display: inline-block;
      /*border-bottom: 1px solid #efefef;*/
      box-sizing: border-box;
    }
    .icon h4{
      /*position: absolute;*/
      /*left: 88px;*/
      /*top: 10px;*/
    }
    .icon p{
      /*position: absolute;*/
      /*left:88px;*/
      /*bottom: 25px;*/
      /*color: #c1c1c1;*/
    }
</style>
