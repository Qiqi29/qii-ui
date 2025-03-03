# 无内容 Empty
色即是空。


## 基本用法
默认会显示一个图标，使用 `text` 属性自定义提示文案。
<demo src="./demo/empty/basic.vue"/>


## 自定义
在 `icon` 插槽中自定义顶部内容，在 `extra` 插槽中自定义底部内容。
<demo src="./demo/empty/custom.vue"/>


## API

### Empty 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| text | `string` | — | 提示文案 |

### Empty 插槽
| 名称 | 说明 |
| --- | --- |
| icon  | 自定义顶部内容 |
| extra | 自定义底部内容 |