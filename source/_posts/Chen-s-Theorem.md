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

注:后续文中的$\mathscr{A}^{[b]}$表示的是$\mathscr{A}$中所有至多$b$个素因子的数,因此它是一个集合,而上面的$P_b$表示的是一个数,也就是$\mathscr{A}^{[b]}$中的一个元素,因此两者的含义并不相同.

以及除此之外,我也终于是开启了对Serre的*A Course in Arithmetic*的学习.其实现在学起来比起当时大三的时候要顺利不少,虽然在p-adic一节还是给我整了不少花活,让我花了不少时间去理解.

总之,上面的这些内容我也都要一个一个摘录一遍!但是现在,先解决掉历史遗留问题--陈景润定理.以下主要参考二潘的『哥德巴赫猜想』.<span style="color: rgb(230,51,51)"> 注意:我对二潘书上的一些符号进行了一些调整,使得其主要与Halberstam书上的符号一致. </span>

<center>
<img src="/image/chen-s-theorem/T1.gif" width="30%">
</center>

陈定理对"1+2"的证明是用到了一个很精彩的加权函数,能从定理"1+3"中筛掉所有$p_0+p_1p_2p_3$形式的数,那么自然剩下的就只有$p_0+p_1$或者$p+p_1p_2$形式的数了.因此在这里,对定理"1+3"的一个简要证明也是必要的.而非加权情况下的定理"1+4"也是可以了解以下的.

#### 临阵磨枪

##### 构造筛函数

首先对Goldbach猜想建立我们的筛函数$S(\mathscr{A}; \mathfrak{P}, z)$.一些细则可以看[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/).

$\quad$ 假设$N$是一个充分大的偶数,令

$$\mathscr{A} = \mathscr{A}(N) := \{ a : a = N - p, p \le N \}, \quad (2.1)$$

$\quad$ 以及令我们的素数集为

$$\mathfrak{P} = \{ p : p \nmid N \},$$

$\quad$ 在这种情况下,我们可以取

$$X = \text{li}N \sim \frac{N}{\log N},$$

$\quad$ 当$\mu(d) \neq 0,\ (d, N) = 1$时有

$$\omega(d) = \frac{d}{\varphi(d)},$$

$\quad$ 以及该条件下的余项

$$\begin{split}
    r_d & = \pi(N; d, N) - \frac{1}{\varphi(d)} \text{li}N \\
    \\
    & = \displaystyle\sum_{\substack{p \le x \\ p \equiv l\ \textrm{mod}\ d}} 1 - \frac{1}{\varphi(d)} \text{li}N \\
    \\
    & = E(N; d, N). \quad (2.2)
\end{split}$$

##### Bombieri-Vinogradov定理

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
> $$R(x^{\frac{1}{2}}\log^{-B}x, x) \ll x\log^{-A}x. \quad (2.3)$$

而在[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/)的(3.2.5.4)也介绍了一个误差上界的概念$E(x, q)$,而此处的$R(D, x)$与其结构很相似,但还是有所不同.

而这个定理也是我们对素数间小间隙问题的重要支撑之一了,这在[论文阅读之翻译篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/01/15/GPY-sieve-method/)以及[论文阅读之重点提炼篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/02/07/GPY-sieve-method-2/)之中也有稍微详细一点的阐述,这里不再展开.

而我们在这篇博客中需要用到的是该定理的一个推论,即

> **推论:**
>
> $\quad$ 设$x \ge 2$,对任意的整数$A$,当$B_1 = 2A + 32$时,有
>
> $$\sum_{d \le D} \mu^2(d) 3^{v(d)} \max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| \ll x\log^{-A}x, \quad (2.4)$$
>
> $\quad$ 其中$D = x^{\frac{1}{2}}\log^{-B_1}x$.

简要证明:

$\quad$ 设$\lambda = A + 17$,而这个莫名其妙的$\lambda$和推论中的$B$在最后一步的估计中可以确定.

$\quad$ 于是便可以得到

