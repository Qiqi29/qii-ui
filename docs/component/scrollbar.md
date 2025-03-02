# 滚动条 Scrollbar
其实浏览器自带的滚动条也很好用。


## 基本用法
使用 `height` 属性设置滚动区域的高度。
<demo src="./demo/scrollbar/basic.vue"/>


## 横向滚动
内容的宽度超过滚动区域的宽度，就会显示横向滚动条。
<demo src="./demo/scrollbar/horizontal.vue"/>


## 最大高度
使用 `max-height` 属性设置滚动区域的最大高度，超过此高度才会显示滚动条。
<demo src="./demo/scrollbar/maxheight.vue"/>


## 原生滚动条
如果你担心计算的滚动条可能会有问题，可以添加 `native` 属性，将会使用原生滚动条。
<demo src="./demo/scrollbar/native.vue"/>


## API

### Scrollbar 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height      | `string`  | —     | 滚动区域高度 |
| max-hieght  | `string`  | —     | 滚动区域最大高度 |
| always-show | `boolean` | false | 是否总是显示滚动条 |
| native      | `boolean` | false | 是否使用原生滚动条 |

### Scrollbar 事件
| 名称 | 说明 | 类型 |
| --- | --- | --- |
| scroll | 滚动时触发 | `(scrollTop: number, scrollLeft: number) => void` |

### Scrollbar 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义滚动区域内容 |