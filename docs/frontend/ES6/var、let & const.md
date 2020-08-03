# var、let 和 const 的区别

- `var`声明的的变量会发生提升，`let`、`const`不会，且因为存在暂时性死区，不能在声明前使用，否则会出现报错的情况

  ```js
  console.log(a); // undefined
  var a = 1;
  ```

  > 变量声明会提升，函数声明也会提升, 且优先于变量提升

  ```js
  console.log(a); // ƒ a() {}
  function a() {}
  var a = 1;
  ```

- `var`在全局作用域下声明变量会导致变量挂载在`window`上, `let`、`const`不会

  ```js
  var a = 1;
  let b = 1;
  const c = 1;
  console.log(window.b); // undefined
  console.log(window.c); // undefined

  function test() {
    console.log(a);
    let a;
  }
  test();
  ```

- `var`声明的变量可以被重新声明、赋值，`let`不能被重新声明，`const`不能被重新声明与赋值
