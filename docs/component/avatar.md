# 头像 Avatar
展示你的头像。

## 基本用法
使用 `src` 属性指定图片地址，也可以在默认插槽放置任何内容，比如图标或文本。
<demo src="./demo/avatar/basic.vue"/>

## 形状
使用 `shape` 属性设置头像的形状。`round` **圆形**，`square` **方形**。
<demo src="./demo/avatar/shape.vue"/>

## 大小
使用 `size` 属性设置头像的大小，提供 `small`、`medium`、`large` 三种尺寸，也可以自定义大小。
<demo src="./demo/avatar/size.vue"/>

## 内容自适应
在插槽中嵌入的内容，会自动调整大小来适应头像。
<demo src="./demo/avatar/auto.vue"/>

## 头像组
可以把多个头像放在一起，通过 `size` 和 `shape` 属性统一控制样式，也可以使用 `max` 属性限制最大显示数量。
<demo src="./demo/avatar/group.vue"/>

## API
### Avatar 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | `string` | — | 头像图片的地址 |
| shape | `string` | round | 头像的形状 |
| size | `string` `number` | medium | 头像的大小 |

### Avatar 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义展示内容 |

### Avatar Group 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| max | `number` | 10 | 头像组最多显示的数量 |
| shape | `string` | round | 统一控制头像形状 |
| size | `string` `number` | medium | 统一控制头像大小 |

### Avatar Group 插槽
| 名称 | 说明 |
| --- | --- |
| default | 放置头像组件 |
