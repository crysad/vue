<template>
  <header class="head">
      <a href="#"><i class="iconfont icon-artboard9-copy"></i></a>
      <input type="text" placeholder="搜索商品，共9734件商品">
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
   .head{height:43px;
        width: 100%;
        text-align: center;
        background:#fff;
        line-height: 43px;
        position: fixed!important;
        top: 0;
        left: 0;z-index: 9999;
        }
  .head input{width: 70%;height: 28px;line-height: 28px;
              background: #ededed;border-radius: 5px;
              padding-left: 50px;outline: none}
  .head i{position: relative;
          top:4px;left: 40px;
          font-size: 22px}
</style>
