import DefaultTheme from 'vitepress/theme'
import './style.css'

// 引入插件
import 'virtual:svg-icons-register'                     // SVG图标注册器

// 引入组件库
import Qii from '../../../packages/index'
import '../../../packages/styles/index.scss'

// 引入自定义组件
import Member from '../extendTheme/Member.vue'          // 团队成员组件
import DemoBlock from '@ruabick/vitepress-demo-block'   // 代码演示块组件
import '@ruabick/vitepress-demo-block/dist/style.css'   // 代码演示块样式
import Layout from '../extendTheme/Layout.vue'          // 自定义布局组件

// VitePress 主题配置
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(Qii)
    app.component('Member', Member);
    app.component('demo', DemoBlock);
  },
}
