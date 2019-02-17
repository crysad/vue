<template>
<div class="top">
    <i  class="biao1 iconfont icon-home"></i>
    <span  class="zi">网易严选</span>
    <i  class="biao2 iconfont icon-artboard9-copy"></i>
    <i  class="biao3 iconfont icon-cart"></i>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top{
    height: 43px;
    width: 100%;
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 888;
}
.top i{
font-size: 28px
}
.top .zi{
font-size: 22px;
font-family: "\534E\6587\4EFF\5B8B";
font-weight:bold
}
.top .biao1{
    flex: 1;
    text-align: left
}
.top .biao2{
flex: 1;
text-align: right
}
.top span{
flex: 5;
text-align: center
}
.top .biao3{
flex: 1;
text-align: right
}
</style>
