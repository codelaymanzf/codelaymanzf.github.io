module.exports = {
  title: "野生码农的学习笔记",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
  }],
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
    nav: [
      {text: '前端', link: '/frontend/'},
      {text: '运维', link: '/linux/'},
    ],
    sidebar:{
      '/frontend/':  [
        {
          title: "JS 基础", // 必要的
          // path: "/JS基础/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          // collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 3, // 可选的, 默认值是 1
          children: [
            "/frontend/JS基础/== vs ===.md",
            "/frontend/JS基础/类型转换.md",
            "/frontend/JS基础/closure.md",
            "/frontend/JS基础/this.md",
            "/frontend/JS基础/deepClone",
            "/frontend/JS基础/shallowClone",
          ],
        },
        {
          title: "ES6",
          children: [
            "/frontend/ES6/arrow function.md", 
            "/frontend/ES6/var、let & const.md"
          ],
        },
        {
          title: "浏览器原理",
          children: [
            "/frontend/浏览器/浏览器进程架构.md",
            "/frontend/浏览器/浏览器内核.md",
            "/frontend/浏览器/浏览器缓存机制.md",
            "/frontend/浏览器/渲染流水线.md",
            "/frontend/浏览器/JS运行机制.md",
            "/frontend/浏览器/垃圾回收.md",
          ],
        },
        {
          title: "网络",
          children: [
            "/frontend/网络/HTTP、HTTPS.md",
            "/frontend/网络/HTTP2、HTTP3.md",
            "/frontend/网络/TCP.md",
            "/frontend/网络/UDP.md",
            "/frontend/网络/输入URL到页面展示的过程.md",
          ],
        },
        {
          title: "Web安全",
          children: [
            "/frontend/web security/XSS.md",
            "/frontend/web security/CSRF.md",
            "/frontend/web security/clickjacking.md",
          ],
        },
        {
          title: "webpack",
          children: [
            "/frontend/webpack/webpack构建流程.md",
            "/frontend/webpack/webpack优化方案.md",
            "/frontend/webpack/自定义loader、plugin.md",
          ],
        },
        {
          title: "前端错误基础",
          children: [
            "/frontend/前端错误/错误基础.md"
          ]
        },
        {
          title: "手写系列",
          children: [
            "/frontend/手写系列/手写call、apply、bind.md",
            "/frontend/手写系列/手写instanceof.md",
            "/frontend/手写系列/手写reduce、indexOf.md",
            "/frontend/手写系列/手写throttle、debounce.md",
            "/frontend/手写系列/手写promise.md",
            "/frontend/手写系列/手写bubbleSort、quickSort.md",
          ],
        },
        {
          title: "React",
          children: [
            "/frontend/react/Lifecycle Methods.md",
            "/frontend/react/setState.md",
            "/frontend/react/virtual dom.md",
            "/frontend/react/diff algorithm.md",
            "/frontend/react/React v 16.0 新加内容.md",
            "/frontend/react/性能优化.md",
          ],
        },
        {
          title: "框架/库源码简版",
          children: ["/frontend/框架和库源码/"],
        } 
      ],
      '/linux/': [
        {
          title: '运维基础',
          children: [
            "/linux/SVN&Git.md",
            "/linux/基本命令.md"
          ]
        }
      ]
    }
  },
};
