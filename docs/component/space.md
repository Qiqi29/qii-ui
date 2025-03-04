# 间距 Space
有时候还是保持一点距离比较好。

::: info 兼容性
Space 组件使用 [gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap) 属性实现间距控制，对一些老版本浏览器可能存在兼容性问题。
:::


## 基本用法
在 Space 组件中放置的内容，会自动加上间距。

通过 `size` 属性控制间距大小，提供 `mini`、`small`、`medium`、`large` 四种尺寸， 也可以传入数字来自定义。
<demo src="./demo/space/basic.vue"/>


## 排列方式
使用 `justify` 属性控制元素的排列方式，与 [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) 属性一致。

::: tip
演示待补充
:::


## 对齐方向
使用 `direction` 属性控制元素的对齐方向，与 [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items) 属性一致。

::: tip
演示待补充
:::


## 垂直排列
添加 `vertical` 属性，可以让内部的组件垂直排列。

添加 `fill` 属性，可以让 Space 组件的宽度填满父组件。

::: tip
演示待补充
:::


## API

### Space 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size      | `string`  | medium  | 间距大小 |
| vertical  | `boolean` | false   | 是否垂直排列 |
| justify   | `string`  | start   | 内部元素排列方式 |
| direction | `string`  | start   | 内部元素对齐方向 |
| fill      | `boolean` | false   | 宽度是否填满父元素 |

### Space 插槽
| 名称 | 说明 |
| --- | --- |
| default | 需要排列的组件 |