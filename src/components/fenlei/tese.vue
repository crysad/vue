<template>
   <div class="r">
        <ul class="r-list">
          <div class="r-content">
            <div class="banner">
            <img :src=listUrl[9].bannerUrl alt="">
          </div>
          <div class="categorylist">
            <h4 class="title">
              {{listUrl[9].name}}
            </h4>
          </div>
          <div class="listWarp">
            <ul class="list">
              <li class="item"  v-for="(cate,index) in categoryList" :key="index">
                  <img :src='cate.wapBannerUrl' alt="">
                  <span>{{cate.name}}</span>
              </li>
            </ul>
          </div>
          </div>
        </ul>
      </div>
</template>

<script>
import fenlei from '@/components/fenlei/fenlei.vue'
import BScroll from 'better-scroll'
import llistUrl from '@/mock/data/data.json'
export default {
  created () {
    this.listUrl = llistUrl
    console.log(llistUrl[9].subCateList)
    this.categoryList = llistUrl[9].subCateList
  },
  data () {
    return {
      categoryList: []
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll('.r-list', {
      click: true
    })
  },
  components: {
    fenlei
  }
}
</script>

<style scoped>
    .r{margin-left: 5px;width: 290px;height:574px;margin-top:15px}
    .r-list{height: 620px;}
    .banner img{width: 100%}
    .categorylist .title{position: relative; z-index: 2;width: 100%;
        height: 54px;line-height: 54px;font-size:12px;text-align: center;color: #333}
    .categorylist .title::before{position: absolute;
        z-index: 2;top: 50%; left: 30%;content: '';display: block;height: 2px;width: 20px;
        background-color: #ededed;}
    .categorylist .title::after{position: absolute;z-index: 2;top: 50%;
        right: 30%;content: '';display: block;height: 2px;width: 20px;background-color: #ededed;}
    .listWarp{width: 100%;font-size: 14px;color: #333;font-weight: normal;
        vertical-align: baseline;box-sizing: border-box}
    .listWarp ul{width: 280px;display: flex; flex-wrap: wrap;padding: 0 20px}
    .listWarp ul li{ width: 80px; height: 100px;text-align: center }
    .listWarp ul li img{display: block;width: 72px;height: 72px}
</style>
