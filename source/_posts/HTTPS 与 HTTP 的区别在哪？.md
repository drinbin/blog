---
title: HTTPS 与 HTTP 的区别在哪？
comments: false
abbrlink: On144843
date: 2025-02-26 12:56:11
tags:
- HTTP
categories: HTTP
keywords: 'HTTP'
description: HTTP与HTTPS作为互联网数据传输的核心协议，其通信机制与安全特性深刻影响着现代网络应用的可靠性与用户体验。它们有什么不同？HTTPS到底安全在哪里？
top_img:
cover: 'https://image-static.segmentfault.com/108/760/1087605177-67be939e6f354_cover'
---
HTTP与HTTPS作为互联网数据传输的核心协议，其通信机制与安全特性深刻影响着现代网络应用的可靠性与用户体验。本文将解析两者的通信流程、安全机制及核心差异。

### 一、HTTP的通信机制

先来看看HTTP是什么吧。

HTTP基于TCP/IP协议栈，采用经典客户端-服务器模型：

1.  **TCP连接建立**\
    通过三次握手创建可靠传输通道（源IP:端口 ↔ 目标IP:端口），默认端口80。
2.  **请求-响应交互**\
    浏览器发起到服务器的 TCP 连接。

<!---->

    GET /index.html HTTP/1.1
    Host: www.baidu.com

3.  **服务器处理与响应**\
    服务器接收来自浏览器的 TCP 连接。

<!---->

    HTTP/1.1 200 OK
    Content-Type: text/html
    Content-Length: 1234
    <html>...</html>

4.  **交换信息**\
    浏览器（HTTP 客户端）与 Web 服务器（HTTP 服务器）交换 HTTP 消息。

5.  **连接终止**\
    完成传输后通过四次挥手断开连接，关闭 TCP 连接。

### 二、HTTPS的进化

HTTPS在HTTP与TCP层之间插入SSL/TLS加密层，通过三重防护机制应对安全威胁：

| 安全威胁 | 防护机制         | 实现方式          |
| ---- | ------------ | ------------- |
| 数据窃听 | AES-256等对称加密 | 会话密钥动态协商      |
| 数据篡改 | SHA-256摘要算法  | 数字签名验证数据完整性   |
| 身份伪造 | X.509数字证书体系  | CA机构签发服务器身份证书 |

那么，SSL 和 TLS 的区别是什么呢？

> **总的来说，SSL 和 TLS 没有太大的区别。**
>
> SSL 指安全套接字协议（Secure Sockets Layer），首次发布与 1996 年。SSL 的首次发布其实已经是他的 3.0 版本，SSL 1.0 从未面世，SSL 2.0 则具有较大的缺陷（DROWN 缺陷——Decrypting RSA with Obsolete and Weakened eNcryption）。很快，在 1999 年，SSL 3.0 进一步升级，**新版本被命名为 TLS 1.0**。因此，TLS 是基于 SSL 之上的，但由于习惯叫法，通常把 HTTPS 中的核心加密协议混称为 SSL/TLS。

**HTTPS握手流程**：

1.  Client Hello：客户端发送支持的加密套件+随机数
2.  Server Hello：服务器选择加密套件+证书+随机数
3.  密钥交换：ECDHE算法生成预主密钥
4.  会话密钥：通过HKDF算法生成加密密钥
5.  加密通信：应用层数据使用对称加密传输

如下图所示，以TLS层为例。

![](https://image-static.segmentfault.com/346/105/3461055431-67be938c8ec3b_fix732)


### 三、HTTP与HTTPS的不同

在协议层看看它们有什么不同。

| 对比维度 | HTTP   | HTTPS            |
| ---- | ------ | ---------------- |
| 传输加密 | 明文传输   | SSL/TLS加密传输      |
| 端口号  | 80     | 443              |
| 证书要求 | 无需证书   | 需CA签发数字证书        |
| 响应速度 | RTT 3次 | RTT 5-7次（支持会话恢复） |
| 头部结构 | 无加密标识  | 包含加密协议版本等安全参数    |
| 资源消耗 | 低      | 增加15-20% CPU负载   |

### 四、HTTPS安全机制解析

1.  **混合加密体系**\
    结合非对称加密（RSA/ECC）的安全密钥交换与对称加密（AES）的高效数据加密，兼顾安全与性能。
2.  **证书链验证**\
    通过根证书→中间证书→服务器证书的信任链验证，防止中间人攻击。OCSP协议实时检查证书吊销状态。
3.  **HSTS策略**\
    强制浏览器使用HTTPS连接，防范SSL剥离攻击。

### 五、总结

*   **端口号**：HTTP 默认是 80，HTTPS 默认是 443。
*   **URL 前缀**：HTTP 的 URL 前缀是 `http://`，HTTPS 的 URL 前缀是 `https://`。
*   **安全性和资源消耗**：HTTP协议基于TCP协议构建，其传输的数据均为明文形式，且通信双方无法验证彼此身份。而HTTPS作为HTTP的安全演进版本，其通信架构分为两层：底层通过SSL/TLS协议与TCP建立安全通道，上层则承载经过加密处理的HTTP通信。该加密体系采用混合加密机制，即使用服务器数字证书中的公钥对对称会话密钥进行非对称加密传输，实际数据传输阶段则采用高效对称加密算法。相较于HTTP，HTTPS通过双重加密机制显著提升了安全性，但同时也因加解密运算增加了服务器的计算负载。

{% note blue 'fas fa-fan' flat%}
文章同步发布：
掘金 - https://juejin.cn/post/7475349858947137571
博客园 - https://www.cnblogs.com/rainy-night/p/18738188
思否 - https://segmentfault.com/a/1190000046149545
CSDN - https://blog.csdn.net/weixin_43954092/article/details/145874964
{% endnote %}
