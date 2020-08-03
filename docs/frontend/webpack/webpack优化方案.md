
# webpack 优化

## webpack 构建速度优化

- ### 使用高版本的 webpack 和 Node.js

- ### 缩小构建目标

  - 不解析 node_modules
    - `loader`配置时添加`include: path.resolve(___dirname, './src')`

- ### 减少文件搜索范围

  - 使用`resolve`
    - `modules: path.resolve(___dirname, './node_modules')`
    - `alias`
    - `extensions`

- ### 多进程/多实例构建
  - 使用`happypack`插件
    > 小项目中效果并不明显
- ### 分包：预编译资源模块
  - 方法一： 使用`DLLPlugin`进行分包,`DLLReferencePlugin`对`manifest.json`进行引用
  - 方法二： 使用`hard-source-webpack-plugin`插件
- ### 利用缓存提升二次构建速度
  - `babel-loader`开启缓存
  - `terser-webpack-plugin`开启缓存
  - `cache-loader`或者`hard-source-webpack-plugin`
  ### 多进程并行压缩代码
  - 方法一：使用`parallel-uglify-plugin`插件
  - 方法二：使用`uglifyjs-webpack-plugin`开启`parallel`参数
  - 方法三：使用`terser-webpack-plugin`开启`parallel`参数

 <br/>

## webpack 打包体积优化

- ### 使用 Tree Shaking 剔除无用的 CSS 和 JS
  - CSS tree shaking


      `npm i glob-all purify-css purifycss-webpack --save-dev`

      ```javascript
        const PurifyCSS = require('purifycss-webpack')
        const glob = require('glob-all')

        plugins:[
            // 清除 css
            new PurifyCSS({
                paths: glob.sync([
                    // 要做 CSS Tree Shaking 的 径 件
                    path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对html文件进行tree shaking
                    path.resolve(__dirname, './src/*.js')
                ])
            })
        ]
      ```
    - JS tree shaking

- ### 图片压缩
- ### HTML 压缩

  `npm i html-webpack-plugin --save-dev`

  ```js
    new htmlWebpackPlugin({
        title: "京东商城",
        template: "./index.html",
        filename: "index.html",
        minify: {
            // 压缩 HTML 件
            removeComments: true, // 移除 HTML 中的注释
            collapseWhitespace: true, // 删除空白符与换行符
            minifyCSS: true // 压缩内联 css
        }
    }),
  ```

- ### CSS 压缩

  `npm i optimize-css-assets-webpack-plugin -D`
  `npm install cssnano -D`

  ```js
  const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

  new OptimizeCSSAssetsPlugin({
    cssProcessor: require("cssnano"), //引入cssnano配置压缩选项
    cssProcessorOptions: {
      discardComments: { removeAll: true }
    }
  });
  ```

- ### 使用动态 Polyfill 服务
