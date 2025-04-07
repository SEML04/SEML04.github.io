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

#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P37-P96.

[2] T. Tao. 254A, Notes 4: Some sieve theory[Z]. https://terrytao.wordpress.com/2015/01/21/254a-notes-4-some-sieve-theory/.

[3] Ege Erdil. Brun’s theorem and sieve theory[Z]. https://www.lesswrong.com/posts/aSYvbztFDdG7LBeRz/brun-s-theorem-and-sieve-theory#The_sieve_of_Eratosthenes.

[4] Motohashi Y. An Overview of the Sieve Method and its History[J]. arXiv preprint math/0505521, 2005.

#### 引言

决定了,还是先花最少的时间,先把Halberstam的第二章速速解决掉.毕竟已经是上个月就已经学习完的内容,并且经过上一篇文章的洗礼,我觉得我对Brun筛法又有了一些新的认识了.~~这次尽量还是压缩一些篇幅,以记录下一些关键要点为主吧.~~规划一下内容后感觉已经是奢望了.😰

其中对于Brun定理的推论--也就是所有孪生素数的倒数之和是收敛的--这个我已经在[围绕Brun定理展开的素数指标求和估计式](https://math-4-anon.top/2025/02/15/Analytical-number-theory-1/)中已经解释完了,而本章最主要的目的便是,为什么对于$\pi_2(x)$的估计是正确的?即根据Brun's pure sieve来证明

$$\pi_2(x) \ll \frac{x}{\log^2 x} (\log\log x)^2.$$

以及在[筛法的顶峰之一 -- 陈景润定理](https://math-4-anon.top/2025/03/12/Chen-s-Theorem/)开头提到的,用Brun's sieve来证明命题"7+7"和"1+7".

当然最重要的还是组合筛法的概念和要点,以及一些重要的条件--其实说的就是你,$\Omega_2(\kappa)$,以及记录一下Rosser's sieve.

<span style="color: rgb(230,51,51)">在此过程中,我也会参考Terence Tao博客上的一些内容.因此可能会有一些符号上对应不上的情况.</span>

那么我们就正式开始组合筛法的旅途了!!!

<center>
<img src="/image/notes-about-sieve-methods-4/T1.gif" width="30%">
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
> $$\sum_{n \in \mathbb{Z}} a_n \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} \quad (2.1)$$
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
> $$\nu^{+} \ge \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} (n),\ \forall n \in \mathbb{Z}.\quad (2.2)$$
>
> $\quad$ 类似的,我们也可以定义下界筛为
>
> $$\nu^{-} = \sum_{d \in D} \lambda_d^{-} \mathbf{1}_{E_d},$$
>
> $\quad$ 其中$\lambda_d^{-} \in \mathbb{R}$($\lambda_d^{-}$可以取到负数),并且满足
>
> $$\nu^{-} \le \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} (n),\ \forall n \in \mathbb{Z}.\quad (2.3)$$
>
> $\quad$ 于是我们问题1中求(2.1)的最优上下界问题转化为求$\sum_{d \in D} \lambda_d^{+} X_d$的下确界与$\sum_{d \in D} \lambda_d^{-} X_d$的上确界问题.

当问题1可行的情况下,问题2中的$\lambda_d^{\pm}$是必然存在的,因为有最平凡的情况,也就是$\lambda_d^{+}(n) = 1$以及$\lambda_d^{-}(n) = 0$.而我们很多的筛法工具,实际上就是对$\lambda_d^{\pm}$有一个不同的选取,而**组合筛法**,就是$\lambda_d^{\pm}$只取$\{ -1, 0, 1 \}$情况下对应的筛法理论.

##### Halberstam的表述方式

接下来我就按照Halberstam书上的内容,其对$(a_n)_{n \in \mathbb{Z}} = \mathbf{1}_{\mathscr{A}}$的情况进行更加细致的讨论,而这部分的一些符号与结论可以参考前面的筛法读书笔记,最后我再回过头来尝试与Tao的观点统一起来.

