## 为什么出现 hooks?

解决类组件存在的不足

## 类组件有哪些不足？

- 状态逻辑复用难

  - 缺少复用机制
  - 渲染属性和高阶组件导致层级冗余

- 趋向复杂难以维护

  - 生命周期函数混杂不相干逻辑
  - 相干逻辑分散在不同生命周期

- this 指向困扰
  - 内联函数过度创建新句柄
  - 类成员函数不能保证 this

## hooks 有哪些优势？

- 函数组件无 this 问题
- 自定义 hook 方便复用状态逻辑

## 有哪些 hooks?

- useState
- useEffect
- useCallback
- useContext
- useReducer

## 使用规则

- 只在最顶层使用 Hook, 不要在循环、条件或嵌套函数中调用 Hook
- 只在 React 函数中调用 Hook, 不要在普通 JavaScript 函数中调用 Hook; 可在自定义的 Hook 中调用其他 Hook
