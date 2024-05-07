/**
 * @file Vite 配置文件
 * 配置插件、打包，和需要在构建之前处理的任务
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// 用于注册SVG图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from "path"
// 生成类型声明文件
import dts from "vite-plugin-dts"


// Vite 配置
export default defineConfig({
  plugins: [
    vue(),
    // 自动处理 SVG 图标的引入和注册
    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, 'src/svg')], // 存放svg图标的目录
      symbolId: 'icon-[dir]-[name]'              // 配置symbolId格式
    }),
    // 生成类型声明文件
    dts({
      outDir: ['es', "lib", 'dist/@types'],
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    })
  ],
  // 打包配置
  build: {
    lib: {
      name: 'qii-ui',                   // 组件库名称
      entry: "./packages/index.ts",     // 组件库的入口文件
    },
    rollupOptions: {
      external: ["vue"],								// 声明外部依赖，不会被打包
      input: './packages/index.ts',			// 组件库的入口文件
      output: [
        {
          format: "es",									// 打包为 es 格式
          entryFileNames: "[name].mjs",	// 文件名格式
          preserveModules: true,				// 保留原文件结构
          exports: "named",							// 使用具名导出
          dir: "es",										// 打包后的文件位置
        },
        {
          format: "cjs",								// 打包为 CommonJS 格式
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: "lib",
        },
      ],
    }
  },
})
