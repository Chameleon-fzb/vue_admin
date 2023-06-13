import { createApp } from 'vue'
import ElementPlus from 'element-plus'
//引入全局样式
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
import router from '@/router'
//自定义插件对象,注册整个项目全局组件
import gloalComponent from '@/components'
import piain from '@/store'
const app = createApp(App)
app.use(gloalComponent)
//注册仓库
app.use(piain)
//注册路由
app.use(router)
//全局引入elementplus
app.use(ElementPlus)
app.mount('#app')
