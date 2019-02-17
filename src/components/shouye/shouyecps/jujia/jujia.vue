<template>
    <div class="qita">
      <!-- banner -->
      <img class="homebanner" src="./jujiacps/images/banner01.jpg" alt="">
      <!-- 内容标题 -->
      <div class="ptitle">
        <h3 class="con-title">行李箱</h3>
        <p class="con-present">轻奢行李箱陪您走天下</p>
    </div>
      <!-- 页面内容展示 -->
        <div class="pagecontent">
            <a class="item" href="http://www.baidu.com" v-for="(i,index) in list" :key="index">
                <img :src="i.listPicUrl" alt="">
                <p class="simpleDesc">{{i.simpleDesc}}</p>
                <p class="name">{{i.name}}</p>
                <i class="page-price">三石优惠价:</i>
                <i class="retailPrice">￥{{i.retailPrice}}</i>
                <h6 class="color-choose">
                    <div class="colors color-four">4</div>
                    <div class="colors color-se">色</div>
                    <div class="colors color-ke">可</div>
                    <div class="colors color-xuan">选</div>
                </h6>
            </a>
        </div>
    </div>
</template>

<script>
// import hometop from '@/components/shouye/jujia/hometop'
// import homenav from '@/components/shouye/jujia/homenav'
// import ptitle from '@/components/shouye/shouyecps/jujia/jujiacps/ptitle.vue'
// import pagecontent from '@/components/shouye/shouyecps/jujia/jujiacps/pagecontent'

export default {
  props: ['list'],

  data () {
    return {

    }
  },
  components: {
    // hometop,
    // homenav,
    // ptitle
  }
}
</script>

<style>
    .qita{
        width: 100%;
    }
  .homebanner{
    margin-top: 73px;
    width:100%;
    height:232px;
  }
  /* title样式 */
  .ptitle{
        width:100%;
        height:66px;
        background-color: #fff;
    }
    .ptitle>.con-title{
        font-size:20px;
        text-align: center;
        margin:10px 0;
        padding-top:10px;
    }
    .ptitle>.con-present{
        font-size:14px;
        color:#999;
        text-align: center;
        margin:5px 0;
    }
  /* list样式 */
  .pagecontent{
        width:100%;
        display:flex;
        flex-wrap: wrap;
        background-color:#fff;
        padding-top:10px;
        margin-bottom:60px;
        justify-content: space-around;
    }
    .pagecontent>.item{
        width:180px;
        height:304px;
        position:relative;
    }
    .pagecontent>.item>img{
        width:180px;
        height:190px;
        background-color: #f4f4f4;
        display:block;

    }
    .pagecontent>.item>.simpleDesc{
        width:180px;
        height:36px;
        color: #9f8a60;
        background:#f1ece2;
        font-size:14px;
        margin:0 auto;
        line-height:36px;
        text-align: center;
    }
    .pagecontent>.item>.name{
        width:170px;
        height:20px;
        font-style: normal;
        font-size:18px;
        margin:10px auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color:#333;
    }
    .pagecontent>.item>.page-price{
        font-style: normal;
        margin-left:10px;
        color:#9f8a60;
    }
    .pagecontent>.item>.retailPrice{
        font-style: normal;
        color:#b4282d;
        margin-left:10px;
        font-size: 18px;
    }
    .pagecontent>.item>.color-choose{
        position: absolute;
        left:10px;
        top:0;
    }
    .pagecontent>.item>.color-choose>.colors{
        color:#b4a078;
        margin:3px 0;
    }
    .pagecontent>.item>.color-choose>.color-four{
        margin-left:3px;
    }
</style>
