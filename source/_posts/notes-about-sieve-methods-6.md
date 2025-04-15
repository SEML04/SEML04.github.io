---
title: 筛法读书笔记(Sieve Methods by Halberstam) -- Selberg用二次型计算筛函数上界
mathjax: true
date: 2025-04-14 15:28:20
categories:
    - 筛法
tags:
    - Sieve Methods
    - Selberg's Sieve
    - Quadratic Forms
---

#### 引言

这篇文章,我们将介绍Selberg最简单的上界筛模型,其利用**二次型求极值**的方法,从而对筛函数求出了一个上界.而Selberg更深刻的应用则可以见[筛法读书笔记(哥德巴赫猜想 by 潘承洞) -- 加权筛法顶峰之陈景润定理](https://math-4-anon.top/2025/03/12/notes-about-sieve-methods-4/index.html?_sw-precache=65e0ce052d6a97b59355681a4204c7a6).实际上这篇文章就是对Selberg筛法模型的一个补全,否则前后内容之间会有所缺失.

而利用二次型的想法,在其他的地方也有很广泛的应用,其在惜字如金的Serre书中甚至占了特别大的篇幅,而在GPY的论文中也有应用!后者可以见[论文阅读之重点提炼篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)](https://math-4-anon.top/2025/02/07/GPY-sieve-method-2/index.html?_sw-precache=e8d545eb59b76a66841e75fe0a3c0b2f),而前者我完成筛法部分的内容后也可以慢慢开启!

而正如我上篇文章结尾所说,本篇文章只是一个补充,不会也不能很长,那么现在就正式开启Selberg筛法的旅程!

#### 二次型的构造

Selberg筛法的理论基础来源于下面一个可以直接验证的不等式:
$$S(\mathscr{A}; \mathfrak{P}, z) \le \sum_{a \in \mathscr{A}} \left( \sum_{\substack{ d | a, \ d | P(z) }} \lambda_d \right)^2,\quad (2.1)$$
其中$\lambda_1 = 1, \lambda_d(d \ge 2) \in \mathbb{R}$.而这个不等式右侧是一个**无限变量的二次型**,而这也是我们这种筛法较之组合筛法更易于计算的关键.

记$v = 1, 2, D = [d_1, d_2]$,以及由[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/index.html?_sw-precache=5a204869a4629667ba0e2f1bccfe7cd1)中的
$$|\mathscr{A}_d| = \frac{\omega(d)}{d} X + R_d,$$
于是我们可以得到有
$$\begin{split}
    S(\mathscr{A}; \mathfrak{P}, z) & \le \sum_{d_v | P(z)} \lambda_{d_1} \lambda_{d_2} \sum_{\substack{ a \in \mathscr{A} \\ a \equiv 0 \text{ mod } D }} 1 \\\\
    & = \sum_{d_v | P(z)} \lambda_{d_1} \lambda_{d_2} |\mathscr{A}_d| \\\\
    & = X \sum_{d_v | P(z)} \lambda_{d_1} \lambda_{d_2} \frac{\omega(D)}{D} + \sum_{d_v | P(z)} |\lambda_{d_1} \lambda_{d_2} R_D|, \quad (2.2)
\end{split}$$

于是定义
$$\Sigma_1 := \sum_{d_v | P(z)} \lambda_{d_1} \lambda_{d_2} \frac{\omega(D)}{D},\quad \Sigma_2 := \sum_{d_v | P(z)} |\lambda_{d_1} \lambda_{d_2} R_D|.$$
故现在的目的便是,在(2.1)中选取一系列合适的$\lambda_d$,让$\Sigma_1$尽可能小,这样我们便得到了在这种情况下最优的一个上界.

#### 主项的估计

然后在此处,截断的想法又能帮我们大忙.当我们选取
$$\lambda_d = 0, \text{ if } d \ge z,\quad (3.1)$$
我们可以发现的是,(2.1)右侧的式子变成了**有限变量的二次型**,且此时$\Sigma_2$中项数也并没有很多,换言之,余项应该是很容易被bound住的.下面我们先对主项进行估计.

**$\quad$ 注:上面的(3.1)在我们的实际计算中也十分重要,下面时刻要记得,我们的很多变量都是要小于z的.**

在<span style="color: rgb(230,51,51)">条件$\Omega_1$下</span>,我们定义
$$G_k(x) := \sum_{\substack{ d < x \\ (d, k) = 1}} \mu^2(d) g(d),\quad (3.2)$$
特别地,$G_1(z)$就是我们在[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/index.html?_sw-precache=5a204869a4629667ba0e2f1bccfe7cd1)中定义的$G(z)$.

然后根据我们前面的知识知道的是,对于任意自然数$d$,我们都有$g(d) > 0$,以及$\omega,g$是一个积性函数.于是我们有
$$\frac{d}{\omega(d)} = \prod_{p | d} \left( 1 + \frac{1}{g(p)} \right) = \sum_{l | d} \frac{1}{g(l)}, \quad (3.3)$$
记$d = (d_1, d_2)$,于是得到有
$$\begin{split}
    \frac{\omega(D)}{D} & = \frac{\omega(d_1) \omega(d_2)}{d_1 d_2} \cdot \frac{(d_1, d_2)}{\omega((d_1, d_2))} \\\\
    & = \frac{\omega(d_1)}{d_1} \frac{\omega(d_2)}{d_2} \sum_{l | d_v} \frac{1}{g(l)}. \quad (3.4)
\end{split}$$

根据(3.1),也就是表明$\color{red} d_1,d_2 < z$时(3.4)式才有意义,否则在(3.3)的左侧分母就是$0$了.注意到这点后(<span style="color: rgb(230,51,51)">下面公式中莫名其妙出现的$d < z$就是这个原因</span>),那么就可以发现
$$\begin{split}
    \Sigma_1 & = \sum_{\substack{ d_1 | P(z) \\ d_1 < z }}\sum_{\substack{ d_2 | P(z) \\ d_2 < z }} \lambda_{d_1} \lambda_{d_2} \frac{\omega(d_1)}{d_1} \frac{\omega(d_2)}{d_2} \sum_{l | d_v} \frac{1}{g(l)} \\\\
    & = \sum_{\substack{ l < z \\ l | P(z) }} \frac{1}{g(l)} \left( \sum_{\substack{ l | d | P(z) \\ d < z }} \lambda_d \frac{\omega(d)}{d} \right)^2, \\\\
    & = \sum_{\substack{ l < z \\ l | P(z) }} \frac{1}{g(l)} {y_l}^2, \quad (3.5)
\end{split}$$
其中
$$y_l := \sum_{\substack{ l | d | P(z) \\ d < z }} \lambda_d \frac{\omega(d)}{d}. \quad (3.6)$$
于是我们将$\Sigma_1$又重新表示为一个有限变量的二次型,并且我们需要求其最小值.

我们根据Mobius反演公式,可以从(3.6)处得到
$$\lambda_d \frac{\omega(d)}{d} = \sum_{\substack{ d | l | P(z) \\ l < z }} \mu\left( \frac{l}{d} \right) y_l, \quad (3.7)$$
特别地,当我们取$d = 1$时,我们有
$$\sum_{\substack{ l | P(z) \\ l < z }} \mu(l) y_l = 1. \quad (3.8)$$

紧接着,我们将从(3.8)出发,利用Cauchy-Schwarz不等式,来求出(3.5)的最小值,以及此时$\lambda_d$的取值.$^{[4]}$结合(3.8),(3.2)和(3.5)可以得到
$$\begin{split}
    1 & = \left( \sum_{\substack{ l | P(z) \\ l < z }} \mu(l) \sqrt{g(l)} \frac{1}{g(l)} y_l \right)^2 \\\\
    & \le \left( \sum_{\substack{ l | P(z) \\ l < z }} \mu^2(l) g(l) \right) \cdot \left( \sum_{\substack{ l | P(z) \\ l < z }} \frac{1}{g(l)} \frac{\omega(d)}{d} {y_l}^2 \right) \\\\
    & = G(z) \cdot \Sigma_1, \quad (3.9)
\end{split}$$

于是得知
$$(\Sigma_1)_{\text{min}} = \frac{1}{G(z)}, \quad (3.10)$$

并且由Cauchy-Schwarz不等式的取等条件知
$$y_l = \left( \sum_{\substack{ l | P(z) \\ l < z }} g(l) \right)^{-1} \mu(l) g(l),$$
再根据(3.7)和(3.2)将上式化简得到
$$\lambda_d = \frac{\mu(d)}{\displaystyle\prod_{p | d} (1 - \omega(p)/p) } \cdot \frac{G_d(z/d)}{G(z)}. \quad (3.11)$$

于是(3.10)式是可以取等的,至此,我们便解决了主项的估计问题.

**$\quad$ 补:也可以验证得知$|\lambda_d| \le 1,\ \forall d \in \mathbb{N}$.**

#### 余项的估计

最后我们来估计余项,看它是否确实如我们前面所说的,是容易控制的.

根据(3.11)以及其下面的补充,我们首先得到有
$$\Sigma_2 \le \sum_{\substack{ d_v | P(z) \\ d_v < z }} |R_{D}|, \quad (4.1)$$
其中$D$仍然是$[d_1, d_2]$.

然后我们有很容易知道的是
$$\big|\big\{ (d_1, d_2) : [d_1, d_2] = d \big\}\big| = 3^{\nu(d)}, \quad (4.2)$$
于是我们很容易便得到有
$$\Sigma_2 \le \sum_{\substack{ d < z^2 \\ d | P(z)}} 3^{\nu(d)} |R_d| \le \sum_{\substack{ d < z^2 \\ (d, \mathfrak{P}) = 1 }} \mu^2(d) 3^{\nu(d)} |R_d|.\quad (4.3)$$
于是我们得到

> **定理1/定理3.2:**
>
> $\quad$ 在$\Omega_1$的条件下,我们有
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \le \frac{X}{G(z)} + \Sigma_2, \quad (4.4)$$
>
> $\quad$ 其中
>
> $$\Sigma_2 \le \sum_{\substack{ d < z^2 \\ (d, \mathfrak{P}) = 1 }} \mu^2(d) 3^{\nu(d)} |R_d|,$$
>
> $\quad$ 或者也可以表示为
>
> $$\Sigma_2 \le \sum_{\substack{ d < z^2 \\ d | P(z)}} |R_{[d_1, d_2]}| \le \sum_{\substack{ d < z^2 \\ d | P(z) }} 3^{\nu(d)} |R_d|.$$

最后的最后,我们假设$R_d$满足条件$R$,因此
$$\begin{split}
    \sum_{\substack{ d < z^2 \\ d | P(z) }} 3^{\nu(d)} |R_d| & \le \sum_{\substack{ d < z^2 \\ d | P(z) }} 3^{\nu(d)} \omega(d) \le z^2 \sum_{d | P(z)} \frac{3^{\nu(d)} \omega(d)}{d} \\\\
    & = z^2 \prod_{\substack{ p < z \\ p \in \mathfrak{P}}} \left( 1 + \frac{3\omega(p)}{p} \right) \le z^2 \prod_{p < z} \left( 1 + \frac{\omega(p)}{p} \right)^3 \\\\
    & \le \frac{z^2}{W^3(z)}. \quad (4.5)
\end{split}$$
因此在这种情况下,我们有

> **定理2/定理3.1:**
>
> $\quad$ 在$\Omega_1, R$的条件下,我们有
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \le \frac{X}{G(z)} + \frac{z^2}{W^3(z)}. \quad (4.6)$$

#### 总结

其实要总结的内容已经在引言中讲完了,毕竟也是一手回马枪,回来补充的Selberg的这种最简单的筛法,而这种方法比起Brun筛法而言,简直友好至极,计算也很简单直接(已经被折磨到脱敏了).

而接下来其实马上就要接着更新内容,毕竟还需要总结一下张益唐论文中最关键的要点,以及稍微多记录一点Maynard论文中的工作,这么一看要干的事其实还不少😭.

#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. 37-96.

[2] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[3] Goldston D A, Pintz J, Yildirim C Y. Primes in tuples I[J]. Annals of Mathematics, 2009: 819-862.

[4] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P197-P220.