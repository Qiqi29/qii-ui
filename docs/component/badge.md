# 徽标 Badge
支付宝到账，壹佰萬圆。


## 基本用法
设置 `count` 属性的数量，即可在组件上显示标记。添加 `dot` 属性，可以变成小点点。
<qii-demo src="./demo/badge/basic.vue"/>


## 最大值
使用 `max` 属性，限制徽标显示的最大值，超出会显示后缀 `+`。
<qii-demo src="./demo/badge/max.vue"/>


## 文本
使用 `text` 属性，可以自定义徽标显示的文本。
<qii-demo src="./demo/badge/text.vue"/>


## 独立使用
`default slot` 默认插槽为空时，徽标可以独立使用。
<qii-demo src="./demo/badge/alone.vue"/>


## 类型
使用 `type` 属性改变徽标类型，不同类型只在颜色上有区别。
<qii-demo src="./demo/badge/type.vue"/>


## 颜色
如果需要自定义徽标颜色，可以使用 `color` 属性。
<qii-demo src="./demo/badge/color.vue"/>



## API
### Badge 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| count | `number`  | 0     | 徽标计数 |
| max   | `number`  | 99    | 徽标最大值 |
| text  | `string`  | —     | 徽标文本 |
| type  | `string`  | —     | 徽标类型 |
| color | `string`  | —     | 自定义徽标颜色 |
| dot   | `boolean` | false | 是否为点点样式 |

### Badge 插槽
| 名称 | 说明 |
| --- | --- |
| default | 自定义展示文本 |