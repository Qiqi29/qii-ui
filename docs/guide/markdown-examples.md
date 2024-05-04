# Markdown扩展示例

本页展示了VitePress提供的一些内置扩展。

## 语法突出显示

VitePress提供语法高亮显示，由 [Shiki](https://github.com/shikijs/shiki) 提供, 具有线条突出显示等附加功能：

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自定义容器

**Input**

```md
::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个折叠块。
:::
```

**Output**

::: info
这是一个信息框。
:::

::: tip
这是一个提示。
:::

::: warning
这是一个警告。
:::

::: danger
这是一个危险的警告。
:::

::: details
这是一个折叠块。
:::

## 更多

查看文档 [扩展的完整列表](https://vitepress.dev/guide/markdown).
