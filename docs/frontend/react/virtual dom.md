# Virtual DOM

## what?

用 JavaScript 对象表示 DOM 信息和结构，当状态变更的时候，重新渲染这个 JavaScript 对象结构。这个 JavaScript 对象称为 virtual dom.

## why?

DOM 操作很慢，轻微的操作都可能导致页面重新排版，非常耗性能。相对 DOM 对象，js 对象处理起来更快，而且更简单。通过 diff 算法对比新旧 vdom 之间的差异，可以批量的、最小化的执行 DOM 操作，从而提高性能。

## where?

react 用 JSX 语法描述视图，通过 babel-loader 转译后它们变为 React.createElement(...)形式，该函数将成生成 vdom 来描述真实 DOM。将来如果状态变化，vdom 将作出相应的变化，再通过 diff 算法对比新老 vdom 区别从而生成最终 DOM 操作。
