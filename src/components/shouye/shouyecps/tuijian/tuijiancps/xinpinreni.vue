<template>
    <div class='new-warp'>
        <!-- title -->
        <div class="new-t">
            <a href="">
                <span>{{top}}</span>
                <div class="listmore">
                    <span>查看全部</span>
                    <i class="iconfont icon-arrow-right1"></i>
                </div>
            </a>
        </div>
        <!-- list -->
        <div class="new-list">
                <ul class="content">
                    <li v-for="(cate,index) in list" :key='index'>
                        <img v-lazy=cate.listPicUrl alt="">
                        <div class="desc">
                            <p v-if='cate.itemTagList.length == 2'>{{cate.itemTagList[0].name}}</p>
                            <span class="name">{{cate.name}}</span>
                            <span class="xiangqing">{{cate.simpleDesc}}</span>
                            <div>￥{{cate.retailPrice}}</div>
                        </div>
                    </li>
                    <li>
                        <span class="morelist">查看全部</span>
                    </li>
                </ul>
                <!-- you can put some other DOMs here, it won't affect the scrolling -->
        </div>
    </div>
</template>

<script>
export default {
  props: ['list', 'top'],
  data () {
    return {
      newlist: []
    }
  }
}
</script>

<style scoped>

    .new-warp{
        background-color: #fff;
        width: 100%;
        margin-bottom: 10px;
    }
     /* 上部title */
    .new-warp>.new-t{
        width: 100%;
        height: 130px;
        /* background-color: #f1f7fd; */
    }
    .new-warp .new-t>a{
        display: flex;
        width: 160px;
        height: 90px;
        margin: 0 auto;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
    .new-warp .new-t>a>span{
        color: #8ba0b6;
        font-size: 18px;
        font-weight: 500px;
    }
    .new-warp .new-t>a .listmore{
        background-color:  #D8E5F1;
        width: 120px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-top: 20px;
    }
    .new-warp .new-t>a .listmore>span{
        color: #8ba0b6;
    }
    .new-warp .new-t>a .listmore i{
        font-size: 12px;
    }
    /* 下部列表· */
    .new-warp .new-list{
        width: 100%;
        height: 256px;
        overflow-x: scroll;
    }
    .new-warp .new-list::-webkit-scrollbar {
        display:none
    }
   .new-warp .new-list>.content{
       display: flex;
       width: 1360px;
       height: 100%;
       justify-content:space-around;
       align-items: flex-end;
   }
   .new-warp .new-list .content li{
       /* display: block; */
       width: 140px;
       height: 240px;
   }
   .new-warp .new-list .content li>img{
       background-color: #f4f4f4;
       width: 140px;
       height: 140px;

   }
   .new-warp .new-list .content li>span.morelist{
       display: block;
       text-align: center;
       line-height: 140px;
       width: 140px;
       height: 140px;
       border: 4px solid #f4f4f4;
       color: #666;
       font-weight: 500;
   }
   .new-warp .new-list .content li>.desc{

       width: 140px;
       height: 90px;
       padding: 5px;
   }
   .new-warp .new-list .content li .desc p{
        width: 40px;
        font-size: 10px;
        background-color: #f48f18;
        text-align: center;
        height: 18px;
        line-height: 18px;
        border-radius: 3px;
        color: #fff;
   }
   .new-warp .new-list .content li .desc span{
       display: block;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 130px;
        margin-top: 6px;

   }
   .new-warp .new-list .content li .desc span.name{
        font-size: 12px;
        height: 14px;
        line-height: 14px;

   }
   .new-warp .new-list .content li .desc span.xiangqing{
       font-size: 14px;
       color: #7f7f7f;
       padding: 0 5px;
       line-height: 14px;
   }
   .new-warp .new-list .content li .desc>div{
       margin-top:10px;
       font-size: 16px;
       text-align: left;
       color: #333;
       height: 20px;
       line-height: 20px;
   }
</style>
