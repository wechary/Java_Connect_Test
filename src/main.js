/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: WeChary
 * @Date: 2021-08-29 21:56:31
 * @LastEditors: WeChary
 * @LastEditTime: 2021-08-29 22:02:56
 * @FilePath: \java-connect-test\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})