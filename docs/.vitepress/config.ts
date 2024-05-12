import { defineConfig } from 'vitepress'

// 插件，注册SVG图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from "path"

// 插件，markdown解析
import { applyPlugins } from '@ruabick/md-demo-plugins'


// 文档配置
export default defineConfig({
  lang: "zh-CN",
  title: "Qii-UI",
  description: "qii-ui 组件库文档",
  lastUpdated: true,

  // 配置网站根目录
  base: '/qii-ui-doc/',

  // 网站头部配置
  head: [
    ['link', { rel: 'icon', href: '/qii-ui-doc/favicon.svg' }]
  ],

  // 配置 Vite 插件
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, '../../src/svg')],
        symbolId: 'icon-[dir]-[name]',
      })
    ],
    server: {
      host: '0.0.0.0',
    }
  },

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/install', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' },
      {
        text: '0.0.2-beta',
        items: [
          { text: '更新日志', link: 'https://github.com/Qiqi29/qii-ui' },
          { text: '参与贡献', link: 'https://github.com/Qiqi29/qii-ui' }
        ]
      }
    ],

    // 搜索
    search: {
      provider: 'local',
    },

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: 'Qii UI', link: '/guide/hello' },
          ],
        },
        {
          text: '开发指南',
          items: [
            { text: '快速上手', link: '/guide/install' },
            { text: '深色主题', link: '/guide/theme' },
            { text: '内置过渡动画', link: '/guide/transition' },
            { text: '内置指令', link: '/guide/directive' },
          ],
        }
      ],
      '/component/': [
        {
          text: '通用组件',
          items: [
            { text: '按钮 Button', link: '/component/button' },
            { text: '图标 Icon', link: '/component/icon' },
            { text: '链接 Link', link: '/component/link' },
          ]
        },
        {
          text: '数据展示组件',
          items: [
            { text: '头像 Avatar', link: '/component/avatar' },
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: '输入框 Input （制作中）', link: '/component/input' },
            { text: '开关 Switch （制作中）', link: '/component/switch' },
          ]
        },
        {
          text: '布局组件',
          items: [
            { text: '间距 Space', link: '/component/space' },
          ]
        },
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qiqi29/qii-ui' }
    ],

    // 文档大纲
    outline: {
      label: '本页内容',
      level: [2, 3]
    },

    // 文档页脚按钮
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 主页页脚
    footer: {
      message: '根据 MIT 许可证发布',
      copyright: '版权所有 © 2024-至今 Qii UI'
    }
  },

  // markdown 配置
  markdown: {
    config: (md) => {
      applyPlugins(md);
    },
  },
})