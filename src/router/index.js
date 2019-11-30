import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/index.vue'
import Login from '../pages/login'

Vue.use(Router)

var Routers = new Router({
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
      component: Layout,
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
export default Routers
