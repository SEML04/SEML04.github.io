---
title: 特殊函数之prime tuple的探测器 -- k-th Mangoldt函数
mathjax: true
date: 2025-01-08 17:11:53
categories:
    - 解析数论
tags:
    - Dirichlet Convolution
    - Mangoldt Function
---

#### 引言

期末周快结束了,差不多终于可以看点自己感兴趣的内容了!堆积了好多内容可以更新,但事已至此,也只能慢慢来了.

<center>
<img src="/image/k-th Mangoldt function/T1.jpg" width="30%">
</center>

首先先记录下k-th Mangoldt function的内容,因为它实际上就是在考察对Dirichlet卷积的计算,初等数论的期末考试也有这方面的考题,虽然很简单就是了.因此接下来的内容里,应该主要是计算为主了,这下要狠狠敲公式了.

但是这个函数我也并不是在什么数论习题册上找到的,而是它实实在在地出现在了GPY的论文中,为了限制一个数的质因子个数的函数.并且十分重要的GPY权函数也是从k-th Mangoldt函数出发,最后推导出来的.因此对这个函数的讨论还是有记录价值的.

#### Mangoldt函数经典版

最常见到的Mangoldt函数就是1st Mangoldt函数,用Dirichlet卷积表示出来就是:

$$\Lambda_1(n) = \mu(n) * \log(n) = \sum_{d \mid n} \mu(d) \log\\left(\dfrac{n}{d} \\right). \tag{1}$$

<!-- $$\Lambda_1(n) = \mu(n) * \log(n) = \sum_{d \mid n} \mu(d) \log\left(\dfrac{n}{d} \right). \tag{1}$$ -->

当$n = p_1^{r_1} p_2^{r_2} \cdots p_s^{r_s}$时,其$\Lambda_1(n)$具体的值可以写出来:

