import { defineStore } from 'pinia'
// 引入操作token本地化存储的方法
import { getToken, setToken } from '@/utils/user'
// 引入接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
//引入路由(常量路由)
import { constantRoutes } from '@/router/routes'
//创建用户仓库
export const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: getToken(),
      menuRoutes: constantRoutes,
    }
  },
  actions: {
    //用户登录
    async userLogin(data: loginFormData) {
      const result: loginResponseData = await reqLogin(data)
      if (result.code === 200) {
        const token = result.data.token as string
        this.token = token
        setToken(token)
        return true
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
