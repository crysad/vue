<template>
    <div class="main">
      <!-- 头部搜索 -->
        <headtop></headtop>
        <topmean></topmean>
    </div>
</template>

<script>
import headtop from '@/components/shouye/shouyecps/headtop.vue'
import topmean from '@/components/shouye/shouyecps/topmean.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    headtop,
    topmean
  }
}
</script>

<style scpoed>
 .main{
   padding-bottom: 0px;
 }
</style>
