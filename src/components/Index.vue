<template>

  <div>
  <header class="header mui-bar mui-bar-nav">
    <a class="ind-search" href="Search-page.html"><span>搜索想要的宝贝</span></a>
    <div class="notice-box" style="display: none;">
      <span class="notice-icon"><img src="../assets/img/notice-icon.png"><em>2</em></span>
      <span>消息</span>
    </div>
  </header>
  <!--header-end-->
  <!--Banner-->
  <div class="banner" id="index-banner">
    <div class="banner-pics">
      <ul class="banner-pics-list OnSale-banner">
        <li><a href="#"><img src="../assets/img/banner640x386.jpg" alt=""/></a></li>
        <li><a href="#"><img src="../assets/img/banner640x386.jpg" alt=""/></a></li>
        <li><a href="#"><img src="../assets/img/banner640x386.jpg" alt=""/></a></li>
        <li><a href="#"><img src="../assets/img/banner640x386.jpg" alt=""/></a></li>
        <li><a href="#"><img src="../assets/img/banner640x386.jpg" alt=""/></a></li>
        <li><a href="#"><img src="../assets/img/banner640x386.jpg" alt=""/></a></li>
      </ul>
    </div>
    <ul class="banner-tit">
      <li class="on"></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

  <!--banner-end-->
  <!--<footer class="footer ind-footer mui-bar-tab" id="footer">-->
    <!--<ul class="display-box-middle">-->
      <!--<li>-->
        <!--<a class="on" href="Index.html">-->
          <!--<span class="footer-icon footer-index"></span><span>首页</span>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a href="Classification.html">-->
          <!--<span class="footer-icon footer-classification"></span><span>分类</span>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a href="Cash-back.html">-->
          <!--<span class="footer-icon footer-cash-back"></span><span>超级返</span>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a href="Shopping-Cart.html">-->
          <!--<span class="footer-icon footer-cart"></span><span>购物车</span>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a href="My.html">-->
          <!--<span class="footer-icon footer-my"></span><span>我的首购</span>-->
        <!--</a>-->
      <!--</li>-->
    <!--</ul>-->
  <!--</footer>-->
  <!--footer-end-->





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

  <!--<div class="mui-content">-->
    <!--&lt;!&ndash;秒杀&#45;&#45;包邮&#45;&#45;爆款必抢&ndash;&gt;-->
    <!--<div class="m-b-b-group clearfix">-->
      <!--<div class="fl"><a class="miaosha" href="Seckill.html" style="background-image:url(../assets/img/miaosha.jpg);"><div class="seckill-list-time"><span>05</span>:<span>34</span>:<span>25</span></div></a></div>-->
      <!--<div class="fr">-->
        <!--<a class="baoyou" href="Nine-pieces.html" style="background-image:url(../assets/img/baoyou.jpg);"></a>-->
        <!--<a class="baokuanbiqiang" href="Hot-pro.html" style="background-image:url(../assets/img/baokuanbiqiang.jpg);"></a>-->
      <!--</div>-->
    <!--</div>-->
    <!--&lt;!&ndash;秒杀&#45;&#45;包邮&#45;&#45;爆款必抢&ndash;&gt;-->
    <!--&lt;!&ndash;栏目列表&ndash;&gt;-->
    <!--<div class="ind-column">-->
      <!--<ul class="clearfix">-->
        <!--<li>-->
          <!--<a href="Maternal-Museum.html">-->
            <!--<div class="ind-column-img"><img src="../assets/img/ind-my.jpg"></div>-->
            <!--<h2 class="ind-column-tit1">母婴馆</h2>-->
            <!--<p>上千家母婴品牌限时特卖</p>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#">-->
            <!--<div class="ind-column-img"><img src="../assets/img/ind-mz.jpg"></div>-->
            <!--<h2 class="ind-column-tit2">美妆馆</h2>-->
            <!--<p>美妆个护&nbsp;|&nbsp;面部护理套装 </p>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="#">-->
            <!--<div class="ind-column-img"><img src="../assets/img/ind-bh.jpg"></div>-->
            <!--<h2 class="ind-column-tit3">百货馆</h2>-->
            <!--<p>价格实惠,诚信可靠!</p>-->
          <!--</a>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a href="Activity-page.html">-->
            <!--<div class="ind-column-img"><img src="../assets/img/ind-sgzy.jpg"></div>-->
            <!--<h2 class="ind-column-tit4">首购自营</h2>-->
            <!--<p>全场100%正品保障!</p>-->
          <!--</a>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--&lt;!&ndash;栏目列表&ndash;&gt;-->

    <!--&lt;!&ndash;合肥地区专属公告&ndash;&gt;-->
    <!--<div class="tg-banner"><a href="Hefei-area.html"><img src="../assets/img/tg-banner.jpg"></a></div>-->
    <!--&lt;!&ndash;合肥地区专属公告&ndash;&gt;-->

    <!--&lt;!&ndash;产品列表&ndash;&gt;-->
    <!--<div class="ind-pro-list">-->
      <!--<div class="ind-pro-list-img">-->
        <!--<a href="Cash-back-details.html"><img src="../assets/img/ind-pro-list-img.jpg"></a>-->
        <!--<span class="cart-btn"><a href="Cash-back-details.html"></a></span>-->
      <!--</div>-->
      <!--<div class="ind-pro-list-txt"><p>冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘</p><span class="ind-more-btn"></span></div>-->
      <!--<div class="relation-list">-->
        <!--<h2>关联推荐</h2>-->
        <!--<ul class="clearfix">-->
          <!--<li><a href="#"><span>编辑精选</span></a></li>-->
          <!--<li><a href="#"><span>个护彩妆</span></a></li>-->
          <!--<li><a href="#"><span>玉兰油</span></a></li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="ind-pro-tips">-->
        <!--<span class="ind-guanzhu on">263</span>-->
        <!--<span class="ind-shoucang on">128</span>-->
        <!--<span class="ind-fenxiang on">分享</span>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="ind-pro-list">-->
      <!--<div class="ind-pro-list-img">-->
        <!--<a href="Cash-back-details.html"><img src="../assets/img/ind-pro-list-img.jpg"></a>-->
        <!--<span class="cart-btn"><a href="Cash-back-details.html"></a></span>-->
      <!--</div>-->
      <!--<div class="ind-pro-list-txt"><p>冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘</p><span class="ind-more-btn"></span></div>-->
      <!--<div class="relation-list">-->
        <!--<h2>关联推荐</h2>-->
        <!--<ul class="clearfix">-->
          <!--<li><a href="#"><span>编辑精选</span></a></li>-->
          <!--<li><a href="#"><span>个护彩妆</span></a></li>-->
          <!--<li><a href="#"><span>玉兰油</span></a></li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="ind-pro-tips">-->
        <!--<span class="ind-guanzhu">263</span>-->
        <!--<span class="ind-shoucang">128</span>-->
        <!--<span class="ind-fenxiang">分享</span>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="ind-pro-list">-->
      <!--<div class="ind-pro-list-img">-->
        <!--<a href="Cash-back-details.html"><img src="../assets/img/ind-pro-list-img.jpg"></a>-->
        <!--<span class="cart-btn"><a href="Cash-back-details.html"></a></span>-->
      <!--</div>-->
      <!--<div class="ind-pro-list-txt"><p>冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘</p><span class="ind-more-btn"></span></div>-->
      <!--<div class="relation-list">-->
        <!--<h2>关联推荐</h2>-->
        <!--<ul class="clearfix">-->
          <!--<li><a href="#"><span>编辑精选</span></a></li>-->
          <!--<li><a href="#"><span>个护彩妆</span></a></li>-->
          <!--<li><a href="#"><span>玉兰油</span></a></li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="ind-pro-tips">-->
        <!--<span class="ind-guanzhu on">263</span>-->
        <!--<span class="ind-shoucang on">128</span>-->
        <!--<span class="ind-fenxiang on">分享</span>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="ind-pro-list">-->
      <!--<div class="ind-pro-list-img">-->
        <!--<a href="Cash-back-details.html"><img src="../assets/img/ind-pro-list-img.jpg"></a>-->
        <!--<span class="cart-btn"><a href="Cash-back-details.html"></a></span>-->
      <!--</div>-->
      <!--<div class="ind-pro-list-txt"><p>冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘冻龄肌秘密，欧莱雅玻尿酸系列25岁是女孩跨入女人的阶段，也是女生最美好的时期。爱情事业都处于双赢时刻，但同时伴随的困扰就是，肌肤初老症状开始出现。新陈代谢慢了，皮肤也总觉得缺水，且干纹细纹都开始出现。就是因为玻尿酸的流失哦！！玻尿酸在护肤中一直很受追捧，相信很多姑娘</p><span class="ind-more-btn"></span></div>-->
      <!--<div class="relation-list">-->
        <!--<h2>关联推荐</h2>-->
        <!--<ul class="clearfix">-->
          <!--<li><a href="#"><span>编辑精选</span></a></li>-->
          <!--<li><a href="#"><span>个护彩妆</span></a></li>-->
          <!--<li><a href="#"><span>玉兰油</span></a></li>-->
        <!--</ul>-->
      <!--</div>-->
      <!--<div class="ind-pro-tips">-->
        <!--<span class="ind-guanzhu">263</span>-->
        <!--<span class="ind-shoucang">128</span>-->
        <!--<span class="ind-fenxiang">分享</span>-->
      <!--</div>-->
    <!--</div>-->

    <!--&lt;!&ndash;产品列表&ndash;&gt;-->

  <!--</div>-->

  </div>

