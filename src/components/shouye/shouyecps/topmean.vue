<template>
    <div >
      <div class="wrapper">
          <ul class="content">
            <li @click="qieHuan(cate.id)"  v-for="(cate,index) in meanList" :key='index'>
              <router-link :to=cate.go :class="{active:index==currindex}" href="javascript:void(0)">{{cate.title}}</router-link>
            </li>
          </ul>
      </div>

       <router-view :list=data></router-view>
</div>
</template>
<script>
import data from '@/mock/data/home_data.json'
export default {
  created () {
    this.data = data.cateList[0].itemList
  },
  mounted () {
    console.log(this.curricdex)
  },
  data () {
    return {
      currindex: 0,
      meanList: [{
        go: '/shouye/tuijian',
        title: '推荐',
        id: 0
      }, {
        go: '/shouye/jujia',
        title: '居家',
        id: 1
      }, {
        go: '/shouye/jujia',
        title: '配件',
        id: 2
      }, {
        go: '/shouye/jujia',
        title: '服装',
        id: 3
      }, {
        go: '/shouye/jujia',
        title: '电器',
        id: 4
      }, {
        go: '/shouye/jujia',
        title: '洗护',
        id: 5
      }, {
        go: '/shouye/jujia',
        title: '饮食',
        id: 6
      }, {
        go: '/shouye/jujia',
        title: '餐厨',
        id: 7
      }, {
        go: '/shouye/jujia',
        title: '婴童',
        id: 8
      }, {
        go: '/shouye/jujia',
        title: '文体',
        id: 9
      }, {
        go: '/shouye/jujia',
        title: '特色区',
        id: 10
      } ]
    }
  },
  methods: {
    qieHuan (q) {
      this.currindex = q
      if (q === 0) {
        return ''
      }
      this.data = data.cateList[this.currindex - 1].itemList
    }
  }
}

</script>
<style scoped>
.wrapper{
  position: fixed;
  z-index: 999;
  top:43px;
  width: 100%;
  height: 30px;
  overflow-x: scroll;
}
.wrapper::-webkit-scrollbar {
  display:none
}
.wrapper .content{
  display: flex;
  justify-content:space-evenly;
  width: 700px;
}
.wrapper .content li{
  width: 80px;
  background-color: white;
}
.wrapper .content li a{
  margin: 0 auto;
  display: block;
    width: 44px;
  height: 30px;
  background-color: white;
  text-align: center;
  line-height: 30px;

}
.wrapper .content li a.active{
  color: #b4282d;
  border-bottom: 1px solid #b4282d;
}
</style>
