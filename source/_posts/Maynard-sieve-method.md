---
title: 论文阅读 -- Small gaps between primes (Maynard) & Bounded gaps between primes (Yitang Zhang)
mathjax: true
date: 2025-04-15 14:51:06
categories:
    - 论文阅读
tags:
    - Number Theory
    - Sieve Methods
    - Paper Reading
    - Prime Twins Conjecture
    - Prime k-Tuples Conjecture
---

#### 引言

如果关注孪生素数猜想的话,我们知道的是,在Goldston,Pintz,Yildirim对admissible k-tuple筛选,得到了一些突破性的成果(这些我在[论文阅读之翻译篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/01/15/GPY-sieve-method/index.html?_sw-precache=5476e5e99aeb83a45fdabbd20df6d9a4)和[论文阅读之重点提炼篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/02/07/GPY-sieve-method-2/index.html?_sw-precache=1f04d5f0200d9ca0f15c7b8db26977a7)中有简单的记录)之后,张益唐对GPY筛法进行进一步的讨论,最终得到了张益唐定理,引发了数论界对素数有界间隙的探索.

而在这个过程之中,Maynard的工作又发挥了相当大的作用.他引入$k$维Selberg权函数的概念,对GPY权函数进行了拓展,并且将素元组猜想也向前推进了一大步.后续Polymath的工作也是基于这个之上,在承认Elliott-Halberstam猜想的情况下,Maynard的结果仍然是最优的,而承认广义Elliott-Halberstam猜想后,我们才得到孪生素数间隙上界为6的这个结果.

因此在本篇文章中,我将(尝试)对{% label Maynard定理 blue %}做一个简单的记录,以及记录一点{% label Maynard-Tao权函数 blue %}的一些想法(因为实际上我还没有全部掌握😭,证明所取函数是最优的这一块我也没有深入学习),而最后,我看能不能简单再记录一下张益唐论文中最重要的一些突破点(组合杀我😭).

