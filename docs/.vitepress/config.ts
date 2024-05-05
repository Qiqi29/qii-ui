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
  base: '/',

  // 网站头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, '../../src/svg')],
        symbolId: 'icon-[dir]-[name]',
      })
    ]
  },

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/install', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' },
      {
        text: '0.0.1-beta',
        items: [
          { text: '更新日志', link: '/1' },
          { text: '参与贡献', link: '/2' }
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
          text: '快速上手',
          items: [
            { text: '安装', link: '/guide/install' },
            { text: '使用', link: '/guide/start' },
          ],
        },
        {
          text: '指南',
          items: [
            { text: '深色主题', link: '/guide/theme' }
          ],
        },
      ],
      '/component/': [
        {
          text: '通用',
          items: [
            { text: '按钮 Button', link: '/component/button' },
            { text: '图标 Icon', link: '/component/icon' },
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: '头像 Avatar', link: '/component/avatar' },
          ]
        },
        {
          text: '布局',
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
      message: '根据 MIT 许可证发布。',
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