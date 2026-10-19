/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","3a24d29af00d36b41ff84e988ac2e665"],["/2024/10/25/Diophantine-2/index.html","75114132c9c636d60872ed77f410d097"],["/2024/11/01/notes-about-sieve-methods-1/index.html","516f41fbe8a10c05fdacc3b182ca84bd"],["/2024/11/03/notes-about-sieve-methods-2/index.html","f247103195ab6573baf83036718ddae8"],["/2024/11/06/algorithm-1/index.html","dd6e00ae483edc6620b6d86b715e6a78"],["/2024/11/07/algorithm-2/index.html","99a636ac7ef3f30860cd80bbd55e2f4b"],["/2024/11/20/elementary-number-theory-1/index.html","f3a6119aaee7039c958dc0b72e16f01e"],["/2024/12/02/notes-about-sieve-methods-3/index.html","c7c5505c3999b6695f4bb779e5c41997"],["/2025/01/04/Riemann-Roch-theorem/index.html","8e360f5d0e881794979da9bf14c13c32"],["/2025/01/08/k-th-Mangoldt-function/index.html","d4578bebfc6752c59aa5d5e734bad882"],["/2025/01/15/GPY-sieve-method/index.html","a02a03a5548cd28dbbbba8a7895b7e72"],["/2025/02/07/GPY-sieve-method-2/index.html","d675f8e2ab25a1c86d1d8d56a3d19d95"],["/2025/02/15/Analytical-number-theory-1/index.html","c59ce07562bf32b021849f74730a7759"],["/2025/03/12/notes-about-sieve-methods-4/index.html","332ae7ae1455b0f99eb5d566c9e34d5f"],["/2025/04/03/notes-about-sieve-methods-5/index.html","1e17aa8ac8f4ad8e744cbf292d7aa613"],["/2025/04/14/notes-about-sieve-methods-6/index.html","e3bacbca338667cb94787cbf2d17c86a"],["/2025/04/15/Maynard-sieve-method/index.html","5d1de7b6e836bc9fbf211ebc5e2d451b"],["/2025/08/31/note-about-Manin-Conjecture-1/index.html","bf7ce9e686a709f835b14f76ce889459"],["/2025/09/25/p-valuation-of-Bernoulli-numbers/index.html","37c07129f9e6a2f77031e0d6a86d9fc2"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","507d3ac00e5ea5682dfe7f923c290857"],["/archives/2024/10/index.html","18f6e0e4eb3121157752fd3557657a67"],["/archives/2024/11/index.html","fae53361aba459ddc67246f4eba2e4ad"],["/archives/2024/12/index.html","5b2f114021405007589a4dcf74a1040b"],["/archives/2024/index.html","8e4486baf1d1de77094242deb229bde5"],["/archives/2025/01/index.html","763224508a0a733b858dc057dccd2912"],["/archives/2025/02/index.html","59215d19c80ea7df2812aa3673dcfd22"],["/archives/2025/03/index.html","c2111ed56d06cca7ad37e60f1ab52f18"],["/archives/2025/04/index.html","72f1f6f2f25f50eaf6916232c0ec95da"],["/archives/2025/08/index.html","5d82f41a394719f1358f588df6e146ce"],["/archives/2025/09/index.html","53d35d70106008703ee5ffcb9a794113"],["/archives/2025/index.html","e28874fbea6b37eb248e6cac0863c5ef"],["/archives/2025/page/2/index.html","aebd7d6795b824c3697b061422207094"],["/archives/index.html","7202c695cb358b8eb29b945d39c342e7"],["/archives/page/2/index.html","7dfde66cbcf9503970bba0235a1db807"],["/categories/index.html","6da2bf9f84f290bbb564af7e90714844"],["/categories/丢番图几何/index.html","d146069cccec7a3a96cfa1919e570b20"],["/categories/丢番图逼近/index.html","a483899de79b24517db56d3f894fb324"],["/categories/代数几何/index.html","24c0202959414b2e8a942e03324a4bf4"],["/categories/初等数论/index.html","5b72cbbceea8b1c1bbaf6d913178fbb9"],["/categories/有趣应用/index.html","3b154684d88be10a26d45e321eee9c12"],["/categories/筛法/index.html","682216f422e1758092c43e67746e9018"],["/categories/解析数论/index.html","eab9020b3db1746009a11070878ff2e4"],["/categories/论文阅读/index.html","befcabdc0c56566a1cfc1a80159b2052"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","bf9b41fbd5156f5760b303e4405636b4"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/Maynard-sieve-method/T1.jpg","0a5fbc517ceccb0fb04218dc010e844b"],["/image/Maynard-sieve-method/T2.jpg","c59c64377f9caf8ff9d8de62f2fc9bde"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","25387cd2c600163ab34b078845d480e7"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/14.jpg","2b9d5ef259eec1ed80a9cfedffa2f6a9"],["/image/card/15.jpg","44ede84ef193ae38869c5cedfd0a0680"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/17.jpg","873bbca7435fd89307ad780aaec3f894"],["/image/card/18.jpg","fc40991c3e6cbeb89f9fc29ac5bbfa44"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/20.jpg","1f8bb7b09f2ca6b1247af8da9b003ed2"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/25.jpg","786e4181af61caf7600ad5920478ae9c"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/31.jpg","05930d5c7d05155aef4f84d0e57608f7"],["/image/card/32.jpg","f633908f3ef3b679374cabe887883f5d"],["/image/card/33.jpg","f2c867ded10d4407cbcf35990e19343f"],["/image/card/34.jpg","0089bcd6891ccd35252a505bfa9cbce7"],["/image/card/35.jpg","5790afc2f1bdf518374f1ada8b84f585"],["/image/card/36.jpg","8d36f8bf6dd5cdcade054cff89e57c6e"],["/image/card/37.jpg","1f4a1b71d788bf44f7e45638dec9fbbc"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/40.jpg","0f989cefeb47a5093a6777659d7442c6"],["/image/card/41.jpg","5d7fe80de9f1132a223b25b589b7eebd"],["/image/card/42.jpg","d6aa70d6c67ed9b7f07c972fe871d5f9"],["/image/card/43.jpg","550a77fbbd6c08dec6f739498abb9092"],["/image/card/44.jpg","a073d7f44e22bdab239bedcafb9801e8"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/47.jpg","6d63f8592af2a2ae9cf5b651227d3927"],["/image/card/48.jpg","7590d9ae3d76871dfe66d8e50cb94e9f"],["/image/card/49.jpg","9dca71d2729e5d0216975d9b8413ef97"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","f2b7852938ddb414c7264afb089a2b0e"],["/image/card/53.jpg","8a117401eea01f88d806991a307454dc"],["/image/card/54.jpg","36051951bc6914d4765386f89072c447"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/58.jpg","dbaa09da9eb68ff474dd4074203d49bb"],["/image/card/59.jpg","18240f0cd7c883e020f0f23bc73e111c"],["/image/card/6.jpg","d656f164a5b0fe7045c876dba6da6c17"],["/image/card/60.jpg","077bd38a2f68e913777764edd4c8b860"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/62.jpg","a0de67fb46b75b88bc864a8a692a9a3d"],["/image/card/63.jpg","e64d5fd7da9d8ff3a9cdb8ec3db95533"],["/image/card/64.jpg","123d3f240234304177593dbe6e1d7212"],["/image/card/65.jpg","bef7c29c9e8491a16f3a71e909356a42"],["/image/card/66.jpg","b90b5228fc4030c0f251e7a5bc590135"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/68.jpg","d57794d7daa07ed9e3a45bcd2f6e1df3"],["/image/card/69.jpg","07d8cc5b2f4bff40a2df324cb864a5ca"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","516051423ee816d09482a56b3ba78d02"],["/image/card/71.jpg","26c053cd3914f3065a5ade2372160713"],["/image/card/72.jpg","7ccd418269df5c8b902278986868f9e7"],["/image/card/73.jpg","cd98e4843a2b99dc0374d453543280e5"],["/image/card/74.jpg","4535a95eef2482bd07ed04f944c79074"],["/image/card/75.jpg","a77592939da8abbeb84ed21e2f72559a"],["/image/card/76.jpg","d8b5588da580dbdb3b09f307a80c1519"],["/image/card/77.jpg","77c38218f7544863c4857c0916903bce"],["/image/card/78.jpg","a4d6e16b7057605eb2da1650c8e113b6"],["/image/card/79.jpg","a622eb15a7cbfe1bf6ad16f178d24a38"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/80.jpg","44f261e750e3d6d455775cd1127ee3be"],["/image/card/81.jpg","d05501a5468ddfc74b61c4a559963da3"],["/image/card/82.jpg","08f93cba39e122894acb50df9cd659af"],["/image/card/83.jpg","e05077d87b66ce9a4a624e2bda6a9080"],["/image/card/85.jpg","4332a07a6f1b57bc4742605899b434a2"],["/image/card/86.jpg","ebdf1648765c2df96404f7ff47caeaf7"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/card/92.jpg","ee2028dfdaec004926628226af6c6b2d"],["/image/card/93.jpg","d1d85741199b10e1978f1241be920c2f"],["/image/card/95.jpg","418916306e07ab58682e11625dfdb23c"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/exercises-in-AG-1/T1.png","7d93d0fb2f659249dd8b66a6edbc7112"],["/image/exercises-in-AG-1/T2.jpg","84e53fcb9611a703413e5ad1b2d4c187"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/notes-about-sieve-methods-4/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/notes-about-sieve-methods-5/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/image/notes-about-sieve-methods-5/T2.jpg","e0715cd6f1ea967db1d1a71804bae590"],["/image/p-valuation-of-Bernoulli-numbers/T1.jpg","6468d48b8a98658a5d2900250968b460"],["/image/p-valuation-of-Bernoulli-numbers/T2.jpg","5702f763d2c7edd727b10eaa73658c87"],["/image/p-valuation-of-Bernoulli-numbers/T3.jpg","85c4435c73a28fc1089f26d9778bb8c5"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk11.jpg","d1d85741199b10e1978f1241be920c2f"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","622cc9ac4ec4f2baf81585af5cbf566f"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","9ecdacad180a8adec48aba48fdfc34b8"],["/seminars/index.html","a6f7054893188c367a82af86e171a741"],["/sw-register.js","b68e8137f9c65d5661c5b7faf07b6f49"],["/tags/Algebra/index.html","c99859b6f2cc212cde645d411902efb1"],["/tags/Algebraic-Geometry/index.html","395e23e77568ace6aa6ccfc7c4f5ce68"],["/tags/Algebraic-Number-Theory/index.html","8ff7a30d1314b43abdbfd178869e1499"],["/tags/Algorithm/index.html","74266757c23eceac5bc8f95130e54924"],["/tags/Analytical-Number-Theory/index.html","389d0e2aff61b1f2da4fd2c567e15fcd"],["/tags/Bernoulli-Numbers/index.html","705263234baac80e04972dae5e4cc36e"],["/tags/Brun-s-Sieve/index.html","50e6288dd933fbfa666f6d98ea09717d"],["/tags/Brun-s-Theorem/index.html","82ca686ba4ecc89dd3a1044c41e6da47"],["/tags/Character/index.html","0c99e1f2d67814a42fcfaa3f843f50c3"],["/tags/Chebyshev-s-Function/index.html","14d8cffce1bbcf708208eb9a0512747e"],["/tags/Chen-s-Theorem/index.html","f74d47e5b130073c1fe01cb32b1f8f4e"],["/tags/Chinese-Remainder-Theorem/index.html","3388e40c2bdd13e425877ad72aebd67c"],["/tags/Combinatorial-Sieve/index.html","dcb4b32efdf2bac7668cb6f43d753cee"],["/tags/Continued-Fractions/index.html","5d1593aaf331971a0c9da5d8cf7790e7"],["/tags/Diophantine-Approximation/index.html","561572ea2d48827e3fdc0c599d1fbdc7"],["/tags/Diophantine-Geometry/index.html","bd3c34fee47589f1ab8063510bacb90c"],["/tags/Dirichlet-Convolution/index.html","a8d8f374478d31d17238914de0448564"],["/tags/Elementary-Number-Theory/index.html","8d3352b23a450d33c1a6b37d37e3c05c"],["/tags/Estimation-Formula/index.html","589a76957c8050c1b88d8190408bc60f"],["/tags/GPY-Weight-Function/index.html","3be87217e3da48e1b7d0c3712bd74c7b"],["/tags/Gauss-Sum/index.html","1281d7e31ca746ec60822b7d84fbc39d"],["/tags/Goldbach-s-Conjecture/index.html","b35dd52d25d37fbf920eaf5d1898be29"],["/tags/Kummer-Congruence/index.html","b196b7702d173da2854edf49ce801b8c"],["/tags/Mangoldt-Function/index.html","cbd7def5b727684a0460f471e1fda3a3"],["/tags/Manin-s-Conjecture/index.html","f3befa9e977e1ae2b5cf561a2bea63cb"],["/tags/Merten-s-Theorem/index.html","a8a9539ef87a47381ab57fe6be8bd609"],["/tags/Number-Theory/index.html","2dcc91f1ded65fa3158f8d07127d956e"],["/tags/Paper-Reading/index.html","7a1de29dd888b9e406056eb9c7f36738"],["/tags/Pell-Equation/index.html","efbf86a3ad81d7180988f3c7cece1560"],["/tags/Prime-Number-Theorem/index.html","cfd10a3bf8a29f690c2d68c93d63ab82"],["/tags/Prime-Twins-Conjecture/index.html","71984e6eb6c24f5e08cc1d6952965834"],["/tags/Prime-k-Tuples-Conjecture/index.html","da7cff78a118631717c20d6c7dded4af"],["/tags/Quadratic-Forms/index.html","af0cf719803cb48e699200015ee5032a"],["/tags/Riemann-Roch-Theorem/index.html","6f4bc59a4bb4f7c56f3128be94e84434"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","be183eb7f24a71e5b76f87d57eb216f1"],["/tags/Selberg-s-Sieve/index.html","916284411428f172547336295d2c0f18"],["/tags/Sieve-Methods/index.html","81da221d881cb3dfecd4d6fbe4b8f4ee"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","0fcb4d7e41f8f4676dfde08b0fa191dd"],["/tags/Sifting-Function/index.html","7e406a4b3e7b3fc708f7a12a101aaefc"],["/tags/Vinogradov-s-Mean-Value-Theorem/index.html","b6ddb1fee2cf730083d9eac5f4e33cc1"],["/tags/Waring-s-Problem/index.html","d142b302e2367b035dfcece2127a94fb"],["/tags/index.html","4857c29b3fb3e84143bcb2400591196b"],["/tags/p-adic-Zeta-Function/index.html","a65d299e5d793bc97c9c8a59f12887a8"]];
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
