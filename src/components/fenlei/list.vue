<template>
<div class="warp">
      <div class="content-l">
        <ul>
            <li @click=qiehuan(cate.id)  v-for="(cate,index) in leftData" :key="index">
              <router-link :to=cate.path  :class="{active:index==currindex}">{{cate.title}}</router-link>
            </li>
        </ul>

      </div>
      <router-view></router-view>
      </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      currindex: 0,
      leftData: [
        {title: '推荐专区',
          path: '/fenlei/tuijian',
          id: 0},
        {title: '夏季专区',
          path: '/fenlei/xiaji',
          id: 1},
        {title: '个性专区',
          path: '/fenlei/gexing',
          id: 2},
        {title: '居家',
          path: '/fenlei/jujia',
          id: 3},
        {title: '配件',
          path: '/fenlei/peijian',
          id: 4},
        {title: '服装',
          path: '/fenlei/fuzhuang',
          id: 5},
        {title: '电器',
          path: '/fenlei/dianqi',
          id: 6},
        {title: '洗护',
          path: '/fenlei/xihu',
          id: 7},
        {title: '饮食',
          path: '/fenlei/yinshi',
          id: 8},
        {title: '餐厨',
          path: '/fenlei/canchu',
          id: 9},
        {title: '婴童',
          path: '/fenlei/yingtong',
          id: 10},
        {title: '文体',
          path: '/fenlei/wenti',
          id: 11},
        {title: '特色区',
          path: '/fenlei/tese',
          id: 12}
      ],
      listUrl: []
    }
  },
  methods: {
    qiehuan (q) {
      this.currindex = q
    }
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll('.content-l', {
      click: true
    })
  }
}
</script>

<style scoped>
  .warp{
     display: flex;height:630px;background: #fff;box-sizing: border-box;overflow: hidden;padding: 50px 0;
  }
    .content-l{width:100%; text-align: center; vertical-align: middle;}
     .content-l ul{height: 650px}
     .content-l li a{display: block;line-height: 50px;font-size: 14px;width: 80px;}
     .content-l li a.active{color: #b4282d;font-size: 16px}
     .content-l{height: 574px;width: 80px}
     .content-l ul::before{content: '';display: block;position: absolute;
     z-index: 99;right: 0;top: 0;width: 1px;height: 100%;background-color:#ededed;}
</style>
