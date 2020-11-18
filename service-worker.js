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
    "revision": "6420786c594d267023235f16e1eff256"
  },
  {
    "url": "assets/css/0.styles.bdda569a.css",
    "revision": "c024588bf133710af070a4beb6bcb5f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e6460e8d.js",
    "revision": "e5255816fc0a32119a892b6fccd09c41"
  },
  {
    "url": "assets/js/11.d43657c9.js",
    "revision": "90b19d2a423b66a60d165657657e2f99"
  },
  {
    "url": "assets/js/12.6a64786d.js",
    "revision": "bedd84462b7c5391839acea97ef9adae"
  },
  {
    "url": "assets/js/13.125dc3cc.js",
    "revision": "8fad548ad70cb55fdaec01c1bb4b624e"
  },
  {
    "url": "assets/js/14.383b7982.js",
    "revision": "fa98a64c51ba7d3e3ad5c90dc5939589"
  },
  {
    "url": "assets/js/15.1f26ba0e.js",
    "revision": "f0d85fdf4c7073b09025db83bba041a1"
  },
  {
    "url": "assets/js/16.e90410a6.js",
    "revision": "83d0e72a9d00202552df22e01a9ee766"
  },
  {
    "url": "assets/js/17.6656cdb3.js",
    "revision": "7691df548cbdf05904137f265c1f56bb"
  },
  {
    "url": "assets/js/18.a0376b39.js",
    "revision": "2529a88b12e1ab943d341d61b87601ed"
  },
  {
    "url": "assets/js/19.2cccac8b.js",
    "revision": "6986b5364c28d6363a6196fcb4c4c1a1"
  },
  {
    "url": "assets/js/20.ab0309ce.js",
    "revision": "8bc0ace4a030ab0e71a564a548bf75b5"
  },
  {
    "url": "assets/js/21.2020e48f.js",
    "revision": "47afd9184a2c44aad68ac55f3f8db342"
  },
  {
    "url": "assets/js/22.9ab3724e.js",
    "revision": "c161b128c5eb7985c6dcd221b739679e"
  },
  {
    "url": "assets/js/23.e5e52aef.js",
    "revision": "8429ea5c5d10caedf62e181cfbf86737"
  },
  {
    "url": "assets/js/24.5c8ea490.js",
    "revision": "3bcc903e2bd0045007aceaa28f72e029"
  },
  {
    "url": "assets/js/25.77a198cd.js",
    "revision": "596f221981e9e05caa587a7ec419260d"
  },
  {
    "url": "assets/js/26.2928697e.js",
    "revision": "08aa5bc6882ff792143110a2d37618cb"
  },
  {
    "url": "assets/js/27.11e0ca54.js",
    "revision": "fd20f6bc3fdc26a26d8d3c7f6b0421b5"
  },
  {
    "url": "assets/js/28.8bc395fc.js",
    "revision": "991d240571c215f9a9d8a5b9cc7a530b"
  },
  {
    "url": "assets/js/29.733e13b3.js",
    "revision": "692be2fcb2b8cd165febd264dfb60692"
  },
  {
    "url": "assets/js/3.8962f383.js",
    "revision": "de67384635107d887f904ebb580989e0"
  },
  {
    "url": "assets/js/30.e705ae47.js",
    "revision": "550e8e4d5fd4cf2bc23b341d505dcb7d"
  },
  {
    "url": "assets/js/31.425fb2ba.js",
    "revision": "edd2b7ef78e7561c96d26e08e61af1de"
  },
  {
    "url": "assets/js/32.9d77fd81.js",
    "revision": "92bf891b498bca2fb6989f474d547164"
  },
  {
    "url": "assets/js/33.b16164f4.js",
    "revision": "f07dd56c5d5cd96892c609baa896a91a"
  },
  {
    "url": "assets/js/34.0009c053.js",
    "revision": "e5793d0727daa0498891f31ed640dccf"
  },
  {
    "url": "assets/js/35.15152f1e.js",
    "revision": "fd1fc41699ed0d375e3366b43203e287"
  },
  {
    "url": "assets/js/36.8ca552fc.js",
    "revision": "5f171c92c84e5bf5e65b1597f3b67e13"
  },
  {
    "url": "assets/js/37.5faba6d3.js",
    "revision": "17a53fb23f8517d55c790e865ccde5df"
  },
  {
    "url": "assets/js/38.1e3761d6.js",
    "revision": "689b689e3d05a6ee0fc9c450979e47f8"
  },
  {
    "url": "assets/js/39.b44e3fb8.js",
    "revision": "fcd303d8d861547e6babf3e7e19d2c14"
  },
  {
    "url": "assets/js/4.9e67c679.js",
    "revision": "17576109aae22927d1443c1674e45763"
  },
  {
    "url": "assets/js/40.529418c5.js",
    "revision": "26d3d58acf8d5bc6b17032651d3f63a6"
  },
  {
    "url": "assets/js/5.88b9aa21.js",
    "revision": "8c37873a81de640ca323ba2bcdf0c4a5"
  },
  {
    "url": "assets/js/6.15e351d3.js",
    "revision": "431f00f3475767f7a82d4072c452ddc2"
  },
  {
    "url": "assets/js/7.beda3ddc.js",
    "revision": "82bdc10348788377430e8e4ad35544ac"
  },
  {
    "url": "assets/js/8.cb9cb39c.js",
    "revision": "3f1995f6dc8bb91d3899131953bd5a52"
  },
  {
    "url": "assets/js/9.ea9d3e8a.js",
    "revision": "131aad72d34a1be61cfff859ae65018c"
  },
  {
    "url": "assets/js/app.3e24ee5a.js",
    "revision": "d93ec7323df05d9d1c3b6ffd0182c9c5"
  },
  {
    "url": "assets/js/vendors~docsearch.729fc4ac.js",
    "revision": "d941049115fdd30e8e07b0bfd4817639"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "5bd5933b0886c3fcf450727697ebc967"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "d13f705e5251c46e66cf474a1c23db6d"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "c6acc68d97d6b78366235e9250dbfe03"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "06bb01848695c4e66b1483b470f649c3"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "9da44b1c69b78cdbcbf62787d8e4fa62"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "8d66af30276661b7bab8905b60337c4f"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "6f03ae0a4dc293510e59837036625b86"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "d2583855086b15c3ce7e721e2e1162b9"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "ef64db67c13da9d3f64e3b1500a44b32"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "838ca239405f874f2d27b858525d06a2"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "3fd0c815dd98d0af415050d512ebd35e"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "5440a676ce2c89f939a548249c1f6b06"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "3fb5288eac060984e50e160594a41c35"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "7b1add700fb461c04e5507cc307354c8"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "28263e34a1b23b044aeb3e978d88ce4f"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "c80936bceb16fd634e66b74b10e40417"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "44c9dafe802a82730c68ee30203f8d0c"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "f28c24d83f3ffadaf6117e20bc41cf21"
  },
  {
    "url": "resources/books.html",
    "revision": "60830372c95d1d002b409bd7a9f778b2"
  },
  {
    "url": "resources/community.html",
    "revision": "a8a915b06c8de2deb551b9ed07a2d387"
  },
  {
    "url": "resources/conferences.html",
    "revision": "c48ecacc305d712b8fb510aa08eca5c6"
  },
  {
    "url": "resources/courses.html",
    "revision": "b9e48310a822a59457bd7482250cc95b"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "94fcec6e1007821be59956bb30b185bf"
  },
  {
    "url": "resources/examples.html",
    "revision": "440021b3f27f833e10df358d0ab61741"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "7703849d0b6fae5ee91c4606d45f42b7"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b90d43ac4193c5810154fe84c4a86bcd"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "4c42b7ae23a64f8ac9eec22463b90dbe"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "a0a8c4541be461e7b4d52f9739c22386"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "7c0e3bd85a26dd1f5f9ad3ea71a47639"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "ced955fcfc4fb925168f661f43b64801"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "7f6fbb690cf66f72b5480fc72c66e07e"
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
