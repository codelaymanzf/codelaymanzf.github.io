### 点击劫持 (clickjacking)

> 点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。

### 防御

- JS 方式

  > 如果攻击网站的`top.location`与 iframe 中的`window.location`不同，则直接跳转到 iframe 引入的地址，代码如下：

  ```javascript
  <script>
      if(top.location !== window.location) {
          top.location = window.location;
      }
  </script>
  ```

  > 此方法的弊端在于，如果攻击者将 JS 禁止掉，刚以上代码不会生效，则不会跳转。

  > js 禁止使用，那用户是不是点击也不会生效？

  > 不对。HTML5 给 iframe 新增加了 sandbox 属性，若设置`sandbox='allow-forms'`, 则页面脚本不会执行，但允许提交表单。

- X-FRAME-OPTIONS

  > `X-FRAME-OPTIONS` 是一个 HTTP 响应头，在现代浏览器有一个很好的支持。这个 HTTP 响应关就是为了防御用 iframe 嵌套的点击劫持攻击。
  > 该响应头有三个值可选，分别是：
  >
  > - DENY, 表示页面不允许通过 iframe 的方式展示
  > - SAMEORIGIN, 表示页面可以在相同域名下通过 iframe 的方式展示
  > - ALLOW-FROM, 表示页面可以在指定来源的 iframe 中展示
