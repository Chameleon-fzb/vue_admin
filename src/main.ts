import { createApp } from 'vue'
import ElementPlus from 'element-plus'
//引入全局样式
import '@/styles/index.scss'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//自定义插件对象,注册整个项目全局组件
import gloalComponent from '@/components'
const app = createApp(App)
app.use(gloalComponent)

app.use(ElementPlus)
app.mount('#app')
