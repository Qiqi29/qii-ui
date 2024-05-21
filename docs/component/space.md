# 间距 Space
紧挨在一起可不好。

::: info 兼容性
Space 组件使用 <q-link href=https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap>gap</q-link> 属性实现间距控制，对于一些老版本浏览器存在兼容性问题。
:::


## 基本用法
在 Space 组件中放置的内容，会自动加上间距。
<demo src="./src/space/basic.vue"/>


## 尺寸
使用 `size` 属性，控制间距的大小。

提供 `small`、`medium`、`large` 三种尺寸， 也可以自定义大小。
<demo src="./src/space/size.vue"/>


## 排列
使用 `justify` 属性，控制元素的排列方式，同 <q-link href=https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content>justify-content</q-link> 属性。
<demo src="./src/space/justify.vue"/>


## 对齐
使用 `direction` 属性，控制子元素的对齐方向，同 <q-link href=https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items>align-items</q-link> 属性。
<demo src="./src/space/direction.vue"/>


## 垂直排列
添加 `vertical` 属性，可以让内部组件垂直排列。

添加 `fill` 属性，可以让布局组件的宽度填满父组件。
<demo src="./src/space/vertical.vue"/>


## API

### Space 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | `string` `number` | medium | 间距大小 |
| vertical | `boolean` | false | 是否垂直排列 |
| justify | `string` | start | 内部元素排列方式 |
| direction | `string` | start | 内部元素对齐方式 |
| fill | `boolean` | false | 宽度是否填满父元素 |

### Space 插槽
| 名称 | 说明 |
| --- | --- |
| default | 需要排列的组件 |


## 贡献者
<member></member>