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
    - Merten's Theorem
    - Chebyshev's Function
    - Brun's Theorem
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

但是当我尝试推导的过程中,一些类似的结论和定理也蹦了出来,也是花了我好长一段时间才弄明白这些东西.因此不记录下来岂不是大亏?

#### 承认环节

虽然要证明孪生素数的倒数之和是收敛的,并且也能够从Brun筛法讲到(2.19)为什么成立,但是这样子的话篇幅难免拉的太长,而且其它的结论就只能缩在角落了.因此,我将承认一些命题,并且从这些命题开始,证明我们想要的结论.

首先就是承认上述关于孪生素数计数函数$\pi_2(x)$的估计式:

> $$\pi_2(x) := |\{ p : p \le x, p + 2 = p' \}| = O\left(\dfrac{x}{\log^2 x} (\log\log x)^2\right).\quad (2.1)$$

其次,我们也承认素数定理,并且利用其的一个较弱的估计式:

> $$\pi(x) = \dfrac{x}{\log x} + o\left(\dfrac{x}{\log x}\right).\quad (2.2)$$

实际上,上述两个都有更加精细的估计,但在此按下不表.

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
> $$\sum_{\color{red}u_1 < n \le u_2} b(n)f(n) = B(u_2)f(u_2) - B(u_1)f(u_1) - \int_{u_1}^{u_2} B(u)f'(u) \textrm{d}u.$$

现在万事具备,准备开始work work!

#### Merten第一定理

现在我们开始证明第一个结论$^{[6]}$:

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

于是我们就证得了该定理.而关键的一步就是需要严格证明(3.2).

##### 证明

首先我们需要对(2.4)进行进一步的估计,要得到(3.2)类型的估计式.

需要注意到的是,给定一个$p$后,$k$的取值范围也随之确定,由$p^k \le n$可知,$1 \le k \le K(p) := \left\lfloor \dfrac{\log n}{\log p} \right\rfloor.$

于是有:

$$\begin{split}
    \log(n!) & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \left\lfloor \dfrac{n}{p^k} \right\rfloor \log p \\ 
    & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \left( \dfrac{n}{p^k} + O(1) \right) \log p \\ 
    & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \dfrac{n}{p^k} \log p + \sum_{p \le n}\sum_{k = 1}^{K(p)} O(1) \log p \\
    & = \displaystyle\sum_{p \le n} \frac{n}{p} \log p + \sum_{p \le n}\sum_{k = 2}^{K(p)} \dfrac{n}{p^k} \log p + \sum_{p \le n}\sum_{k = 1}^{K(p)} O(1) \log p.
\end{split} \quad (3.3)$$

其中,当$K(p)<2$时,求和$\sum\limits_{k = 2}^{K(p)}$这项规定为$0$.

我们关注(3.3)中右侧的第三项,将$K(p)$具体写开来有:

$$\sum_{p \le n}\sum_{k=1}^{K(p)} O(1) \log p \le O(1)\sum_{p \le n} \dfrac{\log n}{\log p} \cdot\log p = \pi(n) O(\log n).$$

再利用(2.2)即可得到上述结果为$O(n)$.

而对于(3.3)中的第二项,我们可以直接将$K(p)$放至$\infty$,然后利用几何级数可得:

$$\sum_{p \le n}\sum_{k = 2}^{K(p)} \dfrac{n}{p^k} \log p \le \sum_{p \le n}\sum_{k = 2}^{\infty} \dfrac{n}{p^k} \log p = n \sum_{p \le n} \dfrac{\log p}{p(p-1)} \le n \sum_{k = 1}^{\infty} \dfrac{\log k}{k(k-1)}.$$

而上述关于$k$的级数是收敛的,因此结果也是$O(n)$.

至此我们彻底得到了$\log(n!)$类似于(3.2)的估计式,并且给出了余项阶的估计:

$$\log(n!) = n \sum_{p \le n} \dfrac{\log p}{p} + O(n).$$

再联立(2.3)便有:

$$n \sum_{p \le n} \dfrac{\log p}{p} = n\log n + O(n).$$

也就是:

$$\sum_{p \le n} \dfrac{\log p}{p} = \log n + O(1).$$

因此我们便证明了Merten第一定理.<span style="float: right"> $\square$ </span>

#### Merten第二定理

接下来我们可以证明第二个结论$^{[6]}$:

> **Merten第二定理:**
>
> $$\sum_{p \le n} \frac{1}{p} = \log\log n + O(1).\quad (4.1)$$
>
> 换言之,所有的素数的倒数之和是发散的.

##### 直观理解

其实思路还是比较明确的,就是用分部求和公式进行运算即可.虽然此处和我在第二部分称述的公式有所不同,但实际上也是一样的,乘上一个指示函数$\chi(n)$便可以直接使用了.

但是对于素数倒数之和发散这个命题而言,也可以用以下放缩的方式去解决.

由(2.2)我们可以估计,当$n$比较大的时候,$(10^n, 10^{n+1}]$中的素数个数约为:

$$\pi(10^{n+1}) - \pi(10^n) \approx \frac{10^{n+1}}{(n+1)\log 10} - \frac{10^n}{n\log 10}.\quad (4.2)$$

而在这个区间内的任意一个素数$p$均满足:

$$\frac{1}{p} \ge \frac{1}{10^{n+1}}.$$

于是我们便有:

$$\begin{split}
\displaystyle\sum_{p} \frac{1}{p} & \ge \frac{1}{\log 10} \sum_{n = 1}^{\infty} \left(\frac{10^{n+1}}{n+1} - \frac{10^n}{n}\right) \cdot \frac{1}{10^{n+1}} \\
& = \frac{1}{10\log 10} \sum_{n = 1}^{\infty} \frac{9n-1}{n(n+1)} = \infty.
\end{split}$$

因此我们便证明了所有素数的倒数之和是发散的.最后我们用一个表格来统计$(10^n,10^{n+1}]$间素数的实际数量和我们(4.2)得到的估计数量,而数据参考来自OEIS$^{[7]}$(~~陶哲轩用了也说好👍~~).

<table>
    <center> 区间$(10^n, 10^{n+1}]$中素数的实际个数与估计个数 </center> 
    <tr>
        <th> n的取值 </th> 
        <th> 实际个数 </th> 
        <th>估计个数</th> 
        <th> 误差 </th>
    </tr>
    <tr>
        <td align="center"> $n = 3$ </td>
        <td align="center"> $1061$ </td>
        <td align="center"> $940.97$ </td>
        <td align="center"> $0.1131$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 4$ </td>
        <td align="center"> $8363$ </td>
        <td align="center"> $7600.15$ </td>
        <td align="center"> $0.0912$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 5$ </td>
        <td align="center"> $68906$ </td>
        <td align="center"> $63696.52$ </td>
        <td align="center"> $0.0716$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 6$ </td>
        <td align="center"> $586081$ </td>
        <td align="center"> $548038.27$ </td>
        <td align="center"> $0.0649$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 7$ </td>
        <td align="center"> $5096876$ </td>
        <td align="center"> $4808260.34$ </td>
        <td align="center"> $0.0566$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 8$ </td>
        <td align="center"> $45086079$ </td>
        <td align="center"> $42826261.41$ </td>
        <td align="center"> $0.0501$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 9$ </td>
        <td align="center"> $404204977$ </td>
        <td align="center"> $386039539.47$ </td>
        <td align="center"> $0.0449$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 10$ </td>
        <td align="center"> $3663002302$ </td>
        <td align="center"> $3513837171.76$ </td>
        <td align="center"> $0.0407$ </td>
    </tr>
</table>

因此我们可以看到,我们的估计还是很准确的!

##### 证明

而该定理的另一种证明就是用铺垫已久的分部求和公式.

令$\chi(n)$为素数集合的特征函数,即$\chi(n) = 1$当且仅当$n = p$.

于是根据Merten第一定理(3.1)便有:

$$B(n) := \sum_{1 < k \le n} \frac{\chi(n)\log n}{n} = \sum_{p \le n} \frac{\log p}{p} = \log n + O(1).$$

而在使用分布求和公式中,对于第二项而言,其阶也是$O(1)$,因此便得:

$$\begin{split}
\sum_{p \le n} \frac{1}{p} & = \frac{1}{2} + \sum_{2 < k \le n} \dfrac{\chi(n)\log n}{n} \frac{1}{\log p} \\
& = (\log n + O(1))\frac{1}{\log n} + O(1) + \int_{2}^{n} \frac{\log u + O(1)}{u \log^2 u} \textrm{d}u \\ 
& = \log\log n + O(1).
\end{split}$$

至此,Merten第二定理也证明完毕.<span style = "float: right">$\square$</span>

#### Chebyshev第一函数

#### Brun定理

<table>
    <center> 区间$(10^n, 10^{n+1}]$中孪生素数对的实际个数与估计个数 </center> 
    <tr>
        <th> n的取值 </th> 
        <th> 实际个数 </th> 
        <th> 估计个数 </th> 
        <th> 相差倍数 </th>
        <th> 猜测个数 </th>
    </tr>
    <tr>
        <td align="center"> $n = 3$ </td>
        <td align="center"> $170$ </td>
        <td align="center"> $302.67$ </td>
        <td align="center"> $1.8$ </td>
        <td align="center"> $127.94$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 4$ </td>
        <td align="center"> $1019$ </td>
        <td align="center"> $2202.14$ </td>
        <td align="center"> $2.2$ </td>
        <td align="center"> $840$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 5$ </td>
        <td align="center"> $6945$ </td>
        <td align="center"> $16913.86$ </td>
        <td align="center"> $2.4$ </td>
        <td align="center"> $5919.89$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 6$ </td>
        <td align="center"> $50811$ </td>
        <td align="center"> $135062.16$ </td>
        <td align="center"> $2.7$ </td>
        <td align="center"> $43893.92$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 7$ </td>
        <td align="center"> $381332$ </td>
        <td align="center"> $1110321.26$ </td>
        <td align="center"> $2.9$ </td>
        <td align="center"> $338201.94$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 8$ </td>
        <td align="center"> $2984194$ </td>
        <td align="center"> $9335309.72$ </td>
        <td align="center"> $3.1$ </td>
        <td align="center"> $2684660.47$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 9$ </td>
        <td align="center"> $23988173$ </td>
        <td align="center"> $79905644.66$ </td>
        <td align="center"> $3.3$ </td>
        <td align="center"> $21823071.91$ </td>
    </tr>
    <tr>
        <td align="center"> $n = 10$ </td>
        <td align="center"> $196963369$ </td>
        <td align="center"> $693984237.71$ </td>
        <td align="center"> $3.5$ </td>
        <td align="center"> $180861470.92$ </td>
    </tr>
</table>

#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P37-P52.

[2] 潘承洞, 潘承彪. 解析数论基础[M]. 哈尔滨工业大学出版社, 2016. P17-P19.

[3] Ege Erdil. Brun's theorem and sieve theory[Z]. https://www.lesswrong.com/posts/aSYvbztFDdG7LBeRz/brun-s-theorem-and-sieve-theory#The_sieve_of_Eratosthenes.

[4] 关于素数指标求和的估计. Chatgpt[Z]. https://chatgpt.com/share/67b01f77-4234-800c-9b15-158446dbb868.

[5] Mathematics. Stackexchange. Prove that $\displaystyle\sum_{\substack{p \le x \\ p \text{ prime}}} \log p = x + O\left(\dfrac{x}{\log^2 x}\right)$ using Prime Number Theorem[Z]. https://math.stackexchange.com/questions/4340708/prove-that-sum-limits-p-le-x-p-text-prime-log-p-xo-left-fracx-log.

[6] Wikipedia. Merten's theorem[Z]. https://en.wikipedia.org/wiki/Mertens%27_theorems.

[7] OEIS. Number of primes < 10^n[Z]. https://oeis.org/A006880.

[8] OEIS. Number of twin prime pairs below 10^n[Z]. https://oeis.org/A007508.

[9] Wikipedia. Twin prime[Z]. http://en.wikipedia.org/wiki/Twin_prime.

[10] Wikipedia. Chebyshev function[Z]. https://en.wikipedia.org/wiki/Chebyshev_function.