/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","0979835a282ae70d69ae3ce72e868f1c"],["/2024/10/25/Diophantine-2/index.html","587f65e995e41c14783c190c402e917e"],["/2024/11/01/notes-about-sieve-methods-1/index.html","33295034d67f81b49d807ac3ca1937a4"],["/2024/11/03/notes-about-sieve-methods-2/index.html","3e50252fce9d04f555d6269e67547209"],["/2024/11/06/algorithm-1/index.html","6537d047affe391d3a0b64cd8834c9f7"],["/2024/11/07/algorithm-2/index.html","f822342245163e4987f131b0fe9a7632"],["/2024/11/20/elementary-number-theory-1/index.html","e753e62735e804031606056e6426d036"],["/2024/12/02/notes-about-sieve-methods-3/index.html","813757a8ad28ac931c06f81a44c1ade7"],["/2025/01/04/Riemann-Roch-theorem/index.html","dac3c2e5583ecdb8cb34554a7d129b9c"],["/2025/01/08/k-th-Mangoldt-function/index.html","b14113cd69e7987d735c63de1c374c7f"],["/2025/01/15/GPY-sieve-method/index.html","1b425241628d356fce0733ffceba4b01"],["/2025/02/07/GPY-sieve-method-2/index.html","e4b73eeec098b50d512ad924dcd7d7a4"],["/2025/02/15/Analytical-number-theory-1/index.html","0ca5d0119a2b5720bc79440af23b9b51"],["/2025/03/12/Chen-s-Theorem/index.html","c8bb3e91a8665591bbcddfaf27354398"],["/2025/04/03/notes-anout-sieve-methods-4/index.html","68a469d69e0a2ed15e7f6650d7f0aa08"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","2a0f0869725e639f29f092b6ae1de7ac"],["/archives/2024/10/index.html","42af99b9568094aea158fa0d31f73aea"],["/archives/2024/11/index.html","fb379343eca5893a610f4b1d525b59fd"],["/archives/2024/12/index.html","b6c37a4a6e05008d86062ca541e36344"],["/archives/2024/index.html","627156b6b15565c30ef92feba2de589f"],["/archives/2025/01/index.html","3e04524340eea45b3dd944a993eb820d"],["/archives/2025/02/index.html","b7090d3c8b5720b0503e4da53bfebde1"],["/archives/2025/03/index.html","efd54469c526bef56d1bc7175a5e8931"],["/archives/2025/04/index.html","084095b72ac90cf4da5c0863860ddfc3"],["/archives/2025/index.html","3737f7f56dc013ece9990031fb547916"],["/archives/index.html","30a442676ad57e08430bf8094b39d4c7"],["/archives/page/2/index.html","050b3a3f7757922c83cc668d9bba0371"],["/categories/index.html","5afabebeacafd2eb6abc2f157450ff27"],["/categories/丢番图逼近/index.html","2e2ef0117503019562f96b1cdb29e1a5"],["/categories/代数几何/index.html","9688541ecec4d8053ab2a6b5841f4e76"],["/categories/初等数论/index.html","d7a25ee9602f14b97b9ff2907b04a328"],["/categories/有趣应用/index.html","6a19d3c0577c134ca5878d0a1ce6bb2b"],["/categories/筛法/index.html","5b0f4d1b9695e31a090269a14e14d4a7"],["/categories/解析数论/index.html","a7d5f6e8e18dd3bc9759a3be2f409f04"],["/categories/论文阅读/index.html","927106f7eb576b73fa547df89d42ee19"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","b3e1a4ec5a1daec4becf4f3648834713"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","25387cd2c600163ab34b078845d480e7"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/14.jpg","fc5302a2eb13cb58cabd7d07cc11902f"],["/image/card/15.jpg","44ede84ef193ae38869c5cedfd0a0680"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/17.jpg","3834b982a1d8a1cd287a573183062726"],["/image/card/18.jpg","fc40991c3e6cbeb89f9fc29ac5bbfa44"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/20.jpg","b44513ad2e6c46d314ab82b6f609d091"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/25.jpg","786e4181af61caf7600ad5920478ae9c"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/30.jpg","6a1b65a76c47c35f3eb13b4fa26c47ed"],["/image/card/31.jpg","bc31f7b42b0cb293880ffb66a7bd6273"],["/image/card/32.jpg","f633908f3ef3b679374cabe887883f5d"],["/image/card/33.jpg","f2c867ded10d4407cbcf35990e19343f"],["/image/card/34.jpg","86275788da8b660d2d590324f1a00315"],["/image/card/35.jpg","5790afc2f1bdf518374f1ada8b84f585"],["/image/card/36.jpg","2bd98f61641782a52e73d0736d1d76a1"],["/image/card/37.jpg","1f4a1b71d788bf44f7e45638dec9fbbc"],["/image/card/38.jpg","0ab04ed44f179fdf470ea1726d300af8"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/40.jpg","0f989cefeb47a5093a6777659d7442c6"],["/image/card/41.jpg","5d7fe80de9f1132a223b25b589b7eebd"],["/image/card/42.jpg","a5baf74b0f319cb3591e68e239e44fdc"],["/image/card/43.jpg","550a77fbbd6c08dec6f739498abb9092"],["/image/card/44.jpg","a073d7f44e22bdab239bedcafb9801e8"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/47.jpg","6d63f8592af2a2ae9cf5b651227d3927"],["/image/card/48.jpg","4120aba54c0fc18eb8c2fbcff77e25ea"],["/image/card/49.jpg","3b0ca45b28f3a95e8565209b06d26f76"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","f2b7852938ddb414c7264afb089a2b0e"],["/image/card/53.jpg","3fd24dfeb7046212538ff653067dd9de"],["/image/card/54.jpg","e4bcc04811d5b9b938fdf82ca959d9ce"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/57.jpg","ed96a196431668a8540305254c9cee56"],["/image/card/58.jpg","dbaa09da9eb68ff474dd4074203d49bb"],["/image/card/59.jpg","5e85cf4125d6aee5d2e3ea39b404d0b8"],["/image/card/6.jpg","d656f164a5b0fe7045c876dba6da6c17"],["/image/card/60.jpg","0cd3e044693b68d7a1a34149cd77482d"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/62.jpg","a0de67fb46b75b88bc864a8a692a9a3d"],["/image/card/63.jpg","e64d5fd7da9d8ff3a9cdb8ec3db95533"],["/image/card/64.jpg","123d3f240234304177593dbe6e1d7212"],["/image/card/65.jpg","bef7c29c9e8491a16f3a71e909356a42"],["/image/card/66.jpg","b90b5228fc4030c0f251e7a5bc590135"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/68.jpg","d57794d7daa07ed9e3a45bcd2f6e1df3"],["/image/card/69.jpg","07d8cc5b2f4bff40a2df324cb864a5ca"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","b86f31e306a61bc4bec62014309dd6c2"],["/image/card/71.jpg","26c053cd3914f3065a5ade2372160713"],["/image/card/72.jpg","7ccd418269df5c8b902278986868f9e7"],["/image/card/73.jpg","cd98e4843a2b99dc0374d453543280e5"],["/image/card/74.jpg","4760468c82f817bbc97c080b61eda8cf"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/chen-s-theorem/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/chen-s-theorem/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","98d5f246b4416338d8b06951a66b93f9"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","23608744d98632b9249ffbd809b86ce9"],["/sw-register.js","21996a7c980358cb6faca06ae6446708"],["/tags/Algebra/index.html","c23ff2a37643bfba0e9e8fab13791978"],["/tags/Algebraic-Geometry/index.html","90c0e0065169ab52b22e64ea9adb2260"],["/tags/Algebraic-Number-Theory/index.html","1d96a80b7542b67012349bc1c948ec23"],["/tags/Algorithm/index.html","9c5a62ee543d8f8ae8c9631ee4eb1a6f"],["/tags/Analytical-Number-Theory/index.html","305fc3719e9175e3fd72382f9df0ce4b"],["/tags/Brun-s-Sieve/index.html","9271c877e26d8b2156d90e497318c022"],["/tags/Brun-s-Theorem/index.html","04ffa2bf12ce047ba77e5139fc2fca64"],["/tags/Character/index.html","d63540f308ca0484bf94d3e02125e96f"],["/tags/Chebyshev-s-Function/index.html","a89b86579cc59f2ca6677fe042bc786a"],["/tags/Chen-s-Theorem/index.html","651ace7158112aa1c78065cd170c4dc7"],["/tags/Chinese-Remainder-Theorem/index.html","85f1bdf07a2d3a8f00e85b18816459b9"],["/tags/Combinatorial-Sieve/index.html","792f4f85ab32b5a2b0cf0dd7be774842"],["/tags/Continued-Fractions/index.html","094041a8c0b387d01d2c16a7210b09d5"],["/tags/Diophantine-Approximation/index.html","051f2a78091a49c164a8f6c6ff426c06"],["/tags/Dirichlet-Convolution/index.html","f86a1d4deb8b71fb54312b2d6d944357"],["/tags/Elementary-Number-Theory/index.html","c8c0e20e86162375fd376462c52a2cfe"],["/tags/Estimation-Formula/index.html","d7e9443c4e5ed903651b43d9e613ba9e"],["/tags/GPY-Weight-Function/index.html","4e8e0a3a7ebdd1bc63a72da69368e623"],["/tags/Gauss-Sum/index.html","747656e001c89ca8ba0dc4242fbf2019"],["/tags/Goldbach-s-Conjecture/index.html","e76cb64e557560d4003c7b180da60e4d"],["/tags/Mangoldt-Function/index.html","d234d79a3250d284e96b99c0aebe244b"],["/tags/Merten-s-Theorem/index.html","faa4062739fa8eba5c10f0e206efca0b"],["/tags/Number-Theory/index.html","3e5630365f7b785994561f4bedb86449"],["/tags/Paper-Reading/index.html","1f8b93765a658e77860b8f49dc1a2224"],["/tags/Pell-Equation/index.html","d025ee1f53eb0157778d62c4b3b057b3"],["/tags/Prime-Number-Theorem/index.html","4f11453f3f393935c51ff594529b2d21"],["/tags/Prime-Twins-Conjecture/index.html","62943e1219875f9fbd4716cd77b0e133"],["/tags/Riemann-Roch-Theorem/index.html","0ed3cbd4c758155ba0912d2747b8695d"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","6948ddc030ab8e8cfc83f9975578c6b6"],["/tags/Selberg-s-Sieve/index.html","287e9512070f215d5251ecd56c838ece"],["/tags/Sieve-Methods/index.html","11a686d65857104b3a5c366361b0ac31"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","d6412290a46a048408a4034487c506d7"],["/tags/Sifting-Function/index.html","b2eae24c65905e09eb5ea86e253a9b82"],["/tags/index.html","3bc2c3e7860d235db15836d2fc1fbbb0"]];
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
