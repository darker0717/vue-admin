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
        },
        {
          path: '/data/index',
          name: '数据图表',
          props: true,
          component: () => import('../pages/statistics/data.vue')
        }
      ]
    }
  ]
})
//解决路由不协调报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default Routers
