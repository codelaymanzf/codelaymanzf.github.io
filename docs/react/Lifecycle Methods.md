# React 生命周期函数

https://reactjs.org/docs/react-component.html#commonly-used-lifecycle-methods

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## 共有的

- render
- constructor
- componentDidMount
- shouldComponentUpdate
- componentDidUpdate
- componentWillUnmount

## React V16.0 前

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

## React V16.0

- componentDidCatch

## React V16.3

- getDerivedStateFromProps
  > 替代 componentWillMount 、componentWillReceiveProps 、componentWillUpdate
  - 调用 render 方法之前调用
  - `并且在初始挂载时调用`
- getSnapshotBeforeUpdate
  - render 之后，在 componentDidUpdate 之前调用
  - 它使得组件能在发生更改之前从 DOM 中捕获一些信息（如 滚动位置）
  - 它的任何返回值将作为参数传给 componentDidUpdate()

## React V16.4

- 修改 getDerivedStateFromProps
  - 调用 render 方法之前调用
  - `并且在初始挂载、后续更新时都会被调用`

## React V17 可能会废弃的三个生命周期

> 目前使用的话加上 `UNSAFE_`前缀

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

---

### 挂载时

- constructor
- getDerivedStateFromProps
- render
- componentDidMount

### 更新时

- getDerivedStateFromProps
- shouldComponentUpdate
- render
- getSnapshotBeforeUpdate
- componentDidUpdate

### 卸载时

- componentWillUnmount
