# 输入框 Input
我不说你也知道他是干嘛的。

## 基本用法
使用 `v-model` 属性进行双向绑定。
<demo src="./src/input/basic.vue"/>


## 清空
添加 `clearable` 属性后，会显示一个清除按钮，点击可以清空输入框。
<demo src="./src/input/clearable.vue"/>


## 密码框
添加 `show-password` 属性后，会切换为密码类型，并显示一个切换显示隐藏密码的按钮。
<demo src="./src/input/password.vue"/>


## 大小
通过 `size` 属性改变输入框的大小，提供 `small`、`medium`、`large` 三种尺寸。

通过 `width` 属性设置输入框的宽度。

或者添加 `long` 属性，输入框将会占满父元素的宽度。
<demo src="./src/input/size.vue"/>


## 前缀和后缀
通过 `prepend` 和 `append` 插槽，在输入框头尾添加自定义内容。
<demo src="./src/input/prepend.vue"/>


## 禁用
将 `disabled` 属性设置为 `true`，输入框会被禁用。
<demo src="./src/input/disabled.vue"/>