import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import {
  MyIndex,
  ToPay
} from '../view/index'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'myIndex',
      component: MyIndex
    },
    {
      path: '/toPay',
      name: 'toPay',
      component: ToPay
    }
  ]
})