$$\Lambda_1(n) = \\left\\{ \begin{array}{l} \log p_1 & \textrm{if}\ n = p_1^{r_1} \\\\ 0 & \textrm{if}\ s > 1 \end{array} \\right. \\tag{2}$$

<!-- $$\Lambda_1(n) = \left\{ 
    \begin{array}{l}
        \log p_1 & \textrm{if}\ n = p_1^{r_1} \\ 
        0 & \textrm{if}\ s > 1
    \end{array}
 \right. \tag{2}$$ -->

也就是:当$n$只有一个素因子的时候,$\Lambda_1(n) \neq 0$,而对于其余的$n$,$\Lambda_1(n) = 0$.因此便能限制一个数的质因子个数了.接下来将给出一个证明,其想法也可以用在k-th Mangoldt函数的讨论中.

(3)式的证明:

$\quad$ 设$n = p_1^{r_1} p_2^{r_2} \cdots p_s^{r_s}$,于是函数的值可展开为:

$$\\begin{array}{lll}    \\Lambda_1(n) & = &\\sum_{d \\mid n} \\mu(d) \\log \\left( \\dfrac{n}{d}  \\right) \\\\     & = & {\\color[RGB]{230,51,51}[ r_1\\log p_1 + \\cdots + r_s\\log p_s ]} \\\\    & & {\\color{green}-[(r_1-1)\\log p_1 + \\cdots + r_s\\log p_s] - \\cdots - [r_1\\log p_1 + \\cdots + (r_s-1)\\log p_s]} \\\\    & & {\\color{brown} + \\cdots } {\\color[RGB]{178,102,255} + (-1)^s [(r_1-1)\\log p_1 + \\cdots + (r_s-1)\\log p_s]} \\\\    & := & a_1\\log p_1 + \\cdots + a_s\\log p_s\\end{array}$$

<!-- $$\begin{array}{lll}
    \Lambda_1(n) & = &\sum_{d \mid n} \mu(d) \log \left( \dfrac{n}{d}  \right) \\ 
    & = & {\color[RGB]{230,51,51}[ r_1\log p_1 + \cdots + r_s\log p_s ]} \\
    & & {\color{green}-[(r_1-1)\log p_1 + \cdots + r_s\log p_s] - \cdots - [r_1\log p_1 + \cdots + (r_s-1)\log p_s]} \\
    & & {\color{brown} + \cdots } {\color[RGB]{178,102,255} + (-1)^s [(r_1-1)\log p_1 + \cdots + (r_s-1)\log p_s]} \\
    & := & a_1\log p_1 + \cdots + a_s\log p_s
\end{array}$$ -->

$\quad$ 在上述式子中,若$s = 1$,即$n = p_1^{r_1}$时,很容易知道:

$$\Lambda_1(n) = r_1 \log p_1 - (r_1 - 1) \log p_1 = \log p_1.$$

$\quad$ 接下来考虑$s > 1$的情况,这个时候我们关注$\log p_i$前面的系数,也就是$a_i$:

$$\\begin{array}{lll}    a_i & = & {\\color[RGB]{230,51,51} r_i\\cdot\\binom{s}{0}}         {\\color{green} - \\left[ r_i\\cdot\\binom{s}{1} -\\binom{s-1}{0} \\right]}         {\\color{brown} + \\cdots + (-1)^j \\left[ r_i\\cdot\\binom{s}{j} - \\binom{s-1}{j-1} \\right] +\\cdots} \\\\  &&{\\color[RGB]{178,102,255}+(-1)^s \\left[ r_i\\cdot \\binom{s}{s} - \\binom{s-1}{s-1}  \\right]} \\\\    & = & r_i \\cdot \\left[ \\binom{s}{0} - \\binom{s}{1} + \\cdots + (-1)^s \\binom{s}{s}  \\right]        + \\left[ \\binom{s-1}{0} - \\binom{s-1}{1} + \\cdots + (-1)^{s-1} \\binom{s-1}{s-1}  \\right] \\\\    & = & r_i \\cdot (1-1)^s + (1-1)^{s-1} = 0.\\end{array}$$

<!-- $$\begin{array}{lll}
    a_i & = & {\color[RGB]{230,51,51} r_i\cdot\binom{s}{0}} 
        {\color{green} - \left[ r_i\cdot\binom{s}{1} -\binom{s-1}{0} \right]} 
        {\color{brown} + \cdots + (-1)^j \left[ r_i\cdot\binom{s}{j} - \binom{s-1}{j-1} \right] +\cdots} \\  
    & & {\color[RGB]{178,102,255}+(-1)^s \left[ r_i\cdot \binom{s}{s} - \binom{s-1}{s-1}  \right]} \\
    & = & r_i \cdot \left[ \binom{s}{0} - \binom{s}{1} + \cdots + (-1)^s \binom{s}{s}  \right]
        + \left[ \binom{s-1}{0} - \binom{s-1}{1} + \cdots + (-1)^{s-1} \binom{s-1}{s-1}  \right] \\
    & = & r_i \cdot (1-1)^s + (1-1)^{s-1} = 0.
\end{array}$$ -->

$\quad$ 由于系数$a_i$均为$0$,因此可知此时有$\Lambda_1(n) = 0$.

$\quad$ 综上便可得到结论. <span style = "float: right"> $\square$ </span>

从上面证明过程中可以发现,其结果的关键一步是,将求和式变成乘积式.而Euler乘积公式以及Riemann$\zeta$函数也是这一想法的体现.

#### Mangoldt函数特典版

现在对(1)进行推广,便能得到k-th Mangoldt函数:

$$\Lambda_k(n) = \mu(n) * \log^k (n) = \sum_{d \mid n} \mu(d) \log^k \\left( \dfrac{n}{d} \\right). \tag{3}$$

<!-- $$\Lambda_k(n) = \mu(n) * \log^k (n) = \sum_{d \mid n} \mu(d) \log^k \left( \dfrac{n}{d} \right). \tag{3}$$ -->

而它也有限制一个数质因数个数的作用,并且相较之下更加灵活.其有以下的结论:

$$\\Lambda_k(n) \\left\\{ \\begin{array}{lll}\\neq 0 & & \\textrm{if}\\ s < k \\\\= k!\\log p_1 \\cdots \\log p_s & & \\textrm{if}\\ s = k \\\\= 0 & & \\textrm{if}\\ s > k  \\end{array} \\right. \\tag{4}$$

<!-- $$\Lambda_k(n) \left\{ \begin{array}{lll}
    \neq 0 & & \textrm{if}\ s < k \\
    = k!\log p_1 \cdots \log p_s & & \textrm{if}\ s = k \\
    = 0 & & \textrm{if}\ s > k  
\end{array} \right. \tag{4}$$ -->

因此可以知道的是,当$n$的质因子个数大于$k$的时候,它就不能够通过$\Lambda_k(n)$的探测,当且仅当$n$的质因子个数小于等于$k$的时候,$\Lambda_k(n)$才得以保留.其中当$s = k$时,结果才容易直接写出,而$s < k$的时候,表达式也是能推出来的,但是就会稍微有一点点复杂了,这个在下面的证明过程中也能看到.

(4)式的证明:

$\quad$ 仍然是假设$n = p_1^{r_1} p_2^{r_2} \cdots p_s^{r_s}$,将$\Lambda_k(n)$展开得:

$$\\begin{array}{lll}    \\Lambda_k(n) & = &\\sum_{d \\mid n} \\mu(d) \\log^k \\left( \\dfrac{n}{d}  \\right) \\\\     & = & [ r_1\\log p_1 + \\cdots + r_s\\log p_s ]^k \\\\    & & -[(r_1-1)\\log p_1 + \\cdots + r_s\\log p_s]^k - \\cdots - [r_1\\log p_1 + \\cdots + (r_s-1)\\log p_s]^k \\\\    & & + \\cdots + (-1)^s [(r_1-1)\\log p_1 + \\cdots + (r_s-1)\\log p_s]^k \\\\\\end{array}$$

<!-- $$\begin{array}{lll}
    \Lambda_k(n) & = &\sum_{d \mid n} \mu(d) \log^k \left( \dfrac{n}{d}  \right) \\ 
    & = & [ r_1\log p_1 + \cdots + r_s\log p_s ]^k \\
    & & -[(r_1-1)\log p_1 + \cdots + r_s\log p_s]^k - \cdots - [r_1\log p_1 + \cdots + (r_s-1)\log p_s]^k \\
    & & + \cdots + (-1)^s [(r_1-1)\log p_1 + \cdots + (r_s-1)\log p_s]^k \\
\end{array}$$ -->

#### 参考资料

[1] Von Mangoldt function. Wikipedia[Z]. https://en.wikipedia.org/wiki/Von_Mangoldt_function. 2024.

[2] Dirichlet Convolution. Wikipedia[Z]. https://en.wikipedia.org/wiki/Dirichlet_convolution. 2024.