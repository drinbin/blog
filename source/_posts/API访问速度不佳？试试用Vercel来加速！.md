---
title: OpenAI API访问速度不佳？试试用Vercel来加速！
comments: false
abbrlink: 90f32d73
date: 2023-07-30 23:18:27
tags:
- AI
categories: GPT
keywords: 'AI,OpenAI,Vercel'
description: 用 Vercel 解决 OpenAI API 访问速度不佳的问题？
top_img:
cover: 'https://image-static.segmentfault.com/123/714/1237144674-64c6a1bc86952_cover'
---
# 前言

众所周知，使用openAI API在国内访问体验并不佳，经常遇到访问较慢或者访问失败的问题。本文着重讲讲怎么解决这个问题，让我们日常开发和使用能够更方便的体验到AI带来的便利

为了帮大家省钱，也为了方便操作，实现这套方案只需要以下这三样东西

> 1. 一个可使用的OpenAI key
> 2. 一个可以正常访问的域名
> 3. GitHub账号（用来登录Vercel）

一个key如果是自己注册话，就几块钱而已，域名也有几块钱一年的，加起来这套方案便宜的话成本就十几块钱。一顿饭钱就可以实现国内快速访问了，这不心动吗？

这套方案的核心代码就是将请求进行转发

```js
{
    "rewrites": [
        { "source": "/", "destination": "https://api.openai.com" },
        { "source": "/:match*", "destination": "https://api.openai.com/:match*" }
    ]
}
```

最后实现出来仅需把`api.openai.com`替换成自己的自定义域名，其他参数传递不需要做修改，就是这么简单

好了，废话不多说，下面直接放干货，看看怎么实现的吧

# 实现步骤
## 1.创建一个新的Vercel项目
[去Vercel部署](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLinLin00000000%2Fvercel-proxy-openai&project-name=vercel-proxy-openai&repository-name=vercel-proxy-openai&root-directory=src)

点击链接前往Vercel创建一个新的项目

如果未登录，先去登录，这里我们可以选择GitHub登录

![Snipaste_2023-07-30_19-09-40.png](https://image-static.segmentfault.com/242/856/2428561179-64c6a17075018_fix732)

## 2.取个好听的名字，接着点击Create按钮
![Snipaste_2023-07-30_22-54-58.png](https://image-static.segmentfault.com/274/634/2746347315-64c6a17e7b2c3_fix732)

点击后，系统会自动处理。这个时候只需要等待十几秒，让Vercel处理结束后就可以做下一步操作了

## 3.然后点击Continue
![Snipaste_2023-07-30_22-55-49.png](https://image-static.segmentfault.com/419/076/4190763926-64c6a1ff07fc0_fix732)

## 4.切换到设置页面，准备配置地址

![Snipaste_2023-07-30_23-03-12.png](https://image-static.segmentfault.com/373/758/3737583065-64c6a2078cf13_fix732)

在这个页面，我们可以找到Vercel默认送的一个域名，但是这个域名因为网络问题，往往是不能够直接访问的。所以这个时候我们需要自己配置一个新的可用域名

在输入框里面输入自己的域名，然后再点击Add

## 5.将获取到的值配置到域名DNS解析里

![Snipaste_2023-07-30_23-09-45.png](https://image-static.segmentfault.com/102/336/1023361788-64c6a20ca1461_fix732)

在Vercel中获取到Name和Value，我们可以将这两个值配置到自己域名DNS解析中

如果还没有域名，可以先去买一个便宜的域名玩一玩，然后再回来配置

## 6.回到Vercel查看状态

![Snipaste_2023-07-30_23-14-29.png](https://image-static.segmentfault.com/350/741/3507410567-64c6a2138fcce_fix732)

这里可以发现都打上小勾勾了，这说明我们已经配置成功了

# 验证

为了验证一下最后的成果，我们可以使用Postman来验证一下是否可以正常访问

![Snipaste_2023-07-30_23-22-54.png](https://image-static.segmentfault.com/405/286/4052862189-64c6a2219ca63_fix732)

可以看到请求响应的还是比较快的，只需要3、4秒

那么大功告成了，over...

{% note blue 'fas fa-fan' flat%}
文章同步发布：
掘金 - https://juejin.cn/post/7261599630827585592
博客园 - https://www.cnblogs.com/rainy-night/p/17592457.html
思否 - https://segmentfault.com/a/1190000044063026
CSDN - https://blog.csdn.net/weixin_43954092/article/details/132014299
{% endnote %}
