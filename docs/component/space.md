# 间距 Space
紧挨在一起可不好。

::: info 兼容性
Space 组件使用 [gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap) 属性实现间距控制，对一些老版本浏览器可能存在兼容性问题。
:::


## 基本用法
在 Space 组件中放置的内容，会自动加上间距。
<demo src="./demo/space/basic.vue"/>


## 间距
使用 `size` 属性，控制间距大小。

提供 `small`、`medium`、`large` 三种尺寸， 也可以自定义大小。
<demo src="./demo/space/size.vue"/>