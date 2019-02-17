<template>
 <div>
   <gouwuTop></gouwuTop>
   <ul id="banner">
     <li class="item"><span>30天无忧退货</span></li>
     <li class="item"><span>48小时快速退款</span></li>
     <li class="item"><span>满88元免邮费</span></li>
   </ul>
   <div class="content">
     <div class="img">
       <i class="iconfont"></i>
       <div class="text"><span>去添加点什么吧</span></div>
     </div>
     <a href="/geren" class="login">登录</a>
   </div>
 </div>
</template>

<script>
import gouwuTop from '@/components/gouwuche/gouwucheson/gouwuTop.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    gouwuTop
  }
}
</script>

<style scoped>
  #banner{
    background-color: rgba(0, 0, 0, 0.2);
    /* overflow: hidden; */
    white-space: nowrap;
    height: 35px;
    width: 375px;
    text-align: center;
    margin-left: -6px;
    display: inline-block;
  }
  #banner .item{
    position :relative;
    display: block;
    width: 125px;
    height:35px;
    text-align:center;
    line-height:35px;
    float: left;
  }
   .itme:nth-type-of(){
    padding-left :4px;
    }
    .item::before{
      position :absolute;
      left :8px;
      top: 16px;
      content :'';
      display: block;
      width: 4px;
      height :4px;
      border: 1px solid #666;
      border-radius: 50%;
    }
    .content{
      width: 370px;
      height: 617px;
      position: relative;
    }
    .img{
      position: absolute;
      left: 30%;
      top:30%;
      width: 124px;
      height: 124px;
      text-align: center;
    }
    .iconfont{
      background-image:url(../../../static/imgs/shopcart.png);
       display :block;
       background-repeat:no-repeat;
       background-size: 124px;
       width: 124px;
       height: 124px;
    }
    .text{
      width: 124px;
      height: 14px;
      text-align: center;
      display: inline-block;
      color :#999;

      margin-bottom :25px;
    }
    .text span{
      text-align: center;
      font-size :14px;
    }
    .login{
      width: 240px;
      height: 46px;
      background: #b4282d;
      color: #fff;
      position: absolute;
      left: 15%;
      bottom: 35%;
      text-align: center;
      line-height: 46px;
    }
</style>
