import { createApp } from 'vue'
import App from './App.vue'


// 引入SVG图标注册器
import 'virtual:svg-icons-register'


import Qii from '../packages/index'
import '../packages/index.scss'

const app = createApp(App)
app.use(Qii)
app.mount('#app')
