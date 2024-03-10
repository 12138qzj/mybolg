# !DOCTYPE(文档声明)

## 文档声明概念

### 为什么有这个

由于早期并没有一套标准的规范，所以部分浏览器厂商自己现实了 HTML 的解析，对于同一份 HTML 可能不同的浏览器会产生不一样的效果

HTML 通常以文档声明开始，用来帮助浏览器确定以何种方式解析和现实 HTML 文档（必须在 HTML 文件的第一行，如果在文档声明前有任何别的东西，会导致部分浏览器触发怪异模式）
[MDN 解释](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype)

### 如何使用

在 HTMl 文件的开头使用，在 !DOCTYPE 后接版本声明，在 HTML5 之前的版本都需要带上 DTD 文件，该文件是版本使用到的标签，用法等的声明，HTML 不再需要带上 DTD 文件，因为 HTML5 之后不再基于 SGML

这里举例几个常见的

#### HTML5

```
<!DOCTYPE HTML>

```

#### HTML4.01

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

#### XHTML

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

### 标准模式和怪异模式有什么区别

- 盒模型不同，分为标准盒模型盒怪异盒模型，box-sizing 可设置
- 怪异模式可以设置行内元素的宽高
- margin：0 auto 在怪异模式下失效
