# 头像 Avatar
听说用动漫头像的男生都是...


## 基本用法
使用 `src` 属性指定头像图片的地址，也可以嵌入文本或图标。
<demo src="./src/avatar/basic.vue"/>


## 大小和形状
使用 `shape` 属性设置头像的形状。`square` **方形**，`round` **圆形**。

使用 `size` 属性设置头像的大小，提供 `small`、`medium`、`large` 三种尺寸，也可以自定义大小。
<demo src="./src/avatar/shape.vue"/>


## 内容自适应
在插槽中嵌入的内容，会自动调整大小，适应头像大小。
<demo src="./src/avatar/auto.vue"/>


## 头像组
可以把多个头像放在一起，通过 `size` 和 `shape` 属性统一控制样式，也可以使用 `max` 属性限制最大显示数量。
<demo src="./src/avatar/group.vue"/>


## API
### Avatar 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | `string` | — | 头像图片的地址 |
| size | `string` `number` | medium | 头像的大小 |
| shape | `string` | round | 头像的形状 |

### Avatar 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义展示内容 |


## 贡献者
<member></member>
