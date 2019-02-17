<template>
    <div class="head-t">
        <div class="logo">
            <span>网易严选</span>
        </div>
        <div class="search">
            <i class="iconfont icon-artboard9-copy"></i>
            <input type="text" placeholder="搜索商品，共9877款好物">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.head-t{
    position: fixed;
    z-index: 999;
    padding: 0 20px;
    height: 43px;
    width: 100%;
    display: flex;
    background-color: white;
    align-items: center
}
.head-t .logo span{
    display: block;
    width: 70px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #333;
}
.head-t .search{
    flex: 1;
    height: 28px;
    width: 266px;
    background-color: #ededed;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
    align-items: center;
    border-radius: 5px

}
.head-t .search i{
display: block;
width: 18px;
height: 18px;
font-size: 18px
}
.head-t .search input{
    flex:1;
    background-color: #ededed;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
}
</style>
