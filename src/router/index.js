import Vue from 'vue'
import Router from 'vue-router'
// 导入五个大页面
import shouye from '@/components/shouye/shouye.vue'
import shiwu from '@/components/shiwu/shiwu.vue'
import fenlei from '@/components/fenlei/fenlei.vue'
import gouwuche from '@/components/gouwuche/gouwuche.vue'
import geren from '@/components/geren/geren.vue'
import tuijian from '@/components/shouye/shouyecps/tuijian/tuijian.vue'
import xiaji from '@/components/fenlei/xiaji.vue'
import gexing from '@/components/fenlei/gexing.vue'
import jujia from '@/components/shouye/shouyecps/jujia/jujia.vue'
import peijian from '@/components/fenlei/peijian.vue'
import fuzhuang from '@/components/fenlei/fuzhuang.vue'
import dianqi from '@/components/fenlei/dianqi.vue'
import xihu from '@/components/fenlei/xihu.vue'
import yinshi from '@/components/fenlei/yinshi.vue'
import canchu from '@/components/fenlei/canchu.vue'
import yingtong from '@/components/fenlei/yingtong.vue'
import wenti from '@/components/fenlei/wenti.vue'
import tese from '@/components/fenlei/tese.vue'
import tuijian0 from '@/components/fenlei/tuijian.vue'
import jujia0 from '@/components/fenlei/jujia.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/shouye',
    component: shouye,
    children: [{
      path: 'tuijian',
      name: 'tuijian',
      component: tuijian
    },
    {
      path: 'jujia',
      name: 'jujia',
      component: jujia
    }
    ]
  },
  {
    path: '/shiwu',
    component: shiwu
  },
  {
    path: '/fenlei/',
    component: fenlei,
    children: [{
      path: 'xiaji',
      component: xiaji
    },
    {
      path: 'tuijian',
      component: tuijian0
    },
    {
      path: 'gexing',
      component: gexing
    },
    {
      path: 'jujia',
      component: jujia0
    },
    {
      path: 'peijian',
      component: peijian
    },
    {
      path: 'fuzhuang',
      component: fuzhuang
    },
    {
      path: 'dianqi',
      component: dianqi
    },
    {
      path: 'xihu',
      component: xihu
    },
    {
      path: 'yinshi',
      component: yinshi
    },
    {
      path: 'canchu',
      component: canchu
    },
    {
      path: 'yingtong',
      component: yingtong
    },
    {
      path: 'wenti',
      component: wenti
    },
    {
      path: 'tese',
      component: tese
    }
    ]
  },
  {
    path: '/gouwuche',
    component: gouwuche
  },
  {
    path: '/geren',
    component: geren
  },
  {
    path: '*',
    redirect: '/shouye/tuijian'
  }
  ]
})
