# 快速上手
跟随以下步骤，快速上手使用组件库。


## 兼容性
qii-ui 使用 Vue3 开发， 请在使用 Vue3 创建的项目中安装使用。


## 安装
使用 npm 包管理器快速安装组件库。
```bash
npm i qii-ui
```

## 引入

### 完整引入
如果你不在乎打包后的代码大小，那么完整引入会很方便。
```ts
// main.ts

// 引入组件库和样式
import Qii from 'qii-ui'
import 'qii-ui/dist/index.css'

app.use(Qii)
```


### 按需引入
如果使用单文件组件（SFC），可以选择直接引入或全局安装在 Vue 中。

```ts
// main.ts

// 引入需要的组件
import { QButton, QIcon } from 'qii-ui'
import 'qii-ui/dist/index.css'

app.use(QButton)
app.use(QIcon)
```

## 使用
安装引入完成后，就可以在项目任意位置使用组件了，每个组件都有对应文档，请查阅 [组件介绍文档](/component/button)。
```html
<template>
  <q-button>你好世界</q-button>
</template>
```