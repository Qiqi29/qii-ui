// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

// 引入组件库
import Qii from '../../../es/index.mjs'
import '../../../dist/index.css'

// 引入SVG图标注册器
import 'virtual:svg-icons-register'

// demo 演示插件
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(Qii)
    app.component('demo', DemoBlock);
  },
}
