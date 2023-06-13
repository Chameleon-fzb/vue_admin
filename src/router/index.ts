import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
import { getToken } from '@/utils/user'
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})
// 路由权限
router.beforeEach((to) => {
  const token = getToken()
  if (to.path.startsWith('/home')) {
    console.log('未登录')
    if (!token) {
      return '/login'
    }
  }
})
export default router
