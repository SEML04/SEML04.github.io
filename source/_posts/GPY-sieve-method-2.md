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

原文的链接可以见:https://www.jstor.org/stable/25662161.

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
> $$\Delta_1 := \liminf_{n \to \infty}\frac{p_{n+1}-p_n}{\log p_n} = 0.\quad (1.8)$$

以上就是本文最最关键的成果.并且其证明方式也与Maynard的证明思路很相似.

#### 定理的证明

##### 定理1前半部分的证明

当$\ell \ge 0$,$\mathcal{H}_k = \{ h_1, h_2, \cdots, h_k \}$,$1 \le h_1, h_2, \cdots, h_k \le h \le R$时,根据命题1,取$R \ll N^{\frac{1}{2}}(\log N)^{-B(M)}$和$R,N \to \infty$,有

$$\sum_{n \le N}\Lambda_R(n; \mathcal{H}_k, \ell)^2 \sim \frac{1}{(k+2\ell)!} \dbinom{2\ell}{\ell} \mathfrak{S}(\mathcal{H}_k) N(\log R)^{k+2\ell}. \quad (3.1)$$

而对于任意$h_i \in \mathcal{H}_k$,由命题2可知,对于$R \ll N^{\frac{\vartheta}{2} - \epsilon}$和$R,N \to \infty$,

$$\sum_{n \le N}\Lambda_R(n, \mathcal{H}_k, \ell)^2 \theta(n + h_i) \sim \frac{2}{(k+2\ell+1)!} \dbinom{2\ell+1}{\ell} \mathfrak{S}(\mathcal{H}_k) N(\log R)^{k+2\ell+1}. \quad (3.2)$$

于是取$R = N^{\frac{\vartheta}{2} - \epsilon}$,便可得到:

$$\begin{array}{ll}
    \mathcal{S} & := \displaystyle\sum_{n=N+1}^{2N} \left( \displaystyle\sum_{i=1}^k \theta(n+h_i)-\log 3N \right)\Lambda_R(n;\mathcal{H}_k,\ell)^2 \\
    \\
    & \sim k\dfrac{2}{(k+2\ell+1)!}\dbinom{2\ell+1}{\ell}\mathfrak{S}(\mathcal{H}_k)N(\log R)^{k+2\ell+1} \\
    \\
    & \quad -\log 3N \dfrac{1}{(k+2\ell)!}\dbinom{2\ell}{\ell}\mathfrak{S}(\mathcal{H}_k)N(\log R)^{k+2\ell} \\
    \\
    & \sim \left( \dfrac{2k}{k+2\ell+1} \dfrac{2\ell+1}{\ell+1} \log R - \log 3N \right)\dfrac{1}{(k+2\ell)!}\dbinom{2\ell}{\ell}\mathfrak{S}(\mathcal{H}_k)N(\log R)^{k+2\ell}.
\end{array}\quad (3.3)$$

注意,其中$\sum_{i=1}^k \theta(n+h_i) - \log 3N$十分重要,如果$S > 0$,我们便可知道的是,在元组$\mathcal{H}_k$中至少包含有两个素数.将$R = N^{\frac{\vartheta}{2} - \epsilon}$代入,此时便有:

$$\dfrac{k}{k+2\ell+1}\dfrac{2\ell+1}{\ell+1}\vartheta > 1.\quad (3.4)$$

其中$k,\ell \to \infty$且$\ell = o(k)$.因此上述不等式左侧即为$2\vartheta$.因此当$\vartheta > 1/2$时,我们便可证明素数的有界间隙,也就{% label 证完定理1的前半部分 red %}了.

并且通过(3.4),我们便可以得到不同的$\vartheta$下,使得(3.4)成立的最小的$k$和与之对应的$\ell$,以下$h(k)$是可接受的$k$元组的最短长度(Mathematica穷举法制作的表格):

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

##### 定理2的证明

而证明定理2的时候,我们需要对$\mathcal{S}$进行修改,我们令:

