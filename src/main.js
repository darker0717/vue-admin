// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  post,
  get
} from "./components/axios/index";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './index.less'
import './util/rem'
import echarts from 'echarts'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$echarts = echarts
Vue.prototype.$get = get;
Vue.prototype.$post = post;

/* eslint-disable no-new */

// const originalPush = Routers.prototype.push
// Routers.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
