<template>
<div class="wrapper">
  <ul class="contents">
      <li class="item" v-for="(essay,index) in column" :key="index">
          <div class="essay-num">{{essay.articleCount}}</div>
          <img v-lazy="essay.picUrl" alt="">
          <p >{{essay.title}}</p>
      </li>
  </ul>

</div>
</template>

<script>
import data from '@/mock/data/shiwu_data.json'
export default {
  created () {
    this.column = data.column
  },
  components: {
  },
  data () {
    return {
      column: []
    }
  }
}
</script>

<style>
.wrapper{
    width: 375px;
    height: 145px;
    overflow-x: scroll;
}
::-webkit-scrollbar {
/*隐藏滚轮*/
display: none;
}
.contents{
    width: 760px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
}
.contents .item{
    width: 94px;
    text-align: center;
    position: relative;
}
.contents .item .essay-num{
    width: 68px;
    height: 16px;
    line-height: 16px;
    text-align: right;
position: absolute;
font-size: 13px;
right: 5px;
color: white;
background: rgba(0, 0, 0, 0.1);
border-radius: 5px;
top: 0;
}
.contents .item img{
    width: 82px;
    height: 82px;
}
.contents .item p{
    font-size: 13px;
    font-weight: 400;
    color: rgb(51, 51, 51);
    height: 24px;
    line-height: 24px
}

</style>
