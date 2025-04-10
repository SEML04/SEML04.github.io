---
title: 筛法读书笔记(Sieve Methods by Halberstam) -- Brun用组合筛法击落(一半)孪生素数猜想
mathjax: true
date: 2025-04-03 20:58:52
categories:
    - 筛法
tags:
    - Sieve Methods
    - Combinatorial Sieve
    - Prime Twins Conjecture
    - Brun's Theorem
    - Brun's Sieve
---

#### 引言

决定了,还是先花最少的时间,先把Halberstam的第二章速速解决掉.毕竟已经是上个月就已经学习完的内容,并且经过上一篇文章的洗礼,我觉得我对Brun筛法又有了一些新的认识了.~~这次尽量还是压缩一些篇幅,以记录下一些关键要点为主吧~~规划一下内容后感觉已经是奢望了.😰

其中对于Brun定理的推论--也就是所有孪生素数的倒数之和是收敛的--这个我已经在[围绕Brun定理展开的素数指标求和估计式](https://math-4-anon.top/2025/02/15/Analytical-number-theory-1/)中已经解释完了,而本章最主要的目的便是,为什么对于$\pi_2(x)$的估计是正确的?即根据Brun's pure sieve来证明

$$\pi_2(x) \ll \frac{x}{\log^2 x} (\log\log x)^2.$$

其中$\pi_2(x)$的定义就在前面的博客首段就有介绍,以及在[筛法的顶峰之一 -- 陈景润定理](https://math-4-anon.top/2025/03/12/Chen-s-Theorem/)开头提到的,用Brun's sieve来证明命题"7+7"和"1+7".

当然最重要的还是组合筛法的概念和要点,以及一些重要的条件--其实说的就是你,$\Omega_2(\kappa)$.

<span style="color: rgb(230,51,51)">在此过程中,我也会参考Terence Tao博客上的一些内容.因此可能会有一些符号上对应不上的情况.</span>

那么我们就正式开始组合筛法的旅途了!!!

<center>
<img src="/image/notes-about-sieve-methods-5/T1.gif" width="30%">
</center>

#### 一般的筛法

##### Terence Tao的表述方式

以下内容几乎都来自于Terence Tao的博客$^{[2]}$.以下就描述一下最一般的筛法问题(对应于Tao博客中的Problem 3,以下只是一个翻译).

> **问题1(一般筛法问题):**
>
> $\quad$ 设$P$是无平方因子的数,$D = \{ d: d | P\}$.而对于$P$的任意一个素因子$p$,设$E_p$是一些整数的集合,并且对于$d \in D$,定义$E_d := \bigcap_{p | d} E_p$,并规定$E_1 = \mathbb{Z}$.
>
> $\quad$ 再令$(a_n)_{n \in \mathbb{Z}}$是一系列<span style="color: rgb(230,51,51)">未知,非负,有限支撑(finitely supported)</span>的实数,但$\forall d \in D$,$X_d := \sum_{n \in E_d} a_n$是<span style="color: rgb(230,51,51)">已知</span>的.
>
> $\quad$ 那么筛法问题便是估计
>
> $$\sum_{n \in \mathbb{Z}} a_n \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} \quad (2.1.1)$$
>
> $\quad$ 的最优的上下界.

其中,$X_d$有另一种更常用的表示形式,而这与Halberstam书上的形式更为接近:

$$X_d = \sum_{n \in E_d} a_n = g(d)X + r_d,$$

其中$X$是独立于$d$的一个数,而$0 \le g(d) \le 1$.

而在Tao的博客中,所有的筛法都是几乎奔着孪生素数猜想去的,因此此时问题1中的<span style="color: rgb(230,51,51)">$E_p$取的是所有模$p$余$0$和$-2$的数的集合</span>.而我们也可以按照需求,对$E_p$进行修改.且对于很多问题的描述而言,往往有$a_n = \mathbf{1}_{n \in A}$,而$A$就是被筛集(在Halberstam中就是$\mathscr{A}$),但是这对于上下界的估计而言往往又是十分困难的,因此我们会对$(a_n)$进行一些处理.于是Tao又介绍了问题1的对偶形式(对应于Tao博客中的Theorem 5).

> **问题2(对偶筛法问题):**
>
> $\quad$ 在问题1可行,也就是$(a_n)_{n \in \mathbb{Z}}$存在的情况下,我们定义一个上界筛为
>
> $$\nu^{+} = \sum_{d \in D} \lambda_d^{+} \mathbf{1}_{E_d},$$
>
> $\quad$ 其中$\lambda_d^{+} \in \mathbb{R}$,并且满足
>
> $$\nu^{+} \ge \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} (n),\ \forall n \in \mathbb{Z}.\quad (2.1.2)$$
>
> $\quad$ 类似的,我们也可以定义下界筛为
>
> $$\nu^{-} = \sum_{d \in D} \lambda_d^{-} \mathbf{1}_{E_d},$$
>
> $\quad$ 其中$\lambda_d^{-} \in \mathbb{R}$($\lambda_d^{-}$可以取到负数),并且满足
>
> $$\nu^{-} \le \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} (n),\ \forall n \in \mathbb{Z}.\quad (2.1.3)$$
>
> $\quad$ 于是我们问题1中求(2.1.1)的最优上下界问题转化为求$\sum_{d \in D} \lambda_d^{+} X_d$的下确界与$\sum_{d \in D} \lambda_d^{-} X_d$的上确界问题.

当问题1可行的情况下,问题2中的$\lambda_d^{\pm}$是必然存在的,因为有最平凡的情况,也就是$\lambda_d^{+}(n) = 1$以及$\lambda_d^{-}(n) = 0$.而我们很多的筛法工具,实际上就是对$\lambda_d^{\pm}$有一个不同的选取,而**组合筛法**,就是$\lambda_d^{\pm}$只取$\{ -1, 0, 1 \}$情况下对应的筛法理论.

