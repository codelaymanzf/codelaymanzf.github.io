```js
(function(window) {
  function Promise(executor) {
    const self = this;

    self.status = "pending";
    self.data = undefined;
    self.callbacks = [];

    function resolve(value) {
      if (self.status !== "pending") {
        return;
      }

      self.status = "resolved";
      self.data = value;

      if (self.callbacks.length) {
        setTimeout(() => {
          self.callbacks.forEach(obj => {
            obj.onResolved(value);
          });
        });
      }
    }

    function reject(reason) {
      if (self.status !== "pending") {
        return;
      }

      self.status = "rejected";
      self.data = reason;

      if (self.callbacks.length) {
        setTimeout(() => {
          self.callbacks.forEach(obj => {
            obj.onRejected(reason);
          });
        });
      }
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      // 如果出了异常，直接失败
      reject(error);
    }
  }

  Promise.prototype.then = function(onResolved, onRejected) {
    const self = this;
    onResolved = typeof onResolved === "function" ? onResolved : value => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : reason => {
            throw reason;
          };

    // 返回一个新的promise对象
    return new Promise((resolve, reject) => {
      /**
       * 专门抽取用来处理promise成功/失败结果的函数
       */
      function handle(callback) {
        try {
          const x = callback(self.data);

          // 2 返回一个新的promise ===> 得到新的pomise的结果值作为返回的promise的结果值
          if (x instanceof Promise) {
            x.then(resolve, reject); // 一旦x成功了，resolve(value), 一旦x失败了，reject(reason)
          } else {
            // 3 返回一个一般值(undefined) ===> 将这个值作为返回的promise的成功值
            resolve(x);
          }
        } catch (error) {
          // 1 抛出异步 返回promise为rejected
          reject(error);
        }
      }

      if (self.status === "resolved") {
        setTimeout(() => {
          handle(onResolved);
        });
      } else if (self.status === "rejected") {
        setTimeout(() => {
          handle(onRejected);
        });
      } else {
        // 当promise还未确定pending
        // 将onResolved和onRejected保存起来
        self.callbacks.push({
          onResolved(value) {
            handle(onResolved);
          },
          onRejected(reason) {
            handle(onRejected);
          }
        });
      }
    });
  };

  Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
  };

  Promise.resovle = function(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  };

  Promise.reject = function(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  };

  Promise.all = function(promises) {
    // 返回一个新的promise
    return new Promise((resolve, reject) => {
      // 待处理的promises数组的长度
      const promiseLen = promises.length;
      // 准备一个保存成功值的数组
      const values = new Array(promiseLen);
      // 已成功的数据
      let resolvedCount = 0;

      promises.forEach((p, index) => {
        Promise.resolve(p).then(
          value => {
            values[index] = value;
            resolvedCount++;

            // 一旦全部成功
            if (resolvedCount === promiseLen) {
              // 将所有成功值的数组作为返回promise对象的成功结果值
              resolve(values);
            }
          },
          reason => {
            // 一旦有一个promise产生了失败结果值，将其作为返回promise对象的失败结果值
            reject(reason);
          }
        );
      });
    });
  };

  Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach(p => {
        Promise.resolve(p).then(
          value => {
            // 只要有一个成功了，返回的promise就成功了
            resolve(value);
          },
          reason => {
            // 只要有一个失败了，返回的结果就失败了
            reject(reason);
          }
        );
      });
    });
  };

  window.Promise = Promise;
})(window);
```
