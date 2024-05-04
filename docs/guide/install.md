# 快速上手
::: tip
Vue 版本 >= 3.2.0
:::

## 安装
使用 npm 包管理器安装。
```bash
npm i qii-ui -D
```

## 使用

### 完整引入
如果你不在乎打包后的代码大小，那么完整引入会很方便。
```js
// maim.js
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库和样式
import Qii from 'qii-ui'
import 'qii-ui/dist/index.css'

// 注册组件库
const app = createApp(App)
app.use(Qii)
app.mount('#app')
```

### 按需导入
如果使用单文件组件（SFC），可以选择直接引入或全局安装在 Vue 中。

```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入需要的组件和样式
import { QButton, QIcon } from 'qii-ui'
import 'qii-ui/dist/index.css'

// 注册组件
const app = createApp(App)
app.use(QButton)
app.use(QIcon)
app.mount('#app')
```

安装后，就可以在项目中使用组件了：
```html
<template>
  <q-button>你好世界</q-button>
</template>
```
