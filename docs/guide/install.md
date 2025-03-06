# 快速上手
跟随以下步骤，快速安装使用组件库。

::: tip 兼容性
Qii UI 使用 Vue3 开发， 请在同样使用 Vue3 的项目中使用。
:::


## 安装
选择一个你喜欢的包管理器。

::: warning 开发中
组件库目前正在缓慢开发中，组件数量也不多，不推荐在正式项目中使用。
:::

::: code-group
```sh [npm]
npm install qii-ui
```
```sh [yarn]
* 施工中..
```
```sh [pnpm]
* 施工中..
```
:::


## 引入

### 按需引入 <Badge type="tip" text="推荐" />
支持单独引入需要的组件，你可以全局安装在 Vue 中，或者在 vue 组件中引入。
```ts
// main.ts
import { QButton, QIcon } from 'qii-ui'
import 'qii-ui/dist/index.css'

app.use(QButton)
app.use(QIcon)
```

### 完整引入
当然也可以一次性引入所有组件（如果你不在乎打包后的体积）
```ts 
// main.ts
import QiiUI from 'qii-ui'
import 'qii-ui/dist/index.css'

app.use(QiiUI)
```


## 使用
引入完成后，就可以在项目中使用组件啦！继续查看 [组件介绍文档](/component/button)。
```html
<template>
  <q-button>你好，世界</q-button>
</template>
```