<template>
    <div class="zhuanti-warp">
        <div class="zhuanti-t">
            <a href="">
                <span>专题精选</span>
                <i class="iconfont icon-arrow-right"></i>
            </a>
        </div>
        <div class='zhuanti-b'>
            <ul class='zhuanti-list'>
                <li v-for="(item,index) in zhuantiList" :key='index' >
                    <img v-lazy="item.itemPicUrl" alt="">
                    <div class="list-t">
                        <h4>{{item.title}}</h4>
                        <span class='price'>{{item.priceInfo}}元起</span>
                    </div>
                    <div class="desc">{{item.subtitle}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import data from '@/mock/data/home_data.json'
export default {
  data () {
    return {
      zhuantiList: []
    }
  },
  created () {
    this.zhuantiList = data.topicList
  }

}
</script>

<style scoped>
    .zhuanti-warp{
        width: 100%;
        height: 275px;
        background-color: #fff;
        margin-top:10px;
    }
    .zhuanti-warp .zhuanti-t{
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .zhuanti-warp .zhuanti-t span{
        font-size: 17px;
    }
    .zhuanti-warp .zhuanti-t i{
        font-size: 17px;
    }
    .zhuanti-warp .zhuanti-b{
        height: 220px;
        width: 100%;
        overflow-x: scroll;
    }
    .zhuanti-warp .zhuanti-b::-webkit-scrollbar {
        display:none
    }
    .zhuanti-warp .zhuanti-b .zhuanti-list{
        height: 100%;
        width: 960px;
        display: flex;
        justify-content:space-around;
    }
    .zhuanti-warp .zhuanti-b .zhuanti-list li{
        width: 287px;
        height: 213px;
    }
    .zhuanti-warp .zhuanti-b .zhuanti-list li img{
        width: 287px;
        height: 160px;
        border-radius: 3px;
    }
    .zhuanti-warp .zhuanti-b .zhuanti-list li div.list-t{
        display: flex;
        justify-content: space-between;
        height: 26px;
        line-height: 26px;
        font-size: 14px;
    }
    .zhuanti-warp .zhuanti-b .zhuanti-list li div.list-t h4{
    }
    .zhuanti-warp .zhuanti-b .zhuanti-list li div.list-t span{
        color: #b4282d;
    }
    .zhuanti-warp .zhuanti-b .zhuanti-list li div.desc{
        color: #7f7f7f;
        font-size: 13px;
    }
</style>
