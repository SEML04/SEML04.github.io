/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/25/Diophantine-2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/11/20/elementary-number-theory-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/12/02/notes-about-sieve-methods-3/index.html","1ce31f1098d4f65513fafb633045e0a1"],["/2025/01/08/k-th-Mangoldt-function/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2025/02/15/Analytical-number-theory-1/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2025/03/12/notes-about-sieve-methods-4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2025/04/15/Maynard-sieve-method/index.html","d9d9b12c79ab9e81b604cf0c0a11f950"],["/2025/08/31/note-about-Manin-Conjecture-1/index.html","2df26c3ca1b18ce9286e919f7c3b5430"],["/2025/09/25/p-valuation-of-Bernoulli-numbers/index.html","1ea15112e28ba5f033108d3d50eedfee"],["/2026/10/19/exercises-in-AG-1/index.html","4df7f34eb1b1c50fe06dbd3361288374"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","0b12789742c85dd07ad43effaf5dacb9"],["/archives/2024/10/index.html","cdef83c2acd1ece461bd5c47ff913e75"],["/archives/2024/11/index.html","108d72b0095730b98770cc7c754b0a5d"],["/archives/2024/12/index.html","418ddc31a815b1c3efcff9db3437e7b8"],["/archives/2024/index.html","8bb564c987b9aa18fdd4abbcc4a1ca11"],["/archives/2025/01/index.html","ac34835f87d9b56e9429b876c61f3da8"],["/archives/2025/02/index.html","45c53751e84856c35dba0efb238f3068"],["/archives/2025/03/index.html","b679339c4c9508a34564532cb09bd96c"],["/archives/2025/04/index.html","e9b7789d1a17f6151c0a8c1f98850b80"],["/archives/2025/08/index.html","192390c7825529ae00af3b307eb4771a"],["/archives/2025/09/index.html","2cd5ca88ffaf09724b17452145ca0c87"],["/archives/2025/index.html","1998de3886e9a4f0476bb5c69f86004f"],["/archives/2025/page/2/index.html","8d34a50a98ddda6811cc5c3563801a0a"],["/archives/2026/10/index.html","c056d50c0fe86518ff7248c044254882"],["/archives/2026/index.html","b91229e11a2020bf8ece40fc02ab9371"],["/archives/index.html","70cd758bbd2dc37dd34db8872f1055a0"],["/archives/page/2/index.html","3765762af26e5c1190fcb9300d34cbf8"],["/categories/index.html","d07504bc61873ebe43aea400d8cec113"],["/categories/丢番图几何/index.html","54b5ecc947b139def69f6b43a57910c9"],["/categories/丢番图逼近/index.html","861878117c066f06bbb94e49f869a15a"],["/categories/代数几何/index.html","e3bfd380c5fdabe70efce660023c5a7a"],["/categories/初等数论/index.html","01da686556ba9b4bf5070141f5b9dbe7"],["/categories/有趣应用/index.html","1d83113570a305ee7419ff6835f12a29"],["/categories/筛法/index.html","275299f549835a412ba79ae1a88f9ead"],["/categories/解析数论/index.html","f2ad6abde161dac188c261758bc789e7"],["/categories/论文阅读/index.html","6f53d74d652751e0955c8df99b147ada"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","311fd7e4e2dacfb484dd99ab70ae348d"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Maynard-sieve-method/T1.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/Maynard-sieve-method/T2.jpg","c59c64377f9caf8ff9d8de62f2fc9bde"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/15.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/18.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/31.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/34.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/37.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/44.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/48.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/49.jpg","9dca71d2729e5d0216975d9b8413ef97"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/53.jpg","8a117401eea01f88d806991a307454dc"],["/image/card/54.jpg","36051951bc6914d4765386f89072c447"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/59.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/6.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/60.jpg","077bd38a2f68e913777764edd4c8b860"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/64.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/66.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","516051423ee816d09482a56b3ba78d02"],["/image/card/73.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/74.jpg","4535a95eef2482bd07ed04f944c79074"],["/image/card/75.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/76.jpg","d8b5588da580dbdb3b09f307a80c1519"],["/image/card/78.jpg","a4d6e16b7057605eb2da1650c8e113b6"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/80.jpg","44f261e750e3d6d455775cd1127ee3be"],["/image/card/81.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/exercises-in-AG-1/T1.png","7d93d0fb2f659249dd8b66a6edbc7112"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-5/T2.jpg","e0715cd6f1ea967db1d1a71804bae590"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk9.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/img/butterfly-icon.png","d41d8cd98f00b204e9800998ecf8427e"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/index.html","19ee88fe1eb164165e76b3611dd92ed6"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","6fcd39316bf8567109a143a9df266b08"],["/seminars/index.html","80f689dace1691b7862d8379c4f0650a"],["/sw-register.js","52b829b8d3b738489ad87169426af22f"],["/tags/Algebra/index.html","4c30af228e2d51bbc5d8a0335ec46b7d"],["/tags/Algebraic-Geometry/index.html","243d3fc740332744e79e614c00872f07"],["/tags/Algebraic-Number-Theory/index.html","19677fef15d0cb1960cfd37edc9d97ed"],["/tags/Algorithm/index.html","b3917df3d4f78760efcfb7ebf11e0828"],["/tags/Analytical-Number-Theory/index.html","abed8f4f6ffded49903903860d2e11fb"],["/tags/Bernoulli-Numbers/index.html","7ec97499fb81020689bf2642a7fae928"],["/tags/Brun-s-Sieve/index.html","ad0a5e57ff54ea4ef506b263dd253074"],["/tags/Brun-s-Theorem/index.html","1762c60bbba5ba26b6313441d9f3f550"],["/tags/Character/index.html","bd9d94c94d33e291c46321fd839312ae"],["/tags/Chebyshev-s-Function/index.html","101db6137aa8a8c831219c2ca899998e"],["/tags/Chen-s-Theorem/index.html","ebd2bddc7a4832b798095844ea8ec4f8"],["/tags/Chinese-Remainder-Theorem/index.html","d2eb154cb7c41c565829709d743be561"],["/tags/Combinatorial-Sieve/index.html","328d362895eb57b29bbc2a9d8c2bc127"],["/tags/Continued-Fractions/index.html","6c0a3cc297f3ed64adfd192be3ad2403"],["/tags/Diophantine-Approximation/index.html","c5d46f89b0a2afd054954f808e77cb58"],["/tags/Diophantine-Geometry/index.html","6e671c2899adf190464e4cf07c349ef8"],["/tags/Dirichlet-Convolution/index.html","996f21fb6fed68259bb715dfc3b0e719"],["/tags/Elementary-Number-Theory/index.html","7c987a85653e96a0d990d628500014a6"],["/tags/Estimation-Formula/index.html","8aa8f897bb3a974fe1f37bb86d714568"],["/tags/Exercise/index.html","3faacc7e5778d7fe21075476a6f35558"],["/tags/GPY-Weight-Function/index.html","c96066f7bdd793e005b1dcdad4e0a342"],["/tags/Gauss-Sum/index.html","492f820be5e175d5012e27c5e11bca53"],["/tags/Goldbach-s-Conjecture/index.html","e52720072a90452e76415b7bdfd209c8"],["/tags/Gortz-Wedborn/index.html","fe74c36d4309c97786c86f02abfc3ac0"],["/tags/Kummer-Congruence/index.html","cf4604b09ea5779428c53ea0d044cd8f"],["/tags/Mangoldt-Function/index.html","1ca849642323b579d1be959691650ebf"],["/tags/Manin-s-Conjecture/index.html","83a2eb5476b71f7f36ce0949efa6a238"],["/tags/Merten-s-Theorem/index.html","501af0eb57746d698170fefa70d7377a"],["/tags/Number-Theory/index.html","ab24ff494debeb76c70af51b60b885ce"],["/tags/Paper-Reading/index.html","6426d88527b050bbff5f18fc256e3fbc"],["/tags/Pell-Equation/index.html","afb2342f6e4caf39d12c610233761c69"],["/tags/Prime-Number-Theorem/index.html","364bc7a53e671b69e952efd8f77bdaf3"],["/tags/Prime-Twins-Conjecture/index.html","a509e3e33685104c8ba060c9b143b861"],["/tags/Prime-k-Tuples-Conjecture/index.html","3d9d13d73ec41fece6a9c0c47d839882"],["/tags/Quadratic-Forms/index.html","d5322679cf8c881c8ad8fbd12d37e357"],["/tags/Riemann-Roch-Theorem/index.html","025f6e27f26951f9b7ad737a4fd9d658"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","002a7c75719122edf8fa987cc749bd08"],["/tags/Selberg-s-Sieve/index.html","de01f7cc341aba82e2c590b26b06291a"],["/tags/Sieve-Methods/index.html","23a82ba06cc28da08bdf91870061fe57"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","4e4e7bc6607ea5fd0b66b0e76ffd1c45"],["/tags/Sifting-Function/index.html","f2f2dc5759a920b7dd0f9ceed54f9512"],["/tags/Vinogradov-s-Mean-Value-Theorem/index.html","7f88a8af207ca842aa42fcbec1166117"],["/tags/Waring-s-Problem/index.html","a80f187d20d963e5b8139d4ada208ce3"],["/tags/index.html","3c72dc109e8a842fae829a9584c63a8b"],["/tags/p-adic-Zeta-Function/index.html","7104c032a3b8ab40bd5ace834a347b85"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
