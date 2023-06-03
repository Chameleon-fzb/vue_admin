import type { App, Component } from 'vue'
import SvgIcon from './SvgIcon/index.vue'
const components: { [name: string]: Component } = { SvgIcon }
//对外暴露插件对象
//用于注册全局组件
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
