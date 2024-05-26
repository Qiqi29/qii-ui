import { createApp } from 'vue'
import App from './App.vue'

// 引入SVG图标注册器
import 'virtual:svg-icons-register'

// 引入组件库
import { QButton, QIcon } from '../packages/index'
import '../packages/styles/index.scss'

const app = createApp(App)
app.use(QButton)
app.use(QIcon)
app.mount('#app')
