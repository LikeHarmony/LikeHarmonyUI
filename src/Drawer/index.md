---
category: Components
title: Drawer 抽屉 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

# Drawer 按钮

## 介绍

基础抽屉组件 Drawer。

技术点：

  1.调用 createPortal 创建 portal，并传入 JSX 与实际渲染的目标 DOM 节点

  2.通过clearContentDom标记销毁children元素

  3.todo 使用 addEventListener("animationend", (event) => {}); 去控制关闭时的动画

## 示例 

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/base.tsx">基础用法</code>

## APi

<!-- 会生成api表格 -->
| 属性 | 类型                   | 默认值   | 必填 | 说明 |
| ---- | ---------------------- | -------- | ---- | ---- |
| type | 'primary' | 'default' | 'default |  false  | 按钮类型 |
