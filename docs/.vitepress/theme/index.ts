import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// 样式文件
import './styles/main.css'
import './styles/home.css'

// SVG 图标注册器
import 'virtual:svg-icons-register'

// 引入组件库
import QiiUI from '../../../packages/index'
import '../../../packages/styles/index.scss'

// 自定义组件
import MyLayout from '../theme/components/MyLayout.vue'
import Member from '../theme/components/Member.vue'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'


// VitePress 主题和布局配置
export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    enhanceApp({ app, router, siteData }) {
        app.use(QiiUI)
        app.component('member', Member)
        app.component('demo', DemoBlock)
    }
} satisfies Theme
