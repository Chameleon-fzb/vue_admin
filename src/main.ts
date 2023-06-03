import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//
import gloalComponent from '@/components'
const app = createApp(App)
app.use(gloalComponent)

app.use(ElementPlus)
app.mount('#app')
