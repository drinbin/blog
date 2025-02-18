---
title: 项目可以怎么规范 Git commit ?
comments: false
abbrlink: 7f499bd9
date: 2022-03-07 20:26:22
tags: Git commit
categories: 开发、项目规范
keywords: 'Git commit'
description: 怎么规范 Git commit
top_img:
cover:
---
> 通常情况下，commit message应该清晰明了，说明本次提交的目的，具体做了什么操作。但是在日常开发中，大家的commit message都比较随意，中英文混合使用的情况有时候很常见，这就导致后续代码维护成本比较大。<br />基于这些问题，可以通过husky和commitlint来规范commit的格式，来减小代码维护成本。
Angular规范是目前使用最广的写法，比较合理和系统化，并且有配套的工具（VSCode插件git-commit-plugin就非常好用）

## commit message介绍
**commit message格式**
```
<type>(<scope>): <subject>
```
**type(必须)**

用于说明 commit 的类别，只允许使用下面7个标识。

-   feat：新功能（feature）
-   fix：修补bug
-   docs：文档（documentation）
-   style： 格式（不影响代码运行的变动）
-   refactor：重构（即不是新增功能，也不是修改bug的代码变动）
-   test：增加测试
-   chore：构建过程或辅助工具的变动
**scope(可选)**

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
**subject**

`subject`是 commit 目的的简短描述，不超过50个字符。

注意事项：
-   以动词开头，使用第一人称现在时，比如`change`，而不是`changed`或`changes`
-   第一个字母小写
-   结尾不加句号（.）
## 安装到项目
**husky**

1. 安装 husky `npm install husky --save-dev`

2. 初始化 husky `npx husky install`
3. 设置项目 install 自动初始化 husky ，在 package.json 添加脚本

    ```
    // package.json
    {
      "scripts": {
        "prepare": "husky install"
      }
    }
    ```
**hook**

新增 hook 勾子命令，项目中使用 commit-msg 勾子来校验 commit message 是否符合规范： `npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"`<br/>
运行上面命令后，将自动在 .husky  文件夹下面新增对应的勾子文件，如下

![](https://image-static.segmentfault.com/309/379/3093799885-623b3f5dd2b43)

如果运行完新增勾子函数如果出现如下消息

![](https://image-static.segmentfault.com/143/709/1437096637-623b3f76040ed)

可以先执行 `npx husky add .husky/commit-msg`，然后手动去commit-msg文件里添加`npx --no-install commitlint --edit $1`

**commitlint**
1. 安装 @commitlint/config-conventional @commitlint/cli  

    `npm install --save-dev @commitlint/config-conventional @commitlint/cli`
2.  新增配置文件 .commitlintrc.js 
    ```
    module.exports = {
      extends: [
        '@commitlint/config-conventional'
      ]
    };
    ```
以上就是所有的安装过程了

{% note blue 'fas fa-fan' flat%}
文章同步发布：
掘金 - https://juejin.cn/post/7072361825815232519
博客园 - https://www.cnblogs.com/rainy-night/p/16061251.html
思否 - https://segmentfault.com/a/1190000041598578
CSDN - https://blog.csdn.net/weixin_43954092/article/details/123699185
{% endnote %}
