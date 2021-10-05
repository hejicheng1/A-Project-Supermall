// 提示：使用插件的时候，一般都要在入口文件main.js中引入
// 因为main.js项目运行首先运行的文件

import Vue from 'vue'
import App from './App'
// 挂载路由
import router from './router'
//下载axios模块
//导入axios模块
// import axios from 'axios'

import store from './store'

Vue.config.productionTip = false
// Vue.config.productionTip = false产品发布 如果为ture 就发布产品 用处不大

new Vue({
  el: '#app',
  router, // 引入路由
  store,
  render: h => h(App)
})


// // 网络请求的打印原来你在这
// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/m5',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata'
// }).then(res => { // then代表网络请求成功
//   console.log(res); // 成功就打印res
// })
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res=>{
//   console.log(res);
// })