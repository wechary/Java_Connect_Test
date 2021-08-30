/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: WeChary
 * @Date: 2021-08-29 22:02:13
 * @LastEditors: WeChary
 * @LastEditTime: 2021-08-29 22:59:04
 * @FilePath: \java-connect-test\src\router\modules\constantRoutes.js
 */
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

const constantRoutes = [
  {
    path: '',
    redirect: '/HelloWorld',
  },
  {
    path: '/HelloWorld',
    component: () => import('@/views/HelloWorld'),
    name: 'HelloWorld',
    meta: { title: 'HelloWorld', icon: 'HelloWorld', affix: true }
  }
]

export default constantRoutes
