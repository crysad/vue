<template>
    <div class="look">
        <div class="hd">LOOK严选</div>
        <img v-lazy="data.picUrl" alt="">
        <div class="tips">
            <img v-lazy="data.avatar" alt="">
            <span class="cname">{{data.nickname}}</span>
            <span class="con">{{data.content}}</span>
        </div>
    </div>
</template>

<script>
import data from '@/mock/data/shiwu_data.json'
export default {
  created () {
    this.data = data.yxLook
  }
}
</script>

<style>
.look{
    width: 100%;
    height: 400px;
}
.hd{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
}
.look img{
    width: 100%;
    height: 268px;
    vertical-align: middle
}
.look .tips{
    width: 100%;
    height: 72px;
    padding: 15px
    }
.look .tips img{
    width: 28px;
    height: 28px;
    border-radius: 50%;
}
.look .tips .cname{
    display: inline-block;
    vertical-align:baseline
}
.look .tips .con{
    display: inline-block;
}
</style>
