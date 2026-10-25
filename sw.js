/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","140b7d313b3363d43820b9c11b1e6d3b"],["/2024/10/25/Diophantine-2/index.html","b92689e8ed637543fd99686a1dfb0692"],["/2024/11/01/notes-about-sieve-methods-1/index.html","64fcdca01a7423ffbf9d31bdc95656ad"],["/2024/11/03/notes-about-sieve-methods-2/index.html","b3f37c58b11186256fedc6bba1cf7f46"],["/2024/11/06/algorithm-1/index.html","17cde0f840b0301798bde7b1119682fe"],["/2024/11/07/algorithm-2/index.html","9a3e6e39a134d118ed118d69ba54f400"],["/2024/11/20/elementary-number-theory-1/index.html","e7833add27475794e85248bd0b613578"],["/2024/12/02/notes-about-sieve-methods-3/index.html","c6e0ca3defa9cf8436afa9eec2996925"],["/2025/01/04/Riemann-Roch-theorem/index.html","59a8a5c7b5118efaeb9127c6950475f1"],["/2025/01/08/k-th-Mangoldt-function/index.html","efc2263c74cc864f597f73c6fea70ad9"],["/2025/01/15/GPY-sieve-method/index.html","f03e20e0464d75678951e1b7415d961e"],["/2025/02/07/GPY-sieve-method-2/index.html","a620cc45f8c1d8bf6d06f399fde493ae"],["/2025/02/15/Analytical-number-theory-1/index.html","19bff36f4e02e276798187c121024829"],["/2025/03/12/notes-about-sieve-methods-4/index.html","8ebed878649843c72425db1cc2d705b4"],["/2025/04/03/notes-about-sieve-methods-5/index.html","5183e51a83064a689f98e6ab12ae5536"],["/2025/04/14/notes-about-sieve-methods-6/index.html","5fbfc71ed057891053ad2784f3567bdf"],["/2025/04/15/Maynard-sieve-method/index.html","26c5225ff11040de2e9daf2fa4e7eacb"],["/2025/08/31/note-about-Manin-Conjecture-1/index.html","56830236de56a9c88295b06dd6b5e7ec"],["/2025/09/25/p-valuation-of-Bernoulli-numbers/index.html","77948cb043476b829b9a7295b637e0e6"],["/2026/10/19/exercises-in-AG-1/index.html","0263ad18978cdc7f6d6c7e3d43160a8f"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","a1cdd3ec8cb2ed6e5a8534663a70f55e"],["/archives/2024/10/index.html","0a55e5123b513e001af66dcb9a03797b"],["/archives/2024/11/index.html","7e90c726056cc792b880572173df258f"],["/archives/2024/12/index.html","2651f8e94b63448783c5fd0ff5c15366"],["/archives/2024/index.html","5f53b0f0af555fb755d10a17fd508bb9"],["/archives/2025/01/index.html","54b3f9aa5b81a7446d2571577f984199"],["/archives/2025/02/index.html","37ddf3cfc0991004b3800abb8e5edddb"],["/archives/2025/03/index.html","f18c6971793b14b061864b7696cda3db"],["/archives/2025/04/index.html","f497402d3c1b30168362264859992d39"],["/archives/2025/08/index.html","8a438c5416106c2e46b85031e0d5646a"],["/archives/2025/09/index.html","ba1b9b7c312a783d0858bfd92b46d554"],["/archives/2025/index.html","d2eeb27b03c9872a493bcb2cdeb6481e"],["/archives/2025/page/2/index.html","7dac76c6d35d843b0d7bb3a40b4ba024"],["/archives/2026/10/index.html","17c8c662673ca96bd607162dbcfc538f"],["/archives/2026/index.html","26aa220e79dd4b5b9c6cde46ab305aa7"],["/archives/index.html","ed5f3b41023efe0a96f355da3d8d4ead"],["/archives/page/2/index.html","1901d49ef87509a6a14da3fa795b9ad7"],["/categories/index.html","3541f7309966d9a6127ad5d3f25566c9"],["/categories/丢番图几何/index.html","5a06de612e19a5a438a46b9a2387e240"],["/categories/丢番图逼近/index.html","828bc8638656d18f61cde44b7ee88b3c"],["/categories/代数几何/index.html","c6e070f7cf0f2e1d1db993e2afa88b4d"],["/categories/初等数论/index.html","3c98a3383786c3274ca3a077e7998f26"],["/categories/有趣应用/index.html","503cdae4b87e8482e4772451f320c700"],["/categories/筛法/index.html","006cf2fd287af5126d65a2224df2b21a"],["/categories/解析数论/index.html","263825e7f5d6d56a5d7dc3e3bb1cbc2f"],["/categories/论文阅读/index.html","14838edd41d024cc15beddbbc71cc7e9"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","311fd7e4e2dacfb484dd99ab70ae348d"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/Maynard-sieve-method/T1.jpg","0a5fbc517ceccb0fb04218dc010e844b"],["/image/Maynard-sieve-method/T2.jpg","c59c64377f9caf8ff9d8de62f2fc9bde"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","25387cd2c600163ab34b078845d480e7"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/14.jpg","2b9d5ef259eec1ed80a9cfedffa2f6a9"],["/image/card/15.jpg","44ede84ef193ae38869c5cedfd0a0680"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/17.jpg","873bbca7435fd89307ad780aaec3f894"],["/image/card/18.jpg","fc40991c3e6cbeb89f9fc29ac5bbfa44"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/20.jpg","1f8bb7b09f2ca6b1247af8da9b003ed2"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/25.jpg","786e4181af61caf7600ad5920478ae9c"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/31.jpg","05930d5c7d05155aef4f84d0e57608f7"],["/image/card/32.jpg","f633908f3ef3b679374cabe887883f5d"],["/image/card/33.jpg","f2c867ded10d4407cbcf35990e19343f"],["/image/card/34.jpg","0089bcd6891ccd35252a505bfa9cbce7"],["/image/card/35.jpg","5790afc2f1bdf518374f1ada8b84f585"],["/image/card/36.jpg","8d36f8bf6dd5cdcade054cff89e57c6e"],["/image/card/37.jpg","1f4a1b71d788bf44f7e45638dec9fbbc"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/40.jpg","0f989cefeb47a5093a6777659d7442c6"],["/image/card/41.jpg","5d7fe80de9f1132a223b25b589b7eebd"],["/image/card/42.jpg","d6aa70d6c67ed9b7f07c972fe871d5f9"],["/image/card/43.jpg","550a77fbbd6c08dec6f739498abb9092"],["/image/card/44.jpg","a073d7f44e22bdab239bedcafb9801e8"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/47.jpg","6d63f8592af2a2ae9cf5b651227d3927"],["/image/card/48.jpg","7590d9ae3d76871dfe66d8e50cb94e9f"],["/image/card/49.jpg","9dca71d2729e5d0216975d9b8413ef97"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","f2b7852938ddb414c7264afb089a2b0e"],["/image/card/53.jpg","8a117401eea01f88d806991a307454dc"],["/image/card/54.jpg","36051951bc6914d4765386f89072c447"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/58.jpg","dbaa09da9eb68ff474dd4074203d49bb"],["/image/card/59.jpg","18240f0cd7c883e020f0f23bc73e111c"],["/image/card/6.jpg","d656f164a5b0fe7045c876dba6da6c17"],["/image/card/60.jpg","077bd38a2f68e913777764edd4c8b860"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/62.jpg","a0de67fb46b75b88bc864a8a692a9a3d"],["/image/card/63.jpg","e64d5fd7da9d8ff3a9cdb8ec3db95533"],["/image/card/64.jpg","123d3f240234304177593dbe6e1d7212"],["/image/card/65.jpg","bef7c29c9e8491a16f3a71e909356a42"],["/image/card/66.jpg","b90b5228fc4030c0f251e7a5bc590135"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/68.jpg","d57794d7daa07ed9e3a45bcd2f6e1df3"],["/image/card/69.jpg","07d8cc5b2f4bff40a2df324cb864a5ca"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","516051423ee816d09482a56b3ba78d02"],["/image/card/71.jpg","26c053cd3914f3065a5ade2372160713"],["/image/card/72.jpg","7ccd418269df5c8b902278986868f9e7"],["/image/card/73.jpg","cd98e4843a2b99dc0374d453543280e5"],["/image/card/74.jpg","4535a95eef2482bd07ed04f944c79074"],["/image/card/75.jpg","a77592939da8abbeb84ed21e2f72559a"],["/image/card/76.jpg","d8b5588da580dbdb3b09f307a80c1519"],["/image/card/77.jpg","77c38218f7544863c4857c0916903bce"],["/image/card/78.jpg","a4d6e16b7057605eb2da1650c8e113b6"],["/image/card/79.jpg","a622eb15a7cbfe1bf6ad16f178d24a38"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/80.jpg","44f261e750e3d6d455775cd1127ee3be"],["/image/card/81.jpg","d05501a5468ddfc74b61c4a559963da3"],["/image/card/82.jpg","08f93cba39e122894acb50df9cd659af"],["/image/card/83.jpg","e05077d87b66ce9a4a624e2bda6a9080"],["/image/card/85.jpg","4332a07a6f1b57bc4742605899b434a2"],["/image/card/86.jpg","ebdf1648765c2df96404f7ff47caeaf7"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/card/92.jpg","ee2028dfdaec004926628226af6c6b2d"],["/image/card/93.jpg","d1d85741199b10e1978f1241be920c2f"],["/image/card/95.jpg","418916306e07ab58682e11625dfdb23c"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/exercises-in-AG-1/T1.png","7d93d0fb2f659249dd8b66a6edbc7112"],["/image/exercises-in-AG-1/T2.jpg","84e53fcb9611a703413e5ad1b2d4c187"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/notes-about-sieve-methods-4/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/notes-about-sieve-methods-5/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/image/notes-about-sieve-methods-5/T2.jpg","e0715cd6f1ea967db1d1a71804bae590"],["/image/p-valuation-of-Bernoulli-numbers/T1.jpg","6468d48b8a98658a5d2900250968b460"],["/image/p-valuation-of-Bernoulli-numbers/T2.jpg","5702f763d2c7edd727b10eaa73658c87"],["/image/p-valuation-of-Bernoulli-numbers/T3.jpg","85c4435c73a28fc1089f26d9778bb8c5"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk11.jpg","d1d85741199b10e1978f1241be920c2f"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","c95719df658024e008f4486fe6d5536c"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","07d11b98507909a90ba3db4f41324399"],["/seminars/index.html","75716a625656b7a89cd8963dc744ea39"],["/sw-register.js","ceac818fa99820ec64282b8f5dbf55fe"],["/tags/Algebra/index.html","03b9834c1c5ab06ae4ea53390257589c"],["/tags/Algebraic-Geometry/index.html","00860e6be36ed5b64e669dbb2a316ae4"],["/tags/Algebraic-Number-Theory/index.html","ba7801e3fa802c3fe7c10922e748d4ac"],["/tags/Algorithm/index.html","937c65a8a6f3eb4bfd9bb64e937b70c0"],["/tags/Analytical-Number-Theory/index.html","d2fe1ccf87a693f59b17b6f06503e783"],["/tags/Bernoulli-Numbers/index.html","a1148488af1ed13b0042a190985d020a"],["/tags/Brun-s-Sieve/index.html","f129b205301eaba00a7b84ab18409ae6"],["/tags/Brun-s-Theorem/index.html","5fa24e09efc61ad21ba746e97c4a44da"],["/tags/Character/index.html","c2bb1f410d73046803c0361feeab07a0"],["/tags/Chebyshev-s-Function/index.html","c96d8062b98f4c2d5e22d286ec0edaeb"],["/tags/Chen-s-Theorem/index.html","48a25f5ab28259ab959188b429fc13dc"],["/tags/Chinese-Remainder-Theorem/index.html","96015d5d147144a530c5fda494efae64"],["/tags/Combinatorial-Sieve/index.html","e7bd101f75ac2e6bb31c9d71e7f01ea2"],["/tags/Continued-Fractions/index.html","4badb614820b54feb91c59efd6341b4e"],["/tags/Diophantine-Approximation/index.html","dc1d4aa6116bb03ed8a5792114fd3ead"],["/tags/Diophantine-Geometry/index.html","eaacb3608db9a6d8931bdad9f3931e0e"],["/tags/Dirichlet-Convolution/index.html","94f109d28bd3197f52afdb1b5a895a4c"],["/tags/Elementary-Number-Theory/index.html","88d29285188e5da85bb38e7930c34fed"],["/tags/Estimation-Formula/index.html","49cf4ce5e3616e496d7657e76934f3c9"],["/tags/Exercise/index.html","08fad06eef2a0f58ee9cbb9df5bb9d9e"],["/tags/GPY-Weight-Function/index.html","43708e3721cd91d964eb1df094da13ff"],["/tags/Gauss-Sum/index.html","13a9485de34d7577e90422c744dc1059"],["/tags/Goldbach-s-Conjecture/index.html","ca5aef5504016beeac57fa36b23776c6"],["/tags/Gortz-Wedborn/index.html","c19224579363a6627c32a667fc761603"],["/tags/Kummer-Congruence/index.html","c009bc94ee291a2793403452573b9c90"],["/tags/Mangoldt-Function/index.html","8eb0ad235ef2a7396393dd3ca06ca0d4"],["/tags/Manin-s-Conjecture/index.html","2d9f11c0d933d7bddd052d82b0298436"],["/tags/Merten-s-Theorem/index.html","88f8df1d50636d5057dac5d4b006f9aa"],["/tags/Number-Theory/index.html","e6d65f3e2f1829119d1ab708c9583aa8"],["/tags/Paper-Reading/index.html","073a8c572dd2ac8987a7e70d665e3e22"],["/tags/Pell-Equation/index.html","781ea2463cd2ade1a40759cd0a24baee"],["/tags/Prime-Number-Theorem/index.html","06aa21f7970b3f91b5f773190f33741e"],["/tags/Prime-Twins-Conjecture/index.html","4c8e038c07d3379cc4c310be582f25b9"],["/tags/Prime-k-Tuples-Conjecture/index.html","54b04930631e6123b0edecf0a0055148"],["/tags/Quadratic-Forms/index.html","19cbe1078be8d3ad04e466849f5bccc3"],["/tags/Riemann-Roch-Theorem/index.html","6b1a886d236bc51389849f0d826079c2"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","d2ca6ff1b8f3ad03e992797d7a70fd3d"],["/tags/Selberg-s-Sieve/index.html","44d490b7c1bb3d24fbda3673d4d8d6e7"],["/tags/Sieve-Methods/index.html","6a79ce0ef91b6fe4470859aa682b1e0a"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","ff375f20ee8d73a0a506c50d49f11120"],["/tags/Sifting-Function/index.html","3a5dab5e3333e418b87d1cabc7987036"],["/tags/Vinogradov-s-Mean-Value-Theorem/index.html","f2f7a7f36f84f642365ca917c64d9a8d"],["/tags/Waring-s-Problem/index.html","590c1044530b90bb276c4be39a27fa77"],["/tags/index.html","317ace773b400c6123b14fe66861fe9e"],["/tags/p-adic-Zeta-Function/index.html","e77d1563cb88a990d86623c006fa17cb"]];
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
