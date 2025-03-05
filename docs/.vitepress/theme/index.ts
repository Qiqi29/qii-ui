import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// 样式文件
import 'nprogress/nprogress.css'
import './styles/main.css'
import './styles/home.css'

// SVG 图标注册器
import 'virtual:svg-icons-register'

// 引入组件库
import QiiUI from '../../../packages/index'
import '../../../packages/styles/index.scss'

// 引入自定义组件
import MyLayout from './components/MyLayout.vue'
import Member from './components/Member.vue'
import QiiDemo from './components/Demo.vue'

// VitePress 主题和布局配置
export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.use(QiiUI)
    app.component('member', Member)
    app.component('qii-demo', QiiDemo)
  }
} satisfies Theme
