import type { RouteRecordRaw } from 'vue-router'
//定义小仓库的数据state类型
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
}
