import {
  baseUrl,
  socketUrl
} from "./env"; //引入baseUrl
import axios from 'axios';
import qs from 'qs' //  qs 是 axios 的依赖包
axios.defaults.timeout = 30000; //设置请求时间
axios.defaults.baseURL = baseUrl; //设置默认接口地址
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'; //配置请求头
// axios.defaults.headers.common['token'] = ''

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
// 表示跨域请求时，使用凭证 允许后台在header响应头中带参数接收 这样就可以保证token一致
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem("LoginToken");
  if (token) {
    // 把token加入到默认请求参数中
    config.headers.common['api-token'] = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // stort.commit('del_token')
        // router.replace({
        // 	path: '/login',
        // 	query: {
        // 		redirect: router.currentRoute.fullPath
        // 	}
        // })
      case 403:
        layui.use("layer", function () {
          var layer = layui.layer;
          layer.msg('你没有权限!', {
            icon: 5
          })
        })

    }
  }
  return Promise.reject(error);
});

export function get(url, params = {}) {
  // params.token = sessionStorage.getItem("LoginToken");
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
// qs.stringify 发送的数据进行序列化
export function post(url, params = {}) {
  // params.token = sessionStorage.getItem("LoginToken"); //token
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
