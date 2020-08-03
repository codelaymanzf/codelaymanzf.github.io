# 深拷贝

## 详细版

```js
// 是否是object
const isObject = obj =>
  obj !== null && (typeof obj === "object" || typeof obj === "function");
// 是否是function
const isFunction = obj => typeof obj === "function";

function deepClone(obj, hash = new WeakMap()) {
  // 处理循环引用
  if (hash.get(obj)) {
    return hash.get(obj);
  }

  // 处理普通值
  if (!isObject(obj)) {
    return obj;
  }

  // 处理函数
  if (isFunction(obj)) {
    // function返回原引用
    return obj;
  }

  let cloneObj;

  const Constructor = obj.constructor;

  switch (Constructor) {
    case Boolean:
    case Date:
      return new Date(+obj);
    case Number:
    case String:
    case RegExp:
      return new Constructor(obj);
    default:
      cloneObj = new Constructor();
      hash.set(obj, cloneObj);
  }

  [
    ...Object.getOwnPropertyNames(obj),
    ...Object.getOwnPropertySymbols(obj)
  ].forEach(k => {
    cloneObj[k] = deepClone(obj[k], hash);
  });
  // 等价于
  //   Reflect.ownKeys(obj).forEach(k => cloneObj[k] === deepClone(obj[k], hash));

  return cloneObj;
}

// ====== 测试 ======
const symbolName = Symbol();
const obj = {
  objNumber: new Number(1),
  number: 1,
  objString: new String("ss"),
  string: "stirng",
  objRegexp: new RegExp("\\w"),
  regexp: /w+/g,
  date: new Date(),
  function: function() {},
  array: [{ a: 1 }, 2],
  [symbolName]: 111
};
obj.d = obj;

const o = deepClone(obj);

console.log(o.objNumber === obj.objNumber); // false
console.log(o.number === obj.number); // true
console.log(o.objString === obj.objString); // false
console.log(o.string === obj.string); // true
console.log(o.objRegexp === obj.objRegexp); // false
console.log(o.regexp === obj.regexp); // false
console.log(o.date === obj.date); // false
console.log(o.function === obj.function); // true
console.log(o.array[0] === obj.array[0]); // false
console.log(o[symbolName] === obj[symbolName]); // true
```

## 精简版

```js
function deepClone(obj, hash = new WeakMap()) {
  function isObject(o) {
    return (typeof o === "object" || typeof o === "function") && o !== null;
  }

  if (!isObject(obj)) {
    return obj;
  }

  // 解决循环引用问题
  if (hash.has(obj)) {
    return has.get(obj);
  }

  let newObj = Array.isArray(obj) ? [...obj] : { ...obj };
  hash.set(obj, newObj);

  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  });

  return newObj;
}
```

## 偷赖版

`JSON.parse(JSON.stringify(object))`

```js
let a = {
  age: undefined,
  sex: Symbol("male"),
  jobs: function() {},
  name: "steven"
};
let b = JSON.parse(JSON.stringify(a));
console.log(b); // {name: "steven"}
```

此方法局限性:

- 会忽略`undefined`
- 会忽略`symbol`
- 会忽略`function`
- 不能解决循环引用问题
