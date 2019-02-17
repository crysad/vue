<template>
<div class="tuijian">
    <weinituijian2 :msg='data'></weinituijian2>
    <weinituijian3 :msg='data2'></weinituijian3>
      <weinituijian3 :msg='data3'></weinituijian3>
</div>
</template>

<script>
import weinituijian2 from '@/components/shiwu/weinituijian2.vue'
import weinituijian3 from '@/components/shiwu/weinituijian3.vue'
export default {
  props: ['data', 'data2', 'data3'],

  components: {
    weinituijian2,
    weinituijian3
  }
}
</script>

<style scoped>
.tuijian{
    margin-top: 10px;
    background: #fff;
    color: #333;
    padding-bottom: 20px;
}

</style>
