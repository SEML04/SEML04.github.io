---
title: 论文阅读之重点提炼篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)
date: 2025-02-07 23:09:05
mathjax: true
categories: 
    - 论文阅读
tags:
    - Number Theory
    - Sieve Methods
    - GPY Weight Function
    - Paper Reading
---

#### 引言

虽然已经翻译了GPY论文的两节,但是最主要的内容并没有翻译,也就是用{% label 命题1 %}和{% label 命题2 %}去证明最重要的{% label 定理1 blue %}和{% label 定理2 blue %},因此这也是不得不细品的一个环节.

原文的链接可以见:https://arxiv.org/abs/math/0508185.

当然,前面两节的拙劣翻译也可见我的前一篇博客.后续我将看一下命题1和命题2的证明过程,然后更新张益唐的想法与思路,而这一部分应该会更加简略一些.然后补充一下陈定理的博客,现在应该会轻松很多了吧.最后就是Maynard和Polymath的论文部分,当然也是前者为主.

#### 命题和定理

以下是我们需要的命题.而其证明过程我后边再简单看一下好了.

> **命题1.** 令$\mathcal{H} = \mathcal{H}_1 \cup \mathcal{H}_2$,$|\mathcal{H_i}| = k_i$,并且$r = |\mathcal{H_1} \cap \mathcal{H_2}|$.如果$R \ll N^{\frac{1}{2}} (\log N)^{-4M}$,以及对任意$C > 0$有$h \le R^C$,那么当$R,N \to \infty$时我们有
> 
> $$\sum_{n \le N} \Lambda_R(n; \mathcal{H}_1, \ell_1)\Lambda_R(n; \mathcal{H}_2, \ell_2) = \dbinom{\ell_1 + \ell_2}{\ell_1} \frac{(\log R)^{r + \ell_1 + \ell_2}}{(r + \ell_1 + \ell_2)!} (\mathfrak{S}(\mathcal{H}) + o_M(1))N.\quad (2.14)$$

