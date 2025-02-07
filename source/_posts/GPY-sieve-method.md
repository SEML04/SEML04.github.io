---
title: 论文阅读之翻译篇 -- Primes in tuples I (Goldston, Pintz, Yildirim)
mathjax: true
date: 2025-01-15 12:04:03
categories:
    - 论文阅读
tags:
    - Number Theory
    - Sieve Methods
    - GPY Weight Function
    - Paper Reading
---

## 导言

本篇是对Goldston,Pintz,Yildirim的一篇论文*Primes in tuples I*的一部分内容的翻译,阅读后的体会与感悟应该会单独再出一篇博客.而原文的链接可以见:https://arxiv.org/abs/math/0508185.

GPY的这篇论文刊登在*Annals of Mathematics*,因此该论文的含金量不必我多说.而重要的是,这篇文章为后面对素数间隙分布的研究提供了新的思路与方法,并且在短短几年内,循着该文中提出的4个问题,数学界对该方面的研究得到了重大的突破.因此阅读这篇文章是必要的.

## 摘要

我们介绍了一种方法,用于证明存在一些彼此之间非常接近的素数.这种方法依赖于算术级数中素数的分布水平.在Elliott-Halberstam猜想成立的假设下,我们证明了存在无穷多组相差16或者更小的素数.即使是在更弱的猜想成立,也意味着存在无穷多组相差有界的素数.而无条件地,我们证明存在有比平均间隙的任意小倍数更接近的连续素数,也就是:

$$\liminf_{n \to \infty} \frac{p_{n+1} - p_n}{\log p_n} = 0.$$

最后的结果将在后续的论文中得到显著地改进.

# 一. 介绍

数论中最重要的未解问题之一是确定无穷多个*素元组*(*prime tuple*)的存在.这个问题不仅被认为很难,而且该领域的大多数数学家认为它无望解决,因为目前还没有已知的无条件方法来解决它.本文是我们一系列文章的第一篇,其目的是提供一种我们认为可以部分解决该问题的方法.目前,我们关于在*元组*(*tuple*)中素数的结果是以算术级数中素数的分布信息为条件的.然而,要证明对于一个足够大的$k$而言,在一个给定的$k$元组中存在无穷多的两个素数,其所需要的信息似乎并没有超出我们已知的结果太多.此外,通过对许多元组进行平均,我们可以在论证中获得足够的信息,从而获得关于*素数之间小间隙*(*small gaps between primes*)的无条件结果,这些结果远远超出了之前所证明的任何结果.因此,我们能够证明素数之间存在非常小的间隙,然而,随着素数的变大,这个间隙也会趋于无穷大,但是这个增大的趋势是非常慢的.

我们方法中所需要的关于素数的信息,现在通常被称为*算术级数中素数的分布水平*(*the level of distribution of primes in arithmetic progressions*).设

