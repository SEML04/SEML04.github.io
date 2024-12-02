---
title: 筛法读书笔记(Sieve Methods by Halberstam) -- intro of "筛法圣经"
mathjax: true
date: 2024-11-1 22:31:46
categories:
    - 筛法
tags:
    - sieve methods
    - Schinzel's Hypotheses H & H_N
    - Prime Twins Conjecture
    - Goldbach's Conjecture
---

#### 引言

最近得开始记录一下读书进度才行了,敦促一下自己的学习进度,否则就只能毙业了.😥

而我目前看的这本主要的参考资料则是: ***Sieve Methods by H.Halberstam & H.E.Richert***

不知道是不是作者Richert是德国人的原因,这本书的文章风格和我之前读过的英文教材都不相同:直接长难句起手,一句话八九行,从句里套从句,词汇也及其考验我的积累,~~适合作为六级备考阅读资料~~.😭

但是与二潘的『哥德巴赫猜想』一书不同,其主要就是围绕陈景润的"1+2"定理(Chen's Theorem)展开,而此书则是更加详细的介绍了各种筛法(Sieve methods)的发展与威力.即使只是看此书的intro部分,我就已经收获颇多,因此特意开新篇记录.而且此书每章节后的Notes,也是介绍了更高观点的一些成果与结论,也是能收获很多.但是二潘的书也是经典中的经典,我也要重点参考,并且下一篇大概就是二潘书中第一章的『特征与Gauss和』的内容.[2]

以及文中应该经常会出现一下用中文名词,一下用英文名词.这并不是写的时间有跨度,而是~~我比较随心所欲,~~可能为了简单啊或者为了强调啊,总之就是----反正我能看懂就行.

#### Hypotheses $\ H\ $ & $\ H_N$

在Intro部分的一开篇就让我开眼了,直接给出了孪生素数猜想和哥德巴赫猜想的推广,也就是Schinzel's hypotheses.

首先再写一遍这著名的两个猜想:

> 孪生素数猜想:
>
> $\quad$ There exist infinitely many primes $p$ such that $p+2$ is a prime.
>
> 哥德巴赫猜想:
>
> $\quad$ Every even natural number $N$ greater than $2$ is sum of two primes.

而在1912年的国际数学家大会上,E.Landau列出了四个关于素数的基本问题,以上便是其中的两个,另外的两个也不是什么善茬:一个为:**是否每两个完全平方数之间总有一个素数?** 另一个为:**是否存在无穷多个$n^2+1$形式的素数?** 因此这四个问题统称为Landau's Problems.在此之上,Schinzel提出了两个更广义的猜想,将数论中很多重要的猜想以奇妙的方式统一了起来.

首先令$F_1, \cdots, F_g$都是$\mathbb{Z}$上非常值的首项系数为正的不可约多项式(nonconstant irreducible polynomials over the integers with positive leading coefficients).记$F=F_1F_2\cdots F_g$.我们称$m$是$F$的一个**fixed divisor**,如果有$m|F(n),\ \forall n\in\mathbb{Z}$.

例如:
$\quad$ 易知$2$是$(x+1)(x+2)$的一个fixed prime divisor,即使$2$不整除$(x+1)$和$(x+2)$.

于是Schinzel有猜想$H$和$H_N$:

> ***Hypothesis $H$:***
>
> $\quad$ Suppose that $F$ has no fixed divisor, then there **exist infinitely many** integers $n$ such that each $F_i(n)\ (i=1,2,\cdots,g)$ is prime.
>
> ***Hypothesis $H_N$:***
>
> $\quad$ Let $N$ be a large natural number. And $G$ is a polynomial with positive leading coefficient over $\mathbb{Z}$, such that $N-G$ is irreducible and F(N-G) has no fixed prime divisor.
>
> $\quad$ Then there **exists a** positive integer $n$ such each of $F_i(n)\ (i=1,2,\cdots,g)$ and $N-G(n)$ is positive prime.

需要指出的是:将猜想挪到有限域上的多项式环则是不成立的,由Swan在1962年给出了反例.[3]

以及对于Schinzel's Hypotheses,还有加强版的猜想,也就是Bateman-Horn conjecture,给出了$H$和$H_N$的定量形式猜想.[4]

> $H^*$:
>
> $\quad$ Let $Q(F_1,\cdots,F_g;N)$ be the number of $n$ in Hypothesis $H$. Then
>
> $$Q(F_1,\cdots,F_g;N)=\dfrac{C(F_1,\cdots,F_g)}{h_1\cdots h_g}\int_2^N \dfrac{du}{\log^g u}\{1+o(1)\},\ N\to \infty$$
>
> $\quad$ where $h_i=\deg F_i$, and
>
> $$C(F_1,\\cdots,F_g)=\\prod\\limits_p \\left\\{\\left(1-\\dfrac{1}{p}\\right)^{-g}\\left(1-\\dfrac{\\rho(p)}{p}\\right) \\right\\}$$
> 
> $\quad$ and $\rho(p)$ is the number of solutions of
>
> $$F_1(n)F_2(n)\cdots F_g(n)\equiv 0\mod{p}$$

实际上,上述里的$C(F_1,\\cdots,F_g)$和国际数学家大会上对James Maynard工作的介绍里边的$\mathfrak{S}(F_1,\\cdots,F_g)$是一码事.

对$H_N$的定量估计式则形式上有一些不同,它没有了积分式,但整体结构还是相似的,~~其实就是写成了离散的形式,不相似就出大问题了~~:

> $H_N^*$:
>
> $\quad$ Let X=X(N) be the number of $n$ such that $N-G(n)>0$, and $Q_1(F_1,\cdots,F_g;G;N)$ be the number of $n$ in Hypothesis $H_N$. Then
>
> $$\begin{align}
    Q_1(F_1,\cdots,F_g;G;& N) =
    \dfrac{X}{\log^{g+1} X}(h_0h_1\cdots h_g)^{-1}\\{1+o(1)\\} \\\\
    & \\prod\\limits_p \\left\\{\\left(1-\\dfrac{1}{p}\\right)^{-g-1}\\left(1-\\dfrac{\\omega(p)}{p}\\right) \\right\\},\ N\to\infty
\end{align}$$
>
> $\quad$ where $h_0 = \deg G$, and $\omega(p)$ is the number of solutions of
>
> $$F_1(n)\cdots F_g(n)(N-G(n))\equiv 0\mod{p}$$

#### 各种猜想的统一形式

接下来就简单看一看Schinzel猜想是如何将解析数论中的若干个著名猜想统一起来的.

##### $H$猜想下的情况

首先就是$g=1$并且$F_1(n)=an+b,\ (a,b)=1$的情况,实际上这也是猜想$H$和$H_N$中唯一能够证明的情况,即也就是Dirichlet's Theorem(1837).

> $g=1,\ F_1(n)=an+b,\ (a,b)=1$:
>
> $\quad$ **(Dirichlet's Theorem)** The arithmetic progression $an+b\ (n=0,1,\cdots)$ contains infinitely many primes.

再考虑$F_1(n)=n^2+1$的情况,即得到了One of Landau's Problems:

> $g=1,\ F_1(n)=n^2+1$:
>
> $\quad$ **(Landau's Problem)** There exist infinitely many primes of the form $n^2+1$.

以及当$g=2,\ F_1(n)=n,\ F_2(n)=n+2$时的情况:

> $g=2,\ F_1(n)=n,\ F_2(n)=n+2$:
>
> $\quad$ **(Prime Twins Conjecture)** There exist infinitely many primes $p$ such that $p+2$ is a prime.

##### $H_N$猜想下的情况

$H_N$猜想是哥德巴赫猜想的推广,事实上有:

> $g=1,\ F_1(n)=n,\ G(n)=n$:
>
> $\quad$ **(Goldbach's Conjecture)** Every even natural number $N$ greater than $2$ is sum of two primes.

#### 成果与结论

以下的一些成果,让我们对Schinzel两个猜想的正确性抱有期待.当然首先便是猜想$H$的特殊情况----Dirichlet's Theorem.这无疑是一个特别神奇的结论,并且随着学习的深入,其背后的深刻思想----利用特征筛出公差为$q$的子序列,也十分重要,而其想法与思路在二潘的『初等数论』上也有简单介绍.[5]

首先引入一个新的记号:$P_r$,用于表示一个至多表示为$r$个素数的乘积(any integer having at most $r$ prime factors, equal or distinct),称为是一个**几乎素数(almost prime)**.毕竟有效的筛法比较难以筛选出prime,但是却相对容易地筛选出almost prime.

因此我们可以得到猜想$H$的等价形式以及弱化形式:

> **Hypothesis $H$ is equivalent to:**
>
> <center> $F_1(n)\cdots F_g(n)=P_g$ for infinitely many positive integers $n$ </center>
>
> **The weaker form** of Hypothesis $H$ is:
>
> <center> $F_1(n)\cdots F_g(n)=P_r$ for infinitely many positive integers $n$ </center>
>
> Where $r$ is a relatively small integer, depending at most on $g$ and $\deg(F)$.

实际上,在Chapter 10中,我们将证明对于弱化形式而言,其在$g$相当大并且$F_i$均为线性函数时,结论是成立的.并且在此书中,我们将一步步的证明以下更为具体并且熟悉的结论(在二潘的『哥德巴赫猜想』一书中的Intro部分实际上也有):

> In Chapter 9:
>
> $\quad$ $n^2+1=P_3$ for infinitely many positive integers $n$.
>
> In Chapter 10 to proof "$a+b$" which $a+b=5$(Selberg):
>
> $\quad$ $n(n+2)=P_5$ for infinitely many positive integers $n$.
>
> $\quad$ $n(N-n)=P_5$ for some positive integers $n<N$.
>
> In Chapter 2 to proof "$1+r$"(Rényi):
>
> $\quad$ $p+2=P_r$ for infinitely many positive primes $p$.
>
> $\quad$ $N=p+P_r$.

对于Rényi的结论$p+2=P_r$,其实也没有跳脱猜想$H$的五指山,并且反过来我们可以考虑猜想$H$的一个特殊情况:

> Considering the case of $g+1$, $F_{g+1}=n$:
>
> $\quad$ If $F_1(n)\cdots F_g(n)\cdot n$ has no fixed divisor, then there are infinitely many primes $p$ such that each of $F_i(p)$ is also prime.
>
> $\quad$ i.e. $F_1(p)\cdots F_g(p)=P_g$ for infinitely many primes $p$.
>
> And without a doubt, the weaker form is:
>
> $\quad$ i.e. $F_1(p)\cdots F_g(p)=P_r$ for infinitely many primes $p$.

与之相关的重要结论是:

> In Chapters 9 and 10:
>
> $\quad$ $p^2+p+1=p_5$ for infinitely many primes $p$.
>
> In Chapter 9, 10 and 11:
>
> $\quad$ $(p+2)(p+6)(p+8)=P_14$ for infinitely many primes $p$.

引入almost prime的概念后,以及以上的这些重要结论,我们对『Schinzel的两个猜想正确』的把握越来越大(当然也是一种Bayes估计的方法论).以及对于素数猜想,目前也有新的强有力的工具,例如圆法和密率,其中维诺格拉多夫便用圆法与三角和证明了三素数定理(1937).并且在此书出版后,筛法仍然有一些惊艳的结果产生,但是却并没有机会出现在此书中,还是有一些遗憾的.例如:张益唐确定了有无穷对素数,其差小于7000万(2013),以及后续一系列的工作,其中也包括了2022年Fields奖得主James Maynard的工作.但是这也是好事,至少这还说明筛法仍有具有活力,并且仍然有着强大的威力.~~而我也有了一个可以写的论文方向~~

#### Intro里的筛法

实际上这一部分也是以介绍历史发展为主,而这些我在二潘的『哥德巴赫猜想』一书的Intro部分也看了一遍(具体细节还更详细一些),因此这一部分就不过多记录了.但也是可以记录一点的.

筛法的主要目的就是为了尽可能的确定$S(\mathscr{A};\mathfrak{P},z)$的上下界,经典的例子便是Brun-Titchmarsh inequality.并且在Chapters 3-8都在考虑这个问题.

以及对于$S(\mathscr{A};\mathfrak{P},z)$的渐近公式,例如有基本公式(in Chapters 2 and 7):

> $$\dfrac{\log |\mathscr{A}|}{\log z}\to \infty$$

在此书Intro的筛法部分,主要提到的也是两个人的工作,其实这也是我要认真学的两种筛法思想.一个是Burn,张益唐的工作主要便是利用Brun's sieve;另一个就是Selberg,他的加权的思想则为Chen,Zhang和Maynard的工作提供了很大的帮助.当然这些并不是此书的作者本人写的了,而是我自己初步搜集到的资料表现的,后面我也将详细去了解与学习.

#### 总结

本文差不多就是记录至此,一天时间速记!但是后面还有很多内容需要学习了.现在也做一个简单的规划好了.

1. 『特征与Gauss和』的记录

$\quad$ 这个争取三天内弄完吧,也只需要简单记录一下定理和个人的想法就好,应该花不了多少时间~~吧?~~.

2. 毫无疑问,我要马上开始圣经第一章的阅读

$\quad$ 第一章从目录上看上去应该并没有很深入的内容,而是更偏向于一些概念的定义与解释.争取下周五内看完吧,在这过程中还能磨炼一下英语长难句分析的能力,挺好.😶然后周日前一样将学习内容记录到博客上来.

3. 学辅官网上的文章也要找时间更新了

$\quad$ 目前有意思的几个想法都还没启动,可能有些可以让给别人来写,但我肯定还是得继续撰文了.目前一些有趣的点子有:Cesaro求和,Abel求和以及Dirichlet求和;多线性相关函数与行列式之间的联系;不可求长曲线的一些有趣性质...

#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P1-P11.

[2] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P15-P23.

[3] Schinzel's hypothesis H. Wikipedia[Z]. https://en.wikipedia.org/wiki/Schinzel%27s_hypothesis_H, 23 Aug 2024.

[4] Bateman–Horn conjecture. Wikipedia[Z]. https://en.wikipedia.org/wiki/Bateman%E2%80%93Horn_conjecture, 21 May 2023.

[5] 潘承洞, 潘承彪. 初等数论, 第三版[M]. 北京大学出版社, 2013. P463-P464.