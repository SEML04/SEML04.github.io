---
title: 一系列
mathjax: true
date: 2025-02-15 16:34:04
categories:
    - 解析数论
tags:
    - Prime Number Theorem
    - Analytical Number Theory
    - Estimation Formula
    - Brun Constant
---

#### 引言

在学习Halberstam的第二章时(~~没错,我还在第二章😭~~),在第二节*Brun Pure Sieve*中,为了关于孪生素数的猜想,我们付出了巨大的牺牲,巨大的贡献,巨大的Carry,最终成功得到了:

> $$\pi_2(x) := |\{ p : p \le x, p + 2 = p' \}| \ll \dfrac{x}{\log^2 x} (\log\log x)^2,\quad (2.19)$$

其中$p$和$p'$当然都指的是素数,以及在解析数论中,$\ll$并不是远远小于的意思,而是*Big O Notation*的意思,其在论文[Variants of the Selberg sieve, and bounded intervals containing many primes](https://link.springer.com/article/10.1186/s40687-014-0012-7)中也有更为严谨详细的定义.

但是Halberstam只是一句话带过:

> $\quad$ Actually, this estimate was the first result Brun obtained for the prime twin problem. He put it into the striking form, which is an easy consequence of (2.19), that the sum
>
> $$\sum_{\substack{p \\ p+2=p'}} \dfrac{1}{p}$$
>
> is, at any rate, convergent.$^{[1]}$



#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P37-P52.

[2] Brun's theorem and sieve theory. Ege Erdil[Z]. https://www.lesswrong.com/posts/aSYvbztFDdG7LBeRz/brun-s-theorem-and-sieve-theory#The_sieve_of_Eratosthenes, 3 Dec 2022.

[3] 关于素数指标求和的估计. Chatgpt[Z]. https://chatgpt.com/share/67b01f77-4234-800c-9b15-158446dbb868, 15 Feb 2025.

[4] Prove that $\displaystyle\sum_{\substack{p \le x \\ p \text{ prime}}} \log p = x + O\left(\dfrac{x}{\log^2 x}\right)$ using Prime Number Theorem. Mathematics. Stackexchange[Z]. https://math.stackexchange.com/questions/4340708/prove-that-sum-limits-p-le-x-p-text-prime-log-p-xo-left-fracx-log, 23 Dec 2021.