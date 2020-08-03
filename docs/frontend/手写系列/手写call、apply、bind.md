# 手写 call & apply & bind
## 手写 call

```js
Function.prototype.myCall = function(context) {
  if (context === null || context === undefined) {
    // 指定null或undefined的this值会自动指向全局对象（浏览器中的window）
    context = window;
  } else {
    // 值为原始类型（数字、字符串、布尔值）的this会指向该原始值的实例对象
    context = Object(context);
  }

  const fn = Symbol(); // 用于临时存储函数, 为了避免函数名与上下文(context)的属性发生冲突，使用Symbol类型作为唯一值
  context[fn] = this; // 函数的this指向隐式绑定到context上

  let arg = [...arguments].slice(1);
  let result = context[fn](...arg); // 通过隐式绑定执行函数并传递参数

  delete context[fn]; // 删除上下文对象属性
  return result; // 返回函数执行结果
};
```

## 手写 apply

```js
Function.prototype.myApply = function(context, arr) {
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }

  const fn = Symbol();
  context[fn] = this;

  let result;
  if (!arr) {
    result = context[fn]();
  } else {
    result = context[fn](...arr);
  }

  delete context[fn];
  return result;
};
```

## 手写 bind

```js
Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("what is trying to be bound is not callable");
  }

  const thisFn = this;
  let args = Array.prototype.slice.call(arguments, 1);
  let bindFn = function() {
    return thisFn.apply(
      this instanceof bindFn ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };

  bindFn.prototype = Object.create(thisFn.prototype);

  return bindFn;
};
```
