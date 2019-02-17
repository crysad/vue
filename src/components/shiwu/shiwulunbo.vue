<template>
    <swiper :options="swiperOption">
      <swiper-slide  v-for="(bannerson,index) in banner" :key="index">
             <div class="bc" :style="{background:'url('+bannerson.picUrl +')',backgroundSize:'100% 100%'}">
                 <div class="content">
                     <div class="yan">{{bannerson.subTitle}}</div>
                      <h3>{{bannerson.title}}</h3>
                         <p>{{bannerson.desc}}</p>
                </div>
            </div>
      </swiper-slide>
    </swiper>
</template>

<script>
import data from '@/mock/data/shiwu_data.json'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  created () {
    this.banner = data.banner
  },
  data () {
    return {
      swiperOption: {
        autoplay: 1000,
        speed: 500,
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1.15,
        centeredSlides: true
      },
      banner: []
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style>
.bc{
    height: 216px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center
    }
.content{
    width: 233px;
    height: 100px;
    background: rgba(255, 255, 255, .8);
    text-align: center;
}
.content div{
    width: 100%;
    height: 50%;
    font-size: 12px;
    line-height: 50px;
    color: #7f7f7f;
    position: relative;
}
.yan::before{
    position: absolute;
    left: 25%;
    top: 50%;
    content: '';
    display: block;
    height:1px;
    width: 20px;
    background-color: #7f7f7f;
}
.yan::after{
    position: absolute;
    right: 25%;
    top: 50%;
    content: '';
    display: block;
    height:1px;
    width: 20px;
    background-color: #7f7f7f;
}
.content h3{
    color: #333;
    font-size: 16px;
    line-height: 24px;
    font-weight:bold;
}
.content p{
    font-size: 12px;
    line-height: 16px;
}
</style>
