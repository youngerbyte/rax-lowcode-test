---
title: 示例组件
description: 组件描述
category: General
---

一个面向移动端的跨端单组件包

## 使用

```bash
yarn install
```


## 调试
启动调试

```bash
yarn lowcode:start
```

构建

```bash
yarn lowcode:build
```

可能的异常
```bash
yarn lowcode:build
报错@ali/lowcode-rax-renderer
解决方案：全局搜@ali/lowcode-rax-renderer，将@ali/lowcode-rax-renderer替换成@alilc/lowcode-rax-renderer，大概有5到6个地方需要替换
```

## 备注
启动调试
```bash
注意：
目前只测试了yarn lowcode:start和lowcode:build
请使用者明白yarn lowcode:start与yarn start、lowcode:build和yarn build是不同的，yarn lowcode:start/build是构建低代码相关，yarn start/build是rax相关，二者底层依赖的基建是不同的，如果本demo想要支持yarn start/build，那么最好基于rax模板创建一个demo，然后将src内容拷贝到raxdemo中去；最好的方案是改造本工程同时支持yarn lowcode:start/build和yarn start/build，如果有人想改造，本人可以提供修改建议
yarn start、yarn build本demo暂时不支持，使用yarn start/build的意图是为了构建rax相关内容，但此demo是基于低代码模版创建的，所以yarn start/build会有问题
```
