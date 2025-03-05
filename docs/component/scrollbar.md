# 滚动条 Scrollbar
比浏览器原生滚动条好看点，但我保证绝对没他可靠。


## 基本用法
使用 `height` 属性设置滚动区域的高度。点击滚动条轨道可以快速滚动，
<qii-demo src="./demo/scrollbar/basic.vue"/>


## 横向滚动
内容的宽度超过滚动区域的宽度时，就会显示横向滚动条。
<qii-demo src="./demo/scrollbar/horizontal.vue"/>


## 最大高度
使用 `max-height` 属性设置滚动区域的最大高度，超过此高度才会显示滚动条。
<qii-demo src="./demo/scrollbar/maxheight.vue"/>


## 原生滚动条
添加 `native` 属性，将会使用原生滚动条。
<qii-demo src="./demo/scrollbar/native.vue"/>


## API

### Scrollbar 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height      | `string`  | —     | 滚动区域高度 |
| max-hieght  | `string`  | —     | 滚动区域最大高度 |
| always-show | `boolean` | false | 是否总是显示滚动条 |
| native      | `boolean` | false | 是否使用原生滚动条 |

### Scrollbar 事件
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| scroll | 滚动时触发 | `(scrollTop: number, scrollLeft: number) => void` |

### Scrollbar 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义滚动区域内容 |