<template>
<div>  <h2>为你推荐</h2>
    <div class="piccontent">
        <img v-lazy="msg.picUrl" alt="">
          <span>严选推荐</span>
    </div>
    <div class="desc">
        <h4 class="title">{{msg.title}}</h4>
        <div class="price">{{msg.priceInfo}}元起</div>
        <p class="txt">{{msg.subTitle}} </p>
    </div></div>
</template>

<script>

export default {
  props: ['msg']
}
</script>

<style scoped>
 h2{
    width: 335px;
    height: 67.5px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 67.5px;
    margin: 0 auto
}
 .piccontent{
    position: relative;
    width: 335px;
    margin: 0 auto
}
 .piccontent img{
    width: 100%;
}
 .piccontent span{
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
    width: 68px;
    height: 20px;
    background: #fff;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    border-radius: 4px;
}
.desc{
    width: 331px;
    height: 75px;
    border: 1px solid #eee;
    border-top: none;
    margin: 0 auto;
     padding: 10px
}
 .desc h4{
    font-size: 18px;
    width: 180px;
    height: 18px;
    float: left;
}
 .desc .price{
font-size: 14px;
width: 48px;
height: 14px;float: right;
}
 .desc .txt{
    width: 100%;
    height: 45px;
    line-height: 45px;
 float: left;
}
</style>
