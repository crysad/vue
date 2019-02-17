<template>

  <div>
    <!-- 轮播部分 -->
    <tuijianbanner></tuijianbanner>
    <!-- 品牌直销 -->
    <pinpai></pinpai>
    <!-- 新品 -->
    <xinpinreni id="newpin" :list='xinpinList' :top="'新品首发'"></xinpinreni>
    <!-- 人气 -->
    <xinpinreni id="popular" :list='renqiList' :top="'人气推荐 · 好物精选'"></xinpinreni>
    <!-- 秒杀 -->
    <miaosha></miaosha>
    <!-- 福利社 -->
    <div class="fuli">
      <a href=""></a>
    </div>
    <!-- 专题精选 -->
    <zhuanti></zhuanti>
    <!-- 各种好物 -->
    <haowu :goodslist=goodslist[0]></haowu>
    <haowu :goodslist=goodslist[1]></haowu>
    <haowu :goodslist=goodslist[2]></haowu>
    <haowu :goodslist=goodslist[3]></haowu>
    <haowu :goodslist=goodslist[4]></haowu>
    <haowu :goodslist=goodslist[5]></haowu>
    <haowu :goodslist=goodslist[6]></haowu>
    <haowu :goodslist=goodslist[7]></haowu>
    <haowu :goodslist=goodslist[8]></haowu>
    <haowu :goodslist=goodslist[9]></haowu>
  </div>

</template>
<script>
import data from '@/mock/data/home_data.json'
import tuijianbanner from '@/components/shouye/shouyecps/tuijian/tuijiancps/tuijianlunbo.vue'
import pinpai from '@/components/shouye/shouyecps/tuijian/tuijiancps/pinpai.vue'
import xinpinreni from '@/components/shouye/shouyecps/tuijian/tuijiancps/xinpinreni.vue'
import miaosha from '@/components/shouye/shouyecps/tuijian/tuijiancps/miaosha.vue'
import zhuanti from '@/components/shouye/shouyecps/tuijian/tuijiancps/zhuanti.vue'
import haowu from '@/components/shouye/shouyecps/tuijian/tuijiancps/haowu.vue'
export default {
  data () {
    return {
      xinpinList: [],
      renqiList: []
    }
  },
  components: {
    tuijianbanner,
    pinpai,
    xinpinreni,
    miaosha,
    zhuanti,
    haowu

  },
  created () {
    this.goodslist = data.cateList
    this.xinpinList = data.newItemList
    this.renqiList = data.popularItemList
  }
}
</script>
<style scoped>
  .fuli{
    height: 150px;
  }
  .fuli>a{
    display: block;
    height:100%;
    background: url('../../../../../static/imgs/fls.jpg') no-repeat;
    background-size: 100%;
  }
</style>
