# 输入框 Input
我不说你也知道他是干啥用的。


## 基本用法
使用 `v-model` 属性进行双向绑定。
<qii-demo src="./demo/input/basic.vue"/>


## 大小
使用 `size` 属性设置输入框的大小，提供 `small`、`medium`、`large` 三种尺寸。

使用 `width` 属性设置输入框的宽度。
<qii-demo src="./demo/input/size.vue"/>


## 图标
使用 `icon` 属性设置输入框的图标。使用 `right-icon` 属性设置右侧图标。
<qii-demo src="./demo/input/icon.vue"/>


## 前后缀
使用 `prepend` 和 `append` 插槽自定义输入框的前后缀内容。
<qii-demo src="./demo/input/prepend.vue"/>


## 清空
添加 `clearable` 属性，会显示一个按钮，点击可以清空输入框。
<qii-demo src="./demo/input/clearable.vue"/>


## 密码框
添加 `password` 属性后，输入框会变为密码类型，并显示一个切换按钮。
<qii-demo src="./demo/input/password.vue"/>


## 字数
使用 `maxlength` 属性限制输入的字数，添加 `word-limit` 属性显示字数统计。
<qii-demo src="./demo/input/length.vue"/>


## 默认选中
添加 `autofocus` 属性，打开页面后，输入框会自动获取焦点。
<qii-demo src="./demo/input/autofocus.vue"/>


## 禁用
添加 `disabled` 属性，输入框会被禁用。
<qii-demo src="./demo/input/disabled.vue"/>


## API

### Input 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue (v-model)  | `string`  | —       | 输入框绑定值 |
| type                  | `string`  | text    | 输入框类型 |
| size                  | `string`  | medium  | 输入框大小 |
| width                 | `string`  | 240px   | 输入框宽度 |
| placeholder           | `string`  | —       | 输入框提示文案 |
| icon                  | `string`  | —       | 输入框图标 |
| right-icon            | `string`  | —       | 输入框右侧图标 |
| autofocus             | `boolean` | false   | 是否默认聚焦输入框 |
| clearable             | `boolean` | false   | 是否显示清除按钮 |
| password              | `boolean` | false   | 是否为密码输入框 |
| maxlength             | `number`  | —       | 输入框字数限制 |
| word-limit            | `boolean` | false   | 是否显示字数统计 |
| readonly              | `boolean` | false   | 输入框是为只读模式 |
| disabled              | `boolean` | false   | 输入框是否禁用 |

### Input 事件
| 名称 | 说明 | 类型 |
| --- | --- | --- |
| input   | 输入框输入时触发      | `(value: String) => value` |
| change  | 绑定值改变时触发      | `(value: String) => value` |
| focus   | 输入框获得焦点时触发  | `(event: FocusEvent) => event` |
| blur    | 输入框失去焦点时触发  | `(event: FocusEvent) => event` |
| clear   | 点击清除按钮时触发    | `() => true` |

### Input 插槽
| 名称 | 说明 |
| --- | --- |
| prepend | 自定义输入框前置内容 |
| append  | 自定义输入框后置内容 |