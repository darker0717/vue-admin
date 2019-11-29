/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/login'

Vue.use(Router)

var router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    }, {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: HelloWorld,
      redirect: '/index/index',
      children: [{
        path: '/index/index',
        name: '数据统计',
        props: true,
        component: () => import('../pages/statistics/index.vue')
      }]
    }
  ]
})
export default router
