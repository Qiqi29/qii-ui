# 按钮 Button
这是什么？按一下。这是什么？按一下...


## 样式
使用 `type` 属性改变按钮类型。（不同类型只在颜色上有区别）

添加 `plain` 属性显示为 **二级按钮**，添加 `text` 属性显示为 **文字按钮**。
<qii-demo src="./demo/button/basic.vue"/>


## 形状
使用 `shape` 属性改变按钮形状。

`square` - **矩形按钮**，`round` - **圆角按钮**，`circle` - **圆形按钮**。
<qii-demo src="./demo/button/shape.vue"/>


## 大小
使用 `size` 属性改变按钮的大小。

提供 `small`、`medium`、`large` 三种尺寸，也可以自定义大小。
<qii-demo src="./demo/button/size.vue"/>


## 图标
使用 `icon` 属性设置按钮的图标。使用 `right-icon` 属性可以设置右侧的图标。
<qii-demo src="./demo/button/icon.vue"/>


## 加载中
添加 `loading` 属性，按钮就会显示为加载状态，也可以动态设置。
<qii-demo src="./demo/button/loading.vue"/>


## 长按钮
添加 `long` 属性，按钮的宽度会占满父元素。
<qii-demo src="./demo/button/long.vue"/>


## 禁用
添加 `disabled` 属性，按钮就会被禁用。
<qii-demo src="./demo/button/disabled.vue"/>


## 按钮组
可以把多个按钮放在按钮组里面，通过 `type` 和 `size` 属性统一控制样式。
<qii-demo src="./demo/button/group.vue"/>


## API
### Button 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type        | `string`  | default | 按钮类型 |
| size        | `string`  | medium  | 按钮大小 |
| shape       | `string`  | square  | 按钮形状 |
| icon        | `string`  | —       | 按钮图标 |
| right-icon  | `string`  | —       | 按钮右侧图标 |
| plain       | `boolean` | false   | 是否为二级按钮 |
| text        | `boolean` | false   | 是否为文字按钮 |
| bg          | `boolean` | false   | 文字按钮是否显示背景 |
| long        | `boolean` | false   | 是否为长按钮 |
| loading     | `boolean` | false   | 按钮是否在加载 |
| disabled    | `boolean` | false   | 按钮是否禁用 |

### Button 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义按钮内容 |

### Button Group 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `string` | default | 统一控制按钮类型 |
| size | `string` | medium  | 统一控制按钮大小 |

### Button Group 插槽
| 名称 | 说明 |
| --- | --- |
| default | 放置按钮组件 |
