---
title: GitHub如何选择合适的license(许可证)
comments: false
abbrlink: 5fa06b95
date: 2022-03-22 23:19:53
tags:
- Github
- license
categories: 开发、项目规范
keywords: 'Github,license,许可证'
description: 如何选择合适的license
top_img:
cover: //cdn.drinbin.com/blog/posts/2022/03/24/top_img.jpg
---
> license译为许可证，也可作为开源协议，它可以将自己创作的东西，授权给他人使用，并约定了使用者可以有的权利和必须遵从的义务。现在很多优秀的开源项目都有设置license，不同的license所约束的条件也不同。因此开源不等于免费，开源也不等于没有约束。

对于大型的软件可能都有专门的律师团队去撰写软件协议。可是作为一名开发人员，有时候我们想开源自己的项目，但又不想自己的源代码被随意借鉴或者分享到别处。这个时候我们就可以设置license去约束一些行为。

但是协议往往需要具备专业的知识，它涉及到了法律规则，普通人不可能在短时间内就掌握这些知识。这时候我们可以选择一些流行的开源协议去满足项目的需求。

# 快速选择流行的license

在创建项目的时候，我们可以选择一个license，可以看到有很多流行的开源协议可以选择。
![GitHub_license.jpg](https://image-static.segmentfault.com/368/539/3685393680-623b5282dd12d)

下文将以GitHub这份协议做简单的介绍，给项目快速选择一个合适的协议。
# 各协议介绍
| 协议 | 简述 |
| --- | --- |
| [Apache](https://choosealicense.com/licenses/apache-2.0/) | 允许他人修改源代码后再闭源，但是必须对每个修改过的文件做版权说明 |
| [GPL3](https://choosealicense.com/licenses/gpl-3.0/) | 无论以何种方式修改或者使用代码，都需要开源 |
| [MIT](https://choosealicense.com/licenses/mit/) | 允许他人修改源代码后再闭源，不用对修改过的文件做说明，且二次开发的软件可以使用原作者的名字做营销 |
| [BSD2](https://choosealicense.com/licenses/bsd-2-clause/)/[BSD3](https://choosealicense.com/licenses/bsd-3-clause/) | 和上面一条类似，但未经事先书面许可，不得使用版权所有者的姓名或其贡献者的姓名来推广  |
| [BSL](https://choosealicense.com/licenses/bsl-1.0/) | 和GPL类似，但不需要复制版权信息 |
| [CCZ](https://choosealicense.com/licenses/cc0-1.0/)| 放弃创作的作品版权权益，并将其奉献给大众，不对代码做任何担保 |
| [EPL](https://opensource.org/licenses/EPL-2.0)| 与GPL类似，有权使用、修改、复制与发布软件原始版本和修改后版本，但在某些情况下则必须将修改内容一并释出 |
| [AGPL](https://choosealicense.com/licenses/agpl-3.0/)| GPL拓展，使用在线网络服务的也需要开源 |
| [GPL2](https://choosealicense.com/licenses/gpl-2.0/)| 和GPL3相比，如果使用代码作为服务提供，而不分发软件，则不需要开源 |
| [LGPL](https://choosealicense.com/licenses/lgpl-3.0/)| 和GPL相比，LGPL允许商业软件通过类库引用(link)方式使用LGPL类库而不需要开源商业软件的代码 |
| [Mozilla](https://choosealicense.com/licenses/mpl-2.0/)| 与LGPL类似，但是需要对修改过的源码内容做说明 |
| [Unlicense](https://choosealicense.com/licenses/unlicense/)| 与CCZ相似，且开放商标和所用的专利授权 |


关于BSL和GPL的区别介绍 >> https://www.boost.org/users/license.html
![image.png](https://image-static.segmentfault.com/388/478/3884789115-623b52a5dd348)

# 不选择协议
并不是一定要在项目中添加协议的。但如上文所讨论过的优点，如果你想把代码分享出来，又想约束一些行为，最好还是选择一个适合的开源协议。不选择协议可以让发布者保留作品的解释权，不允许他人分发，复制或二次开发。但是部分网站会有特有的协议，例如当你将代码发布到GitHub上，会默认公开的项目可以自由的查看和fork。
# 总结
- MIT可以说是很宽松的一个协议了，它允许对代码做任何形式的修改和宣传
- GPL鼓励免费，著名的Linux使用的就是这个协议，这使得它成为时下热门的一个协议
- BSD不允许不经书面许可借原作者进行推广，如果介意其他人的项目推广自己的话可以选择这个协议

{% note blue 'fas fa-fan' flat%}
文章同步发布：
掘金 - https://juejin.cn/post/7077726505333161991
博客园 - https://www.cnblogs.com/rainy-night/p/16064439.html
思否 - https://segmentfault.com/a/1190000041599305
CSDN - https://blog.csdn.net/weixin_43954092/article/details/123700663
{% endnote %}
