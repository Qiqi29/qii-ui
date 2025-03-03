# 分割线 Divider
就是一条线。


## 基本用法
在内容中添加一条分割线，通过 `space` 属性可以设置分割线占用的空间。
<demo src="./demo/divider/basic.vue"/>


## 标题内容
在默认插槽中可以自定义线条上的内容，使用 `title-position` 设置标题的位置。
<demo src="./demo/divider/title.vue"/>


## 垂直分割线
添加 `vertical` 属性，线条可以垂直分割。
<demo src="./demo/divider/vertical.vue"/>


## API

### Divider 属性
| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| space         | `string`  | 48px    | 占用空间 |
| titlePosition | `string`  | center  | 标题位置 |
| vertical      | `boolean` | false   | 是否为垂直分割线 |

### Divider 插槽
| 名称 | 说明 |
| --- | --- |
| defautl  | 自定义标题内容 |