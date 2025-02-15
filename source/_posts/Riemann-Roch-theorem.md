---
title: Riemann-Roch定理的历史历程
mathjax: true
date: 2025-01-04 15:53:38
categories:
    - 代数几何
tags:
    - Algebraic Geometry
    - Riemann-Roch Theorem
---

#### 引言

Riemann-Roch定理是代数几何和复分析中一个十分重要的定理,它建立了代数曲线,向量丛和其相关空间之间的深刻联系.并且在后续的时间里,许多数学家也对其进行了重述与推广,进一步丰富了Riemann-Roch定理的深刻内涵.

这个定理也是数学史上一个意义非凡的例子,它同时也展示了一个结论,通过不同的解释方法,能发挥意想不到的巨大作用.

#### Riemann-Roch定理的原始形式

Riemann-Roch定理的发现,最早这篇在可以追溯到1857年Bernhard Riemann发表的一篇论文*Theorie der Abel'schen Functionen*$^{[1][2]}$.

我们都知道,在复平面上,一个有界的全纯函数当且仅当是常值函数,而无界的全纯函数,又可以由其零点及零点处的阶数很容易确定(首项系数顶多差一个常数);与此同时,某些实函数是不能延拓到整个复平面的,例如$\textrm{Log} z,\ \sqrt{z}$.

于是Riemann则在思考如下这个问题:那就是,曲线与其极点和零点之间到底有什么联系?以及在复平面,或者Riemann面上的亚纯函数到底有多少种不同的情况?Riemann的这篇论文,在现代的角度来看,实际上还不甚严谨,并且有一些地方的处理也是从几何直观上考虑的.但是Riemann的思想却是十分切中要害的,处理该问题的方法也是极为有效.

Riemann意识到,亚纯函数的性质取决于其零点与极点的分布.紧接着,Riemann考虑$2p+1$连通的曲面,利用划破复平面的想法,使用$2p$次切割,将曲面割成一个单连通的$4p$边形.然后便可以考虑在该多边形里的全纯函数.利用Dirichlet原理以及曲线积分的方法,Riemann假设函数有$d$个简单零点,并且得到Riemann不等式:

<center>
当${p + d + 1 - 2p \le 2}$,也就是对应的复线性空间的维数${h^0 \ge d + 1 - p}$时,

则在${2p+1}$连通的曲面上能够存在非常值的亚纯函数.
</center>

Riemann和其他的数学家都认为变分问题一定有解,并给出了一种"证明",称之为Dirichlet原理.但是就在几年后,Weierstrass举出了一个无解的例子,说明了一般情况下的变分问题是无解的,从而说明Dirichlet原理只适合某一类情况.后来Hilbert才严格证明了Dirichlet原理,并且验证了Riemann对Dirichlet原理使用的正当性.

而Riemann的学生Gustav Roch在其1865年的论文*Über die Eigenschaften der algebraischen Funktionen, welche durch lineare Gleichungen verbunden sind*,在Riemann不等式中引入误差项$h^1 = h^0 - (d + 1 - p)$,并且说明了$h^1$是一个有分析意义的量.其不仅与有理函数空间有关,并且通过对偶空间还能反映出曲线上微分形式的性质.至此便得到了Riemann-Roch定理的原始形式:

<center>
在$2p+1$连通的曲面上,有:$h^0 + h^1 = d + 1 - p.$
</center>

Roch的工作使Riemann的初步公式从不等式提升为等式,奠定了现代Riemann-Roch理论的基础,为代数几何中研究曲线上的线性系统提供了更强有力的工具.

#### Riemann-Roch定理的推广

但是Roch的表述仍然是基于19世纪的代数曲线理论,符号和语言与现代代数几何存在较大差距.而在19世纪末,Alexander von Brill和Max Noether系统化了代数几何的理论,并且对复数域上的代数曲线的Riemann-Roch定理做了现代化的表述.

他们推广了Riemann对零点和极点的可加性描述,提出了除子(divisor)的概念,也就是一条射影曲线(projective curve)$F$上有限个点的加权和:

<center>
设$F$是一条射影曲线,称$D = \displaystyle\sum_{i = 1}^n a_i P_i$为$F$的除子.其中$a_i \in \mathbb{Z}, P_i \in F.$
</center>

此外,Brill和Noether提出了Brill-Noether theory$^{[7]}$来研究一类特殊除子(special divisor),而这种除子如今可以通过层的上同调(sheaf cohomology)来描述.此外再定义除子的维数:

