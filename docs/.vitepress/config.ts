import { defineConfig } from 'vitepress'

// 引入插件
import path from "path"                                         // 路径解析
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'    // 注册 SVG 图标
import { applyPlugins } from '@ruabick/md-demo-plugins'         // 代码演示块


// VitePress 配置
export default defineConfig({

  title: "Qii-UI",
  description: "qii-ui 组件库文档",
  lang: "zh",

  // 网站根目录，部署到 GitHub Pages 中需要用到
  base: '/qii-ui-doc/',

  // 网站头部配置，head 标签中的内容
  head: [
    ['link', { rel: 'icon', href: '/qii-ui-doc/favicon.svg' }]
  ],

  // 显示最后更新时间
  lastUpdated: true,

  // Vite 配置
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(__dirname, '../../src/svg')],
        symbolId: 'icon-[dir]-[name]',
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 5777,
    }
  },

  themeConfig: {
    // 顶栏左侧LOGO
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '指北', link: '/guide/install', activeMatch: '/guide/' },
      { text: '组件', link: '/component/button', activeMatch: '/component/' },
      {
        text: '0.0.6',
        items: [
          { text: '更新日志', link: '/guide/changelog' },
          { text: '参与贡献', link: '/' }
        ]
      }
    ],

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
          ],
        },
        {
          text: '版本',
          items: [
            { text: '更新日志', link: '/guide/changelog' },
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
          text: '布局组件',
          items: [
            { text: '间距 Space', link: '/component/space' },
          ]
        },
      ],
    },

    // 顶栏的搜索框
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 顶栏右侧社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qiqi29/qii-ui' }
    ],

    // 中文化
    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',

    // 文档大纲右侧标题
    outline: {
      label: '本页内容',
      level: [2, 3]
    },

    // 文档页脚按钮
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 文章底部最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 页脚内容
    footer: {
      message: '',
      copyright: 'Qii-UI · Made by Qiqi &nbsp;&nbsp; 根据 MIT 许可证发布'
    }
  },

  // Markdown 配置
  markdown: {
    config: (md) => {
      applyPlugins(md)
    },
  },
})
