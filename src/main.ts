import { createApp } from 'vue'
import App from './App.vue'


// 引入SVG图标注册器
import 'virtual:svg-icons-register'


// 引入组件库
import { QButton } from '../packages/index'
import '../packages/index.scss'

const app = createApp(App)
app.use(QButton)
app.mount('#app')