##### Halberstam的表述方式

接下来我就按照Halberstam书上的内容,其对$(a_n)_{n \in \mathbb{Z}} = \mathbf{1}_{\mathscr{A}}$的情况进行更加细致的讨论,而这部分的一些符号与结论可以参考前面的筛法读书笔记,最后我再回过头来尝试与Tao的观点统一起来.

在[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/)的最后,我们证明了\[定理1.1\],其中使用到了

$$\sigma_0(n) := \sum_{d | n} \mu(d),$$

最终我们得到了

$$S(\mathscr{A}; \mathfrak{P}, z) = \sum_{d | P(z)} \mu(d) |\mathscr{A}_d|.\quad (2.2.1)$$

而我们现在将对其进行一定程度的推广,而我们的方法是,对$\sigma_0(n)$进行一定程度的弱化,更方便于我们的估计.于是,我们定义

$$\sigma(n) := \sum_{d | n} \mu(d) \chi(d),\ \sigma(1) = \chi(1) = 1,\quad (2.2.2)$$

其中$\chi(n)$是积性函数,于是由Mobius反演,我们有

$$\mu(d) \chi(d) = \sum_{\delta | d} \mu\left( \frac{d}{\delta} \right) \sigma(\delta),\quad (2.2.3)$$

并且对于任意$p | n$,我们可以得到有

$$\sigma(n) = \sum_{l | n/p} \mu(l) (\chi(l) - \chi(pl)).\quad (2.2.4)$$

而(2.2.4)将为我们组合筛法中$\chi(n)$的结构提出一些至关重要的要求.

而我们此处利用(2.2.3)计算$\sum_{d | P(z)} \mu(d) \chi(d) |\mathscr{A}_d|$,将其与(2.2.1)对比,我们便得到有

$$S(\mathscr{A}; \mathfrak{P}, z) = \sum_{d | P(z)} \mu(d) \chi(d) |\mathscr{A}_d| - \sum_{1 < d | P(z)} \sigma(d) S(\mathscr{A_d}; \mathfrak{P}^{(d)}, z),\quad (2.2.5)$$

其中$\mathfrak{P}^{(d)} = \{ p : p \in \mathfrak{P}, p \nmid d \}$.

接下来再介绍几个定义.我们定义$q(d)$为$d$中<span style="color: rgb(230,51,51)">最小的</span>素因子,并且<span style="color: rgb(230,51,51)">规定$q(1) = \infty$</span>,其次定义

$$P_{z_1, z} = \prod_{\substack{p \in \mathfrak{P} \\ z_1 \le p < z}} p = \frac{P(z)}{P(z_1)},\ 2 \le z_1 \le z,$$

接着讲(2.2.4)代入到(2.2.5)中,我们最终可以得到以下一些很重要的结论:

> **命题3:**
>
> $\quad$ 符号含义如上所述,我们可以得到有
>
> $$\begin{split} S(\mathscr{A}; \mathfrak{P}, z) = & \displaystyle\sum_{d | P(z)} \mu(d) \chi(d) |\mathscr{A}_d| \\ \\ & - \sum_{d | P(z)} \sum_{\substack{ p | P(z) \\ p < q(d) }} \mu(d) (\chi(d) - \chi(pd)) S(\mathscr{A}_{pd}; \mathfrak{P}, {\color[RGB]{230,51,51} p}).\quad (2.2.6) \end{split}$$
>
> $\quad$ 特别地,我们取$\chi(1) = 1,\ \chi(d) = 0\ \forall d > 1$,可以得到
>
> $$S(\mathscr{A}; \mathfrak{P}, z) = |\mathscr{A}| - \sum_{\substack{p < z \\ p \in \mathfrak{P}}} S(\mathscr{A}_p; \mathfrak{P}, p).\quad (2.2.7)$$
>
> $\quad$ 而在后边的内容中(不在本章),我们基于(2.2.7)还会证明以下更强的结论:
>
> $$S(\mathscr{A}; \mathfrak{P}, z) = S(\mathscr{A}; \mathfrak{P}, z_1) - \sum_{\substack{z_1 \le p < z \\ p \in \mathfrak{P}}} S(\mathscr{A}_p; \mathfrak{P}, p),\ 2 \le z_1 \le z.$$

可以发现的是,命题3中的三个结论都是将一个大小为$z$的筛变成有限个大小为$p$的筛,筛的大小一下子降了下来,在某种程度上对于余项的控制也更加有利了.并且其还有另外一个很重要的作用,那就是我们能够由$S(\mathscr{A}_p; \mathfrak{P}, p)$的上界筛得到$S(\mathscr{A}; \mathfrak{P}, z)$的下界筛,而这种方法也是极为一种有效并且简便的方法了.

但是在这里,我们还可以通过一些稍微复杂亿点点的小手段同时得到上下界的估计.而这就是对$\sigma(n)$进行一些限制与要求,现在我们引入满足(2.2.2)的$\sigma_1$与$\sigma_2$,以下简记为$\sigma_v,\ v = 1, 2$,使得其满足

$$\sigma_2(d) \le \sigma_0(d) \le \sigma_1(d),\ \forall d | P(z),$$

实际上也就是

$$(-1)^{v-1}\sigma_v(d) \le 0,\ \forall d \ge 1,\ d | P(z),$$

可以发现,上面的式子实际上与Tao中的(2.1.2)和(2.1.3)说的也是一回事.

紧接着,代入(2.2.6),我们得到了

$$(-1)^{v-1} \mu(d) (\chi_v(d) - \chi_v(pd)) \ge 0,\quad (2.2.8)$$

其中$pd | P(z),\ p < q(d)$,再由上一篇读书笔记中的假设

$$|\mathscr{A}_d| = \frac{\omega(d)}{d} X + |R_d|,$$

