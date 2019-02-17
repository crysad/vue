<template>
<div class="root lala">
  <!--footer -->
      <footNav></footNav>
      <router-view></router-view>
  </div>

</template>

<script>
import footNav from '@/components/footNav.vue'
export default {
  name: 'App',
  components: {
    footNav
  }
}
</script>
<style>
  .lala{
    padding-bottom: 50px;
  }
  #newpin>.new-t{
    background: url('../static/imgs/bg_new.png')
  }
   #popular>.new-t{
    background: url('../static/imgs/bg_populay.png')
  }
</style>
