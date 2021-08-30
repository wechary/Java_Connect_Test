/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: WeChary
 * @Date: 2021-08-29 22:02:13
 * @LastEditors: WeChary
 * @LastEditTime: 2021-08-29 23:02:39
 * @FilePath: \java-connect-test\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Router Modules */
import constantRoutes from './modules/constantRoutes'

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  linkActiveClass: 'active'
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
