# 间距 Space
紧挨在一起可不好。


## 基本用法
在 space 组件中放置的内容会加上间距。
<demo src="./src/space/basic.vue"/>


## 尺寸
使用 `size` 属性，控制间距的大小。

提供 `small`、`medium`、`large` 三种尺寸， 也可以自定义大小。
<demo src="./src/space/size.vue"/>


## 垂直排列
添加 `vertical` 属性，可以让内部组件垂直排列。

添加 `fill` 属性，可以让布局组件的宽度填满父组件。
<demo src="./src/space/vertical.vue"/>


## 对齐
使用 `direction` 属性，设置子元素的对齐方式，同 <q-link href=https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items icon>align-items</q-link> 属性。
<demo src="./src/space/direction.vue"/>


## API

### Space 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `string` `number` | medium | 间距大小 |
| vertical | `boolean` | false | 是否垂直排列 |
| direction | `string` | center | 内部元素对齐方式 |
| fill | `boolean` | false | 宽度是否填满父元素 |

### Space 插槽
| 名称 | 说明 |
| --- | --- |
| default | 需要排列的组件 |


## 贡献者
<member></member>