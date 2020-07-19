## 什么是 fiber?

> Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.

A Fiber is work on a Component that needs to be done or was done. There can be more than one per component. <br>
fiber 是指组件上将要完成或者已经完成的任务，每个组件可
以 个或者多个。

## 为什么需要 fiber?

- 对于大型项目，组件树很大，这时候递归的成本就会很高，会造成主线程被持续占用，结果就是主线程上的布局、动画等周期性任务就无法立即得到处理，造成视觉上的卡顿，影响用户体验。

## fiber 做了什么？

- 增量渲染（把渲染任务拆分成块，匀到多帧）
- 更新时能够暂停、终止、复用渲染任务
- 给不同类型的更新赋予优先级
- 并发方面新的基础能力
- 更流畅
