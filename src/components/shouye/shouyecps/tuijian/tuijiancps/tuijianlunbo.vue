<template>
<div>
  <swiper class="banner" :options="swiperOption">
        <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
          <img class="bannerPic" :src=slide.picUrl alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <div class="banner-foot">
    <ul>
      <li>
        <i class="iconfont icon-dagou1"></i>
        <span>网易自营商品</span>
      </li>
      <li>
        <i class="iconfont icon-dagou1"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icon-dagou1"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
// require styles
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import bannerimgs from '@/mock/data/home_data.json'
export default {

  data () {
    return {
      bannerimgs: [],

      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: []
    }
  },

  components: {
    swiper,
    swiperSlide
  },
  created () {
    console.log(bannerimgs)
    this.swiperSlides = bannerimgs.focusList
  }
}

</script>

<style scoped>
.banner{
  padding-top: 73px;
}
 .bannerPic{
   width: 100%;
   height: 230px;
 }
 .banner-foot{

   height: 36px;
   width: 100%;
   padding: 0 10px;
   background-color: white;
 }
 .banner-foot ul{
display: flex;
 }
  .banner-foot ul li{
    flex: 1;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
   .banner-foot ul li i{
     font-size: 20px;
     color: red;
   }
   .banner-foot ul li span{
     font-size: 12px;
     color: #333;
   }
</style>
