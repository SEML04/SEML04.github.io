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
> $$\sum_{p,p+2=p'} \dfrac{1}{p}$$
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
> 设$b(n)(n = 1,2,\cdots)$是一复数列,其和函数$S(u) = \sum\limits_{n \le u} b(n)$,再设$0 \le u_1 < u_2$,$f(n)$是区间$[u_1, u_2]$上的连续可微函数,那么有:
>
> $$\sum_{\color{red}u_1 < n \le u_2} b(n)f(n) = S(u_2)f(u_2) - S(u_1)f(u_1) - \int_{u_1}^{u_2} S(u)f'(u) \textrm{d}u.$$

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
    & = \displaystyle\sum_{p \le n} \frac{n}{p} \log p + \sum_{p \le n}\sum_{k = 2}^{K(p)} \dfrac{n}{p^k} \log p + \sum_{p \le n}\sum_{k = 1}^{K(p)} O(1) \log p. \quad (3.3)
\end{split}$$

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

其实思路还是比较明确的,就是用分部求和公式进行运算即可.虽然此处和我在第二部分称述的公式有所不同,但实际上也是一样的,这在下面的证明中就能看到.

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

令$\chi(n)$为素数集合的特征函数,即:

$$\chi(n) = \left\{\begin{array}{ll}
    \log p & \text{if } n = p, \\
    0 & \text{else.}
\end{array}\right. \quad (4.3)$$

于是根据Merten第一定理(3.1)便有:

$$S_1(n) := \sum_{1 < k \le n} \frac{\chi(k)\log k}{k} = \sum_{p \le n} \frac{\log p}{p} = \log n + O(1).$$

而在使用分布求和公式中,使用公式后得到的$\dfrac{S_1(2)}{\log 2}$,其阶也是$O(1)$,因此便得:

$$\begin{split}
    \sum_{p \le n} \frac{1}{p} & = \frac{1}{2} + \sum_{2 < k \le n} \dfrac{\chi(k)\log k}{k} \frac{1}{\log k} \\
    & = \frac{1}{2} + \frac{S_1(n)}{\log n} - \frac{S_1(2)}{\log 2} + \int_{2}^{n} \frac{S_1(u)}{u \log^2 u} \textrm{d}u \\
    & = O(1) + (\log n + O(1))\frac{1}{\log n} + \int_{2}^{n} \frac{\log u + O(1)}{u \log^2 u} \textrm{d}u \\ 
    & = \log\log n + O(1).
\end{split}$$

至此,Merten第二定理也证明完毕.<span style = "float: right">$\square$</span>

#### Chebyshev第一函数

在解决完Merten第一和二定理后,我们再来看一个形式很像的结构,也就是Chebyshev第一函数$^{[10]}$.

> **Chebyshev第一函数:**
>
> $$\vartheta(n) := \sum_{p \le n} \log p = n + o(n). \quad (5.1)$$

##### 直观理解

对于这个定理的余项,实际上可以更精确的估计它的阶为$O\left(\frac{n}{\log^2 n}\right)$.在Math exchange上便有这个部分的解答$^{[5]}$,但是我们需要用到素数定理更精细的余项估计.而这里,我们将从(2.2)这样的一个粗略的素数定理出发,得到上述的结果.

而对于上述结果的证明,实际上我们仍然可以用分布求和公式得到,而这里我们需要引入的只有(4.3)中的特征函数即可.然后利用以下式子即可:

$$S_2(n) := \sum_{1 < k \le n} \chi(k) = \sum_{p \le n} 1 = \pi(x) = \frac{n}{\log n} + o\left( \frac{n}{\log n} \right).\quad (5.2)$$

当意识到要乘上特征函数$\chi(n)$后,这个定理便成了一个普通的练习题了.

而我们也有Chebyshev第二函数$^{[10]}$,而它就是和Mangoldt函数结合在一块,然后有:

$$\Psi(n) := \sum_{k \le n} \Lambda(n) = n + o(n).$$

而其与Chebyshev第一函数也有一定的关系,在此就不再阐述了.

##### 证明

引入(4.3)中的特征函数后,在使用(5.2)有:

$$\begin{split}
    \vartheta(n) & = \sum_{1 < k \le n} \chi(k)\log k \\
    & = S_2(n)\log n - \int_{1}^{n} \frac{S_2(u)}{u} \textrm{d}u \\
    & = \left( \frac{n}{\log n} + o\left( \frac{n}{\log n} \right) \right) \log n - \int_{1}^{n}  \left( \frac{1}{\log u} + o\left( \frac{1}{\log u} \right) \right) \textrm{d} u \\
    & = n + o(n).
\end{split}$$

其中右侧积分式的结果$\textrm{li}(n) + o(\textrm{li}(n)) = o(n)$.于是得证. <span style="float: right">$\square$</span>

#### Brun定理

最后就是本篇博客的重点内容,而Brun定理实际上就是(2.1)所述,但我们这里证明的是其推论:

> **Brun定理:**
>
> $$\sum_{p,p+2=p'} \frac{1}{p} = O(1). \quad (6.1)$$
>
> 换言之也就是所有孪生素数的倒数之和是收敛的.

而这里又有一个Brun常数,其定义为所有孪生素数的倒数之和:

$$B_2 := \sum_{p,p+2=p'} \frac{1}{p} + \frac{1}{p+2} \approx 1.902160583104\cdots.$$

而我们这里只证明在(2.1)成立的前提下,有$\displaystyle\sum_{p,p+2=p'} \frac{1}{p}$收敛.

##### 直观理解

我们模仿(4.1)中发散的证明,可以先切割出区间,然后再通过放缩法尝试证明.

由(2.1)知:

$$\pi_2(n) \ll \dfrac{n}{\log^2 n} (\log\log n)^2 \ll \frac{n}{\log^{3/2} n}. \quad (6.2)$$

在区间$(10^n, 10^{n+1}]$内的素数$p$均满足:

$$\frac{1}{p} \le \frac{1}{10^n}.$$

由于(6.2)并不像(2.2)那样是一个渐近式,因此在$n$比较大的情况下,该区间内的孪生素数对的个数有如下的估计(注意此处不再是$\approx$):

$$\pi_2(10^{n+1}) - \pi_2(10^n) \le \frac{10^{n+1}}{((n+1)\log 10)^{3/2}} - \frac{10^{n}}{(n\log 10)^{3/2}}.\quad (6.3)$$

因此利用(6.3),使用放缩法便有:

$$\begin{split}
    \sum_{p,p+2=p'} \frac{1}{p} & \le \sum_{n = 1}^{\infty} \left( \frac{10^{n+1}}{((n+1)\log 10)^{3/2}} - \frac{10^{n}}{(n\log 10)^{3/2}} \right) \frac{1}{10^n} \\ 
    & = \frac{1}{(\log 10)^{3/2}} \sum_{n = 1}^{\infty} \left( \frac{10}{(n+1)^{3/2}} - \frac{1}{n^{3/2}} \right) \\
    & \approx 3.86702\cdots.
\end{split}$$

于是根据我们的结果,可以得到Brun常数的一个上界为$2 \times 3.86702\cdots = 7.73403\cdots.$

实际上,对于孪生素数对的个数有一个更加精细的估计,那就是:

$$\pi_2(x) = O\left( \frac{x}{\log^2 x} \right).$$

但是目前关于$\pi_2(x)$的渐近式仍然只是一个猜测,其就是Hardy-Littlewood猜想:

$$\pi_2(x) \sim 2C_2\left( \frac{x}{\log^2 x} \right).$$

其中:

$$C_2 = \prod_{p > 2} \left( 1 - \frac{1}{(p-1)^2} \right) \approx 0.6601618\cdots.$$

而根据OEIS的数据$^{[8]}$,我们可以把区间内孪生素数对的实际数量,估计数量以及H-L的猜测数量用如下表格画出来:

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

因此我们的证明过程是可行的,并且H-L猜想正确的置信度很高.

##### 证明

现在我们从概率的观点出发.还是从(6.2)的这个式子出发,我们有:

$$\frac{\pi_2(n)}{n} \ll \frac{1}{\log^{3/2} n}.\quad (6.4)$$

而(6.4)的意思便是,在区间$(1,n]$上,随机一个数是素数的概率$P_n$至多为$\dfrac{1}{\log^{3/2} n}$.

$$\sum_{p \le n,p+2=p'} \frac{1}{p} \approx \sum_{1 < k \le n} P_n \cdot \frac{1}{k} \le \sum_{1 < k \le n} \frac{1}{k \log^{3/2} k}.\quad (6.5)$$

而(6.5)右侧对$n$是收敛的,且收敛值约为2.06899.因此这也得到了Brun常数的一个估计.因此可知孪生素数的倒数之和也是收敛的.<span style="float:right">$\square$</span>

#### 总结

在LessWrong网站上,Ege Erdil的文章$^{[3]}$对孪生素数的分析极为精彩!(~~深夜里看完之后马上爬起来进行补充!!!~~)文中不仅讲了Eratosthenes筛法和Brun筛法,以及Brun定理,并且思考的方式和大胆提出猜想的想法也很强!

看完之后,感觉对Halberstam上的内容也有了一些新的认识,对其背后的直观想法有了一定的认识,至少知道了这确实可以说是Eratosthenes筛法的最直接最简单的改良.直观猜测和严谨语言之间的这个度,还是很重要的.

然后就是直接复制一下原文的Conclusion,也相当于是贴一下Abstract一样:

> The fundamental nature of the above proof is that we understand the behavior of primes relative to modular congruence classes quite well, at least when the modulus is small compared to the primes in question. We then try to leverage our understanding here into saying something about the distribution of primes in other sets.
>
> This is the heart of sieve theory: it's used in cases when you understand the behavior of some objects well in some substructures and you want to "piece that together" to gain a broader understanding of how the objects behave. Here, the substructures are arithmetic progressions or modular congruence classes, and the objects are the prime numbers, but the fundamental ideas of sieve theory may be applied in other domains as well.
>
> The Brun sieve itself is a fairly basic sieve that was introduced over a hundred years ago for the exact purpose of proving tight upper bounds on $\pi_2(x)$, though it can also be used for other purposes as a general way to prove upper bounds on various quantities involving primes using combinatorial methods. Today, more sophisticated sieves are able to prove nontrivial lower bounds as well, which is often a more tricky problem than proving upper bounds in sieve theory.
>
> For more on sieve theory, you might want to check out the associated tag on Terence Tao's blog. It contains material ranging from introductory to research-level in sophistication.

然后就是规划!虽然应该要把陈氏定理尽快做出来才行,但我目前的想法是先把Halberstam的第二章看完,然后再去看陈景润所使用的Selberg筛法.只能说任务挺重,还得加把劲才行了.😢

<center>
<img src="/image/Analytical-number-theory-1/T1.gif" width="30%">
</center>

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

[11] Wikipedia. Brun's theorem[Z]. https://en.wikipedia.org/wiki/Brun%27s_theorem.