Maynard的论文为:[https://arxiv.org/pdf/1311.4600](https://arxiv.org/pdf/1311.4600),张益唐的论文为:[https://www.jstor.org/stable/24522787](https://www.jstor.org/stable/24522787).

总之,启动启动!全部启动!不学习永远学不会!<span style="color: rgb(230,51,51)">但注意的是,有一些符号我稍稍做了一点修改,可能和原论文并不一致.</span>

<center>
<img src="/image/Maynard-sieve-method/T1.jpg" width="30%">
</center>

#### 成果比较与陈述

在此前,对于<span style="color: rgb(230,51,51)">孪生素数猜想</span>而言,我们**无条件**的结果的最大突破就是张益唐利用GPY筛法得到的

$$\liminf_{n} (p_{n+1} - p_n) \le 70000000,$$

然后经过Polymath的工作后,最终将无条件下的上界缩小为4680.

而在**假设Elliott-Halberstam猜想成立**的情况下,Goldston,Pintz,Yildirim得到的结果为

$$\liminf_{n} (p_{n+1} - p_n) \le 16.$$

而对于<span style="color: rgb(230,51,51)">素元组猜想</span>而言,GPY筛法的局限性就体现出来了(这在GPY论文中也承认了这一点),也就是它无法很好地寻找两个以上素数的有界间隙.使用GPY筛法,即使在假设Elliott-Halberstam猜想成立的情况下,我们也只能得到

$$\liminf_{n} \frac{p_{n+2} - p_n}{\log p_n} = 0.$$

而素元组猜想说的是:

> **素元组猜想(Prime k-tuples conjecture):**
>
> $\quad$ 设$\mathcal{H} = \{ h_1, \cdots, h_k \}$是admissible,那么存在无穷多的正整数$n$使得$n+h_i$都是素数.

因此Maynard论文中给出了一种新的权函数构造方式,将很好地回答GPY论文中给出的第2个和第3个问题,见[论文阅读之翻译篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/01/15/GPY-sieve-method/index.html?_sw-precache=5476e5e99aeb83a45fdabbd20df6d9a4),并且往往在数值上给出更优的结果.而在这篇论文中,我们最终得到了一些很神奇的结果.

> **定理1.1:**
>
> $\quad$ 令$m \in \mathbb{N}$,我们有
>
> $$\liminf_n(p_{n+m} - p_n) \ll m^3 \text{e}^{4m}.$$

可以发现的是,这个结论比之前的结果都要强得多,但是它距离素元组猜想仍然仍然还有一段距离.这个定理只能说明对于任意自然数$m \ge 2$,存在无穷多个长度为$m$的素元组,但是并不能说明素元组猜想是正确的.但是我们有以下的定理:

> **定理1.2:**
>
> $\quad$ 令$m \in \mathbb{N}$,而$r$是与$m$有关的充分大的正整数,令$\mathcal{A} = \{a_1, \cdots, a_r\}$为一列各不相同的整数,再记
>
> $$\mathcal{L} = \{ \mathcal{H} : \mathcal{H} = \{h_1, \cdots, h_m \} \subset \mathcal{A} \},$$
>
> $$\mathcal{L}_1 = \{ \mathcal{H} \in \mathcal{L} : \text{ 存在无穷多个} n \text{使得} n+h_i \text{是素数}, \forall h_i \in \mathcal{H} \},$$
>
> $\quad$ 于是我们有
>
> $$\frac{\#\mathcal{L}_1}{\#\mathcal{L}} \gg_m 1.$$

注意,定理1.2中的$\gg$并不是远大于的意思,而是存在与$m$有关的常数$C_m$,使得

$$1 < C_m \cdot \frac{\mathcal{L}_0}{\mathcal{L}},$$

这就告诉我们,满足素$m$元组猜想的$\mathcal{H}$的测度在某种意义下(与$\mathcal{H}$可能的所有排列方式而言)并不是$0$.

回到一开始GPY筛法的局限性,我们有

> **定理1.3:**
>
> $\quad$ 无条件地,我们有
>
> $$\liminf_{n} (p_{n+1} - p_n) \le 600.$$

张益唐定理依赖于将<span style="color: rgb(123,104,238)">素数的分布水平(the level of distribution),也就是$\vartheta$</span>稍稍推广至$\frac{1}{2}+\epsilon$,从而根据GPY论文中的结论便可以得到有界间隙的证明,而这用到的是Bombieri-Vinogradov定理的一种弱化形式.而定理1.3将仅依赖于Bombieri-Vinogradov定理,并且其证明过程实际上是较为初等的,并没有太多的组合方法.以及我们在有条件的情况下,有

> **定理1.4:**
>
> $\quad$ 假设Elliott-Halberstam猜想成立的情况下,我们有
>
> $$\liminf_{n} (p_{n+1} - p_n) \le 12,$$
>
> $$\liminf_{n} {p_{n+2} - p_n} \le 600.$$

Maynard还证明了,以上定理中的$12$在这种证明框架下已经是最优的了(Polymath似乎也是认可了这一点),但$600$仍然是可以优化的.

#### 构造权函数的基本想法

##### GPY筛法的关键点

<span style="color: rgb(230,51,51)">**GPY筛法的关键想法**</span>是,对于<span style="color: rgb(123,104,238)">一个admissible tuple$\mathcal{H} = \{ h_1, \cdots, h_k \}$</span>,我们考虑

$$S(N, v) = \sum_{N \le n < 2N} \left(\sum_{i = 1}^k \chi_{\mathfrak{P}}(n + h_i) - v\right) \omega_n, \quad (2.1)$$

其中$\chi_{\mathfrak{P}}(n + h_i) = 1$当且仅当$n + h_i$是素数.于是当对于任意足够大的$N$都有$S(N, v) > 0$时,说明存在无穷多个$n$,使得$n+h_i$中至少有$\lfloor v + 1 \rfloor$个素数.

##### 多维Selberg权函数

其中$\omega_n$取Selberg $k$-dimensional weights时,(2.1)被称为$k$维筛法问题,此时权函数的表达式为

$$\omega_n = \left( \sum_{\substack{ d < R \\ d | (n+h_1)\cdots(n+h_k) }} \lambda_d \right)^2,\ \lambda_d = \mu(d) (\log R/d)^k. \quad (2.2)$$

##### GPY权函数

而在Goldston,Pintz,Yildirim的论文中,他们对(2.2)中的$\lambda_d$进行改进,令

$$\lambda_d = \mu(d) F(\log R/d), \quad (2.3)$$

并且最终确定,$F(x)$的最优选择为$x^{k + l}$,于是Goldston,Pintz,Yildirim构造了一种新的权函数,也就是GPY权函数,其表达式为

$$\omega_n = \left( \sum_{\substack{ d < R \\ d | (n+h_1)\cdots(n+h_k) }} \mu(d) (\log R/d)^{k+l} \right)^2, \quad (2.3.1)$$

而GPY筛法能解决的问题以及局限性,在前几篇博客中以及本文前文中也都略有介绍,因此不再赘述.

##### Maynard-Tao权函数

而Maynard则考虑了更一般的GPY权函数,也就是令

$$\omega_n = \left( \sum_{d_i | n+h_i, \ \forall i} \lambda_{d_1, \cdots, d_k} \right)^2. \quad (2.4)$$

而考虑这种权函数并不是只有Maynard和Tao最先想到的,Selberg就提出过使用这种权函数的可能性(太伟大了,Selberg!),以及Goldston和Yildirim也考虑过这种情况.

Maynard选取$\lambda_{d_1, \cdots, d_k}$是形如

$$\lambda_{d_1, \cdots, d_k} \approx \prod_{i = 1}^k \mu(d_i) f(d_1, \cdots, d_k), \quad (2.5)$$

因此我们的权函数便变成了

$$\omega_n = \left( \sum_{d_i | n+h_i, \ \forall i} \prod_{i = 1}^k \mu(d_i) f(d_1, \cdots, d_k) \right)^2. \quad (2.5.1)$$

而命题4.1中告诉了我们$\lambda_{d_1, \cdots, d_k}$更加具体一些的构造,但是这个命题更强大的作用我们放在后面集中说.

> **命题4.0(<span style="color: rgb(123,104,238)">$\lambda_{d_1, \cdots, d_k}$</span>的结构):**
>
> $\quad$ 设$k$为$\mathcal{H}$的大小,素数的分布水平$\vartheta > 0$,则存在常数$\delta > 0$,令<span style="color: rgb(123,104,238)">$R = N^{\vartheta/2 - \delta}$,$W = \prod_{p \le \log\log\log N} p \ll (\log\log N)^2$</span>,且我们记
>
> <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;"><span style="color: rgb(123,104,238)">$\displaystyle\mathcal{R}_k = \left\{ (x_1, \cdots, x_k) \in [0, 1]^{k} : \sum_{i = 1}^{k} x_i \le 1 \right\},$</span><span> $(4.3.1)$ </span></div>
>
> $\quad$ 以及$F$是在$\mathcal{R}_k$上紧支撑的一个固定的<span style="color: rgb(230,51,51)">光滑函数</span>,于是:
>
> $\qquad$ 在$(\prod_{i=1}^{k} d_i, W) = 1$时令
>
> $$\lambda_{d_1, \cdots, d_k} = \left( \prod_{i=1}^k \mu(d_i)d_i \right) \sum_{\substack{ r_1, \cdots, r_k \\ d_i | r_i,\ \forall i \\ (r_i, W) = 1,\ \forall i }} \frac{\mu(\prod_{i=1}^k r_i)^2}{\prod_{i=1}^k \varphi(r_i)} F\left( \frac{\log r_1}{\log R}, \cdots, \frac{\log r_k}{\log R} \right),$$
>
> $\qquad$ 而在$(\prod_{i=1}^{k} d_i, W) \neq 1$时令$\lambda_{d_1, \cdots, d_k} = 0.$

于是现在最大的问题就是确定一个最优的$F(x_1, \cdots, x_k)$了,因此这就变成了一个优化问题,而Polymath后面便用变分法在考虑这个问题了$^{[4]}$.

#### 重要命题

现在我们开始就前面的四个定理进行证明,当然是承认一些命题的前提下.首先我们就来研究刚刚花了大功夫得到的(4.3.1)中的$\lambda_{d_1, \cdots, d_k}$的性质,也就是命题4.1,而这其实也是我最需要承认的一个命题了.但在此之前,我们先定义两个函数,这样就明白命题4.1的作用了.

我们先给定一个固定的剩余类$v_0 \text{ mod W}$,然后定义:

<div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;">
    <span style="color: rgb(123,104,238)">
        $\displaystyle S_1 = \sum_{\substack{ N \le n < 2N \\ n \equiv v_0 \text{ mod } W}} \left( \sum_{d_i | n+h_i,\ \forall i} \lambda_{d_1, \cdots, d_k} \right)^2,$
    </span>
    <span>
        $(4.2)$
    </span>
</div>

<div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;">
    <span style="color: rgb(123,104,238)">
        $\displaystyle S_2 = \sum_{\substack{ N \le n < 2N \\ n \equiv v_0 \text{ mod } W}} \left( \sum_{i=1}^{k} \chi_{\mathfrak{P}}(n+h_i) \right) \left( \sum_{d_i | n+h_i,\ \forall i} \lambda_{d_1, \cdots, d_k} \right)^2.$
    </span>
    <span>
        $(4.3)$
    </span>
</div>

而接下来的命题则告诉我们$S_1$和$S_2$的估计式.

> **命题4.1**
>
> $\quad$ 条件同命题4.0,我们有
>
> $$S_1 = \frac{(1+o(1)) \varphi(W)^k N (\log R)^k}{W^{k+1}} I_k(F),$$
>
> $$S_2 = \frac{(1+o(1)) \varphi(W)^k N (\log R)^{k+1}}{W^{k+1} \log N} \sum_{m=1}^{k} J_k^{(m)}(F),$$
>
> $\quad$ 其中$I_k(F)$和$J_k^{(m)}(F)$都不为$0$,且具体表达式如下:
>
> <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;"><span style="color: rgb(123,104,238)"> $\displaystyle I_k(F) = \int_0^1 \cdots \int_0^1 F(t_1, \cdots, t_k)^2 \text{d}t_1 \cdots \text{d}t_k,$ </span><span> $(4.3.2)$ </span></div>
>
> <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;"><span style="color: rgb(123,104,238)"> $\displaystyle J_k^{(m)} = \int_0^1 \cdots \int_0^1 \left( \int_0^1 F(t_1, \cdots, t_k) \text{d}t_m \right)^2 \text{d}t_1 \cdots \text{d}t_{m-1} \text{d}t_{m+1} \cdots \text{d}t_k. $ </span><span> $(4.3.3)$ </span></div>

于是我们便可以用GPY筛法来进行操作了,并且这一步也是比较直接明了,我们有

> **命题4.2:**
>
> $\quad$ 条件同命题4.0,我们记
>
> <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;"><span style="color: rgb(123,104,238)"> $ \displaystyle \mathcal{S}_k = \{ F \in Riemann([0,1]^k) : F \text{在} \mathcal{R}_k \text{上紧支撑,且} I_k(F) \neq 0, J_k^{(m)} \neq 0,\ \forall m \}, $ </span></div>
>
> $\quad$ 并且令
>
> <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;"><span style="color: rgb(123,104,238)"> $ \displaystyle M_k = \sup_{F \in \mathcal{S}_k} \frac{\sum_{i=1}^k J_k^{(m)}(F)}{I_k(F)}, \quad r_k = \left\lceil \frac{\vartheta M_k}{2} \right\rceil. $ </span><span> $(4.3.4)$ </span></div>
>
> $\quad$ 于是我们可知,存在无穷多个正整数$n$,使得在$n+h_i(1 \le i \le k)$中至少有$r_k$个是素数.特别地,也就是
>
> $$\liminf_{n} (p_{n+r_k-1} - p_n) \le \max_{1 \le i,j \le k} (h_i - h_j).$$

而接下来的命题,就是在告诉我们$M_k$的下界.

> **命题4.3:**
>
> $\quad$ 设$n \in \mathbb{N}$,且$M_k$与(4.3.4)一致,于是我们有
>
> $\quad$ (1) $M_5 > 2,$
>
> $\quad$ (2) $M_{105} > 4,$
>
> $\quad$ (3) 当$k$足够大时,有$M_k > \log k - 2 \log\log k - 2.$

至此,我们最需要的命题都已经准备齐全,而除了命题4.2可以由命题4.1推出,剩下的两个命题我都直接承认,然后利用这三个命题(其实现在只需要命题4.2和命题4.3)来证明我们一开始所陈述的四个定理了.

#### 简要证明

在承认命题4.1-命题4.3后,其实对于定理1.1-定理1.4的证明都比较简单了,实际上筛法最难的一步就是类似于命题4.1中的这些估计式,但这里我也不再去探究这些问题,因为事实上我也并没有很掌握啦,但是看Tao的博客$^{[4]}$稍微有一些了解.

##### 命题4.2的证明

**简要证明:**

$\quad$ 注意(2.1)中$S(N, v)$的构造,这里我们便可以令$S = S_2 - v S_1$,而我们现在就想要证明,$S > 0$.

$\quad$ 而在我们的条件中,$R = N^{\varthe/2 - \delta}$,以及根据$M_k$的定义,我们可以选取合适的$F_0 \in \mathcal{S}_k$,使得

$$\sum_{m=1}^{k} J_k^{(m)}(F_0) > (M_k - \delta) I_k(F_0) > 0.$$

$\quad$ 而根据$\mathcal{S}_k$的定义,$F_0$在$\mathcal{R}_k$上Riemann可积的,于是存在一个光滑函数$F_1$使得

$$\sum_{m=1}^{k} J_k^{(m)}(F_1) > (M_k - 2\delta) I_k(F_1) > 0.$$

$\quad$ 此时我们便可以利用命题4.1(需要$F$是连续的)得到$\lambda_{d_1, \cdots, d_k}$,并且有

$$\begin{split}
    S & = \frac{\varphi(W)^k N (\log R)^k}{W^{k+1}} \left( \frac{\log R}{\log N} \sum_{j=1}^{k} J_k^{(m)}(F_1) - v I_k(F_1) + o(1) \right) \\\\
    & \ge \frac{\varphi(W)^k N (\log R)^k I_k(F_1)}{W^{k+1}} \left( \left( \frac{\vartheta}{2} - \delta \right) \Big( M_k - 2\delta \Big) - v + o(1) \right). \quad (4.4)
\end{split}$$

$\quad$ 于是我们可以取足够小的$\delta$使得对于任意足够大的N都有$S > 0$成立.而又有

$$\lfloor v + 1 \rfloor = \left\lceil \frac{\vartheta M_k}{2} \right\rceil,$$

$\quad$ 于是根据(2.1)的讨论便可得知命题4.2成立.<span style="float: right">$\square$</span>

##### 定理1.1的证明

**简要证明:**

$\quad$ 由Bombieri-Vinogradov定理取$\vartheta = 1/2 - \epsilon$,其中$\epsilon$为任意大于0的数.再根据命题4.3,于是得到

$$\frac{\vartheta M_k}{2} \ge \left( \frac{1}{4} - \frac{\epsilon}{2} \right)(\log k - 2 \log\log k - 2).$$

$\quad$ 于是取$\epsilon = 1/k$,然后取$k \ge Cm^2 \text{e}^{4m}$,其中$C$是一个与$m$和$k$无关的常数,于是得到

$$\frac{\vartheta M_k}{2} > m.$$

$\quad$ 此时我们可以选取$\mathcal{H}$为大于$k$的连续$k$个素数,也就是

$$\mathcal{H} = \{ p_{\pi(k)+1}, \cdots, p_{\pi(k)+k} \},$$

$\quad$ 于是我们便可以的到

$$\liminf_{n} (p_{n+m} - p_n) \ll k\log k \ll m^3\text{e}^{4m}.$$

$\quad$ 至此我们完成了定理1.1的证明.<span style="float: right">$\square$</span>

##### 定理1.2的证明

**简要证明:**

$\quad$ 根据定理1.1的证明,我们取$k = \lceil Cm^2\text{e}^{4m} \rceil$.于是当$\{h_1, \cdots, h_k\}$是admissible时,则存在子集$\{ h'_1, \cdots, h'_m \} \subset \{h_1, \cdots, h_k\}$,并且满足存在无穷多个$n$使得$n+h'_i \ (1 \le i \le m)$<span style="color: rgb(230,51,51)">都是</span>素数.

$\quad$ 对于$\mathcal{A} = \{ a_1, \cdots, a_r \}$,对于任意$p \le k$,我们<span style="color: rgb(230,51,51)">从$\mathcal{A}$中去掉模$p$后元素最少的这一个剩余类</span>,并记筛后的集合为$\mathcal{L}_2$.这句话很绕,但实际上就是为了得到以下的这个估计:

$$\#\mathcal{L}_2 \ge r\prod_{p \le k} (1 - 1/p) \gg_m r.$$

$\quad$ 进而我们还知道的是,$\mathcal{L}_2$中任意长度为$k$的子集<span style="color: rgb(230,51,51)">一定</span>是admissible的.我们此时再记$s = \#\mathcal{L}_2$,由假设得知$s > k$.

$\quad$ 于是我们可以知道的是

$$\#\mathcal{L}_1 \ge \binom{s}{k} \gg_m r^m.$$

$\quad$ 而我们容易知道的是

$$\#\mathcal{L} = \binom{r}{m} \le r^m.$$

$\quad$ 因此我们便完成了定理1.2的证明.<span style="float: right">$\square$</span>

##### 定理1.3的证明

**简要证明:**

$\quad$ 由命题4.3,取$k = 105$时有$M_{105} > 4$,并且由Bombieri-Vinogradov定理可知$\vartheta = 1/2 - \epsilon$,其中$\epsilon$为任意大于0的数.

$\quad$ 因此根据命题4.2可知,对于任意的admissible tuple$\mathcal{H} = \{ h_1, \cdots, h_{105} \}$,让$\epsilon$足够小时有

$$\liminf_{n} (p_{n+1} - p_n) \le \max_{1 \le i,j \le 105} (h_i - h_j),$$

$\quad$ 再根据Thomas Engelsma的数据(Goldston,Pintz,Yildirim也用了),可知上式右侧最小为$600$,因此我们便完成了定理1.3的证明.<span style="float: right">$\square$</span>

##### 定理1.4的证明

**简要证明:**

$\quad$ 在Elliott-Halberstam猜想成立的情况下,于是$\vartheta = 1 - \epsilon$,其中$\epsilon$为任意大于0的数.仍然取$k = 105$,因此当$\epsilon$足够小时,选取定理1.3中的$\mathcal{H}$,有

$$\liminf_{n} (p_{n+2} - p_n) \le 600.$$

$\quad$ 接着我们取$k = 5$和$\mathcal{H} = \{ 0, 2, 6, 8, 12\}$,于是我们便可以得到有

$$\liminf_{n} (p_{n+1} - p_n) \le 12.$$

$\quad$ 因此我们便完成了定理1.4的证明.<span style="float: right">$\square$</span>

#### 张益唐的弱化EH条件

我们重新回顾一下[论文阅读之重点提炼篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/02/07/GPY-sieve-method-2/index.html?_sw-precache=859ccdfc3405be53c4f1b60f2ed540ff)中的GPY筛法,而如果我们想要得到孪生素数的有界间隙的话,我们就需要素数有着大于$1/2$的分布水平.

于是我们再来重新翻出[筛法读书笔记(哥德巴赫猜想 by 潘承洞) -- 加权筛法顶峰之陈景润定理](https://math-4-anon.top/2025/03/12/notes-about-sieve-methods-4/index.html?_sw-precache=897261a90ec991eb6ee30d60a2b304ca)中的Bombieri-Vinogradov定理,而Elliott-Halberstam猜想就与之相关,并且我们得到与之相关的<span style="color: rgb(123,104,238)">$EH[\vartheta]$条件--对应于Tao博客$^{(6)}$的conjecture 11</span>.

> **Elliott-Halberstam条件/$EH[\vartheta]$:**
>
> $\quad$ 设$x \ge 2$,对$0 < \vartheta < 1$,记
>
> $$\begin{split}
R(D, x) & = \sum_{d \le D} \max_{y \le x} \max_{(l,d) = 1} |E(y; d, l)| \\
 & = \sum_{d \le D} \max_{y \le x} \max_{(l,d) = 1} \left|\pi(y; d, l) - \dfrac{1}{\varphi(d)}\text{li}y \right|,
\end{split}$$
>
> $\quad$ 如果有
>
> $$R(x^{\vartheta}, x) \ll x\log^{-A}x,$$
>
> $\quad$ 我们称素数有$\vartheta$的分布水平,或者说有$EH(\vartheta)$条件成立.

在GPY筛法的过程中,我们利用本文中的(2.3.1)构造了一个筛函数[3.3],也就是

$$\begin{split}
    \mathcal{S} & := \sum_{n=N+1}^{2N} \left( \sum_{i=1}^k \theta(n+h_i)-\log 3N \right)\Lambda_R(n;\mathcal{H}_k,\ell)^2 \\\\
    & = (k\mathcal{L}_1 - \log x \mathcal{L}_2)x + O(x \log^{k+2\ell}x) + O(\mathcal{E}), \quad (a)
\end{split}$$

其中$\mathcal{L}_1, \mathcal{L}_2$具体的表达式见Goldston,Pintz,Yildirim的论文或者我之前的博客.

此处我再记录一下<span style="color: rgb(123,104,238)">$MPZ(2\varpi)$--对应于Tao博客$^{[6]}的conjecture 12$</span>的形式,然后就差不多结束我们对于张益唐这篇论文的记录(因为后面的组合方法对我来说理解起来还是有点复杂了).

> **Motohashi-Pintz-Zhang条件/$MPZ[\varpi]$:**
>
> $\quad$ 记$\theta$为Mangoldt函数(在[围绕Brun定理展开的素数指标求和估计式](https://math-4-anon.top/2025/02/15/Analytical-number-theory-1/index.html?_sw-precache=d161fb73be9de3c4268957627d1a6183)中有更具体的介绍,但是在那边记作$\Lambda$).
>
> $\quad$ 紧接着,我们设$\varpi > 0$,令$D = N^{1/4 + \varpi}$,记
>
> $$\Delta(\theta; d, c) := \sum_{\substack{N \le x < 2N \\ n \equiv c \text{ mod } d}} \theta(n) - \frac{1}{\varphi(d)} \sum_{\substack{N \le x < 2N \\ (n,d) = 1}} \theta(n),\ (d,c) = 1,$$
>
> $\quad$ 如果有
>
> $$\sum_{i=1}^{k} \sum_{\substack{d < D^2 \\ d | P(n)}} \sum_{c \in \mathcal{C}_i(d)} |\Delta(\theta; d, c)| = O(x\log^{-A}x),$$
>
> $\quad$ 我们称有$MPZ[\varpi]$条件成立.

实际上,我们可以知道的是,$EH\left[ \frac{1}{2} + 2\varpi \right]$条件是可以推出$MPZ[\varpi]$条件的.

而$\mathcal{E}$的具体表达式为

$$\mathcal{E} = \sum_{i=1}^{k} \sum_{d < D^2} |\mu(d)| \tau_3(d) \tau_{k-1}(d) \sum_{c \in \mathcal{C}_i(d)} |\Delta(\theta; d, c)|,$$

在原来的处理中,最大的问题就是$\mathcal{E}$阶的估计需要由$EH(\vartheta)$条件来保证,而我们只有$\vartheta < \frac{1}{2}$的结果.而张益唐便是将GPY筛法成立的条件从$EH[\vartheta]$条件,$\vartheta > \frac{1}{2}$弱化为$MPZ[\varpi]$,并且在$\varpi = \frac{1}{1168}$时,也就相当于$\vartheta < \frac{1}{2} + \frac{2}{1168}$的情况下得到了$\mathcal{E}$阶的估计,从而仍然能得到(a)式,从而由GPY筛法得到素数的有界间隙定理.

#### 总结

总算是把毕设所需要学习的筛法内容都给整理和记录一遍了,但是接下来要干的事还不少,尤其是毕设!毕设!!毕设!!!我得开始弄初稿了,因此更新是停了,但是代码仍然不停!~~不要停下来啊!~~

以及不知道能不能速成代数几何+代数数论+群表示论😭.总之文章更新应该是不会这么频繁了,但是还是要忙好一阵了.

#### 参考资料

[1] Maynard J. Small gaps between primes[J]. Annals of mathematics, 2015: 383-413.

[2] Zhang Y. Bounded gaps between primes[J]. Annals of Mathematics, 2014: 1121-1174.

[3] Goldston D A, Pintz J, Yildirim C Y. Primes in tuples I[J]. Annals of Mathematics, 2009: 819-862.

[4] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[5] Soundararajan K. The work of James Maynard[J]. Prize LectureS, 2022, 1: 66-80.

[6] T. Tao. The prime tuples conjecture, sieve theory, and the work of Goldston-Pintz-Yildirim, Motohashi-Pintz, and Zhang[Z]. https://terrytao.wordpress.com/2013/06/03/the-prime-tuples-conjecture-sieve-theory-and-the-work-of-goldston-pintz-yildirim-motohashi-pintz-and-zhang/#more-6728