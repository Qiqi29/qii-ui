# 开关 Switch
没事打开他干嘛。


## 基本用法
使用 `v-model` 属性进行双向绑定，否则开关将不会改变状态。
<demo src="./demo/switch/basic.vue"/>


## 大小
使用 `size` 属性设置开关的大小，提供 `small`、`medium`、`large` 三种尺寸。
<demo src="./demo/switch/size.vue"/>


## 形状
使用 `shape` 属性改变开关的形状。

`round` - **圆形开关**，`square` - **方形开关**。
<demo src="./demo/switch/shape.vue"/>


## 颜色
使用 `checked-color` 属性和 `unchecked-color` 属性自定义开关的颜色。
<demo src="./demo/switch/color.vue"/>


## 图标
使用 `checked-icon` 属性和 `unchecked-icon` 属性自定义开关上显示的图标。
<demo src="./demo/switch/icon.vue"/>


## 加载中
添加 `loading` 属性，开关会显示加载状态。
<demo src="./demo/switch/loading.vue"/>


## 异步切换
设置 `beforeChange` 属性为一个函数，函数的返回值即为是否切换。
<demo src="./demo/switch/change.vue"/>


## 禁用
添加 `disabled` 属性，开关会被禁用。
<demo src="./demo/switch/disabled.vue"/>


## API

### Switch 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue (v-model)  | `boolean`   | —       | 绑定值 |
| size                      | `string`    | medium  | 开关大小 |
| shape                     | `string`    | round   | 开关形状 |
| checkedColor              | `string`    | —       | 开关开启时的颜色 |
| uncheckedColor            | `string`    | —       | 开关关闭时的颜色 |
| checkedIcon               | `string`    | —       | 开关开启时显示的图标 |
| uncheckedIcon             | `string`    | —       | 开关关闭时显示的图标 |
| loading                   | `boolean`   | false   | 加载状态 |
| disabled                  | `boolean`   | false   | 禁用状态 |
| beforeChange              | `function`  | —       | 开关状态改变前的回调 |

### Switch 事件
| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 开关状态发生变化时的回调 | `(value: boolean) => value` |

