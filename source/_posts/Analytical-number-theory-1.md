---
title: 围绕Brun定理展开的素数指标求和估计式
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

在学习Halberstam的第二章时(~~没错,我还在第二章😭~~),在第二节*Brun Pure Sieve*中,为了关于孪生素数的猜想,我们付出了巨大的贡献,巨大的牺牲,巨大的Carry,最终成功得到了:

> $$\pi_2(x) := |\{ p : p \le x, p + 2 = p' \}| \ll \dfrac{x}{\log^2 x} (\log\log x)^2,\quad (\text{Halberstam } 2.19)$$

其中$p$和$p'$当然都指的是素数,以及在解析数论中,$\ll$并不是远远小于的意思,而是*Big O Notation*的意思,其在论文[Variants of the Selberg sieve, and bounded intervals containing many primes](https://link.springer.com/article/10.1186/s40687-014-0012-7)中也有更为严谨详细的定义.

但是Halberstam只是一句话带过:

> $\quad$ Actually, this estimate was the first result Brun obtained for the prime twin problem. He put it into the striking form, which is an easy consequence of (2.19), that the sum
>
> $$\sum_{\substack{p \\ p+2=p'}} \dfrac{1}{p}$$
>
> is, at any rate, convergent.$^{[1]}$

但是当我尝试推导的过程中,一些类似的结论和定理也蹦了出来也是花了我好长一段时间才弄明白这些东西.因此不记录下来岂不是大亏?

#### 承认环节

虽然要证明孪生素数的倒数之和是收敛的,并且也能够从Brun筛法讲到(2.19)为什么成立,但是这样子的话篇幅难免拉的太长,而且其它的结论就只能缩在角落了.因此,我将承认一些命题,并且从这些命题开始,证明我们想要的结论.

首先就是承认上述关于孪生素数计数函数$\pi_2(x)$的估计式:

> $$\pi_2(x) := |\{ p : p \le x, p + 2 = p' \}| \ll \dfrac{x}{\log^2 x} (\log\log x)^2.\quad (2.1)$$

其次,我们也承认素数定理,并且利用其的一个较弱的估计式:

> $$\pi_(x) = \dfrac{x}{\log x} + o\left(\dfrac{x}{\log x}\right).\quad (2.2)$$

以及下述关于$n!$的两个结论.首先是关于$n!$的估计式,也就是Stirling公式:

$$n! \sim \sqrt{2\pi n} \left( \frac{n}{e} \right)^n.$$

而我们需要用到的是:

> $$\log(n!) = n\log n - n + O(\log n) = n\log n + O(n).\quad (2.3)$$

然后就是$n!$的素因子分解式,也就是Legendre定理给出的:

> $$\log(n!) = \sum_{p \le n}\sum_{\substack{k \le 1 \\ p^k \le n}} \left\lfloor \dfrac{n}{p^k} \right\rfloor \log p.\quad (2.4)$$

最后承认一下我们需要使用到的工具,分部求和法$^{[2]}$:

> **Abel分部求和法:**
>
> 设$b(n)(n = 1,2,\cdots)$是一复数列,其和函数$B(u) = \sum\limits_{n \le u} b(n)$,再设$0 \le u_1 < u_2$,$f(n)$是区间$[u_1, u_2]$上的连续可微函数,那么有:
>
> $$\sum_{u_1 < n \le u_2} b(n)f(n) = B(u_2)f(u_2) - B(u_1)f(u_1) - \int_{u_1}^{u_2} B(u)f'(u) \textrm{d}u.$$

现在万事具备,准备开始work work!

#### Merten第一定理

现在我们开始证明第一个结论:

> **Merten第一定理:**
>
> $$\sum_{p \le n} \dfrac{\log p}{p} = \log n + O(1). \quad (3.1)$$

##### 直观理解

该定理实际上可以从(2.3)得到:

$$\log(n!) = n\log n + O(n).$$

而我们分析一下左侧.对于每一个素数$p$而言,其在$n!$出现的次数差不多为$\dfrac{n}{p}$.即:

$$n! = \prod_{p \le n} p^{n/p}.$$

也就是:

$$\log(n!) \approx \sum_{p \le n} \dfrac{n}{p} \log p = n \sum_{p \le n} \dfrac{\log p}{p}.\quad (3.2)$$

于是我们就证得了该定理.而关键的一步就是(3.2)的严格证明了.

##### 证明

首先我们需要对(2.4)进行进一步的估计,要得到(3.2)类型的估计式.

需要注意到的是,给定一个$p$后,$k$的取值范围也随之确定,由$p^k \le n$可知,$1 \le k \le K(p) := \left\lfloor \dfrac{\log n}{\log p} \right\rfloor.$

于是有:

$$\begin{split}
    \log(n!) & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \left\lfloor \dfrac{n}{p^k} \right\rfloor \log p \\ 
    & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \left( \dfrac{n}{p^k} + O(1) \right) \log p \\ 
    & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \dfrac{n}{p^k} \log p + \sum_{p \le n}\sum_{k = 1}^{K(p)} O(1) \log p
\end{split}$$



#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P37-P52.

[2] 潘承洞, 潘承彪. 解析数论基础[M]. 哈尔滨工业大学出版社, 2016. P17-P19.

[3] Ege Erdil. Brun's theorem and sieve theory[Z]. https://www.lesswrong.com/posts/aSYvbztFDdG7LBeRz/brun-s-theorem-and-sieve-theory#The_sieve_of_Eratosthenes, 3 Dec 2022.

[4] 关于素数指标求和的估计. Chatgpt[Z]. https://chatgpt.com/share/67b01f77-4234-800c-9b15-158446dbb868, 15 Feb 2025.

[5] Prove that $\displaystyle\sum_{\substack{p \le x \\ p \text{ prime}}} \log p = x + O\left(\dfrac{x}{\log^2 x}\right)$ using Prime Number Theorem. Mathematics. Stackexchange[Z]. https://math.stackexchange.com/questions/4340708/prove-that-sum-limits-p-le-x-p-text-prime-log-p-xo-left-fracx-log, 23 Dec 2021.