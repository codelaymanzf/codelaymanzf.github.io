# React v 16.0.0+ 主要新增内容

## 16.2.0

- Add `Fragment` as named export to React

## 16.3.0

### React

- Add a new officially supported context API.
- Add a new `React.createRef()` API as an ergonomic alternative to callback refs.
- Add a new`React.forwardRef()` API to let components forward their refs to a child.

### React DOM

- Add a new `getDerivedStateFromProps()` lifecycle and UNSAFE\_ aliases for the legacy lifecycles.
- Add a new `getSnapshotBeforeUpdate()` lifecycle.
- Add a new `<React.StrictMode>` wrapper to help prepare apps for async rendering.
- Add support for `onLoad` and `onError` events on the `<link>`tag.
- Add support for `noModule` boolean attribute on the `<script>` tag.

## 16.5.0

### React DOM

- Add support for React DevTools Profiler
- Add `react-dom/profiling` entry point alias for profiling in production
- Add `onAuxClick` event for browsers that support it
- Add `movementX` and `movementY` fields to mouse events
- Add `tangentialPressure` and `twist` fields to pointer events

## 16.6.0

### React

- Add `React.memo()` as an alternative to `PureComponent` for functions.
- Add `React.lazy()` for code splitting components.

### React DOM

- Add `contextType` as a more ergonomic way to subscribe to context from a class
- Add `getDerivedStateFromError` lifecycle method for catching errors in a future asynchronous server-side renderer.

## 16.8.0

### React

- Add `Hooks` — a way to use state and other React features without writing a class.

## 16.9.0

### React

- Add `<React.Profiler`> API for gathering performance measurements programmatically.
