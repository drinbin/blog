---
title: 在网站copy时自带的版权小尾巴以及复制代码，可以怎么实现
comments: false
abbrlink: 623deb41
date: 2022-04-11 20:57:46
tags: 复制
categories: JavaScript
keywords: '复制,版权,小尾巴'
description: 复制自带版权小尾巴
top_img:
cover: //cdn.toolwork.cn/blog/posts/2022/04/11/topimg.jpg_gzip
---
# 前言
每天网上的博客各个领域都会涌现新文章，有时候看到感兴趣的知识就想把某段文字 ~~copy下来~~ 摘录下来，等有时间后慢慢品味

在部分网站上，如果只是复制少量文字，并没有什么不同。但是当我们复制的文字多的话会发现多了一个小尾巴

所谓小尾巴是指在复制文本的最后会多一个作者和出处信息，如下：
> ···（复制的内容）···
>————————————————
>版权声明：本文为xxx的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。\
>原文链接：https://www.cnblogs.com/rainy-night/
>
博客园可能并没有这种情况，但是在很多技术论坛、博客都有这样的处理。当我们复制文章内容的时候，往往会自动加上一段文本信息版权

那么如果我们也想实现这样的效果要怎么做呢？
# 实现
## 版权小尾巴
前提：假定所选择的字符串长度大于等于130时带上版权信息

```
<div id="copy">
  <div>示例一：这不是一个 bug，这只是一个未列出来的特性。</div>
  <div>
    示例二：ES6 是一个泛指，含义是 5.1 版以后的 JavaScript。
    ES6 是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。
    它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，使之成为企业级开发语言。
  </div>
</div>

<script>
var copyEl = document.getElementById('copy');
copyEl.oncopy = function (e) {
  if (window.getSelection(0).toString().length >= 130) {
    var clipboardData = event.clipboardData || window.clipboardData;
    // 阻止默认事件
    e.preventDefault();
    var copyMsg =
      window.getSelection() +
      '\r\n————————————————\r\n版权声明：本文为xxx的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。' +
      '\r\n原文链接：' + location.href;
    // 将处理完的信息添加到剪切板
    clipboardData.setData('Text', copyMsg);
  }
};
</script>
```
`演示`
![自带小尾巴](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e24ee8fb5074664aad1d4a76f6cd2da~tplv-k3u1fbpfcp-watermark.image?)
`浏览器兼容性`
![浏览器兼容性](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14380200f22945c59fe25ff2f7ecb263~tplv-k3u1fbpfcp-watermark.image?)
当复制示例一后可以发现粘贴是正常的；复制示例二则会在末尾携带版权信息
## 复制代码功能
我们直接复制代码，会发现当字数超过一定值时也是会携带版权信息。但是点击“复制代码”的时候可以一键复制区域内的代码，这可以怎么实现呢？
```
<div>
  <pre>
<code id="copyable">// 浮点数相加
function mathMultiply(arg1, arg2) {
  var m = 0;
  var s1 = arg1.toString();
  var s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length; // 小数相乘，小数点后个数相加
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (
    (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
    Math.pow(10, m)
  );
 }<code />
</pre>
  <button id="btn">复制代码</button>
</div>

<script>
  var btn = document.getElementById('btn');
  btn.onclick = function copyCode() {
    window.getSelection().removeAllRanges(); // 清除选中的文本
    var range = document.createRange();
    range.selectNode(document.getElementById('copyable'));
    var selection = window.getSelection();
    selection.addRange(range); // 添加选中的内容
    document.execCommand('copy'); // 执行复制
    window.getSelection().removeAllRanges(); // 清除复制选中的文本
    alert('代码复制成功');
  };
</script>
```
`演示`
![一键复制代码](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b89e8360541a494f8961c63fbc8bd500~tplv-k3u1fbpfcp-watermark.image?)
`浏览器兼容性`

![execCommand.jpg](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d511c4f77e984a30be2fa8679445a0ab~tplv-k3u1fbpfcp-watermark.image?)
*document.execCommand()因为安全问题已经废弃，不适合长期使用*
## 第三方工具
除了以上实现方式，也可以使用第三方库封装好的函数来实现

### clipboard.js
 - 介绍：只有3k大小，不依赖任何框架
 - GitHub：[https://github.com/zenorocha/clipboard.js](https://github.com/zenorocha/clipboard.js)、

{% note blue 'fas fa-fan' flat%}
文章同步发布：
掘金 - https://juejin.cn/post/7085147261641949198
博客园 - https://www.cnblogs.com/rainy-night/p/16132466.html
思否 - https://segmentfault.com/a/1190000041688914
CSDN - https://blog.csdn.net/weixin_43954092/article/details/124110442
{% endnote %}
