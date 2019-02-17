<template>
  <div>
    <toubu></toubu>

       <navlist></navlist>
  </div>
</template>

<script>
import tuijian from '@/components/fenlei/tuijian.vue'
import toubu from '@/components/fenlei/head.vue'
import navlist from '@/components/fenlei/list.vue'
export default {
  data () {
    return {
      currindex: 0
    }
  },
  components: {
    toubu,
    navlist,
    tuijian
  }
}
</script>

<style scoped>
  .content{display: flex;height:574px;padding-top: 50px;background: #fff;box-sizing: border-box;}
</style>
