---
title: 论文阅读 -- Small gaps between primes (Maynard)
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

Maynard的论文为:[https://arxiv.org/pdf/1311.4600](https://arxiv.org/pdf/1311.4600).

总之,启动启动!全部启动!不学习永远学不会!<span style="color: rgb(230,51,51)">但注意的是,有一些符号我稍稍做了一点修改,可能和原论文并不一致.</span>

<center>
<img src="/image/Maynard-sieve-method/T1.jpg" width="30%">
</center>

#### 参考资料

[1] Maynard J. Small gaps between primes[J]. Annals of mathematics, 2015: 383-413.

[2] Zhang Y. Bounded gaps between primes[J]. Annals of Mathematics, 2014: 1121-1174.

[3] Goldston D A, Pintz J, Yildirim C Y. Primes in tuples I[J]. Annals of Mathematics, 2009: 819-862.

[4] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[5] Soundararajan K. The work of James Maynard[J]. Prize LectureS, 2022, 1: 66-80.

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
> $$\mathcal{L} = \#\{ \mathcal{H} : \mathcal{H} = \{h_1, \cdots, h_m \} \subset \mathcal{A} \},$$
>
> $$\mathcal{L}_0 = \#\{ \mathcal{H} \in \mathcal{L} : \text{ 存在无穷多个} n \text{使得} n+h_i \text{是素数}, \forall h_i \in \mathcal{H} \},$$
>
> $\quad$ 于是我们有
>
> $$\frac{\mathcal{L}_0}{\mathcal{L}} \gg_m 1.$$

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

<span style="color: rgb(230,51,51)">**GPY筛法的关键想法**</span>是,对于<span style="color: rgb(0, 128, 255)">一个admissible tuple$\mathcal{H} = \{ h_1, \cdots, h_k \}$</span>,我们考虑

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
> $\quad$ 设$k$为$\mathcal{H}$的大小,素数的分布水平$\vartheta > 0$,则存在常数$\delta > 0$,令<span style="color: rgb(123,104,238)">$R = N^{\vartheta/2 - \delta}$</span>,$W = \prod_{p \le \log\log\log N} p \ll (\log\log N)^2$,且我们记
>
> <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; width: 100%;"><span style="color: rgb(123,104,238)">$\displaystyle\mathcal{R}_k = \left\{ (x_1, \cdots, x_k) \in [0, 1]^{k} : \sum_{i = 1}^{k} x_i \le 1 \right\},$</span><span> $(4.3.1)$ </span></div>
>
> $\quad$ 以及$F$是在$\mathcal{R}_k$上紧支撑的一个固定的光滑函数,于是:
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
> $\quad$ (2) $M_105 > 4,$
>
> $\quad$ (3) 当$k$足够大时,有$M_k > \log k - 2 \log\log k - 2.$

至此,我们最需要的命题都已经准备齐全,而除了命题4.2可以由命题4.1推出,剩下的两个命题我都直接承认,然后利用这三个命题(其实现在只需要命题4.2和命题4.3)来证明我们一开始所陈述的四个定理了.

#### 简要证明

