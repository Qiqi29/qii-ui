import { createApp } from 'vue'
import App from './App.vue'

import Qii from '../packages/index'
import '../packages/index.scss'

const app = createApp(App)
app.use(Qii)
app.mount('#app')
