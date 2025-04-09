/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","19e5c8e06382bbbb045d697ad1b0fa05"],["/2024/10/25/Diophantine-2/index.html","d47c74b18a4fe255f9f8fb8a97395aab"],["/2024/11/01/notes-about-sieve-methods-1/index.html","3efcc1fda8d8d789843b58293518d575"],["/2024/11/03/notes-about-sieve-methods-2/index.html","b63630e9336a70859b395abfb5b1a7b1"],["/2024/11/06/algorithm-1/index.html","75f152789e0acc41c52641cbbf68cef2"],["/2024/11/07/algorithm-2/index.html","979923445b5b466372d0e0a6af45a1e2"],["/2024/11/20/elementary-number-theory-1/index.html","897971e1f1f83053a1ad51a1e4e4ad25"],["/2024/12/02/notes-about-sieve-methods-3/index.html","570ac713dd6ba0f9653f843760f15a89"],["/2025/01/04/Riemann-Roch-theorem/index.html","1616e7f7c8bbf46f785adcc07319bbb8"],["/2025/01/08/k-th-Mangoldt-function/index.html","9045aa1aa0d76b1a01d7e53ca8e58aa6"],["/2025/01/15/GPY-sieve-method/index.html","49467df0ff1849c1798f4bfd3c90bab1"],["/2025/02/07/GPY-sieve-method-2/index.html","8dea9ff98b8db9fe3d5afa432d7cd2c2"],["/2025/02/15/Analytical-number-theory-1/index.html","57f798e7c49118566a7f911c0b968633"],["/2025/03/12/notes-about-sieve-methods-4/index.html","cea475de8dd5424becd5a831495ef36a"],["/2025/04/03/notes-anout-sieve-methods-5/index.html","e9a7e454de233c1ce7d8b7351930ee1f"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","bf8a171626da9a664305bfdd9d46967b"],["/archives/2024/10/index.html","7a871db83368fbe0d98adde3d76c2cb6"],["/archives/2024/11/index.html","64bef8241e6b3ffa39d50d6f3604ebca"],["/archives/2024/12/index.html","16fea5b9d396d897fa97b8d6e9e76d25"],["/archives/2024/index.html","f53765573340f166bda9c1e19c83a78f"],["/archives/2025/01/index.html","3f2b42292c2dfab14abc20acbfdca125"],["/archives/2025/02/index.html","3e8b49c0580db20aa95de14005c5de31"],["/archives/2025/03/index.html","bb355292a0ad5943ca78b52f3823ec4d"],["/archives/2025/04/index.html","2b5b443c53d001d95f70ed7073a25c81"],["/archives/2025/index.html","e00161c7a91697fdc916b02bceba5e04"],["/archives/index.html","ad32af2812a4864e585ccc476cc0b372"],["/archives/page/2/index.html","46fc66c8066f86865b6a3827f3c742e0"],["/categories/index.html","2dc574ac239c8c39e4516e4de5048a32"],["/categories/丢番图逼近/index.html","9e3b75650abecb5b90d83c2a1bc6094a"],["/categories/代数几何/index.html","75162f8c4608847b27ea04e39e4f5955"],["/categories/初等数论/index.html","502cc1430bd5c55b8e5e9e6d7bc26563"],["/categories/有趣应用/index.html","519fdfc8141c1c9c9451a269c9533f57"],["/categories/筛法/index.html","e579d6fd3fa0e836c677e8b679c48947"],["/categories/解析数论/index.html","8cc06675d7a1e33cf766f5a880df2631"],["/categories/论文阅读/index.html","79ca426dedb194edc07454d6b89ae909"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","f6056564b7847d41ecd5e97b1797cec1"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","25387cd2c600163ab34b078845d480e7"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/14.jpg","fc5302a2eb13cb58cabd7d07cc11902f"],["/image/card/15.jpg","44ede84ef193ae38869c5cedfd0a0680"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/17.jpg","3834b982a1d8a1cd287a573183062726"],["/image/card/18.jpg","fc40991c3e6cbeb89f9fc29ac5bbfa44"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/20.jpg","b44513ad2e6c46d314ab82b6f609d091"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/25.jpg","786e4181af61caf7600ad5920478ae9c"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/30.jpg","6a1b65a76c47c35f3eb13b4fa26c47ed"],["/image/card/31.jpg","05930d5c7d05155aef4f84d0e57608f7"],["/image/card/32.jpg","f633908f3ef3b679374cabe887883f5d"],["/image/card/33.jpg","f2c867ded10d4407cbcf35990e19343f"],["/image/card/34.jpg","0089bcd6891ccd35252a505bfa9cbce7"],["/image/card/35.jpg","5790afc2f1bdf518374f1ada8b84f585"],["/image/card/36.jpg","2bd98f61641782a52e73d0736d1d76a1"],["/image/card/37.jpg","1f4a1b71d788bf44f7e45638dec9fbbc"],["/image/card/38.jpg","0ab04ed44f179fdf470ea1726d300af8"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/40.jpg","0f989cefeb47a5093a6777659d7442c6"],["/image/card/41.jpg","5d7fe80de9f1132a223b25b589b7eebd"],["/image/card/42.jpg","a5baf74b0f319cb3591e68e239e44fdc"],["/image/card/43.jpg","550a77fbbd6c08dec6f739498abb9092"],["/image/card/44.jpg","a073d7f44e22bdab239bedcafb9801e8"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/47.jpg","6d63f8592af2a2ae9cf5b651227d3927"],["/image/card/48.jpg","7590d9ae3d76871dfe66d8e50cb94e9f"],["/image/card/49.jpg","9dca71d2729e5d0216975d9b8413ef97"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","f2b7852938ddb414c7264afb089a2b0e"],["/image/card/53.jpg","3fd24dfeb7046212538ff653067dd9de"],["/image/card/54.jpg","e4bcc04811d5b9b938fdf82ca959d9ce"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/57.jpg","ed96a196431668a8540305254c9cee56"],["/image/card/58.jpg","dbaa09da9eb68ff474dd4074203d49bb"],["/image/card/59.jpg","5e85cf4125d6aee5d2e3ea39b404d0b8"],["/image/card/6.jpg","d656f164a5b0fe7045c876dba6da6c17"],["/image/card/60.jpg","0cd3e044693b68d7a1a34149cd77482d"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/62.jpg","a0de67fb46b75b88bc864a8a692a9a3d"],["/image/card/63.jpg","e64d5fd7da9d8ff3a9cdb8ec3db95533"],["/image/card/64.jpg","123d3f240234304177593dbe6e1d7212"],["/image/card/65.jpg","bef7c29c9e8491a16f3a71e909356a42"],["/image/card/66.jpg","b90b5228fc4030c0f251e7a5bc590135"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/68.jpg","d57794d7daa07ed9e3a45bcd2f6e1df3"],["/image/card/69.jpg","07d8cc5b2f4bff40a2df324cb864a5ca"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","516051423ee816d09482a56b3ba78d02"],["/image/card/71.jpg","26c053cd3914f3065a5ade2372160713"],["/image/card/72.jpg","7ccd418269df5c8b902278986868f9e7"],["/image/card/73.jpg","cd98e4843a2b99dc0374d453543280e5"],["/image/card/74.jpg","4760468c82f817bbc97c080b61eda8cf"],["/image/card/75.jpg","a77592939da8abbeb84ed21e2f72559a"],["/image/card/76.jpg","d8b5588da580dbdb3b09f307a80c1519"],["/image/card/77.jpg","77c38218f7544863c4857c0916903bce"],["/image/card/78.jpg","a4d6e16b7057605eb2da1650c8e113b6"],["/image/card/79.jpg","a622eb15a7cbfe1bf6ad16f178d24a38"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/80.jpg","44f261e750e3d6d455775cd1127ee3be"],["/image/card/81.jpg","d05501a5468ddfc74b61c4a559963da3"],["/image/card/82.jpg","08f93cba39e122894acb50df9cd659af"],["/image/card/83.jpg","e05077d87b66ce9a4a624e2bda6a9080"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/image/notes-about-sieve-methods-4/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/notes-about-sieve-methods-5/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","1c29744001478d16adeeaafebbaae30b"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","71dd05be971c4a22591436665c9e7e4b"],["/sw-register.js","7b78ed54f663921b5716f2c2bf24a56a"],["/tags/Algebra/index.html","7830e3e1aae9bc90930e08acdade778e"],["/tags/Algebraic-Geometry/index.html","446ba0cf1b271a42996c039acdeeefdd"],["/tags/Algebraic-Number-Theory/index.html","63ebd034d4e61a71d24272b647e0eb3b"],["/tags/Algorithm/index.html","5e982c473ec3e9fb2102dd34593e19e0"],["/tags/Analytical-Number-Theory/index.html","8c2c64eade4c31b3c3f17f6b360fd04c"],["/tags/Brun-s-Sieve/index.html","57e20cc7158fdbe0bad6587c37189934"],["/tags/Brun-s-Theorem/index.html","abae6a4bf3ec37deb863aebb23ccc664"],["/tags/Character/index.html","a651d6fb04f57442ee1716efb9415a03"],["/tags/Chebyshev-s-Function/index.html","bf1eacb633f65f012be5eebe260e369b"],["/tags/Chen-s-Theorem/index.html","e0312d2b8e4965d86451f37f96d8e7a1"],["/tags/Chinese-Remainder-Theorem/index.html","f7b5262fc49cae86c2928d2796f21831"],["/tags/Combinatorial-Sieve/index.html","e3d87966664b6be8b78be880fc71cd35"],["/tags/Continued-Fractions/index.html","a6f6314cb354bc762b57d095cd6d0e34"],["/tags/Diophantine-Approximation/index.html","d43c37cc84d4b7a3a166f922129ef354"],["/tags/Dirichlet-Convolution/index.html","16796dd9dac2d9dfd835ac1620f5e10e"],["/tags/Elementary-Number-Theory/index.html","c606b05eca922e492a1ca290b3940c25"],["/tags/Estimation-Formula/index.html","6cd1f5ac169b964fe099ab8f6435dc55"],["/tags/GPY-Weight-Function/index.html","accb8248232e4ebfa8887358c6017b11"],["/tags/Gauss-Sum/index.html","8060bd9a8de7ada5ed4a85c1517ef4ba"],["/tags/Goldbach-s-Conjecture/index.html","158c8608aa408afcbb98bca65397c7f2"],["/tags/Mangoldt-Function/index.html","a6b6b5504b22abcb10e4e01b8838ef93"],["/tags/Merten-s-Theorem/index.html","82e4022a8834e55e74c195f9d2258f8b"],["/tags/Number-Theory/index.html","4673c4cf261ba9d36923d0ba92dad1a5"],["/tags/Paper-Reading/index.html","5c4e4bcba2a36ce71040c74928e583b0"],["/tags/Pell-Equation/index.html","84f518d15b7f79eec2ad5da5e7d42332"],["/tags/Prime-Number-Theorem/index.html","60179f3060eb73067778e7734465d393"],["/tags/Prime-Twins-Conjecture/index.html","6454692c1e1f3079629b6785a15fe961"],["/tags/Riemann-Roch-Theorem/index.html","9ff97901efd46aa7dc2c3317abc3e4b2"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","110e19e9db0aa8529f805632a91f3ee1"],["/tags/Selberg-s-Sieve/index.html","241e6385ee02085dad51361067334f48"],["/tags/Sieve-Methods/index.html","7eb11450cc6807bd2382a35f4cdcc975"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","17429b7aee47c355931bd91faf71d546"],["/tags/Sifting-Function/index.html","843dcb14a1157f9438a6b3398286055a"],["/tags/index.html","0462e6c73066e4dd204c61853f823e2f"]];
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
