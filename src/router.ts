import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Section from '@/views/Section.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/partition/:section',
      name: 'section',
      component: Section
    }, {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue')
    }, {
      path: '/err/404',
      name: 'notfound',
      //                          ↓命名chunk↓
      component: () => import(/* webpackChunkName: "group-err" */ '@/views/errpage/NotFound.vue')
    }, {
      path: '*',
      redirect: { name: 'notfound' }
    }
  ],
  linkActiveClass: 'nav-tab-active',
  scrollBehavior(to, from, savedPosition) {
    const outer = ['/user', '/err'].some(it => {
      return to.path.startsWith(it)
    })
    console.log(savedPosition)
    return outer ? { x: 0, y: 278 } : (savedPosition || { x: 0, y: 0 })
  }
})

router.beforeEach((to, from, next) => {
  if(to.path.startsWith('/user')) {
    // check if login
  }
  next()
})

export default router
