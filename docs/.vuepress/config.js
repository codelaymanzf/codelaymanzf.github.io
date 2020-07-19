module.exports = {
  title: '野生码农的学习笔记',
  themeConfig: {
    logo: '/assets/img/logo.png',
    search: false,
    docsDir: "docs",
    lastUpdated: true, // 最后更新时间
    sidebar: [
      {
        title: "JS 基础", // 必要的
        // path: "/JS基础/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
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
        children: [
          "/ES6/arrow function.md",
          "/ES6/var、let & const.md"
        ],
      },
    ],
  },
};
