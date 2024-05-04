import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// 用于注册SVG图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 路径模块
import { resolve } from "path"

// Vite 配置
export default defineConfig({
  plugins: [
    vue(),
    // 自动处理 SVG 图标的引入和注册
    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, 'src/svg')], // 存放svg图标的目录
      symbolId: 'icon-[dir]-[name]'              // 配置symbolId格式
    }),
  ],
})