$$\begin{split}
    \sum_{d \le D} \sim & = \sum_{\substack{d \le D \\ 3^{v(d)} \ge \log^{\lambda} x}} \sim + \sum_{\substack{d \le D \\ 3^{v(d)} < \log^{\lambda} x}} \sim \\
    \\
    & \ll \log^{-\lambda} x \sum_{\substack{d \le D \\ 3^{v(d)} \ge \log^{\lambda} x}} \mu^2(d) 3^{2v(d)} \max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| + \log^{\lambda} x \cdot R(D, x) \\
    \\
    & =: S + T.
\end{split}$$

$\quad$ 对$T$而言由(2.3)便有

$$T \ll x \log^{-\lambda - B_1 + 15} x = \log^{-A} x.$$

$\quad$ 而在$S$中,记$d(n)$为除数函数,易验证有

$$\mu^2(n) 3^{2 v(n)} \le d^4(n),$$

$\quad$ 以及注意到

$$\max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| \le \max_{y \le x} \dfrac{2y}{\varphi(d) \log y} \ll \dfrac{x}{d\log x},$$

$\quad$ 最后结合以下推论

$$\sum_{n \le x} \dfrac{d^r(n)}{n} \ll \log^{2^r} x,$$

$\quad$ 于是有

$$S \ll x \log^{1-\lambda} \sum_{n \le x} \dfrac{d^4(n)}{n} \ll x \log^{-A} x.$$

$\quad$ 于是便可证明推论. <span style="float: right"> $\square$ </span>

而我们之所以需要对推论中左侧的求和式进行阶的估计,是由于下面的Jurkat-Richert定理导致的.

##### Jurkat-Richert定理

紧接着,我们先承认以下线性筛法的结果,也就是

> **定理1(Jurkat-Richert):**
>
> 在条件$\Omega_1$和$\Omega_2(1)$成立的条件下,设$2 \le z \le X$,则有以下估计
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \le XW(z)\left\{ F\left( \frac{\log X^2}{\log z} \right) + O\left( \frac{A}{\log^{1/14} X} \right) \right\} + \sum_{\substack{d | P(z) \\ d < X^2}} 3^{v(d)}|r_d|, \quad (2.5)$$
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \ge XW(z)\left\{ f\left( \frac{\log X^2}{\log z} \right) + O\left( \frac{A}{\log^{1/14} X} \right) \right\} - \sum_{\substack{d | P(z) \\ d < X^2}} 3^{v(d)}|r_d|. \quad (2.6)$$

以及确定余项的阶后,可由定理1可推出的一个定理

> **定理2:**
>
> $\quad$ 在条件$\Omega_1$和$\Omega_2(1)$成立的条件下,设$2 \le z \le X$,若存在$0 < \alpha \le 1$以及$B \ge 0$,使得有
>
> $$\sum_{\substack{d \le X^\alpha \log^{-B} X \\ (d, \mathfrak{P}) = 1}} \mu^{2}(d) 3^{v(d)}|r_d| \ll \frac{X}{\log^2 X}, \quad (2.7)$$
>
> $\quad$ 则有以下估计
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \le XW(z)\left\{ F\left( \alpha \frac{\log X}{\log z} \right) + O\left( \frac{A}{\log^{1/14} X} \right) \right\}, \quad (2.8)$$
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \ge XW(z)\left\{ f\left( \alpha \frac{\log X}{\log z} \right) + O\left( \frac{A}{\log^{1/14} X} \right) \right\}. \quad (2.9)$$

观察定理2的条件我们都能看得出来,这就是为我们的Goldbach猜想以及孪生素数猜想准备的.而后面我们马上就能看到它的强大作用.

##### 两个分段函数

由于定理1和2中的两个函数$F$和$f$比较复杂,因此再花一点篇幅简单说一下这是什么,虽然我还没弄懂这个是怎么构造出来的两个奇怪函数.

实际上,$F$和$f$是由下面的几个法则分段确定下来的.

