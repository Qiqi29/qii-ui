import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入插件
import { resolve } from "path"                                // 路径处理
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'  // SVG 图标注册
import dts from "vite-plugin-dts"                             // TS 类型文件生成

// Vite 配置
export default defineConfig({
  plugins: [
    vue(),
    // 配置 SVG 图标注册插件
    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, 'src/svg')], // 存放图标的目录
      symbolId: 'icon-[dir]-[name]'              // symbolId 的格式
    }),
    // 配置需要生成的目录和 TS 配置文件
    dts({
      outDir: ['es', "lib"],
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
    })
  ],
  // 组件库打包配置
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
          format: "es",									// 打包为 ES 格式
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
  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 5178
  },
})
