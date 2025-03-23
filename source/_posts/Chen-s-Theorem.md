---
title: 筛法的顶峰之一 -- 陈景润定理
mathjax: true
date: 2025-03-12 15:57:04
categories:
    - 筛法
tags:
    - Sieve Methods
    - Selberg's Sieve
    - Chen's Theorem
    - Prime Twins Conjecture
    - Goldbach's Conjecture
---

#### 引言

在这段时间内,虽然一直没有更新,但是还是干了不少事的.例如,我终于把Halberstam的第二章给看完了!在这一章中我们完成了$(7, 7)$以及$(1, 7)$的证明,用严谨一点的语言来说就是:

> **Brun's pure sieve:**
>
> $\quad$ 存在无穷个自然数$n$,使得:
>
> $$(n, n+2) = (P_7, P'_7).$$
>
> **Brun's sieve:**
>
> $\quad$ 存在无穷个素数$p$,使得:
>
> $$p+2 = P_7.$$
>
> $\quad$ 其中$P_7$表示至多$7$个质因子的数.

以及除此之外,我也终于是开启了对Serre的*A Course in Arithmetic*的学习.其实现在学起来比起当时大三的时候要顺利不少,虽然在p-adic一节还是给我整了不少花活,让我花了不少时间去理解.

总之,上面的这些内容我也都要一个一个摘录一遍!但是现在,先解决掉历史遗留问题--陈景润定理.以下主要参考二潘的『哥德巴赫猜想』.<span style="color: rgb(230,51,51)"> 注意:我对二潘书上的一些符号进行了一些调整,使得其主要与Halberstam书上的符号一致. </span>

<center>
<img src="/image/chen-s-theorem/T1.gif" width="30%">
</center>

#### 定理"1+4"与定理"1+3"

陈定理对"1+2"的证明是用到了一个很精彩的加权函数,能从定理"1+3"中筛掉所有$p_0+p_1p_2p_3$形式的数,那么自然剩下的就只有$p_0+p_1$或者$p+p_1p_2$形式的数了.因此在这里,对定理"1+3"的一个简要证明也是必要的.而非加权情况下的定理"1+4"也是可以了解以下的.

##### 临阵磨枪

首先对Goldbach猜想建立我们的筛函数$S(\mathscr{A}; \mathfrak{P}, z)$.一些细则可以看[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/).

$\quad$ 假设$N$是一个充分大的偶数,令

$$\mathscr{A} = \mathscr{A}(N) := \{ a : a = N - p, p \le N \},$$

$\quad$ 以及令我们的素数集为

$$\mathfrak{P} = \{ p : p \nmid N \},$$

$\quad$ 在这种情况下,我们可以取

$$X = \text{li}N \sim \frac{N}{\log N},$$

$\quad$ 当$\mu(d) \neq 0,\ (d, N) = 1$时有

$$\omega(d) = \frac{d}{\varphi(d)},$$

$\quad$ 以及该条件下的余项

$$\begin{split}
    r_d & = \pi(N; d, N) - \frac{1}{\varphi(d)} \text{li}N \\
    & = \displaystyle\sum_{\substack{p \le x \\ p \equiv l\ \textrm{mod}\ d}} 1 - \frac{1}{\varphi(d)} \text{li}N \\
    & = E(N; d, N).
\end{split}$$

并且可以知道的是,$\omega(p)$还满足一些很好的条件

> 存在绝对常数$L_1,L_2$以及与$z$相关的常数$A_z$,使得
>
> <div style="display: flex; align*-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;"> $0 < \dfrac{\omega(p)}{p} \le 1 - \dfrac{1}{L_1},$ </span>  <span style="float: right;">$(\Omega_1)$</span></div>
>
> <div style="display: flex; align*-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;"> $-A_z \le \displaystyle\sum_{w \le p < z} \dfrac{\omega(p)\log p}{p} - \log \dfrac{z}{w} \le L_2.$ </span>  <span style="float: right;">$(\Omega_2(1))$</span></div>

其中$\Omega_1$在[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/)中已经有所提及,而$\Omega_2(1)$则是线性筛,其有更一般的形式$\Omega_2(\kappa)$,我将在接下来更新Halberstam第二章的博客中将进一步介绍.而线性筛的情况下,我们便能通过Linnik的大筛法以及Rosser筛法等方法对素数分布水平进行估计了,于是得到有

> **Bombieri-Vinogradov定理:**
>
> $\quad$ 设$x \ge 2$,对任意的整数$A$,当$B = A + 15$时,记
>
> $$\begin{split}
R(D, x) & = \sum_{d \le D} \max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| \\
 & = \sum_{d \le D} \max_{y \le x} \max_{(l,d) = 1} \left|\pi(y; d, l) - \dfrac{1}{\varphi(d)}\text{li}x \right|,
\end{split}$$
>
> $\quad$ 于是有
>
> $$R(x^{\frac{1}{2}}\log^{-B}x, x) \ll x\log^{-A}x.$$

而在[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/)的(3.2.5.4)也介绍了一个误差上界的概念$E(x, q)$,而此处的$R(D, x)$与其结构很相似,但还是有所不同.

而这个定理也是我们对素数间小间隙问题的重要支撑之一了,这在[论文阅读之翻译篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/01/15/GPY-sieve-method/)以及[论文阅读之重点提炼篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/02/07/GPY-sieve-method-2/)之中也有稍微详细一点的阐述,这里不再展开.

而我们在这篇博客中需要用到的是该定理的一个推论,即

> **推论:**
>
> $\quad$ 设$x \ge 2$,对任意的整数$A$,当$B_1 = 2A + 32$时,有
>
> $$\sum_{d \le D} \mu^2(d) 3^{v(d)} \max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| \ll x\log^{-A}x,$$
>
> $\quad$ 其中$D = x^{\frac{1}{2}}\log^{-B_1}x$.

#### 参考文献

[1] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P197-P220.

[2] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P320-P338.

[3] Ntriantafilidis. A quick guide to Chen’s theorem[Z]. https://ntriantafilidis.wordpress.com/2014/09/22/a-quick-guide-to-chens-theorem/.

[4] T. Tao. 254A, Supplement 5: The linear sieve and Chen’s theorem (optional)[Z]. https://terrytao.wordpress.com/2015/01/29/254a-supplement-5-the-linear-sieve-and-chens-theorem-optional/.

[5] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[6] Motohashi Y. An Overview of the Sieve Method and its History[J]. arXiv preprint math/0505521, 2005.