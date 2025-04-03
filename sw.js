/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","7aceddca406e876ab7077c99d8dbacc3"],["/2024/10/25/Diophantine-2/index.html","f84338d67699653de05213c575af4ab0"],["/2024/11/01/notes-about-sieve-methods-1/index.html","7be5c0709df967bf19959345ef5ddd52"],["/2024/11/03/notes-about-sieve-methods-2/index.html","8ed12c119cb6f9f1025d4a1c06c795eb"],["/2024/11/06/algorithm-1/index.html","5bd4081c1e48d0e8f60d213f8b99923d"],["/2024/11/07/algorithm-2/index.html","011b4bbc5807c2afe388d8c49bd80895"],["/2024/11/20/elementary-number-theory-1/index.html","ea24a0f458b710f567e9c46d6fa23895"],["/2024/12/02/notes-about-sieve-methods-3/index.html","d405c526bb7af6786e9871b18560f852"],["/2025/01/04/Riemann-Roch-theorem/index.html","8594a83db8bec9d8896e174f078e0248"],["/2025/01/08/k-th-Mangoldt-function/index.html","86ec9aa36f828911b10f6581d94c0b5c"],["/2025/01/15/GPY-sieve-method/index.html","5a35e6050dc7d2d0c5bd7dc51ce983b5"],["/2025/02/07/GPY-sieve-method-2/index.html","0ac485fdc33c2342a998300cff7ac0ba"],["/2025/02/15/Analytical-number-theory-1/index.html","9bcf38594037ad89ac3c966caaa553d8"],["/2025/03/12/Chen-s-Theorem/index.html","be7894bca28aeae09f8631b41baf86c0"],["/about/486.jpg","3847f19a3fffe7ebced97ef2027ec197"],["/about/972.jpg","e7716572d2e32d62b41c306d14fec3fe"],["/about/anon-teacher.jpg","f5a335fff69e5ff7f990686a209622a5"],["/about/index.html","729ff5dc262d86499249d6167b7dd7b8"],["/archives/2024/10/index.html","70b8f9615eef5cd93593fc5b7097988c"],["/archives/2024/11/index.html","31ee108d4d0afeedcd1d22f7c1b54095"],["/archives/2024/12/index.html","5f3080aaa15a7ae503c9b5fce8388678"],["/archives/2024/index.html","4a9f726519a0cd5aed77fd20bf884901"],["/archives/2025/01/index.html","7d176cf3c1633cb4c55cabf644c88b16"],["/archives/2025/02/index.html","71a42335193ecea92714be2ff5ea3368"],["/archives/2025/03/index.html","bbdd4aa717e30b5f7e2703c59a29981f"],["/archives/2025/index.html","a4df0ce0542fb784963f153013d64702"],["/archives/index.html","fc6aaa05be3a6f320b7074021f244b1c"],["/archives/page/2/index.html","ba3c956ec209e2791aaeaed7982721bf"],["/categories/index.html","48125e732c1b379bec77133e60fc484d"],["/categories/丢番图逼近/index.html","cea60541e8dc10efc12b5490cacdeacc"],["/categories/代数几何/index.html","f93698d9002e08ed028896c86a898c95"],["/categories/初等数论/index.html","b6d2744c46e4c314c00cfeb450a627f6"],["/categories/有趣应用/index.html","d5967b153dfe4f3b9c36a49fe32004d1"],["/categories/筛法/index.html","0f15514b87b526e072cc7fe292502803"],["/categories/解析数论/index.html","381ae2e07a3ba59ec64a5d219c63d844"],["/categories/论文阅读/index.html","3530c247b4ede8f0fbc228788244505c"],["/css/font.css","205f4ce40c959d3f9bd4f3407afc00b7"],["/css/index.css","375ca5b9613c991b28da479dee7a9e09"],["/css/universe.css","0fb6d3a0ae65975ab712cba344e8bae9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","da1708fd1998549edefe512198c5177f"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/algorithm1/Q1.png","c1a86ec8cec3061a422975267ff8530d"],["/image/algorithm1/T1.jpg","7f5fd13332ef83b4f9f3faeae9123e5c"],["/image/algorithm2/Q1.png","75455ef9a3907147042f2a61acb977e4"],["/image/algorithm2/T1.jpg","d0fe4264512a8bcf2b51dc02ede280f9"],["/image/card/1.jpg","05d61a106d7c318a0eb3bf0836b486b8"],["/image/card/10.jpg","fe3b790373ea1ce17d41b6332fa243e1"],["/image/card/11.jpg","48817265b16e8fc2eb49ecd83d380e3c"],["/image/card/12.jpg","278d99ab40aa0a77613c6623819f24f5"],["/image/card/13.jpg","a894cee5e76ad429ea05fdd6ec7729dd"],["/image/card/14.jpg","cc71529f3b533127e4ad8a73b450925e"],["/image/card/16.jpg","00adce51307ab97c02275d974186fd73"],["/image/card/17.jpg","34a4e9d40dda01df2a59eadfd43d9003"],["/image/card/18.jpg","a10d946ba7ea10964746678aed0258a0"],["/image/card/19.jpg","38cf5375dc0687b3dfcf2e963a7cd158"],["/image/card/2.jpg","dfcafaab360b2271fe57f419f69e682d"],["/image/card/20.jpg","04ea8093c411129ddec34cfb12d4434b"],["/image/card/21.jpg","8dcc1dae2d641414366c450ab26a4cb6"],["/image/card/22.jpg","ca04f3b90133671d0c051da8f98ebafb"],["/image/card/23.jpg","0bb6e9fb71095b727146291df381430e"],["/image/card/24.jpg","6d7e49cd6e37f6f572fff5073fac155d"],["/image/card/25.jpg","9ed68d8f700d1927e3cb13ce89c59679"],["/image/card/26.jpg","736653d4990d0f2ed044096efbf52176"],["/image/card/27.jpg","f933587827ee925e468aaee76c008ddf"],["/image/card/28.jpg","7729f3eec121eb31b7b2a3cbae86258f"],["/image/card/29.jpg","c7291d7b3abb0dd45b7591c2c236b947"],["/image/card/3.jpg","2a7a282a2b4f7227553ff0d7f99382f8"],["/image/card/30.jpg","b27fd68e495bebe213f49c32b7afd976"],["/image/card/31.jpg","f60e40a62950de95a4a1f143c68f61ee"],["/image/card/32.jpg","6ed15caaae5e3bd8c11b9f2defcb9b7c"],["/image/card/33.jpg","29b6546f9e24da8745686d6be8b073f3"],["/image/card/35.jpg","c92023d4b72fd4e704a82cdddd105abf"],["/image/card/36.jpg","705ca72166acd3fe6941b2defe9931a5"],["/image/card/38.jpg","dd2411bfacd744bf73bb421e4e397cfb"],["/image/card/39.jpg","6446cb33ef3fe08dfb7548a9e7dd5786"],["/image/card/4.jpg","21d9ddef7f4d9a4f8090432cd272c0e8"],["/image/card/40.jpg","cfc85e9778a56a4a93055df7cba106ba"],["/image/card/42.jpg","e288fde2f4a95da689a3bf26e3d2507b"],["/image/card/43.jpg","1eb0bffcb624d030d75c93b3dea2d41d"],["/image/card/44.jpg","70e38c013fd3664d9c6a1663fb835d40"],["/image/card/45.jpg","d1d01aa4e217a62baf90fcf59ec51bac"],["/image/card/46.jpg","b4db6aada05ee9824f1d21b045928a1e"],["/image/card/47.jpg","08078ead6be6041ee5e5567a807728cd"],["/image/card/5.jpg","5937d7a1dadb6af32184452578b53b3f"],["/image/card/50.jpg","07b348fb83fc66541c73f044ee0f75d6"],["/image/card/51.jpg","be6d7ab24638059c760597a586be393d"],["/image/card/52.jpg","795913a01285d10091db478b47f87835"],["/image/card/53.jpg","9f6670378dc33e7862b9de4024d76adf"],["/image/card/54.jpg","83feadda22710e176bcadc5725b6e3f2"],["/image/card/55.jpg","5cb32bbc3db5507704ee039e45ab6da0"],["/image/card/56.jpg","1452cf5b2643802d0f78367e2d8e0d20"],["/image/card/57.jpg","eb704a661ca11495a8313dfd3c73b510"],["/image/card/58.jpg","e9d2f267b59c6e5a43c306de7f81cc8e"],["/image/card/59.jpg","68c407167d23b3c028478a156260f5c3"],["/image/card/6.jpg","e3204e8998499fda3c18a866e5e9ec53"],["/image/card/7.jpg","9486d1e03cf57825c3cd1dd69a742fef"],["/image/card/8.jpg","f24162ba5bdbac2fd195dbd1e1a881e4"],["/image/card/9.jpg","e62d9223014098ebc9b53c450088dd49"],["/image/chen-s-theorem/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/chen-s-theorem/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/chen-s-theorem/T3.gif","432cc3d1ddb29629b8e9c464f7141d3b"],["/image/elementary number theory 1/T1.jpg","48788d647631a7fe864b391d03503486"],["/image/elementary number theory 1/T2.jpg","f8913e7ff909d9d254f2c4c798fdcb02"],["/image/k-th Mangoldt function/T1.jpg","ce386d648e5ad86e4e2e337198ec1e81"],["/image/k-th Mangoldt function/T2.jpg","673ddc41ea666726b20684f390579926"],["/image/notes-about-sieve-methods-3/T1.jpg","9c620a2c6454152ddad231fddb5f32a0"],["/image/notes-about-sieve-methods-3/T2.jpg","b380944ff5926437c0e663032b84bede"],["/image/notes-about-sieve-methods-3/T3.jpg","914c6a8733c35b36b520b0a686a67380"],["/image/notes-about-sieve-methods-3/T4.jpg","348b6915875692f51d7fc54c715cccfa"],["/image/notes-about-sieve-methods-3/T5.jpg","f8d6434e74a5aaa20a0ab558c6d9785f"],["/img/404-old.jpg","4f2c360907c294925aafbb236dc845cc"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","976504ad8ded090e589c147c6d80a91e"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","da8530626045987efd85f4a409f8142d"],["/img/bk0.jpg","8137ee425854b98e1a6314ac2c1fe447"],["/img/bk5.jpg","221af64029fe7706a2618b105aa793c8"],["/img/bk7.jpg","2ca05958b60f5e69877e1cc9a7f1418d"],["/img/bk8.jpg","a52df31241f835fd45b72795b731349a"],["/img/bk9.jpg","e4f0f426495f1443d6478693bd100d67"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","9f15d7a669d0a1aca686c1cbba22c697"],["/img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["/img/mortis.gif","c96728bee15d00bb644f99db1b5a336e"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","819f5c450d526d0e28ffc076aa94eb8d"],["/img/sakiko.jpg","268a5ce74f090aab9da3d1d6803cd2d3"],["/img/sakiko1.jpg","cbded2457ee550cb14702e8433c7ab53"],["/img/wanshancai.jpg","3455de970fd9d17dac9eeab836ffaa88"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","ad036019ce66f27101265fd97681abbe"],["/js/crash_cheat.js","42d2e7eca0ffd89c30d4596e80132b1e"],["/js/githubcalendar.js","c6bdf17d5ed4e10f8d53e2cfbde08880"],["/js/leaves.js","a143655aaf1783f170852030dcca9e9d"],["/js/main.js","136c307a6e38767b8163678f1441e7fd"],["/js/ripples.js","fd32d7dbfcf702f91ff7516268dfd3d1"],["/js/sakura.js","ce50fba220ca488a70607412bf93adee"],["/js/search/algolia.js","341e1908aa415308466ff1045430b00b"],["/js/search/local-search.js","27d410defa33844a8957f785af6cad17"],["/js/tw_cn.js","f25f1d9764cb89ce2addf1ef9471318f"],["/js/universe.js","cc06d60ba9857805adc1d4fa4e01d30b"],["/js/utils.js","be9041872b7946d127d423952b477d4a"],["/page/2/index.html","e4fbf6cf1a7763f1df157f79a4b68176"],["/sw-register.js","b655ce089b1a92839942432347899290"],["/tags/Algebra/index.html","9b1b7a6489f4358a3ae104c8ab95bc5b"],["/tags/Algebraic-Geometry/index.html","913c192efb52879c234bd086aab766f4"],["/tags/Algebraic-Number-Theory/index.html","0f1723e46faac2a8c6f001de719add54"],["/tags/Algorithm/index.html","2e18df95004f24cfdaee38504218b5ed"],["/tags/Analytical-Number-Theory/index.html","b6f02504d1b3db45970cda77e110669c"],["/tags/Brun-s-Theorem/index.html","e072b6e4e94647b478bea804313b0630"],["/tags/Character/index.html","8ea84440ea0fd72bde580fd8e2087d04"],["/tags/Chebyshev-s-Function/index.html","a60af670c7c53ad4f617183554db2260"],["/tags/Chen-s-Theorem/index.html","6eba8e8bf6324096141ba41bebc2d0b0"],["/tags/Chinese-Remainder-Theorem/index.html","2ec8ef198b2ddcb3d62ae29190f170e1"],["/tags/Continued-Fractions/index.html","7591885035fb23baef9eaafcb0b7cd66"],["/tags/Diophantine-Approximation/index.html","32f7cd63f8af77ce69735a2e77e7b8e1"],["/tags/Dirichlet-Convolution/index.html","7ac07a491ba5decac4e13696c1eb53d2"],["/tags/Elementary-Number-Theory/index.html","d1cad719a2599a75dbf4ad5057bc5af3"],["/tags/Estimation-Formula/index.html","abfd70d9d3c7ce7f9829e1aacc129737"],["/tags/GPY-Weight-Function/index.html","f59ee6ea13630b390ddb14fb2f2fe3d3"],["/tags/Gauss-Sum/index.html","69ceb480142bb19672311f8ef37048a3"],["/tags/Goldbach-s-Conjecture/index.html","79d18ccac3397efe2d5085798de3cf74"],["/tags/Mangoldt-Function/index.html","e8d7c860d8d9c3ba3df4528279bca05e"],["/tags/Merten-s-Theorem/index.html","e57b55bb2692a9db6effc9172614ab85"],["/tags/Number-Theory/index.html","f638bc83838c05ac92f3815e4001cbea"],["/tags/Paper-Reading/index.html","f7e551f5c553a02c939ebfb548c72561"],["/tags/Pell-Equation/index.html","51107ecbba3fa0b95f1d2a8a50281de8"],["/tags/Prime-Number-Theorem/index.html","613d9b7da88dbfc55bcff82c9a2efba5"],["/tags/Prime-Twins-Conjecture/index.html","c5114310ab2c394ab0288849b10562e4"],["/tags/Riemann-Roch-Theorem/index.html","427f2ec7f92cef82924ecfa755b232f6"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","52333dec87b583ccc7a4cb797278773b"],["/tags/Selberg-s-Sieve/index.html","dc31e0d40411c19ef24231b71b63cf87"],["/tags/Sieve-Methods/index.html","99857da150b5f55cf4166526235c56d5"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","8685c24299be0eabe5fa3aa0ba05701d"],["/tags/Sifting-Function/index.html","844703a202915c00fe22947fde2e256a"],["/tags/index.html","e2af8853ad9cce0f0664fcf1588baf77"]];
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
