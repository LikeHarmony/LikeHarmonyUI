---
category: Components
title: VirtualList 虚拟列表 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 基础组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
---

# VirtualList 虚拟列表

## 介绍

虚拟列表组件 VirtualList

技术点：

  1.布局：外壳overflowY、填充maxLength、内容absolute

  2.计算公式待补充

  3.https://juejin.cn/post/7232856799170805820

## 示例 

<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/base.tsx">基础用法</code>

## APi

<!-- 会生成api表格 -->
| 属性 |    类型    |   默认值  | 必填 | 说明 |
| --- | ---------- | -------- | ---- | ---- |
| visiable | boolean | false |  true  | 是否展示 |
| width | number |   |  true  | 宽度 |
| onClose | function |   |  false  | 关闭回调 |
| zIndex | string |   |  false  | 图层权重 |
| placement | string |   |  false  | 弹出方向（目前仅支持右边） |
| mask | false |  boolean |  false  | 是否存在蒙版 |
| maskClosable | boolean |   |  false  | 蒙版是否可关闭 |
| closable | boolean |   |  false  | 是否显示关闭按钮 |
| destroyOnClose | boolean |   |  false  | 关闭后，是否销毁内容 |
| inBody | boolean、HTMLElement | false  |  false  | 是否挂载到body |
| drawerStyle | string |   |  false  | 抽屉样式 |
| children | string、HTMLElement |   |  false  | 内容 |

