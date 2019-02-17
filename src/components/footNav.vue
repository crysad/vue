  <template>
  <ul id="nav-shouye">
      <router-link to='/shouye/tuijian' class="item">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
      </router-link >
      <router-link to='/shiwu' class="item">
          <i class="iconfont icon-square-two"></i>
          <span>识物</span>
      </router-link>
      <router-link to='/fenlei/tuijian' class="item">
          <i class="iconfont icon-category"></i>
          <span>分类</span>
      </router-link>
      <router-link to='/gouwuche' class="item">
          <i class="iconfont icon-cart"></i>
          <span>购物车</span>
      </router-link>
      <router-link to='/geren' class="item">
          <i class="iconfont icon-icon-personal-default"></i>
          <span>个人</span>
      </router-link>
  </ul>
</template>
<script>
export default {

}
</script>

<style scoped>
 #nav-shouye {
     z-index: 999;
    display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fafafa;
  border-top: 1px solid #d9d9d9;
  /* color: #333; */
}
 #nav-shouye a{
     flex: 1;
     display: flex;
     flex-direction: column;
    /* text-align: center; */
    justify-content: center;
     align-items: center;
    padding: 1px auto;
 }
 #nav-shouye .item i{font-size: 20px}
#nav-shouye .item span{font-size: 12px;}
a.router-link-exact-active  i{

  color: #e9232c;
}
a.router-link-exact-active  span{
  color: #e9232c;
}
</style>
