/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "304b47e0b966e9b5af7017535e37af8e"
  },
  {
    "url": "assets/css/0.styles.3f949b7f.css",
    "revision": "814caf048df8231967f875feb7754049"
  },
  {
    "url": "assets/img/all_phases_after_url.644fdf55.png",
    "revision": "644fdf553b100499be51439b0942fccf"
  },
  {
    "url": "assets/img/all_stop.73fb4bde.png",
    "revision": "73fb4bdee1765ea9758edd98006226e6"
  },
  {
    "url": "assets/img/browser_process_architect.26be2160.png",
    "revision": "26be2160e40e4dca34250a3aa0d571b6"
  },
  {
    "url": "assets/img/EventLoop.4d08c68b.gif",
    "revision": "4d08c68b80f5986cb9b255979e9e9f46"
  },
  {
    "url": "assets/img/GPU_raster.09153f59.png",
    "revision": "09153f592e7d81cda1e159ce260fc07a"
  },
  {
    "url": "assets/img/http_cache_policy.66b57963.png",
    "revision": "66b57963fcc2e1017a87c84414537648"
  },
  {
    "url": "assets/img/HTTPS_verify.01a92af0.png",
    "revision": "01a92af0865059cdd32b29aed3fa760a"
  },
  {
    "url": "assets/img/incremental_mark.75437e33.png",
    "revision": "75437e335bfd63655344528518ba0df6"
  },
  {
    "url": "assets/img/logo.08548eb7.png",
    "revision": "08548eb745dd3127c1d70265db637f6c"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "08548eb745dd3127c1d70265db637f6c"
  },
  {
    "url": "assets/img/render_pipeline.37b85b04.png",
    "revision": "37b85b0495d9ef1b9f0679cae5d1145a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/V8_heap_space.d2c26a38.png",
    "revision": "d2c26a38d12ce168f447f315fbc814fa"
  },
  {
    "url": "assets/js/10.69fa5dae.js",
    "revision": "c42b99b2c4fc7b13d268c81786ef390f"
  },
  {
    "url": "assets/js/11.4cd6501c.js",
    "revision": "8ccd8da30ba7a1ff10d3e732119fb60b"
  },
  {
    "url": "assets/js/12.c8fbd087.js",
    "revision": "e6096a7b8dca0a2f51dfb7bc06e37404"
  },
  {
    "url": "assets/js/13.136cdf8f.js",
    "revision": "8b729e9a212423262ac7565d4f3dbf4e"
  },
  {
    "url": "assets/js/14.919cf8bf.js",
    "revision": "4615075995845fd1d368c720282598e4"
  },
  {
    "url": "assets/js/15.6821a2a9.js",
    "revision": "9351d44506feb5afe6f23a74e4e2a6f8"
  },
  {
    "url": "assets/js/16.2719af72.js",
    "revision": "5e15d5516554ec2772f074cfc9988c29"
  },
  {
    "url": "assets/js/17.5d939285.js",
    "revision": "e6552ff6c6c3c844f21da9a03ca918fa"
  },
  {
    "url": "assets/js/18.0ebf4c50.js",
    "revision": "57d338539fcc68714c3505bf2699980e"
  },
  {
    "url": "assets/js/19.f0932614.js",
    "revision": "72114ecacdd0448f3bb2468c58e9e32a"
  },
  {
    "url": "assets/js/2.2e4f5e7a.js",
    "revision": "84672be2c30e9ce6709d0b9be3a3b718"
  },
  {
    "url": "assets/js/20.7a7b3be6.js",
    "revision": "d2b4c250869dc74201a9de40b6e66fcf"
  },
  {
    "url": "assets/js/21.155c9560.js",
    "revision": "87bf72e4e317c686ae381e555ff77209"
  },
  {
    "url": "assets/js/22.fc46b628.js",
    "revision": "959e8226b0f6fd14946c0046cefafbd4"
  },
  {
    "url": "assets/js/23.32a0e6f1.js",
    "revision": "ecc14ed85d8af76e30b328ae1d6c859b"
  },
  {
    "url": "assets/js/24.6172f9d9.js",
    "revision": "738c475caf42ef3dcaf470bb1534d156"
  },
  {
    "url": "assets/js/25.bed50b09.js",
    "revision": "74beb9a82f74880683a4f4adf7efac04"
  },
  {
    "url": "assets/js/26.03ad0666.js",
    "revision": "284abfc92d5b1ab11dc56c7d362475ce"
  },
  {
    "url": "assets/js/27.93308c63.js",
    "revision": "c815432abba443b199d2675b89007686"
  },
  {
    "url": "assets/js/28.7acfba1b.js",
    "revision": "adad9354a9e00ae359afe94a0215af4e"
  },
  {
    "url": "assets/js/29.aedeabe5.js",
    "revision": "a45f47c255f5c7f90c460573d43362e0"
  },
  {
    "url": "assets/js/3.ea6740c1.js",
    "revision": "72e2453a9a43f9a1da5bfbe301d38a02"
  },
  {
    "url": "assets/js/30.99efccf1.js",
    "revision": "cbef22ea9e1007b5a931202b562ff3fd"
  },
  {
    "url": "assets/js/31.2c2acd5a.js",
    "revision": "89d33b23160ad5d9883a2e6f58bf4f62"
  },
  {
    "url": "assets/js/32.321282e5.js",
    "revision": "6a13c6caad8e6613df4030d89eb2a178"
  },
  {
    "url": "assets/js/33.5e1323c0.js",
    "revision": "a5749bef541d2d458578e2f7e44a7202"
  },
  {
    "url": "assets/js/34.7e9ade7b.js",
    "revision": "8d08d1e2c4dc988f69df15accc3775c9"
  },
  {
    "url": "assets/js/35.bb2ca4bc.js",
    "revision": "5f7a59c33f9dee3c199763ff156b4460"
  },
  {
    "url": "assets/js/36.1d482abb.js",
    "revision": "22047a0162c749025e6b1acbab71c8ea"
  },
  {
    "url": "assets/js/37.7ba8e9e0.js",
    "revision": "c3e92a449db7d265b8dbda0ecd99530f"
  },
  {
    "url": "assets/js/38.91d50257.js",
    "revision": "447cc4effa063b7a821a24f7647e360f"
  },
  {
    "url": "assets/js/39.6d070f4b.js",
    "revision": "9073881171c821dd38c2352eecd59be2"
  },
  {
    "url": "assets/js/4.39dffbe6.js",
    "revision": "66abaa0e450046b8172f21f101614b3d"
  },
  {
    "url": "assets/js/40.ec6a2bf4.js",
    "revision": "ba62b0ae970dd67feced0b0910d22e17"
  },
  {
    "url": "assets/js/41.69450e5c.js",
    "revision": "6444783a76bab3bffba6184f09948d4b"
  },
  {
    "url": "assets/js/42.919db3af.js",
    "revision": "d02a5af8e6ac2d183be5db907e5d96f5"
  },
  {
    "url": "assets/js/43.98d4952e.js",
    "revision": "b426bef38138842bf67e9a7b66a3b4b8"
  },
  {
    "url": "assets/js/44.c0693bc5.js",
    "revision": "4737832b25d118aca14be47f7800d5cf"
  },
  {
    "url": "assets/js/45.52c605d9.js",
    "revision": "de92c44b82fb1c870900af305b72503b"
  },
  {
    "url": "assets/js/46.91a0c570.js",
    "revision": "d6704cfc38b90142384c7b8239d54b38"
  },
  {
    "url": "assets/js/47.daf15cf7.js",
    "revision": "b33270806a6047fd3743d9e2be2ebd43"
  },
  {
    "url": "assets/js/48.465cff48.js",
    "revision": "4dc351f5fe61832f6381bf1b28ec541a"
  },
  {
    "url": "assets/js/49.33ea86c1.js",
    "revision": "bf3f0b9ec36699c470b5bef1df4709b2"
  },
  {
    "url": "assets/js/5.f9638d00.js",
    "revision": "dee43d4bea831ff1ca589a100abb1c57"
  },
  {
    "url": "assets/js/50.37a2218c.js",
    "revision": "0ab1aa38ce3705cd6e8e0248f7fe9ddc"
  },
  {
    "url": "assets/js/51.9b804264.js",
    "revision": "d7e1530e0eb2cf93c271dfc011b094c0"
  },
  {
    "url": "assets/js/52.ac78cb02.js",
    "revision": "6ecf87e8acf4296b2bf9846ba7a6e824"
  },
  {
    "url": "assets/js/53.adbf9af6.js",
    "revision": "4033235fa690946a06a8b741e6745c18"
  },
  {
    "url": "assets/js/54.e1feca09.js",
    "revision": "26f024a0091f9bb92b55ad8d68bd26c1"
  },
  {
    "url": "assets/js/55.3388a11a.js",
    "revision": "b3c7b0c5b042284d26b82a725c5fd308"
  },
  {
    "url": "assets/js/56.7ae27775.js",
    "revision": "a885294009dae36dabadfb38864505e7"
  },
  {
    "url": "assets/js/57.2de58100.js",
    "revision": "6df7d06bbebb866ad28fce783b2649ab"
  },
  {
    "url": "assets/js/6.b096fcc4.js",
    "revision": "c83f7cd48e71072b9f1d5c52e9671311"
  },
  {
    "url": "assets/js/7.e2fa401f.js",
    "revision": "ddeee9f5e1b48427aa8778acd61f8b54"
  },
  {
    "url": "assets/js/8.4b1a636e.js",
    "revision": "f8d5aadaae517498e7015c5537ed21b0"
  },
  {
    "url": "assets/js/9.353f2a7d.js",
    "revision": "ef201dc85e39594dac447c26a29adfa8"
  },
  {
    "url": "assets/js/app.c90fca65.js",
    "revision": "81bf68ee4d53901fb192cd20cee0ff5a"
  },
  {
    "url": "blog/index.html",
    "revision": "5596b2ada6df129e7043e5d7336f6627"
  },
  {
    "url": "blog/前端错误基础.html",
    "revision": "258378e2754af866be62b306bcb6af6d"
  },
  {
    "url": "blog/装饰器入门.html",
    "revision": "15bb583db080ca5a6bef4c2a1d4c7689"
  },
  {
    "url": "frontend/ES6/arrow function.html",
    "revision": "14e1a2ddd8d24544ca9b29ba707d0e18"
  },
  {
    "url": "frontend/ES6/index.html",
    "revision": "455a103a2f4088cbf24e68314234207d"
  },
  {
    "url": "frontend/ES6/var、let & const.html",
    "revision": "a173c90eb4c7d48a349819004981c6a9"
  },
  {
    "url": "frontend/index.html",
    "revision": "d9f856e4682418a67cf1eb9ad86e42e4"
  },
  {
    "url": "frontend/JS基础/== vs ===.html",
    "revision": "db9a6e9cfb51dedc28203bed426ef827"
  },
  {
    "url": "frontend/JS基础/closure.html",
    "revision": "b05518f3736765e17a179ad288bee258"
  },
  {
    "url": "frontend/JS基础/deepClone.html",
    "revision": "94555d6e503c53c7b4888b0218864bdc"
  },
  {
    "url": "frontend/JS基础/index.html",
    "revision": "45ae8c3d6ffb7e274f53cc45be3c303b"
  },
  {
    "url": "frontend/JS基础/shallowClone.html",
    "revision": "faa74974078cc16798c0b6fba6a15381"
  },
  {
    "url": "frontend/JS基础/this.html",
    "revision": "13e9dcad5be8a5644fa9d511e7e243d9"
  },
  {
    "url": "frontend/JS基础/类型转换.html",
    "revision": "0467f542ed98b32fddb2b7bf866b5a27"
  },
  {
    "url": "frontend/react/diff algorithm.html",
    "revision": "e261d46ccf8a7e777e98b0ce45374ce1"
  },
  {
    "url": "frontend/react/fiber.html",
    "revision": "90da05d0b706913c2ce4a01e2b2ddfdd"
  },
  {
    "url": "frontend/react/hooks.html",
    "revision": "137adc1dbb653819295350f9c47add20"
  },
  {
    "url": "frontend/react/Lifecycle Methods.html",
    "revision": "1a441144317a7c5603792aac47652699"
  },
  {
    "url": "frontend/react/React v 16.0 新加内容.html",
    "revision": "19e6e25ec92916f9e736454f656e313d"
  },
  {
    "url": "frontend/react/setState.html",
    "revision": "28e9abb7985bc93170910edd30e4ad77"
  },
  {
    "url": "frontend/react/virtual dom.html",
    "revision": "21d04a895de5e0946c4e683fe74eacf4"
  },
  {
    "url": "frontend/react/性能优化.html",
    "revision": "cb4a0cdc3b5cac6673bb58690b991c18"
  },
  {
    "url": "frontend/vue/Vue2和Vue3对比.html",
    "revision": "d28ad74432bfd190788b99f12afd0477"
  },
  {
    "url": "frontend/web security/clickjacking.html",
    "revision": "598af082bb1a502a6967c47c0dd173af"
  },
  {
    "url": "frontend/web security/CSRF.html",
    "revision": "04ec43ffb04422c27b766d8760ea8a8e"
  },
  {
    "url": "frontend/web security/XSS.html",
    "revision": "a2c3423b712a642568e2c0b5da181420"
  },
  {
    "url": "frontend/webpack/HMR原理.html",
    "revision": "77e1d62397980079798665dffc3f31c1"
  },
  {
    "url": "frontend/webpack/webpack优化方案.html",
    "revision": "cb8a6f02a6d1839b946dada478b3c270"
  },
  {
    "url": "frontend/webpack/webpack构建流程.html",
    "revision": "83a47d201d9f5c1b0a65e4b6a23f107e"
  },
  {
    "url": "frontend/webpack/自定义loader、plugin.html",
    "revision": "aac512b72f24eec77427066581647c48"
  },
  {
    "url": "frontend/手写系列/手写bubbleSort、quickSort.html",
    "revision": "6c34f7222b55fd6b484079863837753b"
  },
  {
    "url": "frontend/手写系列/手写call、apply、bind.html",
    "revision": "6ff80b66caef79ad0b297a6ff756d6ad"
  },
  {
    "url": "frontend/手写系列/手写instanceof.html",
    "revision": "1d5ce16844e5694caf90d4c054f9b567"
  },
  {
    "url": "frontend/手写系列/手写promise.html",
    "revision": "9c81b43b686e12cae28b9a649d047dde"
  },
  {
    "url": "frontend/手写系列/手写reduce、indexOf.html",
    "revision": "54c7253a06c45e9110048f8b8c7d2c4b"
  },
  {
    "url": "frontend/手写系列/手写throttle、debounce.html",
    "revision": "5d16dbe8ddab729833ed082fc8dff947"
  },
  {
    "url": "frontend/框架和库源码/index.html",
    "revision": "1080ba5755acf390af513e5ea96b4247"
  },
  {
    "url": "frontend/浏览器/JS运行机制.html",
    "revision": "550597ba86e55f46f61fcbf1e705802e"
  },
  {
    "url": "frontend/浏览器/垃圾回收.html",
    "revision": "a54d28d9c23dd1816d8cafb89e763579"
  },
  {
    "url": "frontend/浏览器/浏览器内核.html",
    "revision": "2ccb3234de26e029bcf008f6ff7c7758"
  },
  {
    "url": "frontend/浏览器/浏览器缓存机制.html",
    "revision": "3e0f6227505463a76fc9fa6a97693bb9"
  },
  {
    "url": "frontend/浏览器/浏览器进程架构.html",
    "revision": "255388b933676729e8eda773ab56c593"
  },
  {
    "url": "frontend/浏览器/渲染流水线.html",
    "revision": "f387e46fd672403624e7d37b1329d50c"
  },
  {
    "url": "frontend/网络/HTTP、HTTPS.html",
    "revision": "430228eb4dd3b0a2314306f7b8ee5bb7"
  },
  {
    "url": "frontend/网络/HTTP2、HTTP3.html",
    "revision": "5d1e4faa8c4730c45b94402a8a3f42a8"
  },
  {
    "url": "frontend/网络/TCP.html",
    "revision": "0f1705762b1de41775e6b09eeb277b70"
  },
  {
    "url": "frontend/网络/UDP.html",
    "revision": "da9fcfdfca36cdbd92a456074852c641"
  },
  {
    "url": "frontend/网络/输入URL到页面展示的过程.html",
    "revision": "b8a6766818bb31289f9321d024a079d4"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "08548eb745dd3127c1d70265db637f6c"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "08548eb745dd3127c1d70265db637f6c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "08548eb745dd3127c1d70265db637f6c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "08548eb745dd3127c1d70265db637f6c"
  },
  {
    "url": "index.html",
    "revision": "94a3d5ed4901d480ca966d8632ae045e"
  },
  {
    "url": "linux/index.html",
    "revision": "6754c3bc17c14ac8abdb0e7717bace3d"
  },
  {
    "url": "linux/SVN&Git.html",
    "revision": "90ad0eb453f6583ad10c0f13be56730d"
  },
  {
    "url": "linux/基本命令.html",
    "revision": "55b2a0d462844152208cee26db89c819"
  },
  {
    "url": "logo.png",
    "revision": "08548eb745dd3127c1d70265db637f6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
