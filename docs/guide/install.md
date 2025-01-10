# 快速上手
跟随以下步骤，快速上手使用组件库。

::: tip 兼容性💡
qii-ui 使用 Vue3 开发， 请在同样使用 Vue3 的项目中使用。
:::

## 安装
选择一个你喜欢的包管理器。
::: code-group
```bash [npm]
npm i qii-ui
```
```bash [yarn]
* 装修中..
```
```bash [pnpm]
* 装修中..
```
:::

## 引入
### 完整引入
如果你不在乎打包后的代码大小，那么完整引入会很方便。
```ts 
// main.ts

import Qii from 'qii-ui'
import 'qii-ui/dist/index.css'

app.use(Qii)
```

### 按需引入
支持单独引入组件使用，你可以全局安装在 Vue 中，或者在 `.vue` 文件中引入。
```ts
// main.ts

import { QButton, QIcon } from 'qii-ui'
import 'qii-ui/dist/index.css'

app.use(QButton)
app.use(QIcon)
```

## 使用
安装引入完成后，就可以在项目任意位置使用组件了，每个组件都有对应文档，请查阅 [组件介绍文档](/component/button)。
```html
<template>
  <q-button>你好，世界</q-button>
</template>
```