---
# 标签页上显示的标题
title: 一个 Vue3 组件库

# 布局样式
layout: home

# 首页内容配置
hero:
  name: Qii-UI
  text: 大道至简
  tagline: 轻量级、现代化的 Vue3 组件库。
  image:
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 开始使用
      link: /guide/install
    - theme: alt
      text: 阅读组件文档
      link: /component/button

# 卡片列表
features:
  - icon: ⬆️
    title: TypeScript
    details: 使用TS开发，类型安全。
  - icon: 🚀
    title: 小，更小
    details: 支持按需引入，减少代码体积。
  - icon: ✨
    title: 外观
    details: 简洁、现代化的设计，各种场景都能胜任。
---


<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    name: '琦琦',
    title: '创建者',
    avatar: 'https://avatars.githubusercontent.com/u/112358908?v=4',
    links: [
      { icon: 'github', link: 'https://github.com/Qiqi29' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/401652755' }
    ]
  },
]
</script>

<br><br><br>

# 开发团队

现在只有我一个人 QAQ

<VPTeamMembers size="medium" :members="members" />