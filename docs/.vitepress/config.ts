import { defineConfig } from 'vitepress'


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

  // 主题配置
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/component/button' },
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
          text: '开发指南',
          items: [
            { text: '快速上手', link: '/guide/install' },
            { text: '深色模式', link: '/guide/theme' }
          ],
        }
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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

    // 主页页脚
    footer: {
      message: '根据 MIT 许可证发布。',
      copyright: '版权所有 © 2024-至今 Qii UI'
    }
  }
})