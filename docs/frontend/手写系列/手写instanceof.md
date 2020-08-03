# 手写instanceOf

## instanceOf

```js
// instance_of函数是instanceof操作符的代码实现，需要注意传入的参数都为object类型
function instance_of(L, R) {
  // L 表示instanceof 左边， R 表示 instanceof 右边
  let O = R.prototype; // 取R的显示原型
  L = L.__proto__; // 取L的隐式原型
  while (true) {
    // 循环执行，直接O严格等于L
    if (L === null) return false;
    if (O === L) return true;
    L = L.__proto__;
  }
}
```

```js
function Foo() {
  console.log("我是函数");
}

let a = 1;
console.log(a instanceof Number); // false
console.log(Number instanceof Number); // false
console.log(String instanceof String); // false
console.log(Foo instanceof Foo); // false

// 分析 以 Foo instanceof Foo 为例

let O = (R.prototype = Foo.prototype);
L = L.__proto__ = Foo.__proto__ = Function.prototype;

O !== L; // 循环
L = L.__proto__.__proto__ = Function.prototype.__proto__ = Object.prototype;

O !== L; // 循环
L = L.__proto__.__proto__.__proto__ = Object.prototype.__proto__ = null;

return false;
```
