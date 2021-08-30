/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: WeChary
 * @Date: 2021-08-29 23:07:58
 * @LastEditors: WeChary
 * @LastEditTime: 2021-08-29 23:26:20
 * @FilePath: \java-connect-test\src\network\home.js
 */
import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: '/getHelloWorld'
  })
}
