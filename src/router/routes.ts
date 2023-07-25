import { RouteRecordRaw } from 'vue-router'
export const constantRoutes: RouteRecordRaw[] = [
  {
    //登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
    },
  },
  {
    //home
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'Home',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/layout/index.vue'),
      },
    ],
  },
  {
    //404
    path: '/404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
