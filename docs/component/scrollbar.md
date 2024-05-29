# 滚动条 Scrollbar
浏览器自带的滚动条太丑了。


## 基本用法
使用 `height` 属性设置滚动区域高度。
<demo src="./src/scrollbar/basic.vue"/>


## 横向滚动
组件内容的宽度超过滚动区域的宽度，就会显示横向滚动条。
<demo src="./src/scrollbar/horizontal.vue"/>


## 最大高度
使用 `max-height` 属性设置滚动区域的最大高度，超过此高度，才会显示滚动条。
<demo src="./src/scrollbar/maxheight.vue"/>


## 原生
添加 `native` 属性，将会使用美化后的原生滚动条。
<demo src="./src/scrollbar/native.vue"/>


## API

### Scrollbar 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| height | `string` | — | 滚动区域高度 |
| max-hieght | `string` | — | 滚动区域最大高度 |
| always | `boolean` | false | 是否总是显示滚动条 |
| native | `boolean` | false | 是否使用原生滚动条 |

### Scrollbar 事件
| 名称 | 说明 | 类型 |
| --- | --- | --- |
| scroll | 滚动时触发 | (scrollLeft:number, scrollTop:number) => scrollLeft && scrollTop |

### Scrollbar 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义滚动区域内容 |


## 贡献者
<member></member>