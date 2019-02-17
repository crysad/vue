<template>
   <div class="content-r">

        <ul class="r-list">
          <div class="r-content">
            <div class="banner">
            <img :src=listUrl[0].bannerUrl alt="">
          </div>
          <div class="categorylist">
            <h4 class="title">
              {{listUrl[0].name}}
            </h4>
          </div>
          <div class="listWarp">
            <ul class="list">
              <li class="item"  v-for="(cate,index) in categoryList" :key="index">
                  <img :src='cate.bannerUrl' alt="">
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
import llistUrl from '@/mock/data/fenlei_data.json'
export default {
  created () {
    this.listUrl = llistUrl.categoryL1List
    this.categoryList = llistUrl.categoryL1List[0].subCateList
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
   .content-r{margin-left: 5px;width: 290px;height:574px;margin-top:15px;}
   .content-r .r-list{height: 650px}
   .content-r .banner img{width: 100%}
   .content-r .categorylist .title{position: relative; z-index: 2;width: 100%;
        height: 54px;line-height: 54px;font-size:12px;text-align: center;color: #333}
   .content-r .categorylist .title::before{position: absolute;
        z-index: 2;top: 50%; left: 30%;content: '';display: block;height: 2px;width: 20px;
        background-color: #ededed;}
   .content-r .categorylist .title::after{position: absolute;z-index: 2;top: 50%;
        right: 30%;content: '';display: block;height: 2px;width: 20px;background-color: #ededed;}
   .content-r .listWarp{width: 100%;font-size: 14px;color: #333;font-weight: normal;
        vertical-align: baseline;box-sizing: border-box}
   .content-r .listWarp ul{width: 280px;display: flex; flex-wrap: wrap;padding: 0 20px}
   .content-r .listWarp ul li{ width: 80px; height: 100px;text-align: center }
   .content-r .listWarp ul li img{display: block;width: 72px;height: 72px}
</style>
