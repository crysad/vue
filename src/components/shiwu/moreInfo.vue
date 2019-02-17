<template>
    <div class="moreInfo">
        <div class="top">更多精彩</div>
        <li class="more" v-for="(more ,index) in data" :key="index">
            <img v-lazy="more.scenePicUrl" alt="">
            <p>{{more.subTitle}}</p>
        </li>
    </div>
</template>

<script>
import data from '@/mock/data/shiwu_data.json'
export default {
  created () {
    this.data = data.findMore
  }
}
</script>

<style scoped>
.moreInfo{
    width: 100%;
    background: #f4f4f4;
    padding-bottom: 55px;
}
.moreInfo .top{
    width: 100%;
    height: 86px;
    line-height: 86px;
    font-size: 18px;
    text-align: center;
    position: relative;
}
.moreInfo .top::before{
    position: absolute;
    left: 5%;
    top: 50%;
    content: '';
    display: block;
    height:1px;
    width: 120px;
    background-color: #7f7f7f;
}
.moreInfo .top::after{
    position: absolute;
    right: 5%;
    top: 50%;
    content: '';
    display: block;
    height:1px;
    width: 120px;
    background-color: #7f7f7f;
}
.more{
    width: 345px;
    margin: 14px auto;

    background: white;
    padding: 10px
}
.more img{
    width: 100%;
    height: 180px;
}
.more p{
    width: 100%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 40px;
    font-size: 12px
}
</style>
