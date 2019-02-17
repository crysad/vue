<template>
    <div class="goods">
        <h3 class="goods-t">{{goodslist.name}}好物</h3>
        <div class="goods-list">
            <ul>
                <li v-for="(item,index) in goodslist.itemList" :key='index'>
                    <a class="item">
                        <img v-lazy='item.listPicUrl' alt="">
                        <div class="desc">{{item.simpleDesc}}</div>
                        <span class="name">{{item.name}}</span>
                        <div class="price">￥{{item.retailPrice}}</div>
                    </a>

                </li>
                <li class="more-goods">
                    <a href="#">
                        <p>更多居家好物</p>
                        <i class="iconfont icon-right"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props: ['goodslist']
}
</script>

<style scoped>
    .goods{
        background-color: #fff;
    }
    .goods h3.goods-t{
        margin-top: 10px;
        height: 60px;
        width: 100%;
        text-align: center;
        line-height: 60px;
        font-size: 14px;

    }
    .goods .goods-list{
        padding-bottom: 16px;
    }
    .goods .goods-list ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .goods .goods-list ul li{
        width: 170px;
        height: 276px;
    }
    .goods .goods-list ul li.more-goods{
        height: 207px;
        width: 160px;
        background-color: #f3f3f3;
        display: flex;
        align-items: center;
        transform: translateX(-98px);
    }
    .goods .goods-list ul li.more-goods>a{
        width: 160px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content:space-between ;
        align-content: center;
    }
    .goods .goods-list ul li.more-goods>a p{
        font-size: 14px;
        text-align: center;
    }
    .goods .goods-list ul li.more-goods>a i{
        text-align: center;
        font-size: 42px;
        color: #999;
    }
    .goods .goods-list ul li .item img{
        width: 170px;
        height: 172px;
        background-color: #f3f3f3;
        vertical-align:bottom;
    }
    .goods .goods-list ul li .item .desc{
        text-align: center;
        line-height: 34px;
        height: 34px;
        background-color: #f1ece2;
        color:#9f8a60;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        margin-bottom: 14px;
    }

    .goods .goods-list ul li .item span.name{
        display: block;
        width: 100%;
        font-size: 14px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .goods .goods-list ul li .item>.price{
        color: #b4282d;
        font-size: 16px;
        font-weight: 400;
        padding: 3px 0 0 3px;

    }
</style>
