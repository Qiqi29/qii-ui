# 链接 Link
互联网的入口。

## 基本用法
使用 `href` 属性指定 Link 地址。使用 `open` 属性指定跳转方式。
- `newTab` --- 在新标签页打开
- `replace` -- 替换当前页面，重定向，不会留下历史记录
- `push` ------ 直接修改当前页面URL，保留历史记录
<demo src="./src/link/basic.vue"/>


## 类型
使用 `type` 属性指定 Link 类型，不同类型只在颜色上有区别。
<demo src="./src/link/type.vue"/>


## 下划线
添加 `line` 属性，鼠标移动到 Link 上，会显示下划线。
<demo src="./src/link/line.vue"/>


## 图标
添加 `icon` 属性，会显示默认图标。填入图标名称，可以自定义图标。
<demo src="./src/link/icon.vue"/>


## 禁用
添加 `disabled` 属性，Link 会被禁用。
<demo src="./src/link/disabled.vue"/>


## API

### Link 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| href | `string` | — | 链接地址 |
| open | `string` | newTab | 跳转方式 |
| type | `string` | primary | 链接类型 |
| line | `boolean` | false | 鼠标移入时，是否显示下划线 |
| icon | `string` | — | 链接的图标 |
| disabled | `boolean` | false | 是否禁用链接 |

### Link 插槽
| 名称 | 说明 |
| --- | --- |
| default | 链接文案 |

## 贡献者
<member></member>