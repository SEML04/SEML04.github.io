/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","feaa1614ffd5fe7eeb6e4b29a64a9102"],["/2024/10/25/Diophantine-2/index.html","a82c06f5e61a224076f9c702ac551a20"],["/2024/11/01/notes-about-sieve-methods-1/index.html","6a5f43dbde87f09044e0a7d4d6d02650"],["/2024/11/03/notes-about-sieve-methods-2/index.html","9911a03b57181734b3c421d87607e836"],["/2024/11/06/algorithm-1/index.html","0cff41eefe0aea579c5ccf26e89ada83"],["/2024/11/07/algorithm-2/index.html","f05e2b0fa7f7888d0bedadeb4f6b4c59"],["/2024/11/20/elementary-number-theory-1/index.html","09f63ea055a391a3154e47db50104bf9"],["/2024/12/02/notes-about-sieve-methods-3/index.html","0a5a522b8e5a77c3ee976cf3c0344ce0"],["/2025/01/04/Riemann-Roch-theorem/index.html","ed7ca00b1822730fdf15bda35df49f46"],["/2025/01/08/k-th-Mangoldt-function/index.html","67f3d56655a48817df962bb32230040a"],["/2025/01/15/GPY-sieve-method/index.html","ff6bbc92cdbb40d7d876b90d8a7823ba"],["/2025/02/07/GPY-sieve-method-2/index.html","c107524e069b318c1f44acd19bbea876"],["/2025/02/15/Analytical-number-theory-1/index.html","daa471d0afb02ea5c1a1fd5136055709"],["/2025/03/12/Chen-s-Theorem/index.html","9f967b01aee60f815bd0a5254498fc2a"],["/2025/04/03/notes-anout-sieve-methods-4/index.html","894aadbf821669f624a4f33c757ccb99"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","fe57f7b8e735244bea99c85151cdbde1"],["/archives/2024/10/index.html","7d1db7820185d9d53941ab73a771b953"],["/archives/2024/11/index.html","2252dea265766e41316fe121c4a6f82e"],["/archives/2024/12/index.html","0bb10da5a997fb3e7bf1b78d9efc1ec7"],["/archives/2024/index.html","2ad10ee7fc7801b32409da5aa2674211"],["/archives/2025/01/index.html","9d776306e46a0bd97d9bf2f4503ce5d3"],["/archives/2025/02/index.html","f199b04ef3a4ed53095718bd9971db61"],["/archives/2025/03/index.html","c9b4aa6675c1828a5533e5c8b17b5886"],["/archives/2025/04/index.html","5c94f059e707ad4575643832fec6b912"],["/archives/2025/index.html","23953c05bf7c43a32c1f6d2ff7aaab65"],["/archives/index.html","934bfd01849b0ae71c7e4ce206ded584"],["/archives/page/2/index.html","69514f83a8f5b90830d16ef39296dd25"],["/categories/index.html","c3a8a59f3799c760447cc111f7ee0083"],["/categories/丢番图逼近/index.html","643f03410cfaf4a5a31dcc83ef559e8d"],["/categories/代数几何/index.html","179ddb7c36f860c474fb4947598646f6"],["/categories/初等数论/index.html","7a23f231627cb8167a66c160f9c8b377"],["/categories/有趣应用/index.html","71b5af754ffbda24fb6d5140cf6d6706"],["/categories/筛法/index.html","ce8cfa74df7a5b8ddbdbe7443b978157"],["/categories/解析数论/index.html","ceb0d5d6f31d1b31d3a9033684c91a7e"],["/categories/论文阅读/index.html","d56b2aa8001d23c52b8b93638db3d60b"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","b3e1a4ec5a1daec4becf4f3648834713"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","001373ae23db3427e045e987799903a7"],["/image/card/10.jpg","624e218a591354a6d36a7ca48d1519cc"],["/image/card/11.jpg","3ced2f93ce56de653343d382d6165a9b"],["/image/card/12.jpg","a7193ba4653495c9191da1450c051ae3"],["/image/card/13.jpg","9193cd443b0bdac921ce444c958e966d"],["/image/card/14.jpg","cc82dddff2746d932496e3793adbf166"],["/image/card/16.jpg","473f618989ccc74386528857b2503cc9"],["/image/card/17.jpg","e6d1153991d25ce9335a5c7bbe7eb759"],["/image/card/18.jpg","b80afbc0adc70df9570005f117d834b2"],["/image/card/19.jpg","a8cfaae028fd64a910416bd13ff2817d"],["/image/card/2.jpg","69479976993e4deedcaa824d796ff362"],["/image/card/20.jpg","429c45122a5b8461b84f1502b7b55d8e"],["/image/card/21.jpg","6aa99d9cb4a843a67fce98d8e2e547da"],["/image/card/22.jpg","d4760c782e548e6954928b7be9a0555b"],["/image/card/23.jpg","322263fa77cddd5fb1301b196e7a7338"],["/image/card/24.jpg","8aadb2dac5ef370ef6dd6c13dd80801a"],["/image/card/26.jpg","fc22d53e80a3c0e0707f48d5375f3f72"],["/image/card/27.jpg","ad850f7c5f54bbe4713f5c0d71ed5893"],["/image/card/28.jpg","c91cbfce876ccc2b499bd75496feb2dc"],["/image/card/29.jpg","2508f3daa6b298873c57a5cafeb96703"],["/image/card/3.jpg","81f639be95d1cbb63f4f5ab3642cebb5"],["/image/card/30.jpg","1ccb0c8fe40975b2c5cf1b20777329a9"],["/image/card/31.jpg","fb4940a5261ffb72567f6c9d5bf853c6"],["/image/card/33.jpg","67d5518d5a98a75110462a11f55df2c2"],["/image/card/36.jpg","aaa004c81dce69369f4dab0eb1caa563"],["/image/card/38.jpg","5baf71fa95158f4bf28e5b4343609c4d"],["/image/card/39.jpg","8b6bf8a21991ca3ba33d392639c03bb1"],["/image/card/4.jpg","fe40ca7a7496cca69b3fde2ed0ccc5e0"],["/image/card/40.jpg","556993f1f18a90a79cd9f17e9b1a9c2c"],["/image/card/43.jpg","948e943f4f94db562204ef5b569de257"],["/image/card/44.jpg","d9700fa4433a14d4ca3527909a9f0df8"],["/image/card/45.jpg","6895a5e11aeba726d78f84e02bc5911b"],["/image/card/46.jpg","9c673bb8e8cddaed14d22831bc7716b9"],["/image/card/5.jpg","6def84e65c14c347f85f850e725c8c98"],["/image/card/50.jpg","093fee724417ddd084126ce0ec6d1173"],["/image/card/51.jpg","88ebecf38663ea03cc6d00cb4026c892"],["/image/card/53.jpg","ab93f02c7802fc25e07ca6d77e95ecee"],["/image/card/54.jpg","2b9218301383f524aaad066cecdef280"],["/image/card/55.jpg","704899fe8242d61267dfad17684aa160"],["/image/card/56.jpg","acf0c1aa0be5b1686338cdd91ef546f3"],["/image/card/59.jpg","096216e190daec4a88a13fd6e6a52c9e"],["/image/card/6.jpg","abe5efcd291dcd04688fe5e58a156c46"],["/image/card/7.jpg","6b21f62999b162fda8fe14e21eb158f7"],["/image/card/8.jpg","f7abaa97fb3a5b7625b991557f5f4a22"],["/image/card/9.jpg","015bda72225ce080ae18addc5d5c840e"],["/image/chen-s-theorem/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/chen-s-theorem/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","1b914dfae9bd03dbc5ec59db74381c6b"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","f8233dd0d68b5dd485a702d2eee2cd52"],["/sw-register.js","8b9fecd232d4b3e97e305f318239ee73"],["/tags/Algebra/index.html","a9d6977f3b98e41ad619107b06b6bc06"],["/tags/Algebraic-Geometry/index.html","de521bcc92a1048b56fb328aece35f7c"],["/tags/Algebraic-Number-Theory/index.html","f7a704dc67abd5ef13f743ea72192293"],["/tags/Algorithm/index.html","f9d33d15cd5bf884115f36c1ac02e0b1"],["/tags/Analytical-Number-Theory/index.html","254d5e6522b229094e07ce8132184b86"],["/tags/Brun-s-Sieve/index.html","7e5c2ea54a335e6dcc2d199e113975aa"],["/tags/Brun-s-Theorem/index.html","eef0eebe7eca2a9cbcea4da8f778b530"],["/tags/Character/index.html","c698dc8da1564960bdb4af1dc14a9e5c"],["/tags/Chebyshev-s-Function/index.html","07b7d2d70e3a2ee0eda9c65b80a669dc"],["/tags/Chen-s-Theorem/index.html","ace60a826173597f49211f3deac75fb0"],["/tags/Chinese-Remainder-Theorem/index.html","97b34fc593af2137525bd52111aa2548"],["/tags/Combinatorial-Sieve/index.html","c146d6f3b006cd9ac2d2fe10af15fed6"],["/tags/Continued-Fractions/index.html","bca9dc43c54c79ebf9e96290b9b03f6d"],["/tags/Diophantine-Approximation/index.html","93a80cbbe390b7b6c8c70f3c98990562"],["/tags/Dirichlet-Convolution/index.html","d91de1081160a4556076cadf8b56b9d8"],["/tags/Elementary-Number-Theory/index.html","c26d6e1b1bd8bf48374e570ca9b36681"],["/tags/Estimation-Formula/index.html","729f06eba5b7e457dacd2db5d5a4a821"],["/tags/GPY-Weight-Function/index.html","67874556986af063c4ca94d8c9393376"],["/tags/Gauss-Sum/index.html","272d60e939c329897ed21cf855d10613"],["/tags/Goldbach-s-Conjecture/index.html","6471a2ccc058675ce4dd1d872d775097"],["/tags/Mangoldt-Function/index.html","b5e3f35c10c049933fbda147cdf68f84"],["/tags/Merten-s-Theorem/index.html","b0b31f715c2ffb90a51454f8d0d8ad59"],["/tags/Number-Theory/index.html","1d0d42d53e27657486b1c85c64d73183"],["/tags/Paper-Reading/index.html","688013d63b86aa571482ae9a9f7eb236"],["/tags/Pell-Equation/index.html","d2243d1853ee23ec1331687c8daa89e8"],["/tags/Prime-Number-Theorem/index.html","6c476663d4fe5834eaf599b75f244eab"],["/tags/Prime-Twins-Conjecture/index.html","27d84a259f109d2e2a48bf4701445ed2"],["/tags/Riemann-Roch-Theorem/index.html","fcae9d565a6f085e1582a9e80162377e"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","ae016923cc89905c95e994cf3a8a7a14"],["/tags/Selberg-s-Sieve/index.html","371c4d953e1419fad4aa769fe1b7d312"],["/tags/Sieve-Methods/index.html","c62869c762063146459dd72ae4ecaaa4"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","a19f4863667ab925bfe9a5da30453e05"],["/tags/Sifting-Function/index.html","5a5ca23c08f4d885f0e065b6f72ca82c"],["/tags/index.html","47846e5c17e48964125a1045333c4f1d"]];
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
