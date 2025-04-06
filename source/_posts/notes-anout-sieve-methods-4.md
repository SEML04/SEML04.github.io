---
title: 筛法读书笔记(Sieve Methods by Halberstam) -- Brun用容斥原理击落(一半)孪生素数猜想
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

#### 引言

决定了,还是先花最少的时间,先把Halberstam的第二章速速解决掉.毕竟已经是上个月就已经学习完的内容,并且经过上一篇文章的洗礼,我觉得我对Brun筛法又有了一些新的认识了.这次尽量还是压缩一些篇幅,以记录下一些关键要点为主吧.

其中对于Brun定理的推论--也就是所有孪生素数的倒数之和是收敛的--这个我已经在[围绕Brun定理展开的素数指标求和估计式](https://math-4-anon.top/2025/02/15/Analytical-number-theory-1/)中已经解释完了,而本章最主要的目的便是,为什么对于$\pi_2(x)$的估计是正确的?即根据Brun's pure sieve来证明

$$\pi_2(x) \ll \frac{x}{\log^2 x} (\log\log x)^2.$$

以及在[筛法的顶峰之一 -- 陈景润定理](https://math-4-anon.top/2025/03/12/Chen-s-Theorem/)开头提到的,用Brun's sieve来证明命题"7+7"和"1+7".

当然最重要的还是组合筛法的概念和要点,以及一些重要的条件--其实说的就是你,$\Omega_2(\kappa)$,以及记录一下Rosser's sieve.

<span style="color: rgb(230,51,51)">在此过程中,我也会参考Terence Tao博客上的一些内容.因此会有一些符号上对应不上的情况.</span>奈何实力不够,不然我全统一我文章中的符号和语言了😭.

那么我们就正式开始组合筛法的旅途了!!!

<center>
<img src="/image/notes-about-sieve-methods-4/T1.gif" width="30%">
</center>