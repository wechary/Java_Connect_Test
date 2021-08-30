/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: WeChary
 * @Date: 2021-08-29 23:05:33
 * @LastEditors: WeChary
 * @LastEditTime: 2021-08-29 23:26:14
 * @FilePath: \java-connect-test\src\network\request.js
 */
import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
