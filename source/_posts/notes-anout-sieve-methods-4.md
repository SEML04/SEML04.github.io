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

<span style="color: rgb(230,51,51)">在此过程中,我也会参考Terence Tao博客上的一些内容.因此可能会有一些符号上对应不上的情况.</span>但我尽量还是统一一下语言和符号吧.

那么我们就正式开始组合筛法的旅途了!!!

<center>
<img src="/image/notes-about-sieve-methods-4/T1.gif" width="30%">
</center>

#### 一般的组合筛法

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
> $$\sum_{n \in \mathbb{Z}} a_n \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} \quad (1.1)$$
>
> $\quad$ 的最优的上下界.

而在Tao的博客中,所有的筛法都是几乎奔着孪生素数猜想去的,因此此时问题1中的<span style="color: rgb(230,51,51)">$E_p$取的是所有模$p$余$0$和$-2$的数的集合</span>.而我们也可以按照需求,对$E_p$进行修改.且对于很多问题的描述而言,往往有$a_n = \mathbf{1}_{n \in A}$,而$A$就是被筛集(在我往期的博客中就是$\mathscr{A}$),但是这对于上下界的估计而言往往又是十分困难的,因此我们会对$(a_n)$进行一些处理.而以下Tao又介绍了问题1的对偶形式(对应于Tao博客中的Theorem 5).

> **问题2(对偶筛法问题):**
>
> $\quad$ 在问题1可行($(a_n)_{n \in \mathbb{Z}}$存在)的情况下,我们定义一个上界筛为
>
> $$\nu^{+} = \sum_{d \in D} \lambda_d^{+} \mathbf{1}_{E_d},$$
>
> $\quad$ 其中$\lambda_d^{+} \in \mathbb{R}$,并且满足
>
> $$\nu^{+} \ge \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} (n),\ \forall n \in \mathbb{Z}.\quad (1.2)$$
>
> $\quad$ 类似的,我们也可以定义下界筛为
>
> $$\nu^{-} = \sum_{d \in D} \lambda_d^{-} \mathbf{1}_{E_d},$$
>
> $\quad$ 其中$\lambda_d^{-} \in \mathbb{R}$($\lambda_d^{-}$可以取到负数),并且满足
>
> $$\nu^{-} \le \mathbf{1}_{n \not\in \bigcup_{p | P} E_p} (n),\ \forall n \in \mathbb{Z}.\quad (1.3)$$
>
> $\quad$ 于是我们问题1中求(1.1)的最优上下界问题转化为求$\sum_{d \in D} \lambda_d^{+} X_d$的下确界与$\sum_{d \in D} \lambda_d^{-} X_d$的上确界问题.

当问题1可行的情况下,问题2中的$\lambda_d^{\pm}$是必然存在的,因为有最平凡的情况,也就是$\lambda_d^{+}(n) = 1$以及$\lambda_d^{-}(n) = 0$.而我们很多的筛法工具,实际上就是对$\lambda_d^{\pm}$有一个不同的选取,而组合筛法,就是$\lambda_d^{\pm}$只取$\{ -1, 0, 1 \}$情况下对应的筛法理论.