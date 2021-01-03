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
    "revision": "84133500cfa16d835b03195ef173679f"
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
    "url": "assets/js/10.214969a2.js",
    "revision": "500353a7a298b4e40bb230842882494a"
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
    "url": "assets/js/13.d6db554d.js",
    "revision": "211e988c45a15a496dbba3cb68306304"
  },
  {
    "url": "assets/js/14.4802b44e.js",
    "revision": "1e06fb1d9ecd6b552c83dcc923e4085e"
  },
  {
    "url": "assets/js/15.133d71bd.js",
    "revision": "65045846d887ae3e8cb3f199cfd04408"
  },
  {
    "url": "assets/js/16.607c1427.js",
    "revision": "cb79aacb9625f1e67529c52bf55edabd"
  },
  {
    "url": "assets/js/17.b9051fd8.js",
    "revision": "fffa875b2d1dd9baaa15ee14508d600b"
  },
  {
    "url": "assets/js/18.60d02811.js",
    "revision": "b18a1b43a5d175ae55cadf98674f6ba7"
  },
  {
    "url": "assets/js/19.7ffa7e4f.js",
    "revision": "52edf993303b85d3e0feddbcd6b5d40e"
  },
  {
    "url": "assets/js/2.2e4f5e7a.js",
    "revision": "84672be2c30e9ce6709d0b9be3a3b718"
  },
  {
    "url": "assets/js/20.1156d39d.js",
    "revision": "35b852c086853b2a43abc3e0f33694a3"
  },
  {
    "url": "assets/js/21.360bb836.js",
    "revision": "2dd2aaad1482662d586669fcf2b31760"
  },
  {
    "url": "assets/js/22.468dec09.js",
    "revision": "7e5d7bf8542561d7155aef6072b8f60a"
  },
  {
    "url": "assets/js/23.a7ff25cd.js",
    "revision": "adf7f236b8dc6a8aa7edf59cc8de8b5d"
  },
  {
    "url": "assets/js/24.cbf49aad.js",
    "revision": "cb083623164a29ecc46824889c3f2ecf"
  },
  {
    "url": "assets/js/25.d5421c63.js",
    "revision": "e784c71acb98f28714ccb419684fc6fe"
  },
  {
    "url": "assets/js/26.03ad0666.js",
    "revision": "284abfc92d5b1ab11dc56c7d362475ce"
  },
  {
    "url": "assets/js/27.d4324817.js",
    "revision": "7cb4c5b9ea982c50991b27ff61447d9a"
  },
  {
    "url": "assets/js/28.7acfba1b.js",
    "revision": "adad9354a9e00ae359afe94a0215af4e"
  },
  {
    "url": "assets/js/29.6ec975a8.js",
    "revision": "af13d48a4a38d8c2a224ef0d1accdb10"
  },
  {
    "url": "assets/js/3.c10ec7e4.js",
    "revision": "cd9c8c1fbc1f65daf2bbf973565a407c"
  },
  {
    "url": "assets/js/30.e0dc2b6c.js",
    "revision": "b1a2ef551a5ffb8e39b49f84c8addd09"
  },
  {
    "url": "assets/js/31.cc7aa4fb.js",
    "revision": "2bc9036a08d61f912140a02a41579fd3"
  },
  {
    "url": "assets/js/32.efd56686.js",
    "revision": "86a01ae96c44b614a1d36b716f1feb92"
  },
  {
    "url": "assets/js/33.f768d08f.js",
    "revision": "0d7eaf02ce4be90c6e65bf89059d1623"
  },
  {
    "url": "assets/js/34.2dca663c.js",
    "revision": "e66398cd00e67b46dcd080e59f9b1e86"
  },
  {
    "url": "assets/js/35.bd99a6a8.js",
    "revision": "6eb738b75a760c30f0be11a7a4fd4784"
  },
  {
    "url": "assets/js/36.d3c38363.js",
    "revision": "b9c855d280c8009a1d633a3152e41ed3"
  },
  {
    "url": "assets/js/37.5a323dfa.js",
    "revision": "06daa9750e226a142f4c3309efe222da"
  },
  {
    "url": "assets/js/38.b811f304.js",
    "revision": "e5488173eafaf202a7dabb36892af0ea"
  },
  {
    "url": "assets/js/39.7a977e87.js",
    "revision": "49649e710be380c7276fa0e4dd4c4986"
  },
  {
    "url": "assets/js/4.2fc25e57.js",
    "revision": "6f4eec724c480275c3c025a4507f362c"
  },
  {
    "url": "assets/js/40.38f98390.js",
    "revision": "90db03dea6140128143114b1f43e1333"
  },
  {
    "url": "assets/js/41.1f7726f8.js",
    "revision": "602de8b650204fbeb8df28c221505487"
  },
  {
    "url": "assets/js/42.18cd93ee.js",
    "revision": "8d07b2eb58c8fb28a41fb192326e52ab"
  },
  {
    "url": "assets/js/43.f91f6174.js",
    "revision": "d1bdd0796fc0414c0753c2b7cd243834"
  },
  {
    "url": "assets/js/44.ab41f95b.js",
    "revision": "ad57f1d68812574f1e2782f0d14f4158"
  },
  {
    "url": "assets/js/45.b60b4319.js",
    "revision": "956980d5fe734b4cc12abb989b4b9f47"
  },
  {
    "url": "assets/js/46.091bf204.js",
    "revision": "dcd073b2de6f2d040292ef2565deeb1d"
  },
  {
    "url": "assets/js/47.7e1d62a2.js",
    "revision": "0b8e053dbe22205f1c40a315aabd7971"
  },
  {
    "url": "assets/js/48.8f7ce36c.js",
    "revision": "ced9dda6fc7f82cf2ad28ba643d62ea5"
  },
  {
    "url": "assets/js/49.22b7115b.js",
    "revision": "7dc4077007b9805851b6d8d64259f879"
  },
  {
    "url": "assets/js/5.f8c30ce6.js",
    "revision": "dfc43417f98c9ec36927e928d777404b"
  },
  {
    "url": "assets/js/50.e64b11fa.js",
    "revision": "43995702c48cb1be4b0e7003b1d95209"
  },
  {
    "url": "assets/js/51.6d7c1876.js",
    "revision": "206217f42c9ad3aa2dccb58cd3c567bf"
  },
  {
    "url": "assets/js/52.a474595f.js",
    "revision": "e81fde4907a2b61cab77c03104391e6f"
  },
  {
    "url": "assets/js/53.a2fe4f54.js",
    "revision": "b595ad6038b2be232cd7f44df3ef0fe2"
  },
  {
    "url": "assets/js/54.07dab581.js",
    "revision": "72051d2577d33dce0eb06a6ace34dfd7"
  },
  {
    "url": "assets/js/55.be51534c.js",
    "revision": "10572ba19b6bafe4cd0bd296d4d581b1"
  },
  {
    "url": "assets/js/56.ebb41869.js",
    "revision": "9a61dda0c4ed9adb5e4f796c442fdf26"
  },
  {
    "url": "assets/js/6.c23ede8d.js",
    "revision": "371b8cd6741cef5b57219234dd679caa"
  },
  {
    "url": "assets/js/7.a56859e7.js",
    "revision": "a3e3af9c770788d2f34a74c7d7bc643f"
  },
  {
    "url": "assets/js/8.b3ec49a8.js",
    "revision": "285312597d44767131be330ba4a04737"
  },
  {
    "url": "assets/js/9.d6b196a9.js",
    "revision": "ca8acc2d28da69764e4c41f495f9d063"
  },
  {
    "url": "assets/js/app.f6ab1158.js",
    "revision": "a1bcd83d8b4cd61ba29caeb5ef253387"
  },
  {
    "url": "blog/index.html",
    "revision": "6979d01df40031e859dd9747b040fbd2"
  },
  {
    "url": "blog/前端错误基础.html",
    "revision": "5c4cb10b1b319a95818582ee9b366a72"
  },
  {
    "url": "blog/装饰器入门.html",
    "revision": "2d9f27e5aa1553cce158e037d3cad24e"
  },
  {
    "url": "frontend/ES6/arrow function.html",
    "revision": "c3a5f651fc438f20a57b71ccf413927d"
  },
  {
    "url": "frontend/ES6/index.html",
    "revision": "761c064a83830a6817ba143366caf09d"
  },
  {
    "url": "frontend/ES6/var、let & const.html",
    "revision": "7a02ad7f251772133eaaa409c87cf275"
  },
  {
    "url": "frontend/index.html",
    "revision": "2cac35c85ff37c9859311ec03437b163"
  },
  {
    "url": "frontend/JS基础/== vs ===.html",
    "revision": "f9636f0c5c24b28984543a89e978cbed"
  },
  {
    "url": "frontend/JS基础/closure.html",
    "revision": "1b20df801a964f7d7c8a26e0cf1bccd9"
  },
  {
    "url": "frontend/JS基础/deepClone.html",
    "revision": "2a537d9d60d6611165ca72c99b1d5fb3"
  },
  {
    "url": "frontend/JS基础/index.html",
    "revision": "e33ec322e466ae68565df9d22012503e"
  },
  {
    "url": "frontend/JS基础/shallowClone.html",
    "revision": "93314a417848eef1eb0502c77fdec8a1"
  },
  {
    "url": "frontend/JS基础/this.html",
    "revision": "ea44fe370e0224bae15505243501e4c0"
  },
  {
    "url": "frontend/JS基础/类型转换.html",
    "revision": "e5989611c7034eab84445d98f875fcbc"
  },
  {
    "url": "frontend/react/diff algorithm.html",
    "revision": "cbb3757b57288f95d8135145f1a7e634"
  },
  {
    "url": "frontend/react/fiber.html",
    "revision": "c4af08ae0649d276df2ac0a0a6621760"
  },
  {
    "url": "frontend/react/hooks.html",
    "revision": "3c9f17b884be9785ffab6180f6c8d69c"
  },
  {
    "url": "frontend/react/Lifecycle Methods.html",
    "revision": "00fce084d02276c846e519c93d5bd500"
  },
  {
    "url": "frontend/react/React v 16.0 新加内容.html",
    "revision": "b67edfa3ec6d875d16fb22b313f7cf95"
  },
  {
    "url": "frontend/react/setState.html",
    "revision": "350edfca5c9097baede7fdbeeeddb6fb"
  },
  {
    "url": "frontend/react/virtual dom.html",
    "revision": "9fe70eb20e2a06f530d33e65ebcca8a6"
  },
  {
    "url": "frontend/react/性能优化.html",
    "revision": "7a80a236bbde4c13494b3e5d68a64711"
  },
  {
    "url": "frontend/web security/clickjacking.html",
    "revision": "8b2254879baf4df36ee99a8e03cd5282"
  },
  {
    "url": "frontend/web security/CSRF.html",
    "revision": "7ca9c8a07e7c1e936451d74d463a5356"
  },
  {
    "url": "frontend/web security/XSS.html",
    "revision": "6e76fb4443f8ffc76c329df732197524"
  },
  {
    "url": "frontend/webpack/HMR原理.html",
    "revision": "d03acabda98ae17eab696cdd6ca32a61"
  },
  {
    "url": "frontend/webpack/webpack优化方案.html",
    "revision": "650ae65fc39978626d1e4ae36f28354e"
  },
  {
    "url": "frontend/webpack/webpack构建流程.html",
    "revision": "4d1fb78a069ac434f3e829884b51b96e"
  },
  {
    "url": "frontend/webpack/自定义loader、plugin.html",
    "revision": "3345163470405d477327bff4e8cfa4a3"
  },
  {
    "url": "frontend/手写系列/手写bubbleSort、quickSort.html",
    "revision": "3a4fd47d1c7ad72291cda0d84930fe91"
  },
  {
    "url": "frontend/手写系列/手写call、apply、bind.html",
    "revision": "713df00c5e44f189e1117aa00280dbda"
  },
  {
    "url": "frontend/手写系列/手写instanceof.html",
    "revision": "b97bea86c2c98c33bf1efe1dfe9243fa"
  },
  {
    "url": "frontend/手写系列/手写promise.html",
    "revision": "3671bc16659ae91a91678dfde8149274"
  },
  {
    "url": "frontend/手写系列/手写reduce、indexOf.html",
    "revision": "171007f270c3493894e983ad85effb93"
  },
  {
    "url": "frontend/手写系列/手写throttle、debounce.html",
    "revision": "80a880f9d518f44c830588bf3134f5e7"
  },
  {
    "url": "frontend/框架和库源码/index.html",
    "revision": "de740a1c510c9bb905b6b0d49b59d314"
  },
  {
    "url": "frontend/浏览器/JS运行机制.html",
    "revision": "6ea9c58a80731752e946f661b1d1d15c"
  },
  {
    "url": "frontend/浏览器/垃圾回收.html",
    "revision": "63b6d2236f04da380d8acf78343668b3"
  },
  {
    "url": "frontend/浏览器/浏览器内核.html",
    "revision": "4d6483e85e9b8c0a9639c7d132c65549"
  },
  {
    "url": "frontend/浏览器/浏览器缓存机制.html",
    "revision": "6e209ee788bf9bbba0e1c0e6a8acf883"
  },
  {
    "url": "frontend/浏览器/浏览器进程架构.html",
    "revision": "197a9400cc3eeac40a88330b0cced6c9"
  },
  {
    "url": "frontend/浏览器/渲染流水线.html",
    "revision": "d03094c83489cda92ef52719b3d1e191"
  },
  {
    "url": "frontend/网络/HTTP、HTTPS.html",
    "revision": "9df0e055193540e49d4c05529ffcc999"
  },
  {
    "url": "frontend/网络/HTTP2、HTTP3.html",
    "revision": "b8a0e8a689d7153ba60df1ac1de923dc"
  },
  {
    "url": "frontend/网络/TCP.html",
    "revision": "046f8c1b0f78b9479fed821278085cd5"
  },
  {
    "url": "frontend/网络/UDP.html",
    "revision": "d4da79ed32ac5d002f230cd4676f405f"
  },
  {
    "url": "frontend/网络/输入URL到页面展示的过程.html",
    "revision": "113164b277d0a2d2c510d642d3bde6f2"
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
    "revision": "eb7cd9ecdc921967e25c0211ca3f36f3"
  },
  {
    "url": "linux/index.html",
    "revision": "5fc7a44c82b894feaf719a8536ed2054"
  },
  {
    "url": "linux/SVN&Git.html",
    "revision": "110871e9aa2fd68984700c8ed580cdfb"
  },
  {
    "url": "linux/基本命令.html",
    "revision": "e5027c8211f6c7a98162817ab39ec59e"
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