$$\theta(n) = \left\{
    \begin{array}{ll}
        \log n & \text{if } n \text{ prime,} \\
        0 & \text{otherwise,}
    \end{array}
\right.\tag{1.1}$$

并且考虑计数函数

$$\theta(N;q,a) = \sum_{\substack{n \le N \\ n \equiv a(\text{mod }q) }}\theta(n).\tag{1.2}$$

Bombieri-Vinogradov定理指出,对于任意$A>0$,都存在一个$B=B(A)$,使得对于$Q = N^{\frac{1}{2}}(\log N)^{-B}$,有

$$\sum_{q \le Q} \max_{\substack{a \\ (a,q)=1}}\left| \theta(N;q,a) - \frac{N}{\phi(q)} \right| \ll \frac{N}{(\log N)^A}.\tag{1.3}$$

我们称素数的分布水平为$\vartheta$,如果$(1.3)$对于任意$A>0$以及任意的$\epsilon>0$成立,其中

$$Q = N^{\vartheta - \epsilon}.\tag{1.4}$$

Elliott和Halberstam[5]猜测素数的分布水平为$1$.根据Bombieri-Vinogradov定理,已知的是素数的分布水平为$1/2$.

令$n$为自然数,并且考虑$k$元组

$$(n+h_1, n+h_2, \cdots, n+h_k),\tag{1.5}$$

其中$\mathcal{H} = \{h_1, h_2, \cdots, h_k\}$是由不同的非负整数组成的集合.如果元组中的每一个元素都是素数,则称其为*素元组*(*prime tuple*).现让$n$遍历所有自然数,我们希望知道$(1.5)$中是素元组的频率是多少.例如,考虑$\mathcal{H} = \{0, 1\}$和元组$(n, n+1)$.如果$n = 2$,则得到了一个素元组$(2,3)$.而这也是这种形式下的唯一的素元组,因为当$n > 2$时,$n$与$n+1$中必有一个是大于$2$的偶数.另一方面,如果$\mathcal{H} = \{0, 2\}$,则我们预期存在有无穷多个形式为$(n,n+2)$的素元组,而这就是孪生素数猜想.一般而言,若对于任意的素数$p$,$h_i$永远不会占据以$p$为模数的所有剩余类,则元组$(1.5)$中有超过$n$个的素元组.这对于大于$k$的素数$p$,条件是显然成立的,于是我们只需去检查那些小的素数是否满足条件.如果我们用$\nu_p(\mathcal{H})$表示所有$h_i$在模$p$意义下占据的不同剩余类的个数,于是我们可以避免$p$整除$(1.5)$中的某些部分,方法是要求

$$\nu_p(\mathcal{H}) < p\text{ for all primes }p.\tag{1.6}$$

如果这个条件成立,我们称$\mathcal{H}$是*可容许的*(*admissible*),并且将对应于$\mathcal{H}$的元组$(1.5)$称为*可容许的元组*(*admissible tuple*).长期以来,一直猜想有可容许的元组中存在无穷个素元组.我们的第一个结论就是朝着证实这一猜想的第一步.

> **定理1.** 假设素数的分布水平$\vartheta>1/2$.那么存在一个可明确计算的常数$C(\vartheta)$,其仅取决于$\vartheta$,使得对于任意$k \ge C(\vartheta)$,任意的可容许的$k$元组,有无穷多个该形式的元组,其中含有至少两个素数.特别地,当$\vartheta \ge 0.971$,那么对于$k \ge 6$结论也成立.

由于$6$元组$(n, n+4, n+6, n+10, n+12, n+16)$是可容许的,在Elliott-Halberstam猜想下则意味着有

$$\liminf_{n \to \infty}(p_{n+1} - p_n) \le 16,\tag{1.7}$$

其中$p_n$表示的是第$n$个素数.这意味着,对于无数多个$n$,有$p_{n+1} - p_n \le 16$.无条件的,我们证明了一个关于连续素数之间间隙的长期猜想.

> **定理2.** 我们有
>
> $$E_1 := \liminf_{n \to \infty}\frac{p_{n+1}-p_n}{\log p_n} = 0.\tag{1.8}$$

关于这个结论的讨论由来已有,我们将简要地介绍一下.不等式$E_1 \le 1$是素数定理的一个平凡的结论.第一个形如$E_1 < 1$的结论是1926年由Hardy和Littlewood[17]证明的,他们在广义Riemann猜想(GRH)的假设下得出$E_1 \le 2/3$.仍然是在GEH假设下,Rankin[25]将结果改进为$E_1 \le \frac{3}{5}$.第一个无条件的估计结果是Erdős[7]于1940年证明的,他使用Brun筛法证明存在有一个可明确计算的常数$c$,使得$E_1 < 1-c$,但Erdős并没有明确给出$c$的值.在1954年,Ricci[26]将Erdős的结论改进为:$E_1 \le 15/16$.在1965年Bombieri和Davenport[2]改进并无条件化了Hardy和Littlewood的方法,用Bombieri-Vinogradov定理替代了GRH,从而得到了$E_1 \le 1/2$.他们还结合Erdős的方法,得到了$E_1 \le 0.4665\cdots$.他们的结果不久被Pilt'ai[24]细化为$E_1 \le 0.4571\cdots$,被Uchiyama[31]细化为$E_1 \le 0.4542\cdots$,而Huxley[19][20]细化至$E_1 \le 0.4425\cdots$,最终于1984年得到$E_1 \le 0.4393\cdots[21]$.在1988年Maier[22]使用他的矩阵方法改进了Huxley的结果为$E_1 \le \textrm{e}^{-\gamma}\cdot 0.4425\cdots = 0.2484\cdots$,其中$\gamma$为Euler常数.Maier方法本身可得到$E_1 \le \textrm{e}^{-\gamma} = 0.5614\cdots$.最近由Goldston和Yildirim[12]的方法,不需要结合其他方法可以得到的结果为$E_1 \le 1/4$.

在本系列的后续一篇论文中,我们将证明一个定量的结果

$$\liminf_{n \to \infty}\frac{p_{n+1} - p_n}{(\log p_n)^{\frac{1}{2}}(\log\log p_n)^2} < \infty.\tag{1.9}$$

虽然定理1是一个引人注目的新结果,但它也反映了我们当前方法的局限性.这些局限性是否真实存在或者是够可以克服是进一步研究的关键问题.我们重点关注的是以下四个问题:

**问题1.** 能够利用当前方法无条件地证明存在无数个素数,彼此之间存在有界间隙?定理1似乎距离该结果仅有一步之遥.但是,对于素数分布水平$\vartheta > 1/2$的任何进一步的结果都似乎是极为深刻的,甚至GRH都不起作用.不过,有更强版本的Bombieri-Vinogradov定理(如[3]中所述),以及众多证明这些结论的想法,或许有希望解决这一问题.

**问题2.** $\vartheta = 1/2$是从元组中得到素数的真正阻碍吗?Soundararajan[29]证明了在当前的论证中,其的确阻碍了我们进一步的结论.但是或许可以设计出更有效的论证解决这一问题.

**问题3.** 在Ellott-Halberstam猜想的假设下,能否证明当$k$足够大时,在可容许的$k$元组中存在有三个或者更多的素数?即使在最强的假设条件下,我们的方法仍然不足以证明给定元组中存在有超过两个的素数.

**问题4.** 在Ellott-Halberstam猜想的假设下,孪生素数猜想能否用类似的想法证明?

我们方法的局限性在于我们并不能很成功的找出超过两个很接近的素数,这一点也在问题3中指出了.但是,我们能够改进早期的结果,尤其是[12]中的最新结果.对于任意$r \ge 1$,令

$$E_r = \liminf_{n \to \infty} \dfrac{p_{n+r}-p_n}{\log p_n}. \tag{1.10}$$

Bombieri和Davenport[2]证明了$E_r \le r - 1/2$.后来Huxley[19, 20]将这个上界改进为$E_r \le r - 5/8 + o(1/r)$,而Goldston和Yildirim[12]则改进为$E_r \le (\sqrt{r}-1/2)^2$,Maier[22]则将其改进为$E_r \le \text{e}^{-\gamma} (r - 5/8 + o(1/r))$.而在证明定理2的过程中,我们还将证明,在假设素数具有分布水平$\vartheta$时:

$$E_r \le \max(r - 2\vartheta, 0), \tag{1.11}$$

因此无条件的,我们能够得到有$E_r \le r - 1$.然而,通过一些更复杂的论断,我们将证明以下结论:

> **定理3.** 假设素数具有分布水平$\vartheta$.那么对任意$r \ge 2$,
>
> $$E_r \le (\sqrt{r} - \sqrt{2\vartheta})^2. \tag{1.12}$$
>
> 特别的,我们得到无条件下,对任意$r \ge 1$,
>
> $$E_r \le (\sqrt{r} - 1)^2. \tag{1.13}$$

从(1.11)或(1.12)中,我们可以看到,在Elliott-Halberstam猜想下意味着有

$$E_2 = \liminf_{n \to \infty} \frac{p_{n+2} - p_n}{\log p_n} = 0. \tag{1.14}$$

我们注意到,如果我们将本文的思路与Maier的矩阵方法[22]结合起来,我们期望(1.12)可以被一个更强的不等式取代

$$E_r \le \text{e}^{-gamma}(\sqrt{r} - \sqrt{2\vartheta})^2. \tag{1.15}$$

虽然这是我们关于这个主题系列的第一篇论文,但是还有另外两篇论文与本文互相支撑.第一篇论文[14]是与Motohashi共同撰写的,对定理1和定理2的证明进行了简化.第二篇论文[13]与Graham共同撰写,利用筛法证明了定理1和定理2,并且提供了*几乎素数元组*(*almost prime tuples*)的应用.

本文的结构如下.在第2节中,我们描述了我们的方法与早期工作的关系.我们还陈述了命题1和命题2,他们包含了本文的关键思想.这些命题的形式比[13]和[14]更一般,因此可用在很多应用中.在第3节中,我们使用这些命题证明了定理1和定理2,其证明方法归功于Granville和Soundararajan.在第4节中,我们对第3节中的使用的方法做了进一步的评论.在第5节中,我们证明了两个后续需要的引理.在第6节中,我们证明了命题1的一个特例,但同时也说明了一般情况下的要点.在第7节中,我们开始证明命题1,并将其简化为估计某个围道积分的值.在第8节中,我们将估计在两个命题证明中出现的更一般的围道积分的值.在第9节中,我们证明了命题2.在本文中,我们没有获得在$k$上一致的结果,因此在此处我们假设我们的元组具有固定的长度.但是,对于(1.9)而言,k上一致的结果是需要的,而这些内容将是我们本系列下一篇文章的主题.最后,我们在第10节中证明了定理3.

符号.在下文中,c和C将分别表示经过适当选择后充分小的和充分大的绝对正常数,对于带有上下标的c和C也是同理.我们允许在不同情况下,这些常数可以不同.除非另有说明,否则$o,O,\ll$符号所隐含的常数也是绝对的.如果陈述S为真,则[S]为1,否则[S]为0.符号$\sum^\flat$是对无平方整数求和,而$\sum^'$则表示求和的数是两两互素的.

本文所用的想法是经过多年发展而来的.我们感谢许多人,但无法一一提及.不过我们要感谢A. Balog, E. Bombieri, T. H. Chan, J. B. Conrey, P. Deift, D. Farmer, K. Ford, J. Friedlander, A. Granville, C. Hughes, D. R. Heath-Brown, A. Ledoan, H. L. Montgomery, Sz. Gy. Revesz, P. Sarnak, and K. Soundararajan.

# 二. 近似素元组

令

$$\mathcal{H} = \{h_1, h_2, \cdots, h_k\},\text{其中} 1 \le h_1, h_2, \cdots, h_k \le h \text{是各不相同的整数}. \tag{2.1}$$

并且令$\nu_p(\mathcal{H})$表示$\mathcal{H}$中元素在模$p$剩余类中所占据的不同剩余类的个数.对于无平方因子的整数$d$,我们可以通过积性将其拓展至$\nu_d{H}$.我们记

$$\mathfrak{S}(\mathcal{H}) := \prod_p \left( 1-\frac{1}{p} \right)^{-k}\left( 1-\frac{\nu_p(\mathcal{H})}{p} \right). \tag{2.2}$$

由于当$p>h$时,总有$\nu_p(\mathcal{H})=k$,因此我们可知上述定义的乘积式是绝对收敛的,并且$\mathfrak{S}(\mathcal{H}) \neq 0$当且仅当$\mathcal{H}$是可接受的,其定义在(1.6)中.Hardy和Littlewood推测有一个关于素元组$(n+h_1, n+h_2, \cdots, n+h_k)$个数的渐近公式,其中$1 \le n \le N, N \to \infty$.令$\Lambda(n)$表示von Mangoldt函数,其在$n = p^m, m > 1$时取值为$\log p$,其余时候取值为$0$.我们定义

$$\Lambda(n; \mathcal{H}) := \Lambda(n+h_1) \Lambda(n+h_2) \cdots \Lambda(n+h_k) \tag{2.3}$$

并且用这个函数来探测素元组和具有素数幂的元组,后者能在应用中被进一步去除.Hardy-Littlewood素元组猜想可表述为

$$\sum_{n \le N} \Lambda(n; \mathcal{H}) = N(\mathfrak{S}(\mathcal{H}) + o(1)), N \to \infty. \tag{2.4}$$

可以注意到,当$\mathcal{H}$不是可接受的时,这个猜想显然为真.而这个猜想除了对于1-元组,此时就是素数定理的情况,其余情况下该猜想均未得到证实.
