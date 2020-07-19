## bubbleSort

```js
function bubbleSort(arr) {
  var len = arr.length;
  for (var j = 0; j < len - 1; j++) {
    for (var i = 0; i < len - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

// 优化版
function bubbleSort2(arr) {
  var len = arr.length;
  for (var j = 0; j < len - 1; j++) {
    var done = true;
    for (var i = 0; i < len - 1 - i; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}
```

## quickSort

```js
function quickSort(arr) {
  /*
   * 创建len保存数组的长度，每次获取数据的长度要实时查询不利于性能
   * index作为保存取到的中间值
   * pivot保存比较参照物
   * left、right作为子数组的容器
   */

  var len = arr.length,
    index,
    pivot,
    left = [],
    right = [];
  // 如果数组只有一位，就直接返回数组，作为递归的终止条件
  if (len <= 1) return arr;
  // 获取中间值的索引，使用Math.florr()向下取整
  index = Math.floor(len / 2);

  /*
   * 使用splice截取中间值，第一个参数为截取的索引，第二个参数为截取的长度
   * 如果此处使用 pivot = arr[index], 将会出现无限递归的错误
   * splice影响原数组，原数组长度减1
   */
  pivot = arr.splice(index, 1);
  len -= 1;

  // 小于pivot存到left数组里，大于pivot存到right数组里
  for (var i = 0; i < len; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // 不断把分割的左右子数组传入quickSort，直到分割的只有一位直接返回子数组本身，递归终止
  // 把每次分割的数组一层一层的concat连接起来
  // 每一层left里的元素都小于对应的pivot, right里的元素都大于对应的pivot
  return quickSort(left).concat(pivot, quickSort(right));
}
```
