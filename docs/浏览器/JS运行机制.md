# JS 运行机制

### JS 是单线程执行

> JS 引擎线程和 GUI 渲染线程互斥

#### 为什么？

- JS 执行的时候，UI 线程还工作的话，可能导致不能安全地渲染 UI

#### JS 单线程的好处？

- 节省内存，节省切换上下文的时间
- 没有锁的问题

### Event Loop

![Event Loop](EventLoop.gif)

### 宏任务与微任务

#### 宏任务(macrotask——task)

- 主代码块`script`
- `setImmediate` (nodejs)
- `MessageChannel`
- `setTimeout`
- `setInterval`
- `requestAnimationFrame`
- `I/O`

#### 微任务(microtask——job)

- `process.nextTick`(nodejs)
- `Promise`
- `MutationObserver`

https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

### 运行机制

- 首先执行一个`script`宏任务进入到调用栈中
- 遇到`同步任务`直接执行，遇到`异步任务`，做相应处理
- 执行过程中如果遇到`DOM`操作、`Ajax`、`setTimeout`等宏任务，就将回调函数添加到宏任务的任务队列中
- 执行过程中如果遇到微任务，就将它添加到微任务的的任务队列中
- 同步任务执行完毕，调用栈为空后，立即执行当前微任务队列中的所有微任务（依次执行）
- 执行完毕，开始检查渲染，然后 GUI 线程接管渲染
- 渲染完毕，JS 线程继续接管，开始下一个宏任务（从任务队列中获取）
