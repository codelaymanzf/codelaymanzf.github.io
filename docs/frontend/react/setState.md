## setState

- 用 setState 更新状态不能直接修改

```js
this.state.counter += 1; // 错误的
```

- setState 是批量执行的，因些对一个状态执行多次只起一次作用，多个状态更新可放在同一个 setState 中进行

```js
componentDidMount() {
    this.setState({
        counter: this.state.counter + 1
    });
    this.setState({
        counter: this.state.counter + 1
    });
}

```

- setState 通常是异步的，因些如果要获取到最新状态值有以下三种方式：

  - 1、传递函数给 setState 方法

  ```js
  this.setState(nextState => ({
    counter: nextState.counter + 1
  })); // 1
  this.setState(nextState => ({
    counter: nextState.counter + 1
  })); // 2
  this.setState(nextState => ({
    counter: nextState.counter + 1
  })); // 3
  ```

  - 2、使用定时器

  ```js
  setTimeout(() => {
    this.changeValue();
    console.log(this.sate.counter);
  });
  ```

  - 3、原生事件中修改状态

  ```js
  componentDidMount() {
      document.body.addEventLiistener('click', this.changeValue, false);
  }

  changeValue = () => {
      this.setSate({
          counter: this.state.counter + 1
      });
      console.log(this.state.counter);
  }

  ```

**总结：setState 只有在合成事件和生命周期函数中是异步的，在原生事件和 setTimeout 中都是同步的，这里的异步其实是批量更新**