$$\begin{array}{l}
    \widetilde{\mathcal{S}} := \displaystyle\sum_{n=N+1}^{2N} \left( \displaystyle\sum_{1 \le h_0 \le h} \theta(n+h_0) - v \log 3N \right) \displaystyle\sum_{\substack{1 \le h_1, h_2, \cdots, h_k \le h \\ \text{distinct}}} \Lambda_R(n; \mathcal{H}_k, \ell)^2,
\end{array} \quad (3.5)$$

这时候,我们便需要使用到命题2,然后再利用Gallagher[9]中的一个结果,也就是当$h \to \infty$时有:

$$\sum_{\substack{1 \le h_1, h_2, \cdots, h_k \le h \\ \text{distinct}}} \mathfrak{S}(\mathcal{H}_k) \sim h^k. \quad (3.7)$$

仍然取$R = N^{\frac{\vartheta}{2} - \epsilon}$,我们得到:

$$\begin{array}{ll}
    \widetilde{\mathcal{S}} & \sim \displaystyle\sum_{\substack{1 \le h_1, h_2, \cdots, h_k \le h \\ \text{distinct}}} \left( k \dfrac{2}{(k+2\ell+1)!} \dbinom{2\ell+1}{\ell} \mathfrak{S}(\mathcal{H}_k) N (\log R)^{k + 2\ell + 1} \right. \\ 
    \\
    & \quad + \displaystyle\sum_{\substack{1 \le h_0 \le h \\ h_0 \neq h_i, 1 \le i \le k}} \dfrac{1}{(k+2\ell)!} \dbinom{2\ell}{\ell} \mathfrak{S}(\mathcal{H}_k \cup \{h_0\}) N (\log R)^{k + 2\ell} \\
    \\
    & \quad - \left. v \log 3N \dfrac{1}{(k+2\ell)!} \dbinom{2\ell}{\ell} \mathfrak{S}(\mathcal{H}_k) N (\log R)^{k + 2\ell} \right) \\
    \\
    & \sim \left( \dfrac{2k}{k+2\ell+1} \dfrac{2\ell+1}{\ell+1} \log R + h - v \log 3N \right) \dfrac{1}{(k+2\ell)!}\dbinom{2\ell}{\ell} N h^k (\log R)^{k+2\ell}.
\end{array}\quad (3.8)$$

其中$\displaystyle\sum_{1 \le h_0 \le h} \theta(n+h_0) - v \log 3N > 0$便是说明在$(n, n+h]$中至少有$v + 1$个素数.此时即为:

$$h > \left( v - \dfrac{2k}{k+2\ell+1}\dfrac{2\ell+1}{\ell+1} \left( \dfrac{\vartheta}{2} - \epsilon \right) \right) \log N, \quad (3.9)$$

于是令$\ell = [\sqrt{k} / 2]$,并且让$k$足够大,则得到有:

$$h > \left( v - 2\vartheta + 4\epsilon + O\left( \dfrac{1}{\sqrt{k}} \right) \right) \log N. \quad (3.10)$$

于是得到了:

$$\Delta_r \le \max(v - 2\vartheta, 0). \quad (1.11)$$

而定理2即是$r = 1, \vartheta = 1/2$的特殊情况.因此我们也{% label 证明完了定理2 red %}.

##### 定理1后半部分的证明

最后我们将证明定理1的后半部分.我们仍然是从$\mathcal{S}$入手,令$L$为$\ell$的取值,但是仍然有$L = o(k)$,考虑:

