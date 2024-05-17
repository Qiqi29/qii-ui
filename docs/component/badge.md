# 徽标 Badge
叮，你有一个未读消息！


## 基本用法
指定 `count` 属性，即可在组件上显示标记。添加 `dot` 属性，显示为小点点。
<demo src="./src/badge/basic.vue"/>


## 独立使用
`default slot` 默认插槽为空时，徽标可以独立使用。
<demo src="./src/badge/alone.vue"/>


## 最大值
使用 `max-count` 属性，限制徽标显示的最大值，超出会加上 `+` 后缀。
<demo src="./src/badge/max.vue"/>


## 文本
使用 `text` 属性，可以自定义徽标显示的文本。
<demo src="./src/badge/text.vue"/>


## 类型
使用 `type` 属性改变徽标类型，不同类型只在颜色上有区别。
<demo src="./src/badge/type.vue"/>


## 颜色
如果需要自定义徽标颜色，可以使用 `color` 属性。
<demo src="./src/badge/color.vue"/>



## API
### Badge 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| count | `number` | 0 | 徽标计数 |
| max-count | `number` | 99 | 徽标最大值 |
| text | `string` | — | 徽标文本 |
| type | `string` | — | 徽标类型 |
| color | `string` | — | 自定义徽标颜色 |
| dot | `boolean` | false | 是否为点点样式 |

### Badge 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义展示内容 |


## 贡献者
<member></member>