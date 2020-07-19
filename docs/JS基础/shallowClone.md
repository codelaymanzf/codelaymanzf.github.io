# 浅拷贝

## `Object.assign`

```js
let a = {
  age: 1
};
let b = Object.assign({}, a);
a.age = 2;
console.log(b.age); // 1
```

## `...`操作符

```js
let a = {
  age: 1
};
let b = { ...a };
a.age = 2;
console.log(b.age); // 1
```