> **命题2.** 令$\mathcal{H} = \mathcal{H}_1 \cup \mathcal{H}_2$,$|\mathcal{H_i}| = k_i$,并且$r = |\mathcal{H_1} \cap \mathcal{H_2}|$,$1 \le h_0 \le h$,以及$\mathcal{H}^0 = \mathcal{H} \cup {h_0}$.如果对于一个充分大的正常数$B(M)$有$R \ll_M N^{\frac{1}{4}(\log N)^{-B(M)}}$,以及$h \le R$,那么我们有
>
> $$\begin{array}{l}\sum_{n \le N} \Lambda_R(n; \mathcal{H}_1, \ell_1)\Lambda_R(n; \mathcal{H}_2, \ell_2)\theta(n+h_0) \\
    =\left\{ \begin{array}{ll} 
        \dbinom{\ell_1+\ell_2}{\ell_1} \dfrac{(\log R)^{r + \ell_1 + \ell_2}}{(r+\ell_1+\ell_2)!} (\mathfrak{S}(\mathcal{H}^0)+o_M(1))N & \text{if } h_0 \not\in \mathcal{H}, \\
        \dbinom{\ell_1+\ell_2+1}{\ell_1+1} \dfrac{(\log R)^{r + \ell_1 + \ell_2+1}}{(r+\ell_1+\ell_2+1)!} (\mathfrak{S}(\mathcal{H}^0)+o_M(1))N & \text{if } h_0 \in \mathcal{H}_1 \text{ and } h_0 \not\in \mathcal{H}_2, \\
        \dbinom{\ell_1+\ell_2+2}{\ell_1+1} \dfrac{(\log R)^{r + \ell_1 + \ell_2+1}}{(r+\ell_1+\ell_2+1)!} (\mathfrak{S}(\mathcal{H}^0)+o_M(1))N & \text{if } h_0 \in \mathcal{H}_1 \cap \mathcal{H}_2. \\ 
    \end{array} \right.
\end{array}\quad (2.15)$$

其中,$\theta$函数的定义见(1.1).

然后就是我们将要证明的两个定理.

> **定理1.** 假设素数的分布水平$\vartheta>1/2$.那么存在一个可明确计算的常数$C(\vartheta)$,其仅取决于$\vartheta$,使得对于任意$k \ge C(\vartheta)$,任意的可容许的$k$元组,有无穷多个该形式的元组,其中含有至少两个素数.特别地,当$\vartheta \ge 0.971$,那么对于$k \ge 6$结论也成立.

> **定理2.** 我们有
>
> $$E_1 := \liminf_{n \to \infty}\frac{p_{n+1}-p_n}{\log p_n} = 0.\quad (1.8)$$

以上就是本文最最关键的成果.并且其证明方式也与Maynard的证明思路很相似.

#### 定理的证明

当$\ell \ge 0$,$\mathcal{H}_k = \{ h_1, h_2, \cdots, h_k \}$,$1 \le h_1, h_2, \cdots, h_k \le h \le R$时,根据命题1,取$R \ll N^{\frac{1}{2}}(\log N)^{-B(M)}$和$R,N \to \infty$,有

$$\sum_{n \le N}\Lambda_R(n; \mathcal{H}_k, \ell)^2 \sim \frac{1}{(k+2\ell)!} \dbinom{2\ell}{\ell} \mathfrak{S}(\mathcal{H}_k) N(\log R)^{k+2\ell}. \quad (3.1)$$

而对于任意$h_i \in \mathcal{H}_k$,由命题2可知,对于$R \ll N^{\frac{\vartheta}{2} - \epsilon}$和$R,N \to \infty$,

$$\sum_{n \le N}\Lambda_R(n, \mathcal{H}_k, \ell)^2 \theta(n + h_i) \sim \frac{2}{(k+2\ell+1)!} \dbinom{2\ell+1}{\ell} \mathfrak{S}(\mathcal{H}_k) N(\log R)^{k+2\ell+1}. \quad (3.2)$$

于是取$R = N^{\frac{\vartheta}{2} - \epsilon}$,便可得到:

$$\begin{array}{ll}
    S & := \sum_{n=N+1}^{2N} \left( \sum_{i=1}^k \theta(n+h_i)-\log 3N \right)\Lambda_R(n;\mathcal{H}_k,\ell)^2 \\
    \\
    & \sim k\dfrac{2}{(k+2\ell+1)!}\dbinom{2\ell+1}{\ell}\mathfrak{S}(\mathcal{H}_k)N(\log R)^{k+2\ell+1} \\
    \\
    & \quad -\log 3N \dfrac{1}{(k+2\ell)!}\dbinom{2\ell}{\ell}\mathfrak{S}(\mathcal{H}_k)N(\log R)^{k+2\ell} \\
    \\
    & \sim \left( \dfrac{2k}{k+2\ell+1} \dfrac{2\ell+1}{\ell+1} \log R - \log 3N \right)\dfrac{1}{(k+2\ell)!}\dbinom{2\ell}{\ell}\mathfrak{S}(\mathcal{H}_k)N(\log R)^{k+2\ell}.
\end{array}\quad (3.3)$$

注意,其中$\sum_{i=1}^k \theta(n+h_i) - \log 3N$十分重要,如果$S > 0$,我们便可知道的是,在元组$\mathcal{H}_k$中至少包含有两个素数.将$R = N^{\frac{\vartheta}{2} - \epsilon}$代入,此时便有:

$$\dfrac{k}{k+2\ell+1}\dfrac{2\ell+1}{\ell+1}\vartheta > 1.\quad (3.4)$$

其中$k,\ell \to \infty$且$\ell = o(k)$.因此上述不等式左侧即为$2\vartheta$.因此当$\vartheta > 1/2$时,我们便可证明素数的有界间隙,也就证完定理1了.

并且通过(3.4),我们便可以得到不同的$\vartheta$下,使得(3.4)成立的最小的$k$和与之对应的$\ell$,以下$h(k)$是可接受的$k$元组的最短长度(Mathematic穷举法制作的表格):

|$\vartheta$|$k$|$\ell$|$h(k)$|
|----|----|----|----|
|$1$|$7$|$1$|$20$|
|$0.95$|$8$|$1$|$26$|
|$0.90$|$9$|$1$|$30$|
|$0.85$|$11$|$1$|$36$|
|$0.80$|$16$|$1$|$60$|
|$0.75$|$21$|$2$|$84$|
|$0.70$|$31$|$2$|$140$|
|$0.65$|$51$|$3$|$252$|
|$0.60$|$111$|$5$|$634$|
|$0.55$|$421$|$10$|$2956^*$|

其中$2956^*$表示的是一个上界,有可能进一步缩小.

我们发现,当$\vartheta = 1$,我们便可直接得到$k = 7$,并且有$\displaystyle\liminf_{n \to \infty} p_{n+1}-p_n \le 20$.其实$k = 6$也是可以得到的,但是需要一些稍微复杂的论断,因此放到最后再来处理.

