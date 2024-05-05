# 使用
安装完成了？快快开始使用吧！


## 完整引入
如果你不在乎打包后的代码大小，那么完整引入会很方便。
```ts
// main.js/main.ts
import { createApp } from 'vue'

import Qii from 'qii-ui'
import 'qii-ui/dist/index.css'

const app = createApp(App)
app.use(Qii)
```


## 按需导入
如果使用单文件组件（SFC），可以选择直接引入或全局安装在 Vue 中。

```ts
// main.js/main.ts
import { createApp } from 'vue'

// 引入需要的组件
import { QButton, QIcon } from 'qii-ui'
import 'qii-ui/dist/index.css'

const app = createApp(App)
app.use(QButton)
app.use(QIcon)
```

## 开始使用
安装引入完成后，就可以在项目任意位置使用组件了，每个组件都有对应文档，请查阅 [组件介绍文档](/component/button)。
```html
<template>
  <q-button>你好世界</q-button>
</template>
```
