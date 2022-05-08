import Vue from 'vue'
import Router from 'vue-router'

import energy from '@/pages/energy'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/energy',
      name: 'Energy',
      component: energy
    }
  ]
})