在[筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子](https://math-4-anon.top/2024/12/02/notes-about-sieve-methods-3/)的最后,我们证明了\[定理1.1\],其中使用到了

$$\sigma_0(n) := \sum_{d | n} \mu(d),$$

最终我们得到了

$$S(\mathscr{A}; \mathfrak{P}, z) = \sum_{d | P(z)} \mu(d) |\mathscr{A}_d|.\quad (2.4)$$

而我们现在将对其进行一定程度的推广,而我们的方法是,对$\sigma_0(n)$进行一定程度的弱化,更方便于我们的估计.于是,我们定义

$$\sigma(n) := \sum_{d | n} \mu(d) \chi(d),\ \sigma(1) = \chi(1) = 1,\quad (2.5)$$

其中$\chi(n)$是积性函数,于是由Mobius反演,我们有

$$\mu(d) \chi(d) = \sum_{\delta | d} \mu\left( \frac{d}{\delta} \right) \sigma(\delta),\quad (2.6)$$

并且对于任意$p | n$,我们可以得到有

$$\sigma(n) = \sum_{l | n/p} \mu(l) (\chi(l) - \chi(pl)).\quad (2.7)$$

而(2.7)将为我们组合筛法中$\chi(n)$的结构提出一些至关重要的要求.

而我们此处利用(2.6)计算$\sum_{d | P(z)} \mu(d) \chi(d) |\mathscr{A}_d|$,将其与(2.4)对比,我们便得到有

$$S(\mathscr{A}; \mathfrak{P}, z) = \sum_{d | P(z)} \mu(d) \chi(d) |\mathscr{A}_d| - \sum_{1 < d | P(z)} \sigma(d) S(\mathscr{A_d}; \mathfrak{P}^{(d)}, z),\quad (2.8)$$

其中$\mathfrak{P}^{(d)} = \{ p : p \in \mathfrak{P}, p \nmid d \}$.

接下来再介绍几个定义.我们定义$q(d)$为$d$<span style="color: rgb(230,51,51)">最小的</span>素因子,并且<span style="color: rgb(230,51,51)">规定$q(1) = \infty$</span>,其次定义

$$P_{z_1, z} = \prod_{\substack{p \in \mathfrak{P} \\ z_1 \le p < z}} p = \frac{P(z)}{P(z_1)},\ 2 \le z_1 \le z,$$

接着讲(2.7)代入到(2.8)中,我们最终可以得到以下一些很重要的结论:

> **命题3:**
>
> $\quad$ 符号含义如上所述,我们可以得到有
>
> $$\begin{split} S(\mathscr{A}; \mathfrak{P}, z) = & \displaystyle\sum_{d | P(z)} \mu(d) \chi(d) |\mathscr{A}_d| \\ & - \sum_{d | P(z)} \sum_{\substack{ p | P(z) \\ p < q(d) }} \mu(d) (\chi(d) - \chi(pd)) S(\mathscr{A}_{pd}; \mathfrak{P}, {\color[RGB]{230,51,51} p}).\quad (2.9) \end{split}$$
>
> $\quad$ 特别地,我们取$\chi(1) = 1,\ \chi(d) = 0\ \forall d > 1$,可以得到
>
> $$S(\mathscr{A}; \mathfrak{P}, z) = |\mathscr{A}| - \sum_{\substack{p < z \\ p \in \mathfrak{P}}} S(\mathscr{A}_p; \mathfrak{P}, p).\quad (2.10)$$
>
> $\quad$ 而在后边的内容中(不在本章),我们基于(2.10)还会证明以下更强的结论:
>
> $$S(\mathscr{A}; \mathfrak{P}, z) = S(\mathscr{A}; \mathfrak{P}, z_1) - \sum_{\substack{z_1 \le p < z \\ p \in \mathfrak{P}}} S(\mathscr{A}_p; \mathfrak{P}, p),\ 2 \le z_1 \le z.\quad (2.11)$$

可以发现的是,命题3中的三个结论都是将一个大小为$z$的筛变成有限个大小为$p$的筛,筛的大小一下子降了下来,在某种程度上对于余项的控制也更加有利了.并且其还有另外一个很重要的作用,那就是我们能够由$S(\mathscr{A}_p; \mathfrak{P}, p)$的上界筛得到$S(\mathscr{A}; \mathfrak{P}, z)$的下界筛,而这种方法也是极为一种有效并且简便的方法了.

但是在这里,我们还可以通过一些稍微复杂亿点点的小手段同时得到上下界的估计.而这就是对$\sigma(n)$进行一些限制与要求,现在我们引入满足(2.5)的$\sigma_1$与$\sigma_2$,以下简记为$\sigma_v,\ v = 1, 2$,使得其满足

$$\sigma_2(d) \le \sigma_0(d) \le \sigma_1(d),\ \forall d | P(z),$$

实际上也就是

$$(-1)^{v-1}\sigma_v(d) \le 0,\ \forall d \ge 1,\ d | P(z),$$

可以发现,上面的式子实际上与Tao中的(2.2)和(2.3)说的也是一回事.

紧接着,代入(2.9),我们得到了

$$(-1)^{v-1} \mu(d) (\chi_v(d) - \chi_v(pd)) \ge 0,\quad (2.11)$$

其中$pd | P(z),\ p < q(d)$,再由上一篇读书笔记中的假设

$$|\mathscr{A}_d| = \frac{\omega(d)}{d} X + |R_d|,$$

代入后我们便可以得到筛函数的一个上下界估计:

> **命题4:**
>
> $\quad$ 我们可以得到筛函数的一个上下界为
>
> $$\begin{split}\displaystyle X \sum_{p | P(z)} \mu(d) \chi_2(d) \frac{\omega(d)}{d} - \sum_{d | P(z)} |\chi_2(d)||R_d| \le S(\mathscr{A}; \mathfrak{P}, z) \\ \le X \sum_{p | P(z)} \mu(d) \chi_1(d) \frac{\omega(d)}{d} + \sum_{d | P(z)} |\chi_1(d)||R_d|\end{split}.\quad (2.12)$$

而在$Omega_1$条件下,我们可以得到

$$\sum_{d | P} \mu(d) \chi_v(d) \frac{\omega(d)}{d} = W(z) \left( 1 + \sum_{1 < \delta | P(z)} \sigma_v(\delta) g(\delta) \right),\quad (2.13)$$

而其中$W(z)$和$g(z)$的表达式在之前的读书笔记中可以找到.

于是我们现在的目的就是让

$$\sum_{d | P(z)} |\chi_v(d)| |R_d| \quad (2.14)$$

充分小的同时,使得

$$|\sum_{1 < \delta | P(z)} \sigma_v(\sigma) g(\sigma)| \quad (2.15)$$

也足够小.

而且为了得到一个正的下界,我们再要求

$$1 + \sum_{1 < \delta | P(z)} \sigma_2(\delta) g(\delta) > 0. \quad (2.16)$$

而要满足(2.14)-(2.16),尤其是(2.16),是一个相当困难的问题,我们还需要对$\chi_v$提出更多的要求.而当$\chi_v(n)$只能取$\{0, 1\}$时,这种情况下的筛法理论便称之为**组合筛法**.

##### 组合筛法的一些细节要点

现在我们来完善一下组合筛法中$\chi_v$还需要满足的一些条件.首先,我们定义

$$\mathscr{D}_v = \{ d : d | P(z), d < y_v \},$$

其中$y_v$是未知的.实际上,对于Brun筛法而言,我们需要$\mathscr{D}_v$是thin的,用现代筛法的观点来看,我们需要对Eratosthenes-Legendre筛法的权函数--也就是$\mu(d)$,进行截断(这只是我目前的一点认识,可能不对).