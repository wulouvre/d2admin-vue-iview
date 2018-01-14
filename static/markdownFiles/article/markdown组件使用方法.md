# Markdown

`Markdown` 组件已经全局注册，你可以忽略解析步骤，直接使用组件加载一个 `md` 文件

> 使用 `axios` 和 `marked` 请求和解析数据

> `github-markdown-css` 提供解析结果的样式

> `highlight.js` 提供代码高亮

## 使用示例

```
<Markdown url="/static/markdownFiles/demo/baseMarkdowmFile.md"></Markdown>
```

## 更换高亮主题：

更改 `main.js` 中的

```
import '@/assets/library/highlight/styles/atom-one-light.css'
```

所有的高亮样式在 `src/assets/library/highlight/styles`

> 注意 这样做不仅仅会改变 `Markdown` 组件内的代码高亮，也会改变其他地方的代码高亮主题

