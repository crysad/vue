<template>
    <div class="pinpai-warp">
        <div class="pinpai-top">
            <span>品牌制造商直销</span>
            <i class="iconfont icon-arrow-right"></i>
        </div>
        <div class="pinpai-list">
            <ul>
                <li v-for="(item,index) in pinpaiList.slice(0, 4)" :key='index'>
                    <div class="pinpai-dec">
                        <h4>{{item.name}}</h4>
                        <span class="price">{{item.floorPrice}}</span>
                        <span class="danwei">元起</span> <br>
                        <i v-show=item.newOnShelf class="iconfont icon-shangxin"></i>
                    </div>
                    <img class="pinpaipic" :src=item.picUrl alt="">
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
      pinpaiList: []
    }
  },
  created () {
    this.pinpaiList = data.tagList
  }
}
</script>

 <style scoped>
 .pinpai-warp{
     margin-top: 10px;
     width: 100%;
     height: 306px;
     background-color: #fff;
 }
 .pinpai-warp .pinpai-top{
     height: 55px;
     width: 100%;
     text-align: center;
     padding-top: 17px;

 }
 .pinpai-warp .pinpai-top span,.pinpai-warp .pinpai-top i{
    font-size: 17px;
    color: #333;
    font-weight: 500px;
 }
 .pinpai-warp .pinpai-list{
     /* padding: 0 10px; */
     height: 248px;

 }
 .pinpai-warp .pinpai-list>ul{
     /* margin: 0 auto; */
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     margin: 0 auto;
     height: 100%;
     /* justify-content: space-around; */
     align-content:space-around;

 }
 .pinpai-warp .pinpai-list >ul li{
     background-color: #f4f4f4;
     position: relative;
     flex: 1;

 }
 .pinpai-warp .pinpai-list >ul li .pinpai-dec{
    position: absolute;
    top:20px;
    left: 8px;
}
  .pinpai-warp .pinpai-list >ul li .pinpai-dec h4{
    font-size: 14px;
    height: 28px;
 }
  .pinpai-warp .pinpai-list >ul li .pinpai-dec span.price{
    font-size: 14px;
 }
  .pinpai-warp .pinpai-list >ul li .pinpai-dec span.danwei{
     font-size: 12px;
 }
  .pinpai-warp .pinpai-list >ul li .pinpai-dec>i{
     font-size: 32px;
     color: #b4a078;
 }
.pinpai-warp .pinpai-list >ul li img.pinpaipic{
     width: 174px;
     height: 118px;
 }
</style>
