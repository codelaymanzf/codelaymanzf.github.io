# == vs ===

https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.1

- x 和 y 是否类型相同
  - 相同： `x === y` 比大小
  - 不同：类型转换
    - `null == undefined` 返回 `true`
    - 判断 `string == number`
      - 是 `string` 转 `number`
    - 判断 `boolean == any`
      - 是 `boolean` 转 `number`
    - 判断 `object == string | number | symbol`
      - 是 `object` 转基本类型
      - 否 返回 `false`

![=== 和 ==](http://www.bbvdd.com/d/20200112204737iug.jpeg)