$$\begin{array}{ll}
    \mathcal{S}' & := \displaystyle\sum_{n=N+1}^{2N} \left( \displaystyle\sum_{i=1}^{k} \theta(n+h_i) - \log 3N \right) \left( \displaystyle\sum_{\ell=0}^{L} a_\ell \Lambda_R(n; \mathcal{H}_k, \ell) \right)^2 \\
    \\
    & = \displaystyle\sum_{n=N+1}^{2N} \left( \displaystyle\sum_{i=1}^{k} \theta(n+h_i) - \log 3N \right) \\
    \\
    & \quad \times \displaystyle\sum_{0 \le \ell_1, \ell_2 \le L} a_{\ell_1}a_{\ell_2} \Lambda_R(n; \mathcal{H}_k, \ell_1) \Lambda_R(n; \mathcal{H}_k, \ell_2) \\
    \\
    & = \displaystyle\sum_{0 \le \ell_1, \ell_2 \le L} a_{\ell_1}a_{\ell_2} \mathcal{M}_{\ell_1\ell_2},
\end{array} \quad (3.11)$$

其中我们有:

$$\mathcal{M}_{\ell_1 \ell_2} = \widetilde{M}_{\ell_1 \ell_2} - (\log 3N) M_{\ell_1 \ell_2}, \quad (3.12)$$

注意到$R = N^{\frac{\vartheta}{2} - \epsilon}$,我们再利用命题1和命题2可得到$M_{\ell_1 \ell_2}$和$\widetilde{M}_{\ell_1 \ell_2}$的表达式:

$$M_{\ell_1 \ell_2} = \dbinom{\ell_1 + \ell_2}{\ell_1} \dfrac{(\log R)^{k+\ell_1+\ell_2}}{(k+\ell_1+\ell_2)!} \mathfrak{S}(\mathcal{H}_k) N,$$

$$\widetilde M_{\ell_1 \ell_2} = k \dbinom{\ell_1+\ell_2+2}{\ell_1+1} \dfrac{(\log R)^{k+\ell_1+\ell_2+1}}{(k+\ell_1+\ell_2+1)!} \mathfrak{S}(\mathcal{H}_k) N.$$

因此我们得到:

$$\begin{array}{rl}
    \mathcal{M}_{\ell_1 \ell_2} \sim & \dbinom{\ell_1+\ell_2}{\ell_1} \mathfrak{S}(\mathcal{H}_k) N \dfrac{(\log R)^{k+\ell_1+\ell_2}}{(k+\ell_1+\ell_2)!} \\
    \\
    & \times \left( \dfrac{k(\ell_1+\ell_2+2)(\ell_1+\ell_2+1)}{(\ell_1+1)(\ell_2+1)(k+\ell_1+\ell_2+1)} \log R - \log 3N \right).
\end{array}$$

如果定义$b_\ell = (\log R)^\ell a_\ell$,再记$\mathbf{b}$为列向量$(b_0, b_1, \cdots, b_L)^T$.于是我们得到有:

$$\begin{array}{ll}
    S^*(N, \mathcal{H}_k, \vartheta, \mathbf{b}) & := \dfrac{1}{\mathfrak{S}(\mathcal{H}_k) N (\log R)^{k+1}} S' \\
    \\
    & \sim \sum_{0 \le \ell_1, \ell_2 \le L} b_{\ell_1} b_{\ell_2} \dbinom{\ell_1+\ell_2}{\ell_1} \dfrac{1}{(k+\ell_1+\ell_2)!} \\
    \\
    & \quad \times \left( \dfrac{k(\ell_1+\ell_2+2)(\ell_1+\ell_2+1)}{(\ell_1+1)(\ell_2+1)(k+\ell_1+\ell_2+1)} - \dfrac{2}{\vartheta} \right) \\
    \\
    & \sim \mathbf{b}^T \mathbf{Mb},
\end{array} \quad (3.13)$$

其中

$$\mathbf{M} = \left[ \dbinom{i+j}{i} \dfrac{1}{(k+i+j)!} \left( \dfrac{k(i+j+2)(i+j+1)}{(i+1)(j+1)(k+i+j+1)} - \dfrac{2}{\vartheta} \right) \right]_{0 \le i,j \le L}. \quad (3.14)$$

而我们的目的是,选择一个$\mathbf{b}$,使得对于给定的$\vartheta$以及最小的$k$,满足有$S^* > 0$.而我们如果设$\mathbf{b}$为$\mathbf{M}$对应于$\lambda$的特征向量,我们便有:

