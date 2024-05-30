# 图标 Icon
图标组件使用 `symbol` 格式的 SVG 图标，因此你可以很方便的自定义图标。

Qii-UI 推荐使用 [MingCute Icon](https://www.mingcute.com/) 图标库。


## 插件配置
1. 安装图标插件，插件会把 SVG 文件自动注册到 HTML 文档中。
```bash
npm i vite-plugin-svg-icons -D
npm i fast-glob -D
```

2. 在 `vite.config.ts` 中引入插件并配置目录。
```ts
// 引入图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from "path"

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [resolve(__dirname, 'src/svg')], // 存放图标的目录
      symbolId: 'icon-[dir]-[name]'              // symbolId 的格式
    })
  ]
})
```

3. 在入口文件 `main.ts` 中引入图标注册器。
```ts
import 'virtual:svg-icons-register'
```


## 使用图标

在 `name` 属性中填入图标文件的名称，即可使用相应图标。

<demo src="./src/icon/use.vue"/>


## 颜色与大小
通过 `color` 和 `size` 属性可以设置图标的颜色和大小。
<demo src="./src/icon/color.vue"/>


## 自定义图标
默认插槽中可以传入 SVG 代码（需设置 SVG 的 viewBox 属性）。
<demo src="./src/icon/svg.vue"/>


## 旋转状态
添加 `spin` 属性，可以将图标设置为旋转状态。或者使用 `rotate` 属性自定义旋转角度。
<demo src="./src/icon/spin.vue"/>



## API
### Icon 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | `string` | — | 图标名 |
| color | `string` | 继承颜色 | 图标颜色 |
| size | `string` | 继承字体大小 | 图标大小 |
| spin | `boolean` | false | 图标是否为旋转状态 |
| rotate | `number` | 0 | 图标的旋转角度 |

### Icon 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义图标代码 |


## 贡献者
<member></member>