// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 引入SVG图标注册器
import 'virtual:svg-icons-register'


// 引入组件库
import Qii from '../../../packages/index'
import '../../../packages/styles/index.scss'

// 引入自定义组件
import Member from '../extendTheme/Member.vue'

// 引入 demo 演示插件
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'

// 引入自定义布局组件
import Layout from './layout.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(Qii)
    app.component('Member', Member);
    app.component('demo', DemoBlock);
  },
}
