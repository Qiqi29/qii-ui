# 单选框 Radio
单选框真的很好用，不是吗？


## 基本用法
`radio` 组件需要搭配 `radio-group` 组件使用。

使用 `v-model` 绑定数据，使用 `value` 属性设置每个选项的值。
<demo src="./src/radio/basic.vue"/>


## 组选项
在 `radio-group` 组件中可以使用 `options` 属性来设置选项。 
<demo src="./src/radio/group.vue"/>


## 垂直排列
添加 `vertical` 属性，可以将选项垂直排列。
<demo src="./src/radio/vertical.vue"/>


## 按钮样式
添加 `button` 属性，单选框就会变成按钮样式。
<demo src="./src/radio/button.vue"/>



## API

### Radio 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | `string` `number` `boolean` | — | 单选框的值 |
| disabled | `boolean` | false | 单选框是否禁用 |

### Radio 插槽
| 名称 | 说明 |
| --- | --- |
| default | 单选项的 label 文本 |

### Radio Group 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue **(v-model)** | `string` `number` `boolean` | — | 绑定值 |
| options | `array` | — | 单选框组选项 |
| vertical | `boolean` | false | 单选框组是否垂直排列 |
| button | `boolean` | false | 单选框组是否为按钮样式 |

### Radio Group 插槽
| 名称 | 说明 |
| --- | --- |
| default | 放置 radio 组件 |


## 贡献者
<member></member>