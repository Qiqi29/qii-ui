# 按钮 Button
这是什么？按一下。这是什么？按一下...


## 样式
使用 `type` 属性改变按钮颜色。使用 `plain` 指定为二级按钮。使用 `text` 指定为文字按钮。
<demo src="./src/button/basic.vue"/>


## 形状
通过 `shape` 属性改变按钮形状。`square` **矩形按钮**，`round` **圆角按钮**，`circle` **圆形按钮**。
<demo src="./src/button/shape.vue"/>


## 大小
通过 `size` 属性改变按钮的大小。

提供 `small`、`medium`、`large` 三种尺寸，也可以自定义大小。
<demo src="./src/button/size.vue"/>

## 图标
使用 `icon` 属性设置按钮的图标。使用 `right-icon` 属性设置右侧图标。
<demo src="./src/button/icon.vue"/>


## 加载中
按钮有时需要歇一会。

将 `loading` 属性设置为 `true`，按钮会显示加载状态。
<demo src="./src/button/loading.vue"/>


## 长按钮
添加 `long` 属性，按钮的宽度会占满父元素。
<demo src="./src/button/long.vue"/>


## 禁用
将 `disabled` 属性设置为 `true`，按钮会被禁用。
<demo src="./src/button/disabled.vue"/>

## 按钮组
可以把几个按钮放在一起，通过 `type` 和 `size` 属性统一控制按钮样式。
<demo src="./src/button/group.vue"/>

## API
### Button 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `string` | default | 按钮类型 |
| shape | `string` | square | 按钮形状 |
| size | `string` `number` | medium | 按钮大小 |
| icon | `string` | — | 按钮图标 |
| right-icon | `string` | — | 按钮右侧图标 |
| plain | `boolean` | false | 是否为二级按钮 |
| text | `boolean` | false | 是否为文字按钮 |
| long | `boolean` | false | 是否为长按钮 |
| loading | `boolean` | false | 按钮是否在加载 |
| disabled | `boolean` | false | 按钮是否禁用 |

### Button 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义按钮内容 |

### Button Group 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `string` | default | 统一控制按钮类型 |
| size | `string` | medium | 统一控制按钮大小 |

### Button Group 插槽
| 名称 | 说明 |
| --- | --- |
| default | 放置按钮组件 |


## 贡献者
<member></member>