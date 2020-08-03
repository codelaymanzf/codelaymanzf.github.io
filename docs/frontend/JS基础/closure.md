### 闭包

> 函数 A 内部有函数 B, 函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包。<br>
> `函数嵌套函数，然后返回函数的解释是不完整的`，例如：

```javascript
function A() {
  let a = 1;
  window.B = function() {
    console.log(a);
  };
}

A();
B(); // 1
```
