<template>
<div class="shiwuall">
  <yanxuanTop></yanxuanTop>
  <shiwulunbo></shiwulunbo>
  <shiwuscroll></shiwuscroll>
  <div class="line"></div>
  <weinituijian :data='data' :data2='data2' :data3='data3'></weinituijian>
  <div class="line"></div>
  <tenfifteen></tenfifteen>
  <div class="line"></div>
  <weinituijian :data='data4' :data2='data5' :data3='data6'></weinituijian>
  <div class="line"></div>
  <lookyanxuan></lookyanxuan>
  <moreInfo></moreInfo>
  </div>
</template>

<script>
import yanxuanTop from '@/base/yanxuanTop.vue'
import shiwulunbo from '@/components/shiwu/shiwulunbo.vue'
import shiwuscroll from '@/components/shiwu/shiwuscroll.vue'
import tenfifteen from '@/components/shiwu/tenfifteen.vue'
import weinituijian from '@/components/shiwu/weinituijian.vue'
import lookyanxuan from '@/components/shiwu/lookyanxuan.vue'
import moreInfo from '@/components/shiwu/moreInfo.vue'
// 导入数据
import data from '@/mock/data/shiwu_data.json'
export default {
  created () {
    this.data = data.recommendOne
    this.data2 = data.recommendTwo
    this.data3 = data.recommendThree
    this.data4 = data.zhenOne
    this.data5 = data.zhenTwo
    this.data6 = data.zhenThree
  },
  data () {
    return {

    }
  },
  components: {
    yanxuanTop,
    shiwulunbo,
    shiwuscroll,
    tenfifteen,
    weinituijian,
    lookyanxuan,
    moreInfo
  }
}
</script>

<style scoped>
.shiwuall{
  background: #fff;
   padding-bottom: 50px
}
.line{
  width: 100%;
  height: 10px;
  background: #f4f4f4
}
</style>
