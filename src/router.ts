import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }, {
      path: '/err/404',
      name: 'notfound',
      component: () => import('@/views/errpage/NotFound.vue')
    }, {
      path: '*',
      redirect: { name: 'notfound' }
    }
  ],
  linkActiveClass: 'nav-tab-active',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
