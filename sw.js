/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","c9852f29c973bc1f9f87bea2600a2321"],["/2024/10/25/Diophantine-2/index.html","f5396d3868af574f667f4c6c9edf2d37"],["/2024/11/01/notes-about-sieve-methods-1/index.html","7de149abbee19eb32bd9ef5bb15ee1be"],["/2024/11/03/notes-about-sieve-methods-2/index.html","8daccf57cb6be37bf6f87be9d2761b5d"],["/2024/11/06/algorithm-1/index.html","65eba7041aa095f9cfe0942398a12e88"],["/2024/11/07/algorithm-2/index.html","f814876319be38f3422807ae24a38564"],["/2024/11/20/elementary-number-theory-1/index.html","4ab9e4fe9b2c058ad48053ccd01f8471"],["/2024/12/02/notes-about-sieve-methods-3/index.html","c817ed8e06b7f4626ba60dfc310f823e"],["/2025/01/04/Riemann-Roch-theorem/index.html","c786e80addc95777d5342221a257c209"],["/2025/01/08/k-th-Mangoldt-function/index.html","79391fe9177e2cbe52b285e89f754036"],["/2025/01/15/GPY-sieve-method/index.html","060406a07ba81f0ab5ca3cdcf23c016e"],["/2025/02/07/GPY-sieve-method-2/index.html","2f86d7635344ace01d8402c3359e5b3b"],["/2025/02/15/Analytical-number-theory-1/index.html","778773a3ad86317d33f0b47ae618de05"],["/2025/03/12/Chen-s-Theorem/index.html","9d9f79ac5022b4f9f065ece80520d5da"],["/2025/04/03/notes-anout-sieve-methods-4/index.html","09ea21bf7348e7a3880366d269a65e04"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","729b958b3a24355384420d9e380b2247"],["/archives/2024/10/index.html","78da2276bcfede961479bca4569b1d22"],["/archives/2024/11/index.html","0ab5ea5d9dfb3d36e95c52645dd30464"],["/archives/2024/12/index.html","48cba197d9853fcf649465b1273b10ee"],["/archives/2024/index.html","471f73c8db38590f3e40c061092ef7dd"],["/archives/2025/01/index.html","792979653a93e9c31b2f6a2b1f7904a4"],["/archives/2025/02/index.html","9189dda58316d2980789783b4e74cf97"],["/archives/2025/03/index.html","f3141a79e004d9ea12085772aec26ad8"],["/archives/2025/04/index.html","77637333600796694981f60ee2543831"],["/archives/2025/index.html","b39b51e973ddc09ec7d4956fedf5efc8"],["/archives/index.html","9704b47fa2b098e8d5dac701af3f86eb"],["/archives/page/2/index.html","cc5c405d8689669aafa3a32e9d5ed91a"],["/categories/index.html","cda370d59ade729ce4e93b6246d12b2f"],["/categories/丢番图逼近/index.html","e9e57b89279b4100463e29e2914e8e5c"],["/categories/代数几何/index.html","856b4757f96d2c8a8b12eabcf3583e74"],["/categories/初等数论/index.html","90e62dd144db8cccabe2d05b4394d9a0"],["/categories/有趣应用/index.html","cece961fbd439d045a1462aa95d80834"],["/categories/筛法/index.html","312f6577fd223629bc8454cdd453896f"],["/categories/解析数论/index.html","e3b031be23a3b4b65f35b022c84124bb"],["/categories/论文阅读/index.html","05a3464e26d8a6b1c875d28213c33101"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","b3e1a4ec5a1daec4becf4f3648834713"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","25387cd2c600163ab34b078845d480e7"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/14.jpg","fc5302a2eb13cb58cabd7d07cc11902f"],["/image/card/15.jpg","44ede84ef193ae38869c5cedfd0a0680"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/17.jpg","3834b982a1d8a1cd287a573183062726"],["/image/card/18.jpg","fc40991c3e6cbeb89f9fc29ac5bbfa44"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/20.jpg","b44513ad2e6c46d314ab82b6f609d091"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/25.jpg","786e4181af61caf7600ad5920478ae9c"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/30.jpg","6a1b65a76c47c35f3eb13b4fa26c47ed"],["/image/card/31.jpg","05930d5c7d05155aef4f84d0e57608f7"],["/image/card/32.jpg","f633908f3ef3b679374cabe887883f5d"],["/image/card/33.jpg","f2c867ded10d4407cbcf35990e19343f"],["/image/card/34.jpg","0089bcd6891ccd35252a505bfa9cbce7"],["/image/card/35.jpg","5790afc2f1bdf518374f1ada8b84f585"],["/image/card/36.jpg","2bd98f61641782a52e73d0736d1d76a1"],["/image/card/37.jpg","1f4a1b71d788bf44f7e45638dec9fbbc"],["/image/card/38.jpg","0ab04ed44f179fdf470ea1726d300af8"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/40.jpg","0f989cefeb47a5093a6777659d7442c6"],["/image/card/41.jpg","5d7fe80de9f1132a223b25b589b7eebd"],["/image/card/42.jpg","a5baf74b0f319cb3591e68e239e44fdc"],["/image/card/43.jpg","550a77fbbd6c08dec6f739498abb9092"],["/image/card/44.jpg","a073d7f44e22bdab239bedcafb9801e8"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/47.jpg","6d63f8592af2a2ae9cf5b651227d3927"],["/image/card/48.jpg","7590d9ae3d76871dfe66d8e50cb94e9f"],["/image/card/49.jpg","9dca71d2729e5d0216975d9b8413ef97"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","f2b7852938ddb414c7264afb089a2b0e"],["/image/card/53.jpg","3fd24dfeb7046212538ff653067dd9de"],["/image/card/54.jpg","e4bcc04811d5b9b938fdf82ca959d9ce"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/57.jpg","ed96a196431668a8540305254c9cee56"],["/image/card/58.jpg","dbaa09da9eb68ff474dd4074203d49bb"],["/image/card/59.jpg","5e85cf4125d6aee5d2e3ea39b404d0b8"],["/image/card/6.jpg","d656f164a5b0fe7045c876dba6da6c17"],["/image/card/60.jpg","0cd3e044693b68d7a1a34149cd77482d"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/62.jpg","a0de67fb46b75b88bc864a8a692a9a3d"],["/image/card/63.jpg","e64d5fd7da9d8ff3a9cdb8ec3db95533"],["/image/card/64.jpg","123d3f240234304177593dbe6e1d7212"],["/image/card/65.jpg","bef7c29c9e8491a16f3a71e909356a42"],["/image/card/66.jpg","b90b5228fc4030c0f251e7a5bc590135"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/68.jpg","d57794d7daa07ed9e3a45bcd2f6e1df3"],["/image/card/69.jpg","07d8cc5b2f4bff40a2df324cb864a5ca"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","516051423ee816d09482a56b3ba78d02"],["/image/card/71.jpg","26c053cd3914f3065a5ade2372160713"],["/image/card/72.jpg","7ccd418269df5c8b902278986868f9e7"],["/image/card/73.jpg","cd98e4843a2b99dc0374d453543280e5"],["/image/card/74.jpg","4760468c82f817bbc97c080b61eda8cf"],["/image/card/75.jpg","a77592939da8abbeb84ed21e2f72559a"],["/image/card/76.jpg","d8b5588da580dbdb3b09f307a80c1519"],["/image/card/77.jpg","77c38218f7544863c4857c0916903bce"],["/image/card/78.jpg","a4d6e16b7057605eb2da1650c8e113b6"],["/image/card/79.jpg","a622eb15a7cbfe1bf6ad16f178d24a38"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/80.jpg","44f261e750e3d6d455775cd1127ee3be"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/chen-s-theorem/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/chen-s-theorem/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","54eeafb5dba34b711a09367c329c775a"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","12b2929942caf347961595badb9497c2"],["/sw-register.js","e75992ebbb33a593b7a4370067c10c31"],["/tags/Algebra/index.html","f6d4e723aa8c903e380e8c612435b05c"],["/tags/Algebraic-Geometry/index.html","ad298d03852417a1488d5b10111fbd77"],["/tags/Algebraic-Number-Theory/index.html","30e1d065acf01e4fe08e65f002854937"],["/tags/Algorithm/index.html","7d5c0494df278e06826840e97a798774"],["/tags/Analytical-Number-Theory/index.html","a912c682702590fcb370308d8b295365"],["/tags/Brun-s-Sieve/index.html","5ba35ee3a1f88008bf2ca6f6c63aaba2"],["/tags/Brun-s-Theorem/index.html","6f6f702286cb76f06422fe05f84fac06"],["/tags/Character/index.html","3884ef1a59f572b7a3ec1220f48774c4"],["/tags/Chebyshev-s-Function/index.html","e658b15feaf2c5f9dbaa23d58589ee80"],["/tags/Chen-s-Theorem/index.html","89dcd7bee68ab8e567934b5829a0608c"],["/tags/Chinese-Remainder-Theorem/index.html","4290176b1cb3d71827f0918f7d6c9ffc"],["/tags/Combinatorial-Sieve/index.html","d68a20562c588c57938eaf0007e15748"],["/tags/Continued-Fractions/index.html","2e805f0d9242f17e7412562129f93ea6"],["/tags/Diophantine-Approximation/index.html","188de57978dd92fa01737def41c7007e"],["/tags/Dirichlet-Convolution/index.html","9f73c4fc98aed6f31873aab1e81343bb"],["/tags/Elementary-Number-Theory/index.html","0211a2859b20200b139daeb2c0fb5f98"],["/tags/Estimation-Formula/index.html","0662735168c25ba56e9fb0d3ad7a6ab1"],["/tags/GPY-Weight-Function/index.html","2232aa721117621fddf0749da290122c"],["/tags/Gauss-Sum/index.html","6f8e805914a796f05598d1c6679e9e5f"],["/tags/Goldbach-s-Conjecture/index.html","597b1903b2ed2ec225cc426fefd67cd7"],["/tags/Mangoldt-Function/index.html","3be5416f5790b7ac2d3e0b094f1ce06e"],["/tags/Merten-s-Theorem/index.html","f2efc6dc677c441d52665cd8722cbb57"],["/tags/Number-Theory/index.html","7f41cf2aaae391fce3a12dfa87162972"],["/tags/Paper-Reading/index.html","8f331aac9f3e27f1f3fdbf97a732c168"],["/tags/Pell-Equation/index.html","ace35bcd3b34019b9ee9c1ed023c0f93"],["/tags/Prime-Number-Theorem/index.html","5af692676ea81dbd7d28807f976fea5f"],["/tags/Prime-Twins-Conjecture/index.html","e82fdacb19fee867fff66a800f823741"],["/tags/Riemann-Roch-Theorem/index.html","a6df37497ab70839d8dc395bfa1616f6"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","3dffdb465fc1328f558a9563a4579be7"],["/tags/Selberg-s-Sieve/index.html","de97248971847224c4fee2932715b979"],["/tags/Sieve-Methods/index.html","59f5a7b37b522c3f0322e51efd05486e"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","084794b95505bb892cdf667c054f54e2"],["/tags/Sifting-Function/index.html","37caef148dbcca34ef1928c4c74750c2"],["/tags/index.html","99e4ab9a5aa1577c1f7861fee36672ca"]];
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
