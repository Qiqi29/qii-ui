# 图标 Icon
图标组件使用 `symbol` 格式的 SVG 图标，输入图标的名称就可以使用本地图标。

Qii-UI 使用的图标来自 [MingCute Icon](https://www.mingcute.com/) 图标库。


## 安装插件
1. 安装下面的两个插件。（用来把 SVG 图标自动注册到 HTML 中）
```bash
npm i vite-plugin-svg-icons -D
npm i fast-glob@3.x -D
```

2. 在 `main.ts` 中引入图标注册器。
```ts
import 'virtual:svg-icons-register'
```

3. 在 `vite.config.ts` 中引入插件并配置图标目录。
```ts {7-10}
// 引入图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from "path"

export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/icons')],  // 存放图标的目录
      symbolId: 'icon-[dir]-[name]'                      // symbolId 的格式
    })
  ]
})
```

4. 配置完成后，把你的图标放入设置的目录 `src/icons` 里面，就可以使用啦！
```
src
 └─ icons
      ├─ add.svg
      ├─ star.svg
      └─ more.svg
```


## 使用图标
在组件的 `name` 属性中填入图标文件的名称，即可使用图标。
<qii-demo src="./demo/icon/basic.vue"/>


## 颜色与大小
使用 `color` 和 `size` 属性设置图标的颜色和大小。
<qii-demo src="./demo/icon/color.vue"/>


## 旋转状态
添加 `spin` 属性可以让图标旋转起来。也可以使用 `rotate` 属性自定义旋转角度。
<qii-demo src="./demo/icon/spin.vue"/>


## 自定义图标
默认插槽中可以传入 SVG 代码来自定义图标。
<qii-demo src="./demo/icon/svg.vue"/>


## API
### Icon 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name    | `string`  | —             | 图标名 |
| color   | `string`  | currentColor  | 图标颜色 |
| size    | `string`  | 1.5em         | 图标大小 |
| spin    | `boolean` | false         | 图标是否为旋转状态 |
| rotate  | `number`  | 0             | 自定义旋转角度 |

### Icon 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义图标 |
