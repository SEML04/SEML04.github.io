/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/10/22/Diophantine-1/index.html","5c63800a7bcdac60b9596a345bad8600"],["/2024/10/25/Diophantine-2/index.html","18a7cce2a0bd2899b67b332e2f722aa7"],["/2024/11/01/notes-about-sieve-methods-1/index.html","86593372b4d55e5d82d870cade831b03"],["/2024/11/03/notes-about-sieve-methods-2/index.html","e5a866854adeee1a877c4d17984d43da"],["/2024/11/06/algorithm-1/index.html","5fdc3281146aec40d2dfdc33b3f45a61"],["/2024/11/07/algorithm-2/index.html","2cf343d7f806dbbb086d108409899396"],["/2024/11/20/elementary-number-theory-1/index.html","dba2ea145c5b499baff0439087b2ade9"],["/2024/12/02/notes-about-sieve-methods-3/index.html","48762a4d75ece5613d146613f87b8f68"],["/2025/01/04/Riemann-Roch-theorem/index.html","3880eeb8d3f3a4bc654405dc2fc2d525"],["/2025/01/08/k-th-Mangoldt-function/index.html","7ebe8d3325f5d29c9442c7b887246934"],["/2025/01/15/GPY-sieve-method/index.html","33f0311920db71254ebd8529f24813f5"],["/2025/02/07/GPY-sieve-method-2/index.html","28ef6f7c07f758fceb7881df9ce5c24f"],["/2025/02/15/Analytical-number-theory-1/index.html","ab85f19ea57879de8eb4d603aa919f96"],["/2025/03/12/notes-about-sieve-methods-4/index.html","defa06dd70d19cca8aa59fc5d528dc5d"],["/2025/04/03/notes-about-sieve-methods-5/index.html","06ec19c52fbd9d32e21b023ca620569f"],["/2025/04/14/notes-about-sieve-methods-6/index.html","1d30954bc8155cff321298062d55b923"],["/2025/04/15/Maynard-sieve-method/index.html","456ed22a0f05ee7d5fae098eca70d6f5"],["/2025/08/31/note-about-Manin-Conjecture-1/index.html","1e14f6eda43740e3ec0ac0e205c2908b"],["/2025/09/25/p-valuation-of-Bernoulli-numbers/index.html","3df7e4a9a44121e13faec0eda96da414"],["/2026/10/19/exercises-in-AG-1/index.html","1cfe8d61c782abf99ec61758e6f8b9a8"],["/about/486.jpg","b46ee0133c49fcb992d99b4d4e9c3bf3"],["/about/972.jpg","718184e7ef9a9a8a56dcba39f7125f7d"],["/about/anon-teacher.jpg","b8153cba03056449d25c99a611df7303"],["/about/index.html","604e866f919f035a31c484a9be870ce7"],["/archives/2024/10/index.html","0cb184e9d5327436499df3015f0673f9"],["/archives/2024/11/index.html","94ef501dd99f5a2900832192dbe6830f"],["/archives/2024/12/index.html","b5f50481b5fd212a1f11dc216dc19e7b"],["/archives/2024/index.html","9266d588bc65c3ec32a65da362d9d63f"],["/archives/2025/01/index.html","db23f013a6dc67773db411d480ffeba6"],["/archives/2025/02/index.html","7b9e6fe4ecf83dafc174d2a36c3bc784"],["/archives/2025/03/index.html","a6b8f7c449635b8ad01e62436563ff6c"],["/archives/2025/04/index.html","5a0b1c208565ebb62a396ffa9f2a3bb3"],["/archives/2025/08/index.html","63902433551790ce866b94b9eda9cd60"],["/archives/2025/09/index.html","29876bf7e540d253195a18460a0bf7ac"],["/archives/2025/index.html","97f845c57b5e6f330bbdc0a715a696eb"],["/archives/2025/page/2/index.html","b5bf377a91302d8154444c9cc83dc815"],["/archives/2026/10/index.html","4c351ed54223e50636b6f494feda1590"],["/archives/2026/index.html","2108f34d92f86df4543a862ab2a8c5cc"],["/archives/index.html","53ad3a5e923f9b1670d54a616f571b5f"],["/archives/page/2/index.html","9496d05b0dd4485b18c5e911323c1aa7"],["/categories/index.html","e8b60ecd8986cdece402439dfabb3111"],["/categories/丢番图几何/index.html","6d34f40f6857512f66480e1a0c788465"],["/categories/丢番图逼近/index.html","3565104c6efae1d8971c2d50c49ed9d6"],["/categories/代数几何/index.html","0bc7c41706bbbb4cd7f5c2e5136de5ea"],["/categories/初等数论/index.html","c452e97b6eddfc8f10457e5aeaf3249f"],["/categories/有趣应用/index.html","30ba7f89eccc562dd167a2b03b1717af"],["/categories/筛法/index.html","af3a5aaeea5e47d3c5ac028671381aff"],["/categories/解析数论/index.html","e66504ee6fe64d39eab8faa0896537cf"],["/categories/论文阅读/index.html","03907a74e92edcac1b25a7046da1ff8c"],["/css/font.css","8d816913661f1dd1dfad49413183c1e8"],["/css/index.css","311fd7e4e2dacfb484dd99ab70ae348d"],["/css/universe.css","64d924471ddf19905ea30ae8cbd664ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/Analytical-number-theory-1/T1.gif","02f6b49e6e2b74172139e8604ef540ac"],["/image/GPY-sieve-method-2/T1.gif","20dafbcad7533705225cd350e70fce76"],["/image/Maynard-sieve-method/T1.jpg","0a5fbc517ceccb0fb04218dc010e844b"],["/image/Maynard-sieve-method/T2.jpg","c59c64377f9caf8ff9d8de62f2fc9bde"],["/image/algorithm1/Q1.png","5fff856f048eb0aeeb28ace5d7a39da1"],["/image/algorithm1/T1.jpg","c043bb0fdb66fca272704b03daf73454"],["/image/algorithm2/Q1.png","0b8086bb3813a7bb53cbcd4a57beedcd"],["/image/algorithm2/T1.jpg","537f62f670371d7bd234ff4249b5c137"],["/image/card/1.jpg","e31c95b40a350677d94063123e132cbb"],["/image/card/10.jpg","0b58a5e724d38a535b989d4ece5045ef"],["/image/card/11.jpg","31bc0e3f4cddb486e381fffece59798a"],["/image/card/12.jpg","25387cd2c600163ab34b078845d480e7"],["/image/card/13.jpg","f19e44ddcdd6bc0d98bc1d7cc0af9781"],["/image/card/14.jpg","2b9d5ef259eec1ed80a9cfedffa2f6a9"],["/image/card/15.jpg","44ede84ef193ae38869c5cedfd0a0680"],["/image/card/16.jpg","bfe3b04cabd92ee68a155a0409d1cf08"],["/image/card/17.jpg","873bbca7435fd89307ad780aaec3f894"],["/image/card/18.jpg","fc40991c3e6cbeb89f9fc29ac5bbfa44"],["/image/card/19.jpg","02f1f24b79f47de035b92896a12da3a2"],["/image/card/2.jpg","e2d8cbba553742146d2aba033d59a8ac"],["/image/card/20.jpg","1f8bb7b09f2ca6b1247af8da9b003ed2"],["/image/card/21.jpg","b2c47f9d72fefa9b8897f7e9eb9c7af5"],["/image/card/22.jpg","818ebadbafbf8d55c804dd7d5e6fa7dc"],["/image/card/23.jpg","efdf8f0dbd99d9e3a73e9625378c12a5"],["/image/card/24.jpg","eb780e762d85dc07bd4f15bf5104d17e"],["/image/card/25.jpg","786e4181af61caf7600ad5920478ae9c"],["/image/card/26.jpg","66ec4d40c1d8527e7cfa310c0436af40"],["/image/card/27.jpg","edb212d36c9004c4e9239ba549a56496"],["/image/card/28.jpg","89563797b780ca8c9710287e497db65e"],["/image/card/29.jpg","e70d557d8963f4993b9d47b048ebcddc"],["/image/card/3.jpg","f16289366b725b04830e49222e5d6f3b"],["/image/card/31.jpg","05930d5c7d05155aef4f84d0e57608f7"],["/image/card/32.jpg","f633908f3ef3b679374cabe887883f5d"],["/image/card/33.jpg","f2c867ded10d4407cbcf35990e19343f"],["/image/card/34.jpg","0089bcd6891ccd35252a505bfa9cbce7"],["/image/card/35.jpg","5790afc2f1bdf518374f1ada8b84f585"],["/image/card/36.jpg","8d36f8bf6dd5cdcade054cff89e57c6e"],["/image/card/37.jpg","1f4a1b71d788bf44f7e45638dec9fbbc"],["/image/card/39.jpg","ebfbf0188dd8931f01378baf783531fe"],["/image/card/4.jpg","cbaef04697944cc78ff65844c28fe9a8"],["/image/card/40.jpg","0f989cefeb47a5093a6777659d7442c6"],["/image/card/41.jpg","5d7fe80de9f1132a223b25b589b7eebd"],["/image/card/42.jpg","d6aa70d6c67ed9b7f07c972fe871d5f9"],["/image/card/43.jpg","550a77fbbd6c08dec6f739498abb9092"],["/image/card/44.jpg","a073d7f44e22bdab239bedcafb9801e8"],["/image/card/45.jpg","28efe662876f5706ac0bfda552600832"],["/image/card/46.jpg","f99789a78cb1b7b9d626a3408b12e797"],["/image/card/47.jpg","6d63f8592af2a2ae9cf5b651227d3927"],["/image/card/48.jpg","7590d9ae3d76871dfe66d8e50cb94e9f"],["/image/card/49.jpg","9dca71d2729e5d0216975d9b8413ef97"],["/image/card/5.jpg","ded956e2ec2d414bcebba98d398b7625"],["/image/card/50.jpg","3b9fb721a192025c55dd4852457d9672"],["/image/card/51.jpg","33353bef574848e04c9507885390cb73"],["/image/card/52.jpg","f2b7852938ddb414c7264afb089a2b0e"],["/image/card/53.jpg","8a117401eea01f88d806991a307454dc"],["/image/card/54.jpg","36051951bc6914d4765386f89072c447"],["/image/card/55.jpg","12202297db6607b9a9cb1fe0bbbfa3ac"],["/image/card/56.jpg","4e1b29936b66cba0143b8ff4fe719538"],["/image/card/58.jpg","dbaa09da9eb68ff474dd4074203d49bb"],["/image/card/59.jpg","18240f0cd7c883e020f0f23bc73e111c"],["/image/card/6.jpg","d656f164a5b0fe7045c876dba6da6c17"],["/image/card/60.jpg","077bd38a2f68e913777764edd4c8b860"],["/image/card/61.jpg","31e5f6b03f6a9f150954c6c1ea99f761"],["/image/card/62.jpg","a0de67fb46b75b88bc864a8a692a9a3d"],["/image/card/63.jpg","e64d5fd7da9d8ff3a9cdb8ec3db95533"],["/image/card/64.jpg","123d3f240234304177593dbe6e1d7212"],["/image/card/65.jpg","bef7c29c9e8491a16f3a71e909356a42"],["/image/card/66.jpg","b90b5228fc4030c0f251e7a5bc590135"],["/image/card/67.jpg","2f2490ee9a98a1dd08dc1ea80e53f99b"],["/image/card/68.jpg","d57794d7daa07ed9e3a45bcd2f6e1df3"],["/image/card/69.jpg","07d8cc5b2f4bff40a2df324cb864a5ca"],["/image/card/7.jpg","b5ea40956f974ef5c8c260c2a62ca7b8"],["/image/card/70.jpg","516051423ee816d09482a56b3ba78d02"],["/image/card/71.jpg","26c053cd3914f3065a5ade2372160713"],["/image/card/72.jpg","7ccd418269df5c8b902278986868f9e7"],["/image/card/73.jpg","cd98e4843a2b99dc0374d453543280e5"],["/image/card/74.jpg","4535a95eef2482bd07ed04f944c79074"],["/image/card/75.jpg","a77592939da8abbeb84ed21e2f72559a"],["/image/card/76.jpg","d8b5588da580dbdb3b09f307a80c1519"],["/image/card/77.jpg","77c38218f7544863c4857c0916903bce"],["/image/card/78.jpg","a4d6e16b7057605eb2da1650c8e113b6"],["/image/card/79.jpg","a622eb15a7cbfe1bf6ad16f178d24a38"],["/image/card/8.jpg","1570c4d6d83e16c9d14bf93e6fa285f4"],["/image/card/80.jpg","44f261e750e3d6d455775cd1127ee3be"],["/image/card/81.jpg","d05501a5468ddfc74b61c4a559963da3"],["/image/card/82.jpg","08f93cba39e122894acb50df9cd659af"],["/image/card/83.jpg","e05077d87b66ce9a4a624e2bda6a9080"],["/image/card/85.jpg","4332a07a6f1b57bc4742605899b434a2"],["/image/card/86.jpg","ebdf1648765c2df96404f7ff47caeaf7"],["/image/card/9.jpg","442d5c8b34f10a9d0f0c977aefeba9f1"],["/image/card/92.jpg","ee2028dfdaec004926628226af6c6b2d"],["/image/card/93.jpg","d1d85741199b10e1978f1241be920c2f"],["/image/card/95.jpg","418916306e07ab58682e11625dfdb23c"],["/image/elementary number theory 1/T1.jpg","01e2fccade283461c37a50341425ffb0"],["/image/elementary number theory 1/T2.jpg","cd74daf61195db82ea16e1aece7d02aa"],["/image/exercises-in-AG-1/T1.png","7d93d0fb2f659249dd8b66a6edbc7112"],["/image/exercises-in-AG-1/T2.jpg","84e53fcb9611a703413e5ad1b2d4c187"],["/image/k-th Mangoldt function/T1.jpg","5756a09f155a289a170c50c144b19238"],["/image/k-th Mangoldt function/T2.jpg","38fad80ee61f1edb1203c713912e66c5"],["/image/notes-about-sieve-methods-3/T1.jpg","3d7b90d69fe7cbbdcf776119a25a39e4"],["/image/notes-about-sieve-methods-3/T2.jpg","116e88a583bec8b70662f83205201117"],["/image/notes-about-sieve-methods-3/T3.jpg","d90930eef8eaf24a9925d7865935a816"],["/image/notes-about-sieve-methods-3/T4.jpg","2d307b288e9c1d884449b157f4d8faed"],["/image/notes-about-sieve-methods-3/T5.jpg","50aa13968481adeed63dbed132897c2e"],["/image/notes-about-sieve-methods-4/T1.gif","f104465ce04552d54dee5e2244adb6ed"],["/image/notes-about-sieve-methods-4/T2.gif","99671211dab442b882424eaf3592b73f"],["/image/notes-about-sieve-methods-5/T1.gif","455fd5fc07b18f3897192b0b25f247e6"],["/image/notes-about-sieve-methods-5/T2.jpg","e0715cd6f1ea967db1d1a71804bae590"],["/image/p-valuation-of-Bernoulli-numbers/T1.jpg","6468d48b8a98658a5d2900250968b460"],["/image/p-valuation-of-Bernoulli-numbers/T2.jpg","5702f763d2c7edd727b10eaa73658c87"],["/image/p-valuation-of-Bernoulli-numbers/T3.jpg","85c4435c73a28fc1089f26d9778bb8c5"],["/img/404-old.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/404.gif","abdccfb52a9fdfb9f4f3d3c10bb99986"],["/img/404.jpg","4cfcd44dd1f736fa5741751800233a20"],["/img/anon-big_head.gif","c95c196c97c44dc6a64aeaf10532ffd4"],["/img/anon.gif","a554c28d379e688207f4aff04c9ee932"],["/img/bisimai_2/textures/texture_00.png","c2c655f0163383cd007d0c0f36ac49d6"],["/img/bk0.jpg","ae3e62f9d451e1360537e364c8d55b13"],["/img/bk11.jpg","d1d85741199b10e1978f1241be920c2f"],["/img/bk7.jpg","3f93270fc4eb3bf9840fcb689b7c8167"],["/img/bk8.jpg","9bbd6a156144004557eb58c4a5edf40f"],["/img/bk9.jpg","48179e07bc30e248e6564e3bf1e80b09"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/mortis.gif","085ef1744831f3ebd479dbc5f24ed60b"],["/img/muzimi.gif","dfab713825dced0136e2c04bc6d5be55"],["/img/sakiko-old.jpg","d9e8fab1e8715c4db767d3099363074e"],["/img/sakiko.jpg","4d6429c5ca8ae04ad4f960877e2f8a35"],["/img/sakiko1.jpg","e5c46dccd83217910a8c24d160665e00"],["/img/wanshancai.jpg","0f834ebb78372cc6a74f5d065969a788"],["/img/xuanjuanxin.gif","2789ff8d39d2b092ca681bdf0287fab3"],["/index.html","277090dd98ccb2c1f14d5050f75afbc3"],["/js/crash_cheat.js","bac0351f634391c7c966260d30cd4afe"],["/js/githubcalendar.js","257593b0673cdeaaf44fd2531d034eee"],["/js/leaves.js","cfb9bf36c825e1316c89e218146d1357"],["/js/main.js","bf04ec801f8fae3c4d2f4f74cd9e1301"],["/js/ripples.js","6d2544a03e55b59e3742033c8cd35049"],["/js/sakura.js","4459fe7e14e42279f282fa3ca00327f0"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","64e071c53161915e23d55d47235843b2"],["/page/2/index.html","8fa110ade0be4e895050097fabb3bee7"],["/seminars/index.html","5446829751043d3cc22d25d91d18f23a"],["/sw-register.js","b8f7de31ce83c046f2d1fcb0ae8d4616"],["/tags/Algebra/index.html","e03d8c47581bc89e25749fe951bea644"],["/tags/Algebraic-Geometry/index.html","226b142e7cda18af604481cb00c0eeaa"],["/tags/Algebraic-Number-Theory/index.html","9683b35d15b5615da1373678bc3b91f0"],["/tags/Algorithm/index.html","820faa2d765a05218599373b10b8c4c9"],["/tags/Analytical-Number-Theory/index.html","5f1c40d332eeb2f2f48ed55beaa852ba"],["/tags/Bernoulli-Numbers/index.html","ec340aedc263b69daaf4e55d8f2e6b8c"],["/tags/Brun-s-Sieve/index.html","b17e4a77cefa5201573391658856ef6a"],["/tags/Brun-s-Theorem/index.html","1c0182da1e6448bffa3b4016e231463e"],["/tags/Character/index.html","a21ce2baefb2b195b6d8cb81a9529ab5"],["/tags/Chebyshev-s-Function/index.html","0e5b56198bd95c81f7366e0bec2ebd1b"],["/tags/Chen-s-Theorem/index.html","1bb63ec03cd703d9ac38bb2a4c680195"],["/tags/Chinese-Remainder-Theorem/index.html","a9de69395546d4da3644569b91b861fb"],["/tags/Combinatorial-Sieve/index.html","d6e1ca92b8ea243829e03fd24745ea81"],["/tags/Continued-Fractions/index.html","7d81ea087693ba4dd170e0efd86c14ef"],["/tags/Diophantine-Approximation/index.html","46f9657d67a6efddbdb6d3a3b9f01852"],["/tags/Diophantine-Geometry/index.html","6c1299fefa0733cd6d74e85f8597c964"],["/tags/Dirichlet-Convolution/index.html","e43c0cd7dae8cb6aef8c7f886ceab256"],["/tags/Elementary-Number-Theory/index.html","26c2c2e243ca33b8c71937b4c1abea36"],["/tags/Estimation-Formula/index.html","2b4ae4aebec2379e3391ab353a20c760"],["/tags/Exercise/index.html","5b5f8174054a5d9ae18ddc08816bb405"],["/tags/GPY-Weight-Function/index.html","bc69ed2776b11da4eb76c6606659f120"],["/tags/Gauss-Sum/index.html","80067972f276c0628c181a7b08b74154"],["/tags/Goldbach-s-Conjecture/index.html","6c018a5a2d59b72bcd09b16081303a5f"],["/tags/Gortz-Wedborn/index.html","39c513e86c543fb61ce9b3ccf648caf3"],["/tags/Kummer-Congruence/index.html","7a6cd57b9c51f831d3629ffd83ac6425"],["/tags/Mangoldt-Function/index.html","55fc280b4c3ea2fdda2bde4108fdf18d"],["/tags/Manin-s-Conjecture/index.html","3a04884967181146a5ee677de1fe8419"],["/tags/Merten-s-Theorem/index.html","9924caadbd2615e118180193bb8f12c3"],["/tags/Number-Theory/index.html","73c4803b9fb8f549ebe5520dacc508f6"],["/tags/Paper-Reading/index.html","eed3157aacfa14b4e4aa1405483c1c5b"],["/tags/Pell-Equation/index.html","0dbd917bd5e4771be1d2922abfd0e9f0"],["/tags/Prime-Number-Theorem/index.html","124d8f0670a7bf457260d08a69d66551"],["/tags/Prime-Twins-Conjecture/index.html","eddd5c536d5e58b6f9fab51c7b00d24d"],["/tags/Prime-k-Tuples-Conjecture/index.html","2f1e97ca8abad43d5e3e61a04968f4f0"],["/tags/Quadratic-Forms/index.html","35b91f55543b2d566f386b3330e23e0c"],["/tags/Riemann-Roch-Theorem/index.html","bf3f8f2b10b346bd76d1820082832491"],["/tags/Schinzel-s-Hypotheses-H-H-N/index.html","45938cc678e866f5153c025cae077470"],["/tags/Selberg-s-Sieve/index.html","af45475285a9dedb08fd04edd00863f1"],["/tags/Sieve-Methods/index.html","31db9026234c891f1eeee22cc50d3804"],["/tags/Sieve-of-Erathosthenes-Legendre/index.html","5e395b5b2e3c3ddee0a25204df26ce54"],["/tags/Sifting-Function/index.html","4082dbcadd580c8169a97d39aa48d9b5"],["/tags/Vinogradov-s-Mean-Value-Theorem/index.html","f74ad36ff2c78a3b2f8442324f7a04b1"],["/tags/Waring-s-Problem/index.html","58d35b0d00b9b28a95ac8d523d3984e7"],["/tags/index.html","b0ac923737960a7a5c59148782fe36f8"],["/tags/p-adic-Zeta-Function/index.html","65edb03bb34071444e107c84982f55f8"]];
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