代入后我们便可以得到筛函数的一个上下界估计:

> **命题4:**
>
> $\quad$ 我们可以得到筛函数的一个上下界为
>
> $$\begin{split}\displaystyle X \sum_{p | P(z)} \mu(d) \chi_2(d) \frac{\omega(d)}{d} - \sum_{d | P(z)} |\chi_2(d)||R_d| \le S(\mathscr{A}; \mathfrak{P}, z) \\ \\ \le X \sum_{p | P(z)} \mu(d) \chi_1(d) \frac{\omega(d)}{d} + \sum_{d | P(z)} |\chi_1(d)||R_d|. \quad (2.2.9) \end{split}$$
>
> $\quad$ 而在$\Omega_1$条件下,我们可以得到
>
> $$\sum_{d | P} \mu(d) \chi_v(d) \frac{\omega(d)}{d} = W(z) \left( 1 + \sum_{1 < \delta | P(z)} \sigma_v(\delta) g(\delta) \right),\quad (2.2.10)$$
>
> $\quad$ 而其中$W(z)$和$g(z)$的表达式在之前的读书笔记中可以找到.

$\quad$ 于是我们<span style="color: rgb(139,0,255)">现在的目的</span>就是让

$$\sum_{d | P(z)} |\chi_v(d)| |R_d| \quad (2.2.11)$$

$\quad$ 充分小的同时,使得

$$\left|\sum_{1 < \delta | P(z)} \sigma_v(\sigma) g(\sigma) \right| \quad (2.2.12)$$

$\quad$ 也足够小.

$\quad$ 而且为了得到一个正的下界,我们再要求

$$1 + \sum_{1 < \delta | P(z)} \sigma_2(\delta) g(\delta) > 0. \quad (2.2.13)$$

而要满足(2.2.11)-(2.2.13),尤其是(2.2.13),是一个相当困难的问题,我们还需要对$\chi_v$提出更多的要求.而当$\chi_v(n)$只能取$\{0, 1\}$时,这种情况下的筛法理论便称之为**组合筛法**.Tao中的$\lambda_d^{\pm}$差不多就是$\mu(d) \chi_v(d)$,因此这两者本质上的内涵与想法是一致的.

##### 组合筛法的一些细节要点

现在我们来完善一下组合筛法中$\chi_v$还需要满足的一些条件.首先,我们定义

$$\mathscr{D}_v = \{ d : d | P(z), d < y_v \},$$

其中$y_v$是未知的.实际上,对于Brun纯筛法而言,我们需要$\mathscr{D}_v$是thin的,用现代筛法的观点来看,我们需要对Eratosthenes-Legendre筛法的权函数--也就是$\sum_{d \in \mathbb{Z}} \mu(d)$,进行截断(*这只是我目前的一点认识,可能不对*).此外,$\chi_v$取值为$1$的数应该得落在$\mathscr{D}_v$,但不要求是整个集合.

此外,若有$pd | P(z),\ p < q(d)$,那么$\chi_v(qd)$与$\chi_v(d)$的取值之间还<span style="color: rgb(230,51,51)">需要满足(2.2.8)的要求</span>.我们将这些条件总结如下:

> **定义5:**
>
> $\quad$ 满足以下条件的$\chi_v$能引导出一个组合筛法:
>
> $$\chi_v(1) = 1, \quad (2.3.1)$$
>
> $$\chi_v(d) = 1 \text{ or } 0, \text{ if } d | P(z), \quad (2.3.2)$$
>
> $$\chi_v(d) = 1 \Rightarrow \chi_v(t) = 1,\ \forall t | d, d | P(z), \quad (2.3.3)$$
>
> $$\chi_v(d) = 1,\ \mu(d) = (-1)^{v} \Rightarrow \chi_v(pt) = 1,\ \forall pt | P(z), p < q(d). \quad (2.3.4)$$
>
> $\quad$ 并且容易验证的是,(2.3.1)-(2.3.4)可以浓缩为以下一个条件式:
>
> $$\chi_v(t) - \chi_v(pt) = (-1)^{v-1} \mu(t) \chi_v(t) (1 - \chi_v(pt)).\ \forall pt | P(z), p < q(d). \quad (2.3.5)$$

我们再定义$p^+$为<span style="color: rgb(230,51,51)">p在$\mathfrak{P}$中的下一个素数</span>,然后我们便可以证得比(2.2.10)更精细的结果,即在$\Omega_1$的条件下,我们有

$$\begin{split}
    & \sum_{d | P} \mu(d) \chi_v(d) \frac{\omega(d)}{d} =  W(z) + (-1)^{v-1} \sum_{p < z} \frac{\omega(p) W(p)}{p} \sum_{t | P_{p^+, z}} \frac{\chi_v(t)(1 - \chi_v(pt))}{t} \omega(t).\ (2.3.6)
\end{split}$$

现在,我们对(2.3.6)中的第二部分至少有一个可以研究的手段了.

#### Brun纯筛法

前面也说了,Brun纯筛法中的$\lambda_d^{\pm}$是在对$\sum_{d \in \mathbb{Z}} \mu(d)$做截断,更具体地,对于$d \in D$,我们定义

$$\lambda_d := \mathbf{1}_{\nu(d) \le k} \mu(d),$$

则可以知道的是,当$k$为偶数的时候上述定义给出了一个上界筛系数,而在$k$为奇数时给出了一个下界筛系数.而$\nu(d) \le k$就是一种截断,它可以在一定程度上让余项的大小不会太大.而这也能说明,为什么Brun筛法是对Eratosthenes筛法最简单最直接的改进了.

而我们用Halberstam的语言来说,我们也就是定义

$$\mathscr{D}^{(r)} := \{ d : d | P(z), \nu(d) \le r - 1 \},\quad (3.1)$$