<center>
$\ell(D) = \dim L(D)$,其中$L(D) = \{\phi \in K(F)^* : \textrm{div} \phi + D \ge 0\} \cup \{ 0 \}.$
</center>

于是Riemann-Roch定理的现代表述为:

$$\ell(D)-\ell(K-D)=\deg(D)-g+1.$$

而在层论的帮助下,利用Serre对偶,便可进一步解释公式左侧两项的意义:$\ell(K-D)$是作为第一层上同调的维数,$\ell(D)$则是零阶同调群的维数.于是可以用同调群的形式来表达Riemann-Roch定理:

$$\dim H^0(X, \mathcal{O}_{-D}) - \dim H^0(X, \Omega_D) = 1 - g + \deg D.$$

在Brill和Norther的工作之后,1931年,Friedrich Karl Schmidt证明了在有限特征的完备域(perfect fields)上,Riemann-Roch定理仍然成立.至此,Riemann-Roch定理便被推广到了任意代数闭域上的代数曲线上.

当然,对于Riemann-Roch定理的探索并未停止.

在1954年,Friedrich Hirzebruch则将其推广至高维复代数簇的情况,将特征类与代数拓扑联系了起来,现在被称之Hirzebruch–Riemann–Roch定理$^{[6]}$.

而这一结果,又为后面的Grothendieck–Riemann–Roch定理$^{[8]}$的证明铺平了道路.Grothendieck的这一定理是关于上同调的又一个影响深远的成果,他的工作重新诠释了Riemann-Roch定理,不再将其解释为关于簇的定理,而是关于两个簇之间的同态射的定理.

最后,在代数拓扑中也发现了一个通用版本.这些发展基本上都是在1950年至1960年间进行的.此后,Atiyah-Singer指标定理$^{[9]}$开辟了另一条推广途径.至此,凝聚层的Euler特征也是可计算的了.

#### 惯例总结

OK!2025年第一篇文章正式产出!虽然离上一篇文章时间稍微隔了有亿点点久,并且这篇文章也并非我本意~~而是作业所迫~~,所以很多地方会比较草率了,就这样凑合一下吧.

但是即便如此,在查阅资料的过程中,仍然还是有所收获的.Riemann时代的数学体系并不完善,并没有如今代数几何的严谨语言,并且Riemann所"证明"的Dirichlet原理还被证实有瑕疵,但是Riemann很多超前的观点和敏锐的几何直觉让人惊叹,尤其是Riemann曲面那一块的推导,即使很多专有名词已经大不相同,但是仍然可以看出Riemann满溢的数学才能.

从Riemann到Roch,可能更主要的便是敏锐的几何直观,但是从Brill,Noether开始,直到代数几何大师Gronthendieck等等,抽象但是严谨的代数语言越来越占据主导地位(我这么觉得的嗷,或许是我目前并不能领会到同调群的几何意义吧),又将Riemann-Roch定理不断推到了新的高度.只能说Riemann-Roch定理确实是数学史上一个无与伦比的成果.

#### 参考文献

[1] Riemann B. Theorie der Abel'schen Functionen[J]. 1857.

[2] (德)黎曼. 黎曼全集. 第1卷[M]. 李培廉. 高等教育出版社, 2016. P79-125.

[3] Gray J. J. The Riemann-Roch theorem and geometry, 1854-1914[C]//Proceedings of the International Congress of Mathematicians. 1998, 3: 811-822.

[4] Gathmann A. Plane Algebraic Curves[Z]. https://agag-gathmann.math.rptu.de/class/curves-2023/curves-2023.pdf. 2023, P61-67.

[5] Wikipedia. Riemann–Roch theorem[Z]. https://en.wikipedia.org/wiki/Riemann%E2%80%93Roch_theorem. 2024.

[6] Wikipedia. Hirzebruch–Riemann–Roch theorem[Z]. https://en.wikipedia.org/wiki/Hirzebruch%E2%80%93Riemann%E2%80%93Roch_theorem. 2023.

[7] Wikipedia. Brill–Noether theory[Z]. https://en.wikipedia.org/wiki/Brill%E2%80%93Noether_theory. 2023.

[8] Wikipedia. Grothendieck–Riemann–Roch theory[Z]. https://en.wikipedia.org/wiki/Grothendieck%E2%80%93Riemann%E2%80%93Roch_theorem. 2024.

[9] Wikipedia. Atiyah–Singer index theorem[Z]. https://en.wikipedia.org/wiki/Atiyah%E2%80%93Singer_index_theorem. 2024.