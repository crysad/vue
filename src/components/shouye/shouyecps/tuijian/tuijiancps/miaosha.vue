<template>
    <div class="ms">
        <!-- 时间 -->
        <div class="tm">
            <div class="tit">严选限时购</div>
            <div class="daojishi">
                <span class="sj hour">{{time.hour}}</span>
                <span class="colon">:</span>
                <span class="sj minute">{{time.minute}}</span>
                <span class="colon">:</span>
                <span class="sj seconds">{{time.seconds}}</span>
            </div>
            <div class="tmN">
                <span class="nSpan">下一场</span>
                <span class="nSpan">18:00</span>
                <span class="nSpan">开始</span>
            </div>
        </div>
        <!-- 物品 -->
        <div class="mSWu">
            <img :src=miaosahData.primaryPicUrl alt="">
            <div class="price">
                <div class="priceNow">
                    <span >￥</span>
                    <span>{{miaosahData.activityPrice}}</span>
                </div>
                <div class="priceOld">
                    <span>￥</span>
                    <span>{{miaosahData.originPrice}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import data from '@/mock/data/home_data.json'
export default {
  data () {
    return {
      miaosahData: {},
      time: {
        hour: '00',
        minute: '00',
        seconds: '00'
      }
    }
  },
  //   computed: {
  //     time () {
  //       return {}
  //     }
  //   },
  methods: {
    getTime () {
      var date = new Date()
      var now = date.getTime()
      var str = '2019/1/11 22:00:00'
      var endDate = new Date(str)
      var end = endDate.getTime()
      var leftTime = end - now
      if (leftTime >= 0) {
        // this.time.day = Math.floor(leftTime / 1000 / 60 / 60 / 24)
        this.time.hour = Math.floor(leftTime / 1000 / 60 / 60 % 24) < 10 ? '0' + Math.floor(leftTime / 1000 / 60 / 60 % 24) : Math.floor(leftTime / 1000 / 60 / 60 % 24)
        this.time.minute = Math.floor(leftTime / 1000 / 60 % 60) < 10 ? '0' + Math.floor(leftTime / 1000 / 60 % 60) : Math.floor(leftTime / 1000 / 60 % 60)
        this.time.seconds = Math.floor(leftTime / 1000 % 60) < 10 ? '0' + Math.floor(leftTime / 1000 % 60) : Math.floor(leftTime / 1000 % 60)
      }

      setTimeout(() => {
        this.getTime()
      }, 1000)
    }
  },
  mounted () {
    this.getTime()
  },
  created () {
    this.miaosahData = data.flashSaleIndexVO
  }
}

</script>

<style scoped>
    .ms{
        width: 100%;
        height: 190px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0 22px;
        align-items: center;

    }
    .ms>div{
        width: 160px;
        height: 160px;
    }
    .ms .tm{
        padding-top: 35px;
    }
    .ms .tm .tit{
        font-size: 18px;
    }
     .ms .tm .daojishi{
         margin-top: 12px;
         display: flex;
         width: 120px;
         justify-content: space-between;

     }
     .ms .tm .daojishi .sj{
         display: block;
         width: 30px;
         height: 30px;
         background-color: #444;
         color: #fff;
         text-align: center;
         line-height: 30px;
     }
     .ms .tm .daojishi .colon{
         font-size: 20px;
         line-height:26px;
     }
     .ms .tm .tmN{
         margin-top: 20px

     }
     .ms .tm .tmN .nSpan{
         font-size: 14px
     }
     .ms .mSWu{
         position: relative;

     }
     .ms .mSWu>img{
         width: 160px;
         height: 160px;
     }
     .ms .mSWu .price{
         position: absolute;
         bottom:20px;
         right:10px;
         width: 48px;
         height: 48px;
         border-radius: 50%;
         background-color: rgba(244,143,24,0.95);
         padding-top: 10px;

     }
     .ms .mSWu .price span{
         color: #fff;
         margin-right: 2px;
     }
</style>