而$\chi^{(r)}$是$\mathscr{D}^{(r)}$上的示性函数.并且令$\chi_v = \chi^{(2s + v)}$,可以验证其确实满足组合筛法中(2.3.5)的条件,于是我们可以得到

$$\sum_{\substack{ d | P(z) \\ \nu(d) \le 2s + 1 }} \mu(d) |\mathscr{A}_d| \le S(\mathscr{A}; \mathfrak{P}, z) \le \sum_{\substack{ d | P(z) \\ \nu(d) \le 2s }} \mu(d) |\mathscr{A}_d|, \quad (3.2)$$

或者可以表示为

$$S(\mathscr{A}; \mathfrak{P}, z) = \sum_{\substack{ d | P(z) \\ \nu(d) \le r - 1 }} \mu(d) |\mathscr{A}_d| + \theta \sum_{\substack{ d | P(z) \\ \nu(d) = r }} |\mathscr{A}_d|,\ |\theta| \le 1.\quad (3.3)$$

而我们现在需要就(2.2.9),(2.2.10)以及(2.3.6)的形式,对我们选取的$\chi_v$进行进一步的计算.首先就是极具组合风格的

$$\sigma^{(k)} := \sum_{\substack{ d | n \\ \nu(d) \le k - 1}} \mu(d) = (-1)^{k - 1} \binom{v-1}{k-1},$$

于是得到有

$$|\sigma^{(r)}(n)| \le \binom{\nu(n)}{r},\ \forall n > 1,$$

再利用收敛级数和,暴力放缩,大胆估计等一些**简单**的计算,我们最终得到

> **命题6:**
>
> $\quad$ 在$\Omega_0,\Omega_1$和$R$的条件下,我们有
>
> $$\begin{split}S(\mathscr{A}; \mathfrak{P}, z) = X W(z) & \left(1 + \theta(\lambda \text{e}^{1+\lambda})^{(A_0A_1/\lambda) \cdot (\log\log z + 1)} \right) \\ \\ & + \theta' z^{(A_0A_1/\lambda) \cdot (\log\log z + 1)}, \quad (3.4)\end{split}$$
>
> $\quad$ 其中$A_0,\ A_1$是绝对常数,$|\theta|$,$|\theta'| \le 1$,且
>
> $$0 < \lambda \text{e}^{1 + \lambda} \le 1.$$
>
> $\quad$ 特别地,当我们取$\log z \le \sqrt{\log X}$,以及取
>
> $$\frac{1}{\lambda} = \frac{1}{2A_0A_1} \frac{\log X}{\log z (\log\log z + 1)},$$
>
> $\quad$ 此时(3.4)可以写成
>
> $$S(\mathscr{A}; \mathfrak{P}, z) = X W(z) \left( 1 + \theta \text{e}^{- \sqrt{\log X}} \right) + \theta' X^{\frac{1}{2}}.\quad (3.5)$$

回顾我们之前的Eratosthenes-Legendre筛法,在那里我们的$z$只能取$\log\log X$阶,而我们仅仅只做了一次简单的截断(~~虽然计算的过程有点煎熬~~),我们此时的$z$已经可以取到$\log X$的任意幂次了,虽然仍然是$X$的小量,不足以解决任何一个Landau问题(~~事实上目前也没有解决任何一个~~),但已经是一个足够大的突破了.

在本节的最后,我们正式将理论投入使用,那就是Brun如何用他的纯筛法击落(~~并非击落~~)孪生素数猜想.

注意到(这个Anon应该也没问题):

$$|\pi_2(x)| \le S(\{ n(n+2) : n \le x \}; \mathfrak{P}_1, z) + z,$$

而根据[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/)的例子4可得到我们此处筛函数的基本结构,于是我们可以有