$$S^* \sim \mathbf{b}^T \lambda \mathbf{b} = \lambda \sum_{i=0}^k |b_i|^2. \quad (3.15)$$

因此我们需要让$\mathbf{M}$有大于$0$的特征值,即可满足我们的要求.此时利用Mathematica便可得到一张新的表格,而其较之(3.4)更加精确:

|$\vartheta$|$k$|$\ell$|$h(k)$|
|----|----|----|----|
|$1$|$6$|$1$|$16$|
|$0.95$|$7$|$1$|$20$|
|$0.90$|$8$|$2$|$26$|
|$0.85$|$10$|$2$|$32$|
|$0.80$|$12$|$2$|$42$|
|$0.75$|$16$|$2$|$60$|
|$0.70$|$22$|$4$|$90$|
|$0.65$|$35$|$4$|$158$|
|$0.60$|$65$|$6$|$336$|
|$0.55$|$193$|$9$|$1204$|

具体而言,当$k = 6,L = 1, b_0 = 1, b_1 = b$时,我们得到的即为:

$$S^* \sim -\dfrac{4(1-\vartheta)}{8!\vartheta} \left(\left( b - \dfrac{18\vartheta - 16}{4(1 - \vartheta)} \right)^2 + \dfrac{15\vartheta^2 - 64\vartheta + 48}{4(1 - \vartheta)^2}\right).$$

令$b = \frac{18\vartheta - 16}{4(1 - \vartheta)}$,于是便有:

$$S^* \sim -\dfrac{15\vartheta^2 - 64\vartheta + 48}{8! \vartheta (1 - \vartheta)},$$

而要让$S^* > 0$,我们可以解得:

$$\vartheta > \dfrac{4(8 - \sqrt{19})}{15} = 0.97096... \quad (3.16)$$

因此我们便成功证得了{% label 定理1的后半部分 red %}.

#### 总结

最后命题1和命题2的证明就直接承认了,~~还是有点太复杂了~~.后面紧接着更新一集陈氏定理吧,趁此机会也再深入了解一遍Selberg筛法.以及本篇到底哪一块是和筛法联系起来的,我也得再学学Halberstam才行,我猜可能就是这个权函数,可能充当了特征的作用?唉唉唉,还得学!

<center>
<img src="/image/GPY-sieve-method-2/T1.gif" width="30%">
</center>

(2025.4.18)

$\quad$ 回过头来稍微修改了两个符号的表达,使之与Annals of Mathematics上的版本稍微更一致一些了,以及后续Maynard论文的记录也是稍微统一下符号代表的含义.

$\quad$ 以及之前刚了解时的疑问--"本篇到底哪一块是和筛法联系起来的?"现在我稍微有一些眉目了,其(3.3),(3.5)处的构造,就称作为GPY筛法(在[论文阅读 -- Small gaps between primes (Maynard)](https://math-4-anon.top/2025/04/15/Maynard-sieve-method/index.html?_sw-precache=b223022a2ae6958f0b7400c017ed5670)中稍微有所介绍),而这种筛法是对于admissible tuples进行筛选的,因此与Halberstam的那种对于大集合$\mathcal{A}$的筛法的过程是不一样的.

$\quad$ 但是目前还有一些疑问,那就是在GPY筛法中的这些权函数$\omega_n$,与陈景润筛法中的加权函数$\rho_1$和$\rho_2$(在[筛法读书笔记(哥德巴赫猜想 by 潘承洞) -- 加权筛法顶峰之陈景润定理](https://math-4-anon.top/2025/03/12/notes-about-sieve-methods-4/index.html?_sw-precache=4f33e123ef7f4af1b06b9129bd7ecb48)也有介绍)之间有没有联系呢?所代表的内涵是不是一致的呢?能不能结合在一块呢?而这些问题我暂时也还没有去研究,如果之后还有机会研究筛法的话再思考思考,但是很有可能毕设之后就是终章了.