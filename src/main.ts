import { createApp } from 'vue'
import App from './App.vue'

// SVG 图标注册器
import 'virtual:svg-icons-register'

// 引入组件库（用来测试组件）
import QiiUI from '../packages/index'
import '../packages/styles/index.scss'

const app = createApp(App)
app.use(QiiUI)
app.mount('#app')