> **定理7(Brun定理):**
>
> $\quad$ 对于孪生素数问题,我们可以得到
>
> $$\pi_2(x) \ll x \prod_{2 < p < z} \left( 1 - \frac{2}{p} \right) + z^{24(\log\log z + 1)}.$$
>
> $\quad$ 当我们取
>
> $$\log z = \frac{1}{25} \frac{\log x}{\log\log x},$$
>
> $\quad$ 我们有
>
> $$\pi_2(x) \ll \frac{x}{\log^2 x} (\log\log x)^2.$$
>
> $\quad$ 并由此可以推出**所有孪生素数的倒数之和是收敛的**.这个推论更详细的证明过程见[围绕Brun定理展开的素数指标求和估计式](https://math-4-anon.top/2025/02/15/Analytical-number-theory-1/).

#### Brun筛法

Brun筛法与Brun纯筛法虽然只有一字之差,但是前者作为后者的拓展,作用要更大,并且由此能导出筛法基本引理(能加上基本两字的定理都不是什么等闲之辈).但是在此之前,我们需要对一些条件进行一些稍稍地推广.

##### 条件的推广

首先我们便先引入一个十分重要的条件,其可以反映筛法的某种均匀性(an "average" kind,我也不太清楚该怎么更好的表达):

> **定义8:**
>
> $\quad$ 我们定义条件$\Omega_2(\kappa)$为
>
> <div style="display: flex; align*-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;"> $\displaystyle \sum_{w \le p \le z} \frac{\omega(p) \log p}{p} \le \kappa \log \frac{z}{w} + A_2,\ 2 \le w \le z,$ </span>  <span style="float: right;">$(\Omega_2(\kappa))$</span></div>
>
> $\quad$ 其中$\kappa$为一个正的常数,而$A_2$为一个不小于$1$的绝对常数.

而我们先前定义的$\Omega_0$是要比$\Omega_2(\kappa)$更强的条件.而在$\kappa = 1$时,我们称此时的筛法为线性筛法,此时有一些另外的方法可以更高效地得到我们想要的结果.以下我们就来介绍条件$\omega_2(\kappa)$的作用.

$\quad$ 在$\omega(p)$满足$\Omega_2(\kappa)$时,我们可以得到

$$\sum_{p < z} \omega(p) \le (\kappa + A_2) \text{li} z + \frac{2A_2}{\log 2} \le A(2\text{li} z + 3),\quad (4.1.1)$$

$\quad$ 其中$A = \max{\kappa, A_2}$.而当$\omega(p)$同时$\Omega_1$和$\Omega_2(\kappa)$时,我们还有以下的估计:

$$\sum_{w \le p \le z}g(p) \le \kappa \log \frac{\log z}{\log w} + O\left( \frac{1}{\log w} \right),\quad (4.1.2)$$

$\quad$ 从而由上式可以得到的是:

$$\frac{W(w)}{W(z)} = O\left( \frac{\log^{\kappa} z}{\log^{\kappa} w} \right),\quad (4.1.3)$$

$\quad$ 特别地,我们有

$$\frac{1}{W(z)} = O(\log^{\kappa} z).\quad (4.1.4)$$

而上述(4.1.1)-(4.1.4)这几个估计式的证明,都需要用到分部求和公式(这个又要回归到我们之前的博客中去了),$g(p)$与$\frac{\omega(p)}{p}$之间的关系等手段,此处就直接省去阐述了.总的来说,我们将条件$\Omega_0$弱化为$\Omega_2(\kappa)$后,我们的对于筛函数的估计并没有受到太大的影响,例如,我们仍然有以下与(3.4)及其相似的结果成立:

> **命题9:**
>
> $\quad$ 在$\Omega_1,\Omega_2(\kappa)$和$R$的条件下,我们有
>
> $$\begin{split}S(\mathscr{A}; \mathfrak{P}, z) = X W(z) & \left(1 + \theta(\lambda \text{e}^{1+\lambda})^{ (\kappa \log\log z + c_0)/\lambda } \right) \\ \\ & + \theta' z^{ (\kappa \log\log z + c_0)/\lambda }, \quad (4.1.5)\end{split}$$
>
> $\quad$ 其中$c_0$是与$A_0,\ A_1,\ \kappa$有关的常数,$|\theta|$,$|\theta'| \le 1$,且
>
> $$0 < \lambda \text{e}^{1 + \lambda} \le 1.$$

接下来,在对余项的条件$R$进行一定程度的推广.首先是我们可以将条件$R$稍微放宽至

$$|R_d| \le L\omega(p),$$

对我们所有的结论均没有影响,换句话说,上面的条件和$R$是一样强的.因此我们需要将$R$再放弱一些,而我们确实有

> **定义10:**
>
> $\quad$ 我们定义条件$R_0$为
>
> <div style="display: flex; align*-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;"> $\displaystyle |R_d| \le L \left( \frac{X\log X}{d} + 1 \right) {A_0'}^{\nu(d)},\ \mu(d) \neq 0,\ (d, \overline{\mathfrak{P}}) = 1,$ </span>  <span style="float: right;">$(R_0)$</span></div>
>
> $\quad$ 其中$L$是不小于$1$的常数数,而$A_0'$也是不小于$1$的绝对常数.
>
> $\quad$ 我们还定义条件$R_1(\kappa, \alpha)$为
>
> <div style="display: flex; align*-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;"> $\displaystyle \sum_{\substack{ (d, \overline{\mathfrak{P}}) = 1 \\ d < X^{\alpha} \log^{-C_0}X }} \mu^2(d) |R_d| = O_U\left( \frac{X}{\log^{\kappa + U} X} \right),$ </span>  <span style="float: right;">$(R_1(\kappa, \alpha))$</span></div>
>
> $\quad$ 其中$U$是不小于$1$的常数,而$C_0$也是正的常数.

##### Brun筛法以及主结论

Brun纯筛法是对Eratosthenes-Legendre筛法最简单的改进,但是其作用却是巨大的,因此我们考虑将Brun纯筛法做一些推广.而在Brun纯筛法中,最关键的部分在于(3.1)处对$\mathscr{D}_v$的选取,而(3.1)这样的选取是即为简单的情况,因此在此处是很容易做一些推广的,而推广的这种筛法便称作Brun筛法.

$\quad$ 注:也还有另外的一种很自然的推广方式,也就是从截断的观点来看,在Brun纯筛法中是对$\sum_{d \in \mathbb{Z}} \mu(d)$做截断,变成了

$$\sum_{\substack{d \in \mathbb{Z} \\ \nu(d) \le r}} \mu(d),$$

$\quad$ 因此我们可以考虑对其进行加权,也就是变为

$$\sum_{\substack{d \in \mathbb{Z} \\ \nu(d) \le r}} \mu(d) \alpha_d,$$

$\quad$ 但$\alpha_d$可能不是$\{ -1, 0, 1\}$,于是就不在组合筛法的讨论范畴之内了.

回到我们的Brun筛法,这些在Tao博客中的Proposition 14给出了一种更一般的介绍.由于这个命题实在太长,我也就不进行摘录了(虽然文章的篇幅已经压不住了,但是现在也还是稍微挣扎一下/(ㄒoㄒ)/~~),但是我们可以观察到的是,其最重要的一部分也就是类似于(3.2)的结构.

而我们再回到Halberstam的具体构造中,我们引入一列从$2$到$z$的**实数**(不需要是整数,除了$z_r$)

$$2 = z_r < z_{r-1} < \cdots < z_1 < z_0 = z,\quad (4.2.1)$$

给定正整数$b$,对于所有的$n = 1, \cdots, r$,我们定义$\chi_v^{(r)}$为以下集合的示性函数:

$$\mathscr{D}_v^{(r)} = \{ d : d | P(z), \nu(d) \le 2b - v + 2n - 1 \},\quad (4.2.2)$$

很容易检验,我们上述定义的$\chi_v^{(r)}$是满足(2.3.5),因此可以导出一个类似于命题6中(3.4)这样的筛函数估计式.这里我们省略掉大量计算的细节(都参考Halberstam的教材),需要注意的是我们选取一族特定的$(z_n)$:

$$z_r = 2,\ \log z_n = \text{e}^{-n \Gamma} \log z\ \text{for } n = 1, \cdots, r-1,\quad (4.2.3)$$

其中$\Gamma$是一个合适的正数(也就是要使得$z_{1} < z_0 = z$),最后常数$\lambda$也是和$\Gamma$有关的一个常数,最后我们得到了

> **定理11/定理2.1(Brun筛法主结论):**
>
> $\quad$ 在$\Omega_1, \Omega_2(\kappa)$和$R$条件下,令$b$是一个正整数,以及$\lambda$是满足
>
> $$0 < \lambda \text{e}^{1 + \lambda} < 1$$
>
> $\quad$ 的实数,那么我们有以下筛函数的上下界估计式:
>
> $$\begin{split}S(\mathscr{A}; \mathfrak{P}, z) \le X W(z) & \left(1 { \color[RGB]{255,51,51} + } 2 \frac{\lambda^{ \color[RGB]{255,51,51} 2b+1} \text{e}^{2 \lambda}}{1 - \lambda^2 \text{e}^{2+2\lambda}} \text{exp}\left( ({ \color[RGB]{255,51,51} 2b+3})\frac{c_1}{\lambda \log z} \right) \right) \\\\ & + O(z^{ { \color[RGB]{255,51,51} 2b} +(2.01/(\text{exp}(2\lambda/\kappa)-1))}), \quad (4.2.4)\end{split}$$
>
> $\quad$ 以及
>
> $$\begin{split}S(\mathscr{A}; \mathfrak{P}, z) \ge X W(z) & \left(1 { \color[RGB]{255,51,51} - } 2 \frac{\lambda^{ \color[RGB]{255,51,51} 2b} \text{e}^{2 \lambda}}{1 - \lambda^2 \text{e}^{2+2\lambda}} \text{exp}\left( ({ \color[RGB]{255,51,51} 2b+2})\frac{c_1}{\lambda \log z} \right) \right) \\\\ & + O(z^{ { \color[RGB]{255,51,51} 2b-1}+(2.01/(\text{exp}(2\lambda/\kappa)-1))}), \quad (4.2.5)\end{split}$$
>
> $\quad$ 其中常数$c_1$的表达式为
>
> $$c_1 = \frac{A_2}{2} \left( 1 + A_1 \left( \kappa + \frac{A_2}{\log 2} \right) \right).$$

***注:本文中对上述定理称作定理11,但是在其余文章中会称之为定理2.2,主要是为了翻书会更方便,后文也是同理.***

在Halberstam书中,P57-P62都是在证明这个定理,并且Brun筛法的概念与要点也都掺杂在这个定理的证明之中,理解这段我之前还花了不少功夫来着的😭.而这个定理的作用也十分强,我们可以用这个来证明(7,7),而这个就留在下一节去讲.

但是定理11太复杂了,怎么办?没关系,我们有简化版!

> **定理12/定理2.2:**
>
> $\quad$ 在$\Omega_1, \Omega_2(\kappa)$和$R$条件下,对于任意实数$A > 0$,我们有
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \le B_5 X \prod_{ \color{red} p < z } \left( 1 - \frac{\omega(p)}{p} \right), \text{ if } z \le X^A, \quad (4.2.6)$$
>
> $\quad$ 以及
>
> $$S(\mathscr{A}; \mathfrak{P}, z) \le B_5 X \prod_{ \color{red} p < X } \left( 1 - \frac{\omega(p)}{p} \right), \text{ if } z \ge X^{\frac{1}{A}}, \quad (4.2.7)$$

而将条件$R$弱化为$R_0$与$R_1(\kappa, \alpha)$后,其并不会改变定理11中主项的估计式,而余项我们也能够给出它的阶,于是我们便能有能力去考虑命题(1,7)了,这无疑是一个巨大的突破.我们将定理称述至于此处:

> **定理13/定理2.1':**
>
> $\quad$ 在$\Omega_1, \Omega_2(\kappa), R_0, R_1(\kappa, \alpha)$的条件下,以及$b,\lambda,c_1$均与定理11中定义一致,并且记
>
> $$u = \frac{\log X}{\log z},$$
>
> $\quad$ 而我们有
>
> $$\begin{split}S(\mathscr{A}; \mathfrak{P}, z) \le X W(z) & \left\{ 1 { \color[RGB]{255,51,51} + } 2 \frac{\lambda^{ \color[RGB]{255,51,51} 2b+1} \text{e}^{2 \lambda}}{1 - \lambda^2 \text{e}^{2+2\lambda}} \text{exp}\left( ({ \color[RGB]{255,51,51} 2b+3 })\frac{c_1}{\lambda \log z} \right) \right. \\\\ & + O(Lz^{-\alpha u + { \color[RGB]{255,51,51} 2b} + 2.01/(\text{exp}(2\lambda/\kappa)-1)} u^{C_0+1} \log^{C_0 + \kappa +1}z ) \\\\ & + O_U(u^{-\kappa} \log^{-U} X) \Big\}, \quad (4.2.8)\end{split}$$
>
> $\quad$ 以及
>
> $\begin{split}S(\mathscr{A}; \mathfrak{P}, z) \ge X W(z) & \left\{ 1 { \color[RGB]{255,51,51} - } 2 \frac{\lambda^{ \color[RGB]{255,51,51} 2b} \text{e}^{2 \lambda}}{1 - \lambda^2 \text{e}^{2+2\lambda}} \text{exp}\left( ({ \color[RGB]{255,51,51} 2b+2})\frac{c_1}{\lambda \log z} \right) \right. \\\\ & + O(Lz^{-\alpha u + { \color[RGB]{255,51,51} 2b -1 } + 2.01/(\text{exp}(2\lambda/\kappa)-1)} u^{C_0+1} \log^{C_0 + \kappa +1}z ) \\\\ & + O_U(u^{-\kappa} \log^{-U} X) \Big\}. \quad (4.2.9)\end{split}$
>
> $\quad$ 其中常数$L, C_0, U$见条件$R_0$与$R_1(\kappa, \alpha)$.

##### 孪生素数问题的突破

上面我们花了不少功夫(也包括我敲公式和调整hexo格式等大量时间😡)称述了定理11和定理13,如果它没有什么用的话那就未免太伤人心了,但好在这两个定理实实在在能对孪生素数猜想做出巨大的突破.如果我们稍微了解一下Goldbach猜想以及孪生素数猜想的历史突破的话,我们会更加惊讶于Brun筛法的强大作用.

首先我们就考虑筛选

$$\mathscr{A} = \{ n(n+2) : n \le x\},$$

而关于这个集合的筛函数的基本信息在之前也已经了解过了(扎扎实实学过来后才知道当初吃苦确实是有用的了😭),并且很容易验证其满足条件$\Omega_0, \Omega_1, R$,于是我们使用定理11并令$b = 1$,于是有

$$\begin{split}
    S(\mathscr{A}; \mathfrak{P}_1, z) \ge \frac{1}{2} \prod_{2 < p < z} \left( 1 - \frac{2}{p} \right) \Big\{ 1 - \frac{2\lambda^2 \text{e}^{2\lambda}}{1 - \lambda^2 \text{e}^{2 + 2\lambda}} \text{exp}\left( \frac{4c_1}{\lambda \log z} \right) \\ \\
    + O\left( \frac{\log^2 z \cdot z^{1 + 2.01/(\text{e}^{\lambda} - 1)}}{x} \right)\Big\}.\quad (4.3.1)
\end{split}$$

而在(4.3.1)中,我们可以选取合适的$\lambda$,比如可取$\log(1.288) = 0.2531$,使得

$$1 - \frac{2\lambda^2 \text{e}^{2\lambda}}{1 - \lambda^2 \text{e}^{2 + 2\lambda}} > 0,\quad (4.3.2)$$

再假设$z = X^{1/u}$,其实这个式子在定理13中出现了,那么我们要让$u$尽可能小,并且还要使得余项的阶不能超过主项,于是我们可以取到

$$1 + \frac{2.01}{\text{e}^{\lambda} - 1} = 7.9792 < u < 8,\quad (4.3.3)$$

再结合$S(\mathscr{A}; \mathfrak{P}_1, X^{1/8})$的含义,我们便有

> **命题14(7,7):**
>
> $\quad$ 存在无穷多个$n$,使得$n$与$n+2$至多表示为$7$的素数的乘积.

而当我们考虑筛选

$$\mathscr{A} = \{ p+2 : p \le x \},$$

并且使用筛集合

$$\mathfrak{P} = \mathfrak{P}_2 = \{ p : p > 2 \},$$

我们可以验证(但并不简单)该筛函数的$\omega(p)$与$R_d$满足$\Omega_1, \Omega_2(1), R_0, R_1(1, 1/2)$,其中$R_1(1, 1/2)$需要由Bombieri-Vinogradov定理得出,但是当我们先承认这些后,并且使用定理13可以得到

$$\begin{split}
    S(\mathscr{A}; \mathfrak{P}_2, z) \ge (\text{li} x) \prod_{2 < p < z} \left( 1 - \frac{1}{p - 1} \right) \Big\{ 1 - \frac{2\lambda^2 \text{e}^{2\lambda}}{1 - \lambda^2 \text{e}^{2 + 2\lambda}} \text{exp}\left( \frac{8}{\lambda \log z} \right) \\ \\
    + O(z^{-\frac{1}{2} u + 1 + 2.01/(\text{e}^{\lambda}-1)} u^{U + 14} \log^{U + 15}z ) 
    + O(u^{-1} \log^{-U} x) \Big\},\quad (4.3.4)
\end{split}$$

接下来的工作就好办了,那就是继续按照(4.3.2)-(4.3.3)的想法与过程走一轮.于是就是要在$0 < \lambda \text{e}^{\lambda} < 1$的同时还要有

$$1 - \frac{2\lambda^2 \text{e}^{2\lambda}}{1 - \lambda^2 \text{e}^{2 + 2\lambda}} > 0,\quad (4.3.5)$$

由计算机可得$0 < \lambda < 0.2533$,于是在这种情况下,$z = X^{1/u}$,能得到有

$$2 + \frac{4.02}{\text{e}^{2\lambda} - 1} = 8.0942 < u < 9,\quad (4.3.6)$$

因此我们证得

> **命题15(1,8):**
>
> $\quad$ 存在无穷多个素数$p$,使得$n+2$至多表示为$8$的素数的乘积.

但是观察(4.3.6)也太可惜了,只要左侧比$8$小一点点,我们就能证明(1,7)了,而我们要证明这一命题的话,那么就得针对我们当前选取的$\mathscr{A}$对定理13的主项进行一点点的改进,事实上,我们可以优化主项系数为

$$1 - 2\lambda^2 \text{e}^{2\lambda} \left( 1 + \frac{16}{3} \frac{2\lambda^2 \text{e}^{2\lambda}}{1 - \lambda^2 \text{e}^{2 + 2\lambda}} \right),\quad (4.3.7)$$

最后,我们便拼尽全力(真要燃尽了)证明得到

> **命题16(1,7):**
>
> $\quad$ 存在无穷多个素数$p$,使得$n+2$至多表示为$7$的素数的乘积.

#### 基本引理

在本文的最后一节中,我们从定理11和定理13出发,来引出筛法的基本引理.在Halberstam书中给出的基本引理,可以视作是对(3.5)的推广,也可以视作对定理12的一个可观的改良,而这个引理事实上就是从定理11得到,并且优化掉定理11中的常数$\lambda$.

> **定理17/定理2.5(筛法基本引理):**
>
> $\quad$ 在$\Omega_1, \Omega_2(\kappa), R$的条件下,令
>
> $$u = \frac{\log X}{\log z} > 1,$$
>
> $\quad$ 我们有
>
> $$\begin{split}S(\mathscr{A}; \mathfrak{P}, z) = XW(z)\Big( 1 & + O(\text{exp}(-u(\log u - \log\log 3u - \log \kappa - 2))) \\ \\& + O(\text{exp}(-\sqrt{\log X}))\Big). \quad (5.1)\end{split}$$

而在使用定理11时,我们选取的是

$$b = \left\lfloor \frac{u}{2} - \frac{u}{2\log u} \right\rfloor,\ \lambda = \frac{\text{e}\kappa \log u}{u},$$

而如果在定理13中选取

$$b = \left\lfloor \frac{\alpha}{2} u - \frac{\alpha}{2} \frac{u}{\log u} \right\rfloor,\ \lambda = \frac{\text{e}\kappa}{\alpha} \frac{\log u}{u},$$

我们便能得到弱化条件版本下的筛法基本引理

> **定理18/定理2.5'(弱余项的筛法基本引理):**
>
> $\quad$ 在$\Omega_1, \Omega_2(\kappa), R_0, R_1(\kappa, \alpha)$的条件下,令
>
> $$u = \frac{\log X}{\log z} > 1,$$
>
> $\quad$ 我们有
>
> $$\begin{split}S(\mathscr{A}; \mathfrak{P}, z) = XW(z)\Big( 1 & + O(\text{exp}(- \alpha u (\log u - \log\log 3u - \log (\kappa / \alpha) - 2))) \\ \\& + O_U( L\log^{-U} X ) \Big). \quad (5.2)\end{split}$$

在Tao的博客上,也给出了另一种表述下的筛法基本引理(Lemma 17),符号参考本文第二节第一部分.

> **定理19(Tao版本的筛法基本引理):**
>
> $\quad$ 令$\kappa > 0, z = X^{1/s}$,对于任意积性函数$g$满足
>
> $$0 \le g(p) < 1,\ \forall p \text{ is prime,}$$
>
> 以及满足
>
> $$V(w) \ll_\kappa \left( \frac{\log z}{\log w} \right)^{\kappa} V(z),\quad (5.3)$$
>
> 于是存在在$D = \{ d | P(z) : d \le X \}$上紧支撑的上下界系数$(\lambda_d^{\pm})_{d \in D}$,使得有
>
> $$\sum_{d \in D} \lambda_d^{\pm} = V(z)(1 + O_\kappa(\text{e}^{-s})).\quad (5.4)$$

我们令$q = q(x, u)$没有小的素因子,我们称其为拟素数(quasi-primes),严格表述即

$$(q, P(x^{1/u})) = 1,\ \frac{\log q}{\log x} \ll 1,$$

利用定理17,我们可以得到以下的结果.

> **定理20(拟素数定理):**
>
> $\quad$ 令$q$为我们如上定义的拟素数,那么我们有以下渐近式结果
>
> $$|\{ q : q \le X \}| \sim \left( u \text{e}^{-\gamma} \frac{\log X}{\log x} \right) \pi(X),$$
>
> $\quad$ 其中$\gamma$为Euler常数.

上述结果中给出的是一个渐近式,这也体现出了筛法基本引理在处理拟素数方面的巨大作用了.而基本引理也常常作为初步筛选的方法,用于去除一些较小的素数,为更复杂的筛法处理中等大小的素数做准备$^{[2]}$,这就是为什么它能称之为筛法基本引理的原因了吧.

#### 总结

回到引言,"这次尽量还是压缩一些篇幅,以记录下一些关键要点为主吧",那么有没有缩短呢?

我只能说,**如缩**.写这篇文章最终还是达到2.4w左右的字符,以及接近600行的代码.但是我又确实是跳过了非常非常多的证明过程与细节;以及我还跳过了定理2.1和定理2.1'在更多素数问题中的应用,包括第6节,第7节以及第8节后半的应用;除此之外,在看完了Tao的博客后,Rosser-Iwaniec筛法可能相当重要,其甚至可以绕过奇偶性检验,因此目前也就跳过了.

<center><b>很可怕吗?是的很可怕.</b><br></center>

但是,关于组合筛法的要点,以及Brun纯筛法与Brun筛法的构造与应用也还是有记录下来,以及Tao博客中更高的观点也尝试与之结合(虽然结合的很生硬就是了),因此在关键要点方面还是差不多做到了.

最后从筛法理论整体来看,我应该还需要再记录一点点Selberg筛法的构造,只需要构造就行了,真的只要一点点了,不会冲到600行代码了(应该吧(￣▽￣)").以及如果能在记录完Maynard-Tao筛法就更完整了(Ploymath还是pass一下吧,这个得先把Tao的博客先研究研究再说).

弄完筛法部分的内容后,我还有好一些内容可以更新,也有好一些东西需要猛猛学,到时候在慢慢规划了.

<center>
<img src="/image/notes-about-sieve-methods-5/T2.jpg" width="30%">
</center>

#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P37-P96.

[2] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[3] Ege Erdil. Brun’s theorem and sieve theory[Z]. https://www.lesswrong.com/posts/aSYvbztFDdG7LBeRz/brun-s-theorem-and-sieve-theory#The_sieve_of_Eratosthenes.

[4] Motohashi Y. An Overview of the Sieve Method and its History[J]. arXiv preprint math/0505521, 2005.