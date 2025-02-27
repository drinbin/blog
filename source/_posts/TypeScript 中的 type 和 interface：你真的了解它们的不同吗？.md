---
title: TypeScript 中的 type 和 interface：你真的了解它们的不同吗？
comments: false
abbrlink: 1d233934
date: 2024-03-01 00:11:32
tags:
- TypeScript
categories: JavaScript
keywords: 'TypeScript'
description: TypeScript 中的 type 和 interface 对比
top_img:
cover: 'https://image-static.segmentfault.com/602/923/602923363-65e0ac629013d_cover'
---
如果你有写过 Vue3 的项目，那么对 TypeScript 肯定不会陌生。不管是公司新项目技术选型还是个人学习开发新的前端项目，Vue3 + TypeScript 已经成为首选技术方案之一

在 TypeScript 这个强大的静态类型系统中，`type` 和 `interface` 是两个重要的关键字，用于定义和描述数据类型。然而，这两者之间的区别是什么，在实际开发过程中我们要怎么用呢？废话不说，直接进入正题，就让我们一起深入探讨吧

# 一、type 和 interface 的定义
- **type**: 可以定义一个集合，可以包含各种类型的属性和值，以用来描述对象、函数、联合类型、交叉类型等

```typeScript 
type Person = {
  name: string;
  age: number;
  sex: 0 | 1;
};
```

- **interface**：它定义了一个对象的形状，描述了对象应该具有的属性及其类型
```typeScript 
interface Person {
  name: string;
  age: number;
  sex: 0 | 1;
}
```

通过上面的示例，我们可以看到，虽然type 和interface都可以用来描述对象的结构，但是它们的语法略有不同。`type` 使用`等号`来定义类型别名，而 `interface` 使用`花括号`直接定义接口的成员

# 二、type 和 interface 的可扩展性
- **type**：它可以通过联合类型（`|`）和交叉类型（`&`）进行组合，但不能直接扩展其他 `type`
```typeScript 
type A = { x: string };
type B = { y: string };
type C = A & B; // C 同时具有 A 和 B 的属性
```

- **interface**：它可以被扩展，可以使用 `extends` 关键字来实现接口的继承，从而添加更多属性或者方法
```typeScript 
interface Fruit {
  name: string;
}

interface Apple extends Fruit {
  kind: string;
}
```

综合例子来看，`type` 适合于定义复杂的类型别名和泛型类型，以及进行条件类型的定义。`interface` 也具有相似的能力，它适合于描述对象的形状，定义类的契约和实现，以及接口之间的继承和扩展。这两者在许多情况下可以互相替代

# 三、type 和 interface 的兼容性
- **type**：如果对类型别名进行重复定义，TypeScript 会报错。这意味着不能重新定义一个已存在的type

```typeScript 
type A = { x: string };
type A = { y: string }; // 错误: 重复定义
```
- **interface**：如果定义了多个同名的接口，它们会被合并成一个单一的接口，而不是报错。当多个同名接口出现时，它们的成员会被合并为一个接口，这种合并会在类型级别上进行，不会在运行时产生影响
```typeScript 
interface A {
  x: string;
}
interface A {
  y: string;
  z: string;
}
```
就拿这个例子来说，无论你使用哪个`interface A`，都会引用同一个合并后的接口定义。这样的合并机制使得 TypeScript 中的接口能够更加灵活地进行组织和管理

# 结语
`type`和 `interface` 在 TypeScript 中都是用来定义类型的关键字，它们各有优势和适用场景。了解它们之间的区别和特性，可以更好地利用 TypeScript 的类型系统来提高代码质量和开发效率

在日常开发工作中，我们要遵循团队规范。例如，可以用`interface`定义一个复杂的对象类型，在组合不同类型时，可以使用 `type`关键字来定义

{% note blue 'fas fa-fan' flat%}
文章同步发布：
掘金 - https://juejin.cn/post/7340854234894876684
博客园 - https://www.cnblogs.com/rainy-night/p/18723170
思否 - https://segmentfault.com/a/1190000044671125
CSDN - https://blog.csdn.net/weixin_43954092/article/details/136384185
{% endnote %}