</template>

<script>

  import router from '../router'

//import muijs from "../assets/js/mui.min.js"
//import jqueryjs from "../assets/js/jquery.min.js"
//import commonjs from "../assets/js/common.js"
//import TouchSlidejs from "../assets/js/TouchSlide.1.1.js"
//var TouchSlidejs = require("../assets/js/TouchSlide.1.1.js");

//import * as $ from 'jquery';
//window['$'] = window['jQuery'] = $;

import {TouchSlide} from '../assets/js/TouchSlide.1.1.js' //注意路径
//import $ from 'jquery'
//import {mui} from '../assets/js/mui.min.js'
//var commonjs = require("../assets/js/common.js")

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
    }
    ,
    props: {
    }
    ,
    mounted: function() {
      this.$nextTick(function() {
        this.initView();
      });
    },
    computed:{
    }
    ,
    methods:{
      initView(){
        TouchSlide({
          slideCell:"#index-banner",
          titCell:".banner-tit li",//开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
          mainCell:".banner-pics-list",
          effect:"left",
          autoPlay:true,//自动播放
          //autoPage:true, //自动分页
        })

//        $(window).bind("scroll",function() {
//          if ($(document).scrollTop() > 100) {
//            $(".header").css({'background-color':'#dd2727','transition':'0.4s'});
//          }else{
//            $(".header").css({'background-color':'transparent','transition':'0.4s'});
//          }
//        });

//        $(".ind-pro-list").each(function(){
//          var self = $(this);
//          self.find(".ind-more-btn").click(function(){
//            $(this).prev().toggleClass("height-auto");
//          });
//        });
//        mui.init({
//          swipeBack: true, //启用右滑关闭功能
//        });
      },
      handleClose(){

      },
      goBack(){

      },
      myPro(){
        router.push({ name: 'user', params: { userId: 123 }})
      },
      valueWatchhMethod(){

      }
    }
    ,
    watch:{
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

  @import "../assets/css/mui.min.css";
  @import "../assets/css/base.css";
  @import "../assets/css/common.css";

    h1, h2 {
        font-weight: normal;
    }
    html,body,.mui-content{ max-width:100%;}
    .mui-bar-nav~.mui-content{ padding-top:0;}
    .hot-pro-bot-box{ margin-top:40px;}
    .hot-pro-nav{border-bottom:1px solid #dd2727;}
    .mui-icon-back:before, .mui-icon-left-nav:before{ background-image:url(../assets/img/h-back-white.png);}
    .mui-bar{height:50px; background-color:transparent;border-bottom:none;}
    .notice-box span.notice-icon em{ background-color:#dd2727; color:#fff; display: none }
</style>
