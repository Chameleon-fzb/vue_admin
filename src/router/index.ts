import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
import { getToken } from '@/utils/user'
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})
// 路由权限
router.beforeEach((to, from) => {
  const token = getToken()
  if (!token) {
    if (to.path.startsWith('/home')) {
      return '/login'
    }
  } else {
    if (to.path.startsWith('/login')) {
      console.log('已登录,返回来时页面', from.path)
      return from.path
    }
  }
})
export default router
