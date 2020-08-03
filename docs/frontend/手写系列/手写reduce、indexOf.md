# 手写reduce & indexOf

## reduce

```js
Array.prototype._reduce = function(callback, initValue) {
  let preValue = typeof initValue === "undefined" ? this[0] : initValue;
  let start = typeof initValue === "undefined" ? 1 : 0;

  for (let i = start; i < this.length; i++) {
    preValue = callback(preValue, this[i], i, this);
  }

  return preValue;
};
```

## indexOf

> 字符串与数组均有 indexOf 方法，所以须作区分

```js
Array.prototype._indexOf = function(item, start = 0) {
  let data = this;
  let isArray = Array.isArray(data);
  let isString = Object.prototype.toString.call(data) === "[object String]";
  let len = data.length;

  if (!isArray && !isString) {
    throw new SyntaxError();
  }

  if (start >= len) {
    return -1;
  }

  for (let i = start; i < len; i++) {
    if (isString) {
      let strLen = item.length;
      let tmp = data.substring(i, i + strLen); // 若是字符串，传入的item可能不止一个字符，所以截取后再比较
      if (tmp === item) {
        return i;
      }
    }

    if (isArray && data[i] === item) {
      return i;
    }
  }

  return -1;
};
```
