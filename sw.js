/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","481f8335007b36e3dd131547c49f5a74"],["/2024/10/25/Diophantine-2/index.html","e563c9205b8277973674dfa9fab2ee20"],["/2024/11/01/notes-about-sieve-methods-1/index.html","13900872f84ce9ecc4f61822f3a7aac3"],["/2024/11/03/notes-about-sieve-methods-2/index.html","6f47ec2a0268913ab1831a6a882ab920"],["/2024/11/06/algorithm-1/index.html","5b7eb875124689e715eb4004652fd786"],["/2024/11/07/algorithm-2/index.html","4439084f20075ab85910bd8af8937aa0"],["/2024/11/20/elementary-number-theory-1/index.html","d64d51a33446dd8e1b643e2b4980556d"],["/2024/12/02/notes-about-sieve-methods-3/index.html","481f6d0aec08c59cf60dcfb5d3efc8df"],["/2025/01/04/Riemann-Roch-theorem/index.html","e0e43e0687ed7250e656b9532b5a9f7e"],["/2025/01/08/k-th-Mangoldt-function/index.html","b237877c11339004960e7e26a0db4fa2"],["/2025/01/15/GPY-sieve-method/index.html","f98f0fe08e9efbcc2348cfe5af3223dc"],["/2025/02/07/GPY-sieve-method-2/index.html","b2d094748b86b9d1610085f8b324dbce"],["/2025/02/15/Analytical-number-theory-1/index.html","1d30b920ee3cb98a1eaeb517b53ac455"],["/2025/03/12/notes-about-sieve-methods-4/index.html","80ff6595af5a992ae2b26278615a3114"],["/2025/04/03/notes-about-sieve-methods-5/index.html","22f866b90d0baad074cfc76889da8959"],["/2025/04/14/notes-about-sieve-methods-6/index.html","f9b951541862e430dd791d489abd728e"],["/2025/04/15/Maynard-sieve-method/index.html","42c9c9d2fc797def31be7d03750e1e0e"],["/2025/08/31/note-about-Manin-Conjecture-1/index.html","7e54a90fac7aa4c049b80d6452ac6c95"],["/2025/09/25/p-valuation-of-Bernoulli-numbers/index.html","7de2f26da2d85523c8a78242a990141e"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","d338f0181b9565b96a52ec60495e87a5"],["/archives/2024/10/index.html","28e9b0d3f2ec8650fcbaebc16b3977fa"],["/archives/2024/11/index.html","7b40415b14590f760eccb197e6b81ee4"],["/archives/2024/12/index.html","58034cc61f50119a353b065826712c7d"],["/archives/2024/index.html","f75809b63138ded4b542beb80b49e37a"],["/archives/2025/01/index.html","c2cad7a02de2c48c8a3daae8caf856a3"],["/archives/2025/02/index.html","17bdae98f35a5ecf14463d06273f1d8c"],["/archives/2025/03/index.html","da497639595f92877749e4a1f580e2dd"],["/archives/2025/04/index.html","b1649ca03ce7f0ec5826b688c3618759"],["/archives/2025/08/index.html","39211d55657d4a06e018d3c284046eed"],["/archives/2025/09/index.html","e205cbb964f035ee93779911677c3298"],["/archives/2025/index.html","a18fce8569489f8fcfbf0c57876804d4"],["/archives/2025/page/2/index.html","3bac84c3211bd3d4896d44e2f14effff"],["/archives/index.html","136569efe095fffc097d02e7b13cdf14"],["/archives/page/2/index.html","9689e351732899cdb00f323f06408e28"],["/categories/index.html","eccf1d16d80e51ec27f45a3aaba38066"],["/categories/丢番图几何/index.html","abb8276246dda8cd9b2a3b9efc70dbef"],["/categories/丢番图逼近/index.html","94072091287dff5a5ddcb661ad6a9ddb"],["/categories/代数几何/index.html","7fc9b659b141c5250fac62f8ad7ccb83"],["/categories/初等数论/index.html","beb4de7094cbf59e0a99076c380e185e"],["/categories/有趣应用/index.html","f43cbe257a2fe070cce7bb0f7f5d2244"],["/categories/筛法/index.html","fb3ce8a3258c5f4ed78a16f16c717254"],["/categories/解析数论/index.html","bf981dd195105a8259adc4ab4515926b"],["/categories/论文阅读/index.html","5ece7e80426b2a5b3cb07ae2de7010ec"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","bf9b41fbd5156f5760b303e4405636b4"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/Maynard-sieve-method/T1.jpg","0a5fbc517ceccb0fb04218dc010e844b"],["/image/Maynard-sieve-method/T2.jpg","c59c64377f9caf8ff9d8de62f2fc9bde"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","25387cd2c600163ab34b078845d480e7"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/14.jpg","fc5302a2eb13cb58cabd7d07cc11902f"],["/image/card/15.jpg","44ede84ef193ae38869c5cedfd0a0680"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/17.jpg","ee784f66311b1bca715c0f0642633fcb"],["/image/card/18.jpg","fc40991c3e6cbeb89f9fc29ac5bbfa44"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/20.jpg","b44513ad2e6c46d314ab82b6f609d091"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/25.jpg","786e4181af61caf7600ad5920478ae9c"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/30.jpg","6a1b65a76c47c35f3eb13b4fa26c47ed"],["/image/card/31.jpg","05930d5c7d05155aef4f84d0e57608f7"],["/image/card/32.jpg","f633908f3ef3b679374cabe887883f5d"],["/image/card/33.jpg","f2c867ded10d4407cbcf35990e19343f"],["/image/card/34.jpg","0089bcd6891ccd35252a505bfa9cbce7"],["/image/card/35.jpg","5790afc2f1bdf518374f1ada8b84f585"],["/image/card/36.jpg","2bd98f61641782a52e73d0736d1d76a1"],["/image/card/37.jpg","1f4a1b71d788bf44f7e45638dec9fbbc"],["/image/card/38.jpg","0ab04ed44f179fdf470ea1726d300af8"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/40.jpg","0f989cefeb47a5093a6777659d7442c6"],["/image/card/41.jpg","5d7fe80de9f1132a223b25b589b7eebd"],["/image/card/42.jpg","a5baf74b0f319cb3591e68e239e44fdc"],["/image/card/43.jpg","550a77fbbd6c08dec6f739498abb9092"],["/image/card/44.jpg","a073d7f44e22bdab239bedcafb9801e8"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/47.jpg","6d63f8592af2a2ae9cf5b651227d3927"],["/image/card/48.jpg","7590d9ae3d76871dfe66d8e50cb94e9f"],["/image/card/49.jpg","9dca71d2729e5d0216975d9b8413ef97"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","f2b7852938ddb414c7264afb089a2b0e"],["/image/card/53.jpg","8a117401eea01f88d806991a307454dc"],["/image/card/54.jpg","36051951bc6914d4765386f89072c447"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/57.jpg","ed96a196431668a8540305254c9cee56"],["/image/card/58.jpg","dbaa09da9eb68ff474dd4074203d49bb"],["/image/card/59.jpg","18240f0cd7c883e020f0f23bc73e111c"],["/image/card/6.jpg","d656f164a5b0fe7045c876dba6da6c17"],["/image/card/60.jpg","077bd38a2f68e913777764edd4c8b860"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/62.jpg","a0de67fb46b75b88bc864a8a692a9a3d"],["/image/card/63.jpg","e64d5fd7da9d8ff3a9cdb8ec3db95533"],["/image/card/64.jpg","123d3f240234304177593dbe6e1d7212"],["/image/card/65.jpg","bef7c29c9e8491a16f3a71e909356a42"],["/image/card/66.jpg","b90b5228fc4030c0f251e7a5bc590135"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/68.jpg","d57794d7daa07ed9e3a45bcd2f6e1df3"],["/image/card/69.jpg","07d8cc5b2f4bff40a2df324cb864a5ca"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","516051423ee816d09482a56b3ba78d02"],["/image/card/71.jpg","26c053cd3914f3065a5ade2372160713"],["/image/card/72.jpg","7ccd418269df5c8b902278986868f9e7"],["/image/card/73.jpg","cd98e4843a2b99dc0374d453543280e5"],["/image/card/74.jpg","4535a95eef2482bd07ed04f944c79074"],["/image/card/75.jpg","a77592939da8abbeb84ed21e2f72559a"],["/image/card/76.jpg","d8b5588da580dbdb3b09f307a80c1519"],["/image/card/77.jpg","77c38218f7544863c4857c0916903bce"],["/image/card/78.jpg","a4d6e16b7057605eb2da1650c8e113b6"],["/image/card/79.jpg","a622eb15a7cbfe1bf6ad16f178d24a38"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/80.jpg","44f261e750e3d6d455775cd1127ee3be"],["/image/card/81.jpg","d05501a5468ddfc74b61c4a559963da3"],["/image/card/82.jpg","08f93cba39e122894acb50df9cd659af"],["/image/card/83.jpg","e05077d87b66ce9a4a624e2bda6a9080"],["/image/card/85.jpg","4332a07a6f1b57bc4742605899b434a2"],["/image/card/86.jpg","ebdf1648765c2df96404f7ff47caeaf7"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/card/92.jpg","ee2028dfdaec004926628226af6c6b2d"],["/image/card/93.jpg","d1d85741199b10e1978f1241be920c2f"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/notes-about-sieve-methods-4/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/notes-about-sieve-methods-5/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/image/notes-about-sieve-methods-5/T2.jpg","e0715cd6f1ea967db1d1a71804bae590"],["/image/p-valuation-of-Bernoulli-numbers/T1.jpg","6468d48b8a98658a5d2900250968b460"],["/image/p-valuation-of-Bernoulli-numbers/T2.jpg","5702f763d2c7edd727b10eaa73658c87"],["/image/p-valuation-of-Bernoulli-numbers/T3.jpg","85c4435c73a28fc1089f26d9778bb8c5"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk11.jpg","d1d85741199b10e1978f1241be920c2f"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","b6d540c937b7dcc16b551e3b517bcb55"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","fc35aa06df591c62c99c07645294cf66"],["/seminars/index.html","56e61192c40f3cded85fce15d9bc2bc8"],["/sw-register.js","ae6ce978ffb59c378d917afaaac50a68"],["/tags/Algebra/index.html","c40a1b4df59cbb482af93f8cde4f3f9f"],["/tags/Algebraic-Geometry/index.html","ab7135dc336adf071ad45aaac15a3797"],["/tags/Algebraic-Number-Theory/index.html","0ec9f01f8fcc6a731c2d94cec23faaad"],["/tags/Algorithm/index.html","e2f044f12c45e4c19e55df9a84ebdf82"],["/tags/Analytical-Number-Theory/index.html","5e4e70fca8add17ecf751d3fdd4faddc"],["/tags/Bernoulli-Numbers/index.html","91aab89900d7efd3399ed5d3dc313352"],["/tags/Brun-s-Sieve/index.html","ed76b0424369e0ec67013cb03961e249"],["/tags/Brun-s-Theorem/index.html","72264bf5e1d5f93aa1a3a666dfd056bc"],["/tags/Character/index.html","ac21ee87a1ea9f798ea1ce919adaf29d"],["/tags/Chebyshev-s-Function/index.html","d79ca1a30f19e84884008a474416371e"],["/tags/Chen-s-Theorem/index.html","c75a60e1abdeafbab6769136ba5b0a53"],["/tags/Chinese-Remainder-Theorem/index.html","dc08a4cc88bdd949f6f0765f96e0ae36"],["/tags/Combinatorial-Sieve/index.html","d933866cf9a2f439595942fa007ec3e1"],["/tags/Continued-Fractions/index.html","ada27991c92263d15bf78dab5bb245b0"],["/tags/Diophantine-Approximation/index.html","d3493f60bff824d54e30c50b402b1e8e"],["/tags/Diophantine-Geometry/index.html","1ca03709f68f13ba0c4f45a7037acd31"],["/tags/Dirichlet-Convolution/index.html","3c702a86701ed5530eba956d8edb9909"],["/tags/Elementary-Number-Theory/index.html","4885809854989ef5968b169b3b1ccb30"],["/tags/Estimation-Formula/index.html","e553d557cbb9bb9aa9b59cb905a6e24b"],["/tags/GPY-Weight-Function/index.html","c28e33c9d979496afc10454817500986"],["/tags/Gauss-Sum/index.html","76c2e3777629dc589f465099dab78ad2"],["/tags/Goldbach-s-Conjecture/index.html","01ff207377bb68a9b1e13c8eb8b62c6c"],["/tags/Kummer-Congruence/index.html","139dd2995799ccf915159204bf56d80a"],["/tags/Mangoldt-Function/index.html","c00b19b53ca88ec80833162af875a55d"],["/tags/Manin-s-Conjecture/index.html","64008c6b09af0c36dccf64de8f0a3578"],["/tags/Merten-s-Theorem/index.html","2f88fac76f0bb92d49f220376766f715"],["/tags/Number-Theory/index.html","bb186f0b3ad676508673c75df108d2a3"],["/tags/Paper-Reading/index.html","e6efa5f93b3072321d955a41dffb7ffa"],["/tags/Pell-Equation/index.html","7afc1970e1532387669f15c0a5c26265"],["/tags/Prime-Number-Theorem/index.html","a77b88d2425d2ca9704253c049a4a609"],["/tags/Prime-Twins-Conjecture/index.html","6ea354289f1faaf75c3c23c807e8332f"],["/tags/Prime-k-Tuples-Conjecture/index.html","e4ae1256bf7faf1e9215c2034eccae1f"],["/tags/Quadratic-Forms/index.html","1865bd1d346bcf60c408df381eb8dedf"],["/tags/Riemann-Roch-Theorem/index.html","9ffa4f42fa3fedd42b158fcdcbf0edd4"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","b99c135280633e7e38392abdd59ef859"],["/tags/Selberg-s-Sieve/index.html","7a8485a4051d9e81dd4a1c19115fa192"],["/tags/Sieve-Methods/index.html","4ca1f8594d875e7c5b43f8d6107c970f"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","8363c73a573fd6fe8e46dc83d877eadf"],["/tags/Sifting-Function/index.html","57c95663d9df9dba4e497070ab4b8ea9"],["/tags/Vinogradov-s-Mean-Value-Theorem/index.html","b12b56b1eb1985b8c21b0b8c81e21c92"],["/tags/Waring-s-Problem/index.html","752f6da4f60235703082cf942f30cd0c"],["/tags/index.html","720dbc9e22e86f9c9e54c80b1d589b15"],["/tags/p-adic-Zeta-Function/index.html","b98db8ab9f7966b04df8832055094733"]];
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
