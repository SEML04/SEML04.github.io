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
> $$(n, n+2) = (\mathscr{P}_7, \mathscr{P}'_7).$$
>
> **Brun's sieve:**
>
> $\quad$ 存在无穷个素数$p$,使得:
>
> $$p+2 = \mathscr{P}_7.$$
>
> $\quad$ 其中$\mathscr{P}_7$表示至多$7$个质因子的数.

注:后续文中的$\mathscr{A}^{[b]}$表示的是$\mathscr{A}$中所有至多$b$个素因子的数,因此它是一个集合,而上面的$P=\mathscr{P}_b$表示的是一个数,也就是$\mathscr{A}^{[b]}$中的一个元素,因此两者的含义并不相同.

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
> $$\sum_{d \le D} \mu^2(d) 3^{\nu(d)} \max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| \ll x\log^{-A}x, \quad (2.4)$$
>
> $\quad$ 其中$D = x^{\frac{1}{2}}\log^{-B_1}x$.

**简要证明:**

$\quad$ 设$\lambda = A + 17$,而这个莫名其妙的$\lambda$和推论中的$B$在最后一步的估计中可以确定.

$\quad$ 于是便可以得到

$$\begin{split}
    \sum_{d \le D} \sim & = \sum_{\substack{d \le D \\ 3^{\nu(d)} \ge \log^{\lambda} x}} \sim + \sum_{\substack{d \le D \\ 3^{\nu(d)} < \log^{\lambda} x}} \sim \\
    \\
    & \ll \log^{-\lambda} x \sum_{\substack{d \le D \\ 3^{\nu(d)} \ge \log^{\lambda} x}} \mu^2(d) 3^{2\nu(d)} \max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| + \log^{\lambda} x \cdot R(D, x) \\
    \\
    & =: S + T.
\end{split}$$

$\quad$ 对$T$而言由(2.3)便有

$$T \ll x \log^{-\lambda - B_1 + 15} x = \log^{-A} x.$$

$\quad$ 而在$S$中,记$d(n)$为除数函数,易验证有

$$\mu^2(n) 3^{2 \nu(n)} \le d^4(n),$$

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

> **定理1(Jurkat-Richert定理):**
>
> 在条件$\Omega_1$和$\Omega_2(1)$成立的条件下,设$2 \le z \le X$,则有以下估计
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \le XW(z)\left\{ F\left( \frac{\log X^2}{\log z} \right) + O\left( \frac{A}{\log^{1/14} X} \right) \right\} + \sum_{\substack{d | P(z) \\ d < X^2}} 3^{\nu(d)}|r_d|, \quad (2.5)$$
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \ge XW(z)\left\{ f\left( \frac{\log X^2}{\log z} \right) + O\left( \frac{A}{\log^{1/14} X} \right) \right\} - \sum_{\substack{d | P(z) \\ d < X^2}} 3^{\nu(d)}|r_d|. \quad (2.6)$$

以及确定余项的阶后,可由定理1可推出的一个定理

> **定理2:**
>
> $\quad$ 在条件$\Omega_1$和$\Omega_2(1)$成立的条件下,设$2 \le z \le X$,若存在$0 < \alpha \le 1$以及$B \ge 0$,使得有
>
> $$\sum_{\substack{d \le X^\alpha \log^{-B} X \\ (d, \mathfrak{P}) = 1}} \mu^{2}(d) 3^{\nu(d)}|r_d| \ll \frac{X}{\log^2 X}, \quad (2.7)$$
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

其中$\mathbf{1}_S$是集合$S$上的示性函数.并且对于定理1和定理2而言,此处的$F$和$f$已经是最优选择,并且与筛法的奇偶性检验有关,详情可以看Terence Tao的博客$^{[4]}$.

#### 定理"1+4"

我们记

$$\mathscr{A}^{[b]} = \mathscr{A}^{[b]}(N) := \{ a : a \in \mathscr{A}, \nu(a) \le b \},$$

其中<span style="color: rgb(230,51,51)">$\nu(d)$是记重数的</span>(由于之前出现$\nu(d)$时总有$\mu(d) \neq 0$,因此记不记重数都是一致的,但此处需要特意说明).现在我们便可以证明

> **定理"1+4":**
>
> $\quad$ 命题"1+4"成立,更准确地,我们有
>
> $$|\mathscr{A}^{[4]}| > 3.24 C(N) \frac{N}{\log^2 N},$$
>
> $\quad$ 其中
>
> $$C(N) = \prod_{p > 2} \left( 1 - \frac{1}{(p-1)^2} \right) \prod_{\substack{p | N \\ p > 2}} \frac{p-1}{p-2}.$$

**简要证明:**

$\quad$ 我们首先便有

$$|\mathscr{A}^{[b]}| \ge S(\mathscr{A}; \mathfrak{P}, N^{\frac{1}{b+1}}) + O(\log N). \quad (3.1)$$

$\quad$ 而式子(3.1)是基于以下的判断:

$\qquad$ 若$(a, P(N^{\frac{1}{b+1}})) = 1$,也就是$a$中的素因子都大于$N^{\frac{1}{b+1}}$,那么自然可知$a \in \mathscr{A}^{[d]}$.

$\qquad$ 而所有如上所示的$a$的数量就是

$$\sum_{\substack{a \in \mathscr{A} \\ (a, P(N^{\frac{1}{b+1}})) = 1}} 1 = S(\mathscr{A}; \mathfrak{P}, N^{\frac{1}{b+1}}).$$

$\qquad$ 但如果$(a, P(N^{\frac{1}{b+1}})) = d > 1$,此时必然有$(a, P(N)) \neq 1$,但仍然可能有$a \in \mathscr{A}^{[d]}$.

$\qquad$ 这时我们再回顾以下我们对于$\mathscr{A}$的定义,于是我们发现

$$d | N - a = p,$$

$\qquad$ 因此只有可能是$(a, P(N)) = p$,即$p | N$.而满足上面条件的$a$的数量为

$$\#\{a : (a, P(N)) \neq 1\} \le \#\{p : p | N\} = \nu(N) \ll \log N.$$

$\qquad$ 综上便可以得到(3.1).$\square$

$\quad$ 接下来我们再用定理2中的(2.9),此处可取$\alpha = \dfrac{1}{2}, B = 38$,并且可知

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
    & = 2vC(N)\frac{N}{\log^2 N}\text{e}^{-\gamma}f\left( \frac{v}{2} \right)(1 +o(1)), \quad (3.2)
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

**直观理解:**

$\quad$ 在(4.1)中,右侧的求和式的下标中,我们让$a$只有大于$N^{\frac{1}{v}}$的素因子,在这种情况下,$a$当然有可能不在$\mathscr{A}^{[b]}$中,因此我们需要用权函数$(4.2)$"消去"那些臃肿的数(也就是多于$b$个素因子的数).

$\quad$ "消去"的方式就是,让那些臃肿的数的权系数是非正的;而对于那些符合要求的数,我们让它的权系数是正的.这样就能初步满足我们的一些需求了.

$\quad$ 并且在这种操作之下,我们实际上允许右侧求和式中至多$b$个素因子的数$a$,它的最小的素因子是可能小于$N^{\frac{1}{b}}$,因为其只需要大于$N^{\frac{1}{v}}$即可.在这种意义下,(4.1)确实要比(3.1)更加精细化一些.

**简要证明:**

$\quad$ 为了让证明更加易于理解,我们引入以下示性函数

$$\lambda^{(b)}(a) = \left\{ \begin{array}{ll}
    1, & \nu(a) \le b, \\
    0, & \nu(a) > b.
\end{array} \right.$$

$\quad$ 于是我们有

$$|\mathscr{A}^{[b]}| \ge \sum_{\substack{ a \in \mathscr{A},\ (a, N) = 1 \\ (a, P(N^{\frac{1}{v}})) = 1 }} \mu^2(a) \lambda^{(b)}(a) + O(N^{1 - \frac{1}{v}}). \quad (4.3)$$

$\quad$ 通过加入$\mu(a) \neq 1$的条件,我们才能更加方便的判断$\lambda^{(b)}(a)$与$1 - \frac{1}{2} \rho_1(a)$的大小关系.

$\quad$ 而(4.3)式是基于以下的判断:

$\qquad$ 由于$\lambda^{(b)}(a)$的定义,我们可以直接知道的是

$$|\mathscr{A}^{[b]}| = \sum_{a \in \mathscr{A}} \lambda^{(b)}(a) \ge \sum_{\substack{ a \in \mathscr{A} \\ (a, P(N^{\frac{1}{v}})) = 1 }} \lambda^{(b)}(a).$$

$\qquad$ 然后根据(3.1)中一样的讨论,我们便有

$$\begin{split}
    |\mathscr{A}^{[b]}| & \ge \sum_{\substack{ a \in \mathscr{A},\ (a, N) = 1 \\ (a, P(N^{\frac{1}{v}})) = 1 }} \lambda^{(b)}(a) + O(\nu(N)) \\
    \\
    & = \sum_{\substack{ a \in \mathscr{A},\ (a, N) = 1 \\ (a, P(N^{\frac{1}{v}})) = 1 }} \mu^2(a) \lambda^{(b)}(a) + \sum_{\substack{ a \in \mathscr{A},\ (a, N) = 1 \\ (a, P(N^{\frac{1}{v}})) = 1 \\ \mu(a)}} \lambda^{(b)}(a) + O(\nu(N)).
\end{split}$$

$\qquad$ 接下来我们再来估计第二项的阶.而实际上第二项中即为

$$\#\{ a = p_1^2 p_2 \cdots p_{k} \in \mathscr : k \ge b - 1,\ p_i > N^{\frac{1}{v}},\ p_i \nmid N \}.$$

$\qquad$ 其中$p_i$之间不需要互异.但是当我们将$p_1^2$替换为$p_1$后,元素个数仍然不变,并且后者的$a$均是小于$N^{1 - \frac{1}{v}}$,因为我们除掉了一个大于$N^{\frac{1}{v}}$的数$p_1$.

$\qquad$ 因此我们便得知,第二项为$O(N^{1 - \frac{1}{v}})$,而第三项也可以被其吸收,从而得到了(4.3).$\square$

$\quad$ 与(4.3)类似的,我们可以得到

$$\sum_{\substack{ a \in \mathscr{A} \\ (a, P(N^{\frac{1}{v}})) = 1 }} \left( 1 - \frac{1}{2} \rho_1(a) \right) = \sum_{\substack{ a \in \mathscr{A},\ (a, N) = 1 \\ (a, P(N^{\frac{1}{v}})) = 1 }} \mu^2(a) \left( 1 - \frac{1}{2} \rho_1(a) \right) + O(N^{1-\frac{1}{v}}).$$

$\quad$ 于是在

$$\mu^2(a) = 1,\ (a, P(N^{\frac{1}{v}})) = 1,\ (a, N) = 1$$

$\quad$ 的条件下,我们有

$\qquad$ (1)若$\nu(a) \le b$,有

$$\lambda^{[b]}(a) = 1 \ge 1 - \frac{1}{2} \rho_1(a),$$

$\qquad$ (2)若$\nu(a) \ge b + 1$,则$\rho_1(a) \ge 2$,于是有

$$\lambda^{[b]}(a) = 0 \ge 1 - \frac{1}{2} \rho_1(a).$$

$\quad$ 至此我们便证明了该引理.<span style = "float: right"> $\square$ </span>

##### 证明定理"1+3"

有了Kuhn权函数的铺垫后,我们便可以着手证明定理"1+3"了.

> **定理"1+3":**
>
> $\quad$ 命题"1+3"成立,且更准确地,我们有
>
> $$|\mathscr{A}^{[3]}| > 2.64C(N) \frac{N}{\log^2 N}.$$

**简要证明:**

$\quad$ 在引理1中,我们取$b = 3,\ v = 10$,于是我们有

$$|\mathscr{A}^{[3]}| \ge S(\mathscr{A}; \mathfrak{P}, N^{\frac{1}{10}}) - \frac{1}{2} S_1 + O(N^{\frac{9}{10}}),$$

$\quad$ 其中

$$S_1 = \sum_{\substack{ p_1 \nmid N \\ N^{1/10} \le p_1 < N^{1/3} }} S(\mathscr{A}_{p_1}; \mathfrak{P}, N^{\frac{1}{10}}).$$

$\quad$ 由定理"1+4"的证明中,也就是(3.2),我们得知

$$S(\mathscr{A}; \mathfrak{P}, N^{\frac{1}{10}}) \ge 20C(N) \frac{N}{\log^2 N} \text{e}^{-\gamma} f(5) (1 + o(1)), \quad (4.4)$$

$\quad$ 其中$5\text{e}^{-\gamma} f(5)$是可以算出近似值的,由软件计算出的数值解约为$2.802$.

$\quad$ 紧接着,我们再利用上界筛(2.5)来估计$S_1$中每一项的上界,我们可以得到的是

$$\begin{split}
    S(\mathscr{A}_{p_1}; \mathfrak{P}, N^{\frac{1}{10}}) & \le 20C(N) \frac{N}{\log^2 N} \frac{\text{e}^{-\gamma}}{p_1} F\left(5 - 10\frac{\log p_1}{\log N}\right) (1 + o(1)) \\
    \\
    & \qquad\qquad + \sum_{\substack{d < \xi^2 \\ d | P(N^{1/10})}} 3^{\nu(d)} |r_{p_1 d}|,
\end{split}$$

$\quad$ 其中

$$\xi^2 = \frac{1}{p_1} N^{\frac{1}{p_1}} \log^{-38} N,\quad N^{\frac{1}{10}} \le p_1 < N^{\frac{1}{3}},\quad p_1 \nmid N.$$

$\quad$ 于是最后得到

$$\begin{split}
    \displaystyle S_1 \le 20 (1 + o(1)) C(N) & \frac{N}{\log^2 N} \text{e}^{-\gamma} \sum_{\substack{ p_1 \nmid N \\ N^{1/10} \le p_1 < N^{1/3} }} \frac{1}{p_1} F\left(5 - 10\frac{\log p_1}{\log N}\right)  \\
    \\
    & + \sum_{d \le N^{\frac{1}{2}}\log^{-38} N } \mu^2(d) 3^{\nu(d)} |r_d|,
\end{split}$$

$\quad$ 上式中,对余项可以用Bombieri-Vinogradov定理的推论给限制住,以及求和式中的$p_1$可以用素数定理转换为变量$u$,从而将求和式变为积分式.也就是

$$\begin{split}
    \displaystyle S_1 \le 20 (1 + o(1)) C(N) & \frac{N}{\log^2 N} \text{e}^{-\gamma} \int_{N^{1/10}}^{N^{1/3}} \frac{1}{u\log u} F\left(5 - 10\frac{\log u}{\log N}\right) \text{d}u \\
    \\
    & + O\left( \frac{N}{\log^3 N} \right),
\end{split}$$

$\quad$ 其中由于$N^{\frac{1}{10}} \le u < N^{\frac{1}{3}}$,故

$$\frac{5}{3} < 5 - 10\frac{\log u}{\log N} \le 4,$$

$\quad$ 再结合函数$F$的性质,因此

$$\begin{split}
    5 \text{e}^{-\gamma} \int_{N^{1/10}}^{N^{1/3}} \frac{1}{u\log u} & F\left(5 - 10\frac{\log u}{\log N}\right) \text{d}u = 2 \int_3^4 \frac{5 \text{d}t}{t(5-t)} \int_2^{t-1} \frac{\log(s-1)}{s} \text{d}s \\
    \\
    & \qquad\qquad + 2\log 8. \quad (4.5)
\end{split}$$

$\quad$ 利用软件可计算得到上述数值解约为$4.278$.

$\quad$ 于是结合(4.4)与(4.5)的数值解的结果,便可证得定理"1+3".<span style = "float: right"> $\square$ </span>

从上面的证明中可以发现的是,加权之后我们需要对更多的部分进行估计,并且余项也变得复杂起来,因此也要小心估计余项,而不能直接舍去.

#### 陈景润定理

最后我们该证明陈景润定理了,而证明的关键便是,陈景润提出了一个新的加权筛法,它能将$p+p_1p_2p_3$形式的数给剔除,从而证得了定理"1+2".首先我们便先了解一下陈景润权函数.

##### 陈景润权函数

> **引理2:**
>
> $\quad$ 设$b$是正整数,$v$是正数,且有$v > b \ge 2$,我们有
>
> $$|\mathscr{A}^{[b-1]}| \ge \sum_{\substack{ a \in \mathscr{A} \\ (a, P(N^{\frac{1}{v}})) = 1 }} \left( 1 - \frac{1}{2} \rho_1(a) - \frac{1}{2} \rho_2(a) \right) + O\left( N^{1 - \frac{1}{v}} \right), \quad (5.1)$$
>
> $\quad$ 其中$\rho_1$便是引理1中的Kuhn权函数,而$\rho_2(a) = 1$当且仅当
>
> $$a = p_1 p_2 \cdots p_b, \quad N^{\frac{1}{v}} \le p_1 < N^{\frac{1}{b}} \le p_2 < \cdots < p_b, \quad (a, N) = 1.$$

**直观理解:**

$\quad$ 从$\rho_2$的构造可以知道,我们的想法就是先用$\rho_1$筛掉过于臃肿的数,最后再用$\rho_2$筛掉那些有且仅有$b$个不同素因子的数,从而留下的元素自然便是在$\mathscr{A}^{[b-1]}$中.

$\quad$ 并且引理2的证明也与引理1差不多.略有不同的地方就是在最后(2)处的讨论.

$\quad$ 在此处,若$\nu(a) \ge b$,则必然有$\rho_1(a) \ge 1.$

$\qquad$ (i)若$\rho_1(a) \ge 2$,则肯定有

$$\lambda^{(b-1)}(a) = 0 \ge 1 - \frac{1}{2}\rho_1(a) - \frac{1}{2}\rho_2(a),$$

$\qquad$ (ii)若$\rho_1(a) = 1$,则此时$a$的素因子必各不相同,故有$\rho_2(a) = 1$,从而

$$\lambda^{(b-1)}(a) = 1 - \frac{1}{2}\rho_1(a) - \frac{1}{2}\rho_2(a) = 0.$$

$\quad$ 于是便也能够证得引理2.可以知道的是,在引理2中,我们对$a$的素因子有了更加严格的限制,从而能做出更强的结果.

##### 证明陈景润定理

> **陈景润定理:**
>
> $\quad$ 命题"1+2"成立,更准确地,我们有
>
> $$|\mathscr{A}^{[2]}| > 0.62 C(N) \frac{N}{\log^2 N}.$$

**简要证明:**

$\quad$ 在引理中,我们仍然取$b = 3,\ v = 10$,并且结合定理"1+3"的结果,我们有

$$|\mathscr{A}^{[2]}| \ge 2.64 (1+o(1)) C(N) \frac{N}{\log^2 N} + O\left(\frac{N}{\log^3 N}\right) - \frac{1}{2} S_2, \quad (5.2)$$

$\quad$ 其中

$$\begin{split}
    S_2 & = \sum_{\substack{(p_1p_2, N) = 1 \\ N^{\frac{1}{10}} \le p_1 < N^{\frac{1}{3}} \le p_2 < \left(\frac{N}{p_1}\right)^{\frac{1}{2}} }} \sum_{\substack{ a \in \mathscr{A},\ a = p_1p_2p_3 \\ \\ p_2 < p_3,\ p_3 \nmid N }} 1 \\
    \\
    & = \sum_{\substack{(p_1p_2, N) = 1 \\ N^{\frac{1}{10}} \le p_1 < N^{\frac{1}{3}} \le p_2 < \left(\frac{N}{p_1}\right)^{\frac{1}{2}} }} \sum_{\substack{ p = N - p_1p_2p_3 \\ \\ p_2 < p_3 < \frac{N}{p_1 p_2}, p_3 \nmid N }} 1.
\end{split}$$

$\quad$ 于是我们又将$S_2$转化成了求素数$p$的个数的问题,因此我们再构造与之相关的筛函数,再用Selberg上界筛法来进行估计.我们构造如下

$$\mathscr{E} = \left\{ e : e = p_1 p_2, p_1 < N^{\frac{1}{3}} \le p_2 < \left(\frac{N}{p_1}\right)^{\frac{1}{2}}, (p_1 p_2, N)=1 \right\},$$

$$\mathscr{L} = \{ l : l = N - ep, e \in \mathscr{E}, ep \le N \}.$$

$\quad$ 从而$S_2$的大小是不超过$\mathscr{L}$中的素数个数.并且

$$|\mathscr{E}| < N^{\frac{2}{3}},\quad e \ge N^{\frac{13}{30}},\quad \forall e \in \mathscr{E}.$$

$\quad$ 则推出$\mathscr{L}$中不超过$N^{\frac{13}{30}}$的元素个数为$O(N^{\frac{2}{3}})$.于是

$$S_2 \le S(\mathscr{L}; \mathfrak{P}, z) + O(N^{\frac{2}{3}}), \quad z \le N^{\frac{13}{30}}. \quad (5.3)$$

$\quad$ 对于这个筛函数,我们取

$$X = \sum_{e \in \mathscr{E}} \text{li} \frac{N}{e}, \quad \omega(d) = \frac{d}{\varphi(d)} \text{ if } \mu(d) \neq 0,\ (d, N) = 1.$$

$\quad$ 从而取

$$B_1 = 248,\quad z^2 = D = N^{\frac{1}{2}} \log^{-B_1} N,$$

$\quad$ 由Selberg上界筛法便可以得到

$$S(\mathscr{L}; \mathfrak{P}, D^{\frac{1}{2}}) \le 8(1 + o(1)) C(N) \frac{X}{\log N} + R_1 + R_2, \quad (5.4)$$

$\quad$ 我这里直接承认以下对余项的估计(其中$R_1$的估计需要用到稍微推广一点后的Bombieri-Vinogradov定理),即

$$\begin{split}
    R_1 & = \displaystyle\sum_{\substack{ d \le D \\ (d, N) = 1 }} \mu^2(d) 3^{\nu(d)} \left| \sum_{\substack{ e \in \mathscr{E} \\ (e, d) = 1 }} E(N; e, d, N) \right| \\ 
    \\
    & = \displaystyle\sum_{\substack{ d \le D \\ (d, N) = 1 }} \mu^2(d) 3^{\nu(d)} \left| \sum_{\substack{ e \in \mathscr{E} \\ (e, d) = 1 }} \left( \sum_{\substack{ ed \le N \\ ep \equiv N \text{ mod d} }} 1 - \frac{1}{\varphi(d)} \text{li} \frac{N}{e} \right) \right| \\
    \\
    & \ll \frac{N}{\log^3 N}. \\
    \\
    R_2 & = \sum_{\substack{ d \le D \\ (d, N) = 1 }} \frac{\mu^2(d) 3^{\nu(d)}}{\varphi(d)} \sum_{\substack{ e \in \mathscr{E} \\ (e, d) > 1 }} \text{li} \frac{N}{e} \ll N^{\frac{9}{10} + 3\epsilon}.
\end{split}$$

$\quad$ 最后再(5.4)中,我们还需要确定$X$,而其结果可以由素数定理表示为

$$\begin{split}
    X & = (1 + o(1)) \sum_{e \in \mathscr{E}} \frac{N}{e \log \frac{N}{e}} \\
    \\ 
    & = (1 + o(1)) \frac{N}{\log N} \int_{1/10}^{1/3} \frac{\log(2 - 3u)}{u(1 - u)} \text{d} u \\
    \\
    & \approx 0.491 (1 + o(1)) \frac{N}{\log N}. \quad (5.5)
\end{split}$$

$\quad$ 最后综合(5.2)-(5.5)便可以证得陈景润定理.<span style = "float: right"> $\square$ </span>

##### 孪生素数猜想版本的陈景润定理

上面关于Goldbach猜想版本的陈景润定理的证明过程几乎可以完全照搬到孪生素数猜想上,唯一的区别在于我们初始筛函数的一些信息需要更改,事实上这个结果也还可以用在很多其他关于素数猜想的弱版本上.而这就是将筛法过程抽象出来的一个优势所在,我只需要验证我更改的这些信息是否满足我证明过程中需要的条件即可.下面就是孪生素数猜想版本的陈景润定理

> **陈景润定理:**
>
> $\quad$ 存在无穷多个素数$p$,使得$p+2$至多是两个素数的乘积.
>
> $\quad$ 更精确地,我们有
>
> $$\sum_{\frac{x}{2} \le n \le x - 2} \Lambda(n) \mathbf{1}_{\mathscr{A}^{[2]}} (n+2) \mathbf{1}_{(n+2, P(x^{1/8})) = 1} \gg \frac{x}{\log x}.$$

上面的版本是Terence Tao博客上$^{[4]}$的版本,或者也可以参考Terence Tao参考的Friedlander-Iwaniec的书,但这本书我还并没有看.👻

#### 总结

GPY的筛法主要是对孪生素数猜想起作用的,其主要想法是对Selberg筛自然的一个权(并不是Kuhn和陈景润后续对Selberg筛法添加的权)进行了一个截断,其成功依赖于对admissible sets的分析,而这种结构更适用于素数间隔问题,而非素数的加法组合.并且GPY筛法同样没有办法绕过奇偶性检验的障碍(这个好像在Polymath的论文中有所介绍),因此GPY筛法在Goldbach猜想并没有直接的应用(根据我浅薄的认知应该是还没有的🥺).因此接下来应该会继续回到孪生素数的研究中.

那么接下来需要更新的内容至少还有一篇***Maynard的成果***.~~Polymath的变分想法疑似有点变态了,可能就Pass了~~其次我还是想把***Halberstam的第二章***,也就是引言部分的东西写一点.为了把这几个部分融合起来,那么***Terence Tao关于筛法的那篇博客***$^{[5]}$还得再研究研究了.以及就是对于***Serre的GTM 7***,内容如果不做点整理和分析的话,感觉会和看筛法圣经一样根本不入脑,因为这些都没有习题啊😭.

但无论是哪个,只能说都是一场硬战了😭😭😭.

<center>
<img src="/image/chen-s-theorem/T2.gif" width="30%">
</center>

#### 参考文献

[1] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P197-P220.

[2] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P320-P338.

[3] Ntriantafilidis. A quick guide to Chen’s theorem[Z]. https://ntriantafilidis.wordpress.com/2014/09/22/a-quick-guide-to-chens-theorem/.

[4] T. Tao. 254A, Supplement 5: The linear sieve and Chen’s theorem (optional)[Z]. https://terrytao.wordpress.com/2015/01/29/254a-supplement-5-the-linear-sieve-and-chens-theorem-optional/.

[5] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[6] Motohashi Y. An Overview of the Sieve Method and its History[J]. arXiv preprint math/0505521, 2005.