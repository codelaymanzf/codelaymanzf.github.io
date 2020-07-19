## throttle

```js
function throttle(fn, gapTime) {
  if (typeof fn !== "function") {
    throw new TypeError("need a function");
  }

  gapTime = gapTime || 0;
  var lastTime = 0;

  return function(...args) {
    var time = +new Date();
    if (time - lastTime > gapTime || !lastTime) {
      fn.apply(this, ...args);
    }

    lastTime = time;
  };
}
```

## debounce

```js
function debounce(fn, wait) {
  if (typeof fn !== "function") {
    throw new TypeError("need a function");
  }

  wait = wait || 0;
  var timer = null;

  return function() {
    var self = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function() {
      fn.apply(self, args);
    }, wait);
  };
}
```

## 合体版

> 为了避免弄巧成拙，我们需要借力 throttle 的思想，打造一个“有底线”的 debounce——等你可以，但我有我的原则：delay 时间内，我可以为你重新生成定时器；但只要 delay 的时间到了，我必须要给用户一个响应。这个 throttle 与 debounce “合体”思路，已经被很多成熟的前端库应用到了它们的加强版 throttle 函数的实现中：

```js
// fn是需要包装的事件回调，delay是时间间隔的阈值
function throttle(fn, delay) {
  // last为上一次触发回调的时间，timer是定时器
  var last = o,
    timer = null;

  // 将throttle处理结果当作函数返回
  return function() {
    // 保留调用时的this上下文
    var context = this;
    // 保留调用时传入的参数
    var args = arguments;
    // 记录本次触发回调的时间
    var now = +new Date();

    // 判断上次触发的时间和本次触的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
      // 如果时间间隔小于设定的时间间隔阈值，则为本次触发操作设定一个新的定时器
      clearTimeout(timer);
      timer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // 如果时间间隔超出了设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
      last = now;
      fn.apply(context, args);
    }
  };
}

// 用新的throttle包装scroll的回调
const betterScroll = throttle(() => console.log("触发了滚动操作"), 1000);

document.addEventListener("scroll", betterScroll);
```

http://demo.nimius.net/debounce_throttle/
