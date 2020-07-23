module.exports = {
  title: "野生码农的学习笔记",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "野生码农的学习笔记",
      description: "野生码农的学习笔记",
    },
  },
  themeConfig: {
    logo: "/assets/img/logo.png",
    search: false,
    docsDir: "docs",
    lastUpdated: true, // 最后更新时间
    sidebar: [
      {
        title: "JS 基础", // 必要的
        // path: "/JS基础/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 2, // 可选的, 默认值是 1
        children: [
          "/JS基础/== vs ===.md",
          "/JS基础/类型转换.md",
          "/JS基础/closure.md",
          "/JS基础/this.md",
          "/JS基础/deepClone",
          "/JS基础/shallowClone",
        ],
      },
      {
        title: "ES6",
        children: ["/ES6/arrow function.md", "/ES6/var、let & const.md"],
      },
      {
        title: "浏览器原理",
        children: [
          "/浏览器/浏览器进程架构.md",
          "/浏览器/浏览器内核.md",
          "/浏览器/浏览器缓存机制.md",
          "/浏览器/渲染流水线.md",
          "/浏览器/JS运行机制.md",
          "/浏览器/垃圾回收.md",
        ],
      },
      {
        title: "网络",
        children: [
          "/网络/HTTP、HTTPS.md",
          "/网络/HTTP2、HTTP3.md",
          "/网络/TCP.md",
          "/网络/UDP.md",
          "/网络/输入URL到页面展示的过程.md",
        ],
      },
      {
        title: "Web安全",
        children: [
          "/web security/XSS.md",
          "/web security/CSRF.md",
          "/web security/clickjacking.md",
        ],
      },
      {
        title: "webpack",
        children: [
          "/webpack/webpack构建流程.md",
          "/webpack/webpack优化方案.md",
          "/webpack/自定义loader、plugin.md",
        ],
      },
      {
        title: "手写系列",
        children: [
          "/手写系列/手写call、apply、bind.md",
          "/手写系列/手写instanceof.md",
          "/手写系列/手写reduce、indexOf.md",
          "/手写系列/手写throttle、debounce.md",
          "/手写系列/手写promise.md",
          "/手写系列/手写bubbleSort、quickSort.md",
        ],
      },
      {
        title: "React",
        children: [
          "/react/Lifecycle Methods.md",
          "/react/setState.md",
          "/react/virtual dom.md",
          "/react/diff algorithm.md",
          "/react/React v 16.0 新加内容.md",
          "/react/性能优化.md",
        ],
      },
      {
        title: "框架/库源码简版",
        children: ["/框架和库源码/"],
      },
    ],
  },
};
