# 标签 Tag
长得像按钮，用着不像按钮。


## 样式
使用 `type` 属性改变标签类型。

添加 `bordered` 属性 **显示边框**，添加 `round` 属性更改为 **圆角样式**，添加 `fill` 属性可以 **填充背景**。
<demo src="./src/tag/type.vue"/>


## 大小
使用 `size` 属性改变标签的大小，提供 `small`、`medium`、`large` 三种尺寸。
<demo src="./src/tag/size.vue"/>


## 图标
使用 `icon` 属性或同名插槽自定义标签的图标。
<demo src="./src/tag/icon.vue"/>


## 颜色
使用 `color` 属性自定义标签的配色，传入一个对象，定义各部分的颜色。
<demo src="./src/tag/color.vue"/>


## 可关闭
通过 `closable` 属性控制标签是否可关闭。
<demo src="./src/tag/closable.vue"/>


## 动态编辑标签
通过 `close` 触发事件来动态编辑标签。
<demo src="./src/tag/edit.vue"/>


## 加载中
添加 `loading` 属性，标签会显示为加载状态。
<demo src="./src/tag/loading.vue"/>


## 禁用
添加 `disabled` 属性，标签会被禁用。
<demo src="./src/tag/disabled.vue"/>


## API

### Tag 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `string` | premary | 标签类型 |
| size | `string` | medium | 标签大小 |
| icon | `string` | — | 标签图标 |
| color | `object` | — | 自定义颜色 |
| bordered | `boolean` | false | 是否显示边框 |
| round | `boolean` | false | 是否为圆角样式 |
| fill | `boolean` | false | 是否填充背景色 |
| fill | `boolean` | false | 是否填充背景色 |
| closable | `boolean` | false | 标签是否可以关闭 |
| loading | `boolean` | false | 标签是为加载状态 |
| disabled | `boolean` | false | 标签是否禁用 |

### Tag 事件
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签调用 | (event: MouseEvent) => void |
| close | 点击关闭按钮调用 | (event: MouseEvent) => void |

### Tag 插槽
| 名称 | 说明 |
| --- | --- |
| default | 标签文案 |
| icon | 标签左侧图标 |

## 贡献者
<member></member>