$$\left\{ \begin{array}{l}
    F(u) = \dfrac{2\text{e}^{\gamma}}{u}, \ 1 \le u \le 2, \\
    \\
    f(u) = 0, \ 1 \le u \le 2, \\
    \\
    \dfrac{\text{d}}{\text{d} u} uF(u) = f(u-1), \ u > 2, \\
    \\
    \dfrac{\text{d}}{\text{d} u} uf(u) = F(u-1), \ u > 2.
\end{array} \right. \quad (2.10)$$

其中$\gamma$为Euler常数.因此函数$F$和$f$事实上是可以分段确定下来的,Terence Tao的博客上直接将其表示如下

$$\left\{ \begin{array}{l}
    F(u) = 2\text{e}^{\gamma} \left( \dfrac{\mathbf{1}_{u > 1}}{u} + \displaystyle\sum_{\substack{j \ge 3 \\ j \text{ is odd}}} \dfrac{1}{j!} \int_{[1, +\infty)^{j-1}} \dfrac{\mathbf{1}_{t_1 + \cdots + t_{j-1} \le s-1}}{t_1 \cdots t_{j-1}} \ \text{d}t_1 \cdots \text{d}t_{j-1} \right), \\
    \\
    f(u) = 2\text{e}^{\gamma} \displaystyle\sum_{\substack{j \ge 2 \\ j \text{ is even}}} \dfrac{1}{j!} \int_{[1, +\infty)^{j-1}} \dfrac{\mathbf{1}_{t_1 + \cdots + t_{j-1} \le s-1}}{t_1 \cdots t_{j-1}} \ \text{d}t_1 \cdots \text{d}t_{j-1}.
\end{array} \right.$$

其中$\mathbf{1}_S$是集合$S$上的示性函数.并且对于定理1和定理2而言,此处的$F$和$f$已经是最优选择,并且与筛法的奇偶性检验有关,详情可以看Terence Tao的博客$^{4}$.

#### 定理"1+4"

我们记

$$\mathscr{A}^{[b]} = \mathscr{A}^{[b]}(N) := \{ a : a \in \mathscr{A}, v(a) \le b \},$$

其中<span style="color: rgb(230,51,51)">$v(d)$是记重数的</span>(由于之前出现$v(d)$时总有$\mu(d) \neq 0$,因此记不记重数都是一致的,但此处需要特意说明).现在我们便可以证明

> **定理"1+4":**
>
> $\quad$ 命题"1+4"成立,更准确地,我们有
>
> $$|\mathscr{A}^{[4]}| > 3.24 C(N) \frac{N}{\log^2 N},$$
>
> $\quad$ 其中
>
> $$C(N) = \prod_{p > 2} \left( 1 - \frac{1}{(p-1)^2} \right) \prod_{\substack{p | N \\ p > 2}} \frac{p-1}{p-2}.$$

简要证明:

$\quad$ 我们首先便有

$$|\mathscr{A}^{[b]}| \ge S(\mathscr{A}; \mathfrak{P}, N^{\frac{1}{b+1}}) + O(\log N). \quad (3.1)$$

$\quad$ 而式子(3.1)是基于以下的判断.

$\qquad$ 若$(a, P(N^{\frac{1}{b+1}})) = 1$,也就是$a$中的素因子都大于$N^{\frac{1}{b+1}}$,那么自然可知$a \in \mathscr{A}^{[d]}$.

$\qquad$ 而所有如上所示的$a$的数量就是

$$\sum_{\substack{a \in \mathscr{A} \\ (a, P(N^{\frac{1}{b+1}})) = 1}} 1 = S(\mathscr{A}; \mathfrak{P}, N^{\frac{1}{b+1}}).$$

$\qquad$ 但如果$(a, P(N^{\frac{1}{b+1}})) = d > 1$,此时必然有$(a, P(N)) \neq 1$,但仍然可能有$a \in \mathscr{A}^{[d]}$.

$\qquad$ 这时我们再回顾以下我们对于$\mathscr{A}$的定义,于是我们发现

$$d | N - a = p,$$

$\qquad$ 因此只有可能是$(a, P(N)) = p$,即$p | N$.而满足上面条件的$a$的数量为

$$\#\{a : (a, P(N)) \neq 1\} \le \#\{p : p | N\} = v(N) \ll \log N.$$

$\qquad$ 综上便可以得到(3.1).

$\quad$ 接下来我们再用定理2中的(2.9),此处可取$\alpha = 1/2, B = 38$,并且可知

$$W(z) = 2C(N) \frac{\text{e}^{-\gamma}}{\log z} \left( 1 + O\left( \frac{\log\log N}{\log z} \right) \right),$$

$\quad$ 以及

$$X = \frac{N}{\log N},$$

$\quad$ 因此我们便得到了

$$\begin{split}
    S(\mathscr{A}; \mathfrak{P}, N^{1/v}) & \ge XW(N^{1/v})\left\{ f\left(\frac{v\log X}{2\log N} \right) + O\left( \frac{A}{\log^{1/14} X} \right) \right\} \\
    \\
    & = 2vC(N) \frac{N}{\log^2 N}\text{e}^{-\gamma}\left( 1 + O(v\frac{\log\log N}{\log N}) \right) \\
    \\
     & \qquad \qquad \times \left\{ f(\frac{v}{2} - \frac{v\log\log N}{2\log N}) + O(\frac{A v^{1/14}}{\log^{1/14} N}) \right\} \\
    \\
    & = 2vC(N)\frac{N}{\log^2 N}\text{e}^{-\gamma}f\left( \frac{v}{2} \right)(1 +o(1)),
\end{split}$$

$\quad$ 其中$v = b + 1$,然后由(2.10)处可得到$f(u)$的一些信息,即有

$$\left\{ \begin{array}{l}
    f(u) = 0, \ 1 \le u \le 2, \\
    \\
    f(u) > 0, \ u > 2.
\end{array} \right.$$

$\quad$ 因此为了让主项不为0,我们这里需要让$v = 5$,也就是$b = 4$.于是便有

$$|\mathscr{A}^{[4]}| \ge (1 + o(1)) \cdot 8 \log \frac{3}{2} \cdot C(N) \frac{N}{\log^2 N} > 0.$$

$\quad$ 由此我们便证明了命题"1+4". <span style = "float: right"> $\square$ </span>

#### 定理"1+3"

在证明定理"1+4"的过程中,(3.1)起了非常大的作用,而Kuhn提出了"加权筛法",对(3.1)进行进一步的优化.其表现为以下的引理.

##### Kuhn权函数

> **引理1:**
>
> $\quad$ 设$b$为正整数,$v$为正数,且$v > b \ge 1$,我们有
>
> $$|\mathscr{A}^{[b]}| \ge \sum_{\substack{ a \in \mathscr{A} \\ (a, P(N^{\frac{1}{v}})) = 1 }} \left( 1 - \frac{1}{2} \rho_1(a) \right) + O\left( N^{1 - \frac{1}{v}} \right), \quad (4.1)$$
>
> $\quad$ 其中
>
> $$\rho_1(a) = \sum_{\substack{ p_1 | a, \ p_1 \nmid N \\ N^{1/v} \le p_1 < N^{1/b} }} 1. \quad (4.2)$$

直觉理解:

$\quad$ 在(4.1)中,右侧的求和式的下标中,我们让$a$只有大于$N^{\frac{1}{v}}$的素因子,在这种情况下,$a$当然有可能不在$\mathscr{A}^{[b]}$中,因此我们需要用权函数$(4.2)$"消去"那些臃肿的数(也就是多于$b$个素因子的数).

$\quad$ "消去"的方式就是,让那些臃肿的数的权系数是非负的;而对于那些符合要求的数,我们让它的权系数是正的.这样就能初步满足我们的一些需求了.

$\quad$ 并且在这种操作之下,我们实际上允许右侧求和式中至多$b$个素因子的数$a$,它的最小的素因子是可能小于$N^{\frac{1}{b}}$,因为其只需要大于$N^{\frac{1}{v}}$即可.在这种意义下,(4.1)确实要比(3.1)更更加精细化一些.

简要证明:



#### 参考文献

[1] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P197-P220.

[2] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P320-P338.

[3] Ntriantafilidis. A quick guide to Chen’s theorem[Z]. https://ntriantafilidis.wordpress.com/2014/09/22/a-quick-guide-to-chens-theorem/.

[4] T. Tao. 254A, Supplement 5: The linear sieve and Chen’s theorem (optional)[Z]. https://terrytao.wordpress.com/2015/01/29/254a-supplement-5-the-linear-sieve-and-chens-theorem-optional/.

[5] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[6] Motohashi Y. An Overview of the Sieve Method and its History[J]. arXiv preprint math/0505521, 2005.