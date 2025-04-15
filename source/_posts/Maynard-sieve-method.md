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

而在这个过程之中,Maynard的工作又发挥了相当大的作用.他引入多重Selberg权函数的概念,对GPY权函数进行了拓展,并且将素元组猜想也向前推进了一大步.后续Polymath的工作也是基于这个之上,在承认Elliott-Halberstam猜想的情况下,Maynard的结果仍然是最优的,而承认广义Elliott-Halberstam猜想后,我们才得到孪生素数间隙上界为6的这个结果.

因此在本篇文章中,我将(尝试)对{% label Maynard定理 blue %}做一个简单的记录,以及记录一点{% label Maynard-Tao权函数 blue %}的一些想法(因为实际上我还没有全部掌握😭,证明所取函数是最优的这一块我也没有深入学习),而最后,我看能不能简单再记录一下张益唐论文中最重要的一些突破点(组合杀我😭).

Maynard的论文为:[https://arxiv.org/pdf/1311.4600](https://arxiv.org/pdf/1311.4600).张益唐的论文为:[https://www.jstor.org/stable/24522787](https://www.jstor.org/stable/24522787).

总之,启动启动!全部启动!不学习永远学不会!

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

张益唐定理依赖于将素数的分布水平(the level of distribution)稍稍推广至$\frac{1}{2}+\epsilon$,从而根据GPY论文中的结论便可以得到有界间隙的证明,而这用到的是Bombieri-Vinogradov定理的一种弱化形式.而定理1.3将仅依赖于Bombieri-Vinogradov定理,并且其证明过程实际上是较为初等的,并没有太多的组合方法.以及我们在有条件的情况下,有

> **定理1.4:**
>
> $\quad$ 假设Elliott-Halberstam猜想成立的情况下,我们有
>
> $$\liminf_{n} (p_{n+1} - p_n) \le 12,$$
>
> $$\liminf_{n} {p_{n+2} - p_n} \le 600.$$