---
title: 筛法中需要用到的初等数论
mathjax: true
date: 2024-11-20 00:31:57
categories:
    - 初等数论
tags:
    - Elementary Number Theory
    - Chinese Remainder Theorem
---

#### 引言

(~~总该需要记录一点学习进度了,~~)虽然说在过去这段时间内已经简单的过了一遍陈景润的"1+2"定理,对其用到的Selberg筛法以及加权的思想也有了那么一点点的理解与认识了.但是张益唐的工作,我应该还是得开始看原始论文才行.

目前Halberstam的第一章也还在进行中,其中当然也涉及到了一些初等数论的知识,这倒不是什么大问题,遇到的最大阻碍还是文章风格方面的不适应(~~感觉Serre写的都是友善的了~~).

但是一些初等数论的知识我也还是需要记录一下,一方面也是为了准备初等数论的考试,当然另一方面就是因为我确实对初等数论的知识不够了解与熟练.🤡

以下都是关于同余式的解的存在性以及数量问题.实际上,由算术基本定理和中国剩余定理(CRT)可知,$\textrm{mod}\ n$的问题通通可以化为$\textrm{mod}\ p^a$,其中$p$是素数,$a$是大于0的整数的问题.

需要注意的是,以下说的解的数量(简称解数),**都是在**$\mathbf{\mathbb{Z}/m\mathbb{Z}}$**中的解数**,也就是一个完全剩余系$(\overline{0},\overline{1},\cdots,\overline{n-1})$中的解数.没注意到的取消一周的抹茶巴菲!

#### Chinese Reminder Theorem

两个重要的工具.一个是算术基本定理,也就是素因数唯一分解定理,这个小学二年级就已经知道了.另一个就是中国剩余定理,这个还可以简单介绍一下:

> **定理0(CRT):**
>
> $\quad$ 设$m_1,m_2,\cdots,m_k$是$k$个两两互素的正整数,$m=m_1m_2\cdots m_k$,则对于同余方程式组
>
> $$x\equiv b_1\ \textrm{mod}\ m_1,\ x\equiv b_2\ \textrm{mod}\ m_2,\ \cdots,\ x\equiv b_k\ \textrm{mod}\ m_k$$
>
> $\quad$ 有唯一解.记:$m=m_iM_i$ $(i=1,\cdots,k)$,设$M_i'M_i\equiv 1\ \textrm{mod}\ m_i$ $(i=1,\cdots,k)$,则唯一解可表示为:
>
> $$x \equiv M_1'M_1b_1+M_2'M_2b_2+\cdots+M_k'M_kb_k\ \textrm{mod}\ m$$

证明:

$\quad$ 这个还只是数,如果将其换为多项式的情况,那么这就是一道经典到不能再经典的高代题了.

$\quad$ 当然,以上两种情况用抽代的思想都可以很快地理解和构造这个唯一解的结构.

$\quad$ 因此!证明过程!PASS! <span style="float: right;">$\blacksquare$</span>

上面都要求模数两两互素,那能否放宽呢?废话,当然是可以的.那就是不断地用下面这个只关于两个模数的定理:

> **定理0(Plus版):**
>
> $\quad$ 一次同余式组
>
> $$x\equiv b_1\ \textrm{mod}\ m_1,\ x\equiv b_2\ \textrm{mod}\ m_2 \quad (1)$$
>
> $\quad$ 可解的**充要条件**是$(m_1,m_2)|b_1-b_2$,且此时对模数$[m_1,m_2]$有唯一解.

证明:

*必要性:*

$\quad$ 记$d=(m_1, m_2)$,假设(1)有解$x_0$,则:

$$x_0\equiv b_1\ \textrm{mod}\ d,\ x_0\equiv b_2\ \textrm{mod}\ d$$

$\quad$ 两式相减即有:$d|b_1-b_2$.因此必要性得证.

*充分性:*

$\quad$ 假设$d|b_1-b_2$,且(1)前一式的解可写为:$x=b_1+m_1y$,代入后一式有:

$$m_1y \equiv b_2-b_1\ \textrm{mod}\ m_2 \quad (1.1)$$

$\quad$ 因此可知上式也有解.故而充分性得证.

*解的唯一性:*

$\quad$ 假设$y_0$是(1.1)其对模数$\dfrac{m_2}{d}$的唯一解.

$\quad$ 即(1.1)的解为:

$$y=y_0+\frac{m_2}{d}t$$

$\quad$ 再将其代入到$x=b_1+m_1y$便可得到(1)的解为:

$$x=b_1+m_1y_0+\dfrac{m_1m_2}{d}t$$

$\quad$ 其中$\dfrac{m_1m_2}{2}=[m_1,m_2]$.即(1)对模数$[m_1,m_2]$而言是唯一的.<span style="float: right"> $\blacksquare$ </span>

#### 一次同余式

对于同余式而言,我们当然是先从一元一次同余方程开始动刀,那么有以下这个很好理解的定理(至少从抽代方面是显然的了):

> **定理1(基础版):**
>
> $\quad$ 设$(a,m)=1,\ m>0$,则同余式
>
> $$ax \equiv b\ \textrm{mod}\ m$$
>
> $\quad$ 恰好有一个解.即:
>
> $$x \equiv ba^{\varphi(m)-1}\ \textrm{mod}\ m$$
>
> $\quad$ 其中$\varphi$是Euler函数.

证明:

$\quad$ 这个的证明还是比较轻松的,尤其是从抽代的角度出发,更是直接得出.(~~Anon都能证明!~~),所以直接略过此处的证明. <span style="float: right;">$\blacksquare$</span>

因此对于一般的一元一次同余式而言,有:

> **定理1(Pro版):**
>
> $\quad$ 设$(a,m)=d,\ m>0$,则同余式:
>
> $$ax\equiv b\ \textrm{mod}\ m$$
>
> $\quad$ 有解的充分必要条件为:$d|b$.此时恰有$d$个解.

证明:

$\quad$ 同样的,利用抽代知识也可以很容易的得到有解时的充要条件.

$\quad$ 同时在有解的情况下,可得到下面的同余式:

$$\frac{a}{d}x\equiv \frac{b}{d}\ \textrm{mod}\ \frac{m}{d}$$

$\quad$ 其在$\mathbb{Z}/{\dfrac{m}{d}\mathbb{Z}}$中有唯一解.因此在$\mathbb{Z}/m\mathbb{Z}$中有$d$个解. <span style="float: right;">$\blacksquare$</span>

比较麻烦一点的是多元一次的同余方程式,但是也有以下定理给出了它解存在的情况以及数量:

> **定理2:**
>
> $\quad$ 设$k\ge 1$,同余式
>
> $$a_1x_1+a_2x_2+\cdots+a_kx_k+b\equiv 0\ \textrm{mod}\ m$$
>
> $\quad$ 有解的**充要条件**为
>
> $$(a_1,a_2,\cdots,a_k,m)|b$$
>
> $\quad$ 且此时的解数为$m^{k-1}(a_1,a_2,\cdots,a_k,m)$.

证明:

$\quad$ 用归纳法可以证明解数公式.以下只是简单的证明思路:

$\quad$ 由同余式可知:

$$(a_0m+a_1u_1+\cdots+a_{k-1}u_{k-1})+a_ku_k+b=0$$

$\quad$ 而括号里边可以生成一个理想$(d_1):=(a_1,\cdots,a_{k-1},m)$.因此便可以化为以下两个同余式:

$$a_kx_k+b \equiv 0\ \textrm{mod}\ d_1 \quad (2)$$

$$a_1x_1+\cdots+a_{k-1}x_{k-1} \equiv d_1\ \textrm{mod}\ m \quad (3)$$

$\quad$ 而(2)的解数在$\mathbb{Z}/m\mathbb{Z}$中为:$\dfrac{m}{d_1}\cdot(a_k,d_1)$.

$\quad$ 而(3)的解数直接由归纳假设得到为:$m^{k-1}d_1$.

$\quad$ 最后注意到:$(a_k,d_1)=(a_1,\cdots,a_k,m)$(~~这个就算是Anon也真的能注意到了~~),于是可以证明解数公式成立. <span style="float: right;"> $\blacksquare$ </span>

#### 高次同余式

##### 高次同余式的解数

根据CRT便能得到一个很重要的结论,那就是:同一个高次同余式的解数关于模数是一个积性函数(multiplicative formula).严谨表达为:

> **定理3:**
>
> $\quad$ 若$m_1,m_2,\cdots,m_k$是$k$个两两互素的正整数,$m=m_1m_2\cdots m_k$,则同余式:
>
> $$f(x) \equiv 0\ \textrm{mod}\ m$$
>
> $\quad$ 有解(解数记为$\rho(m)$)的**充要条件**为同余式
>
> $$f(x) \equiv 0\ \textrm{mod}\ m_i\ (i=1,2,\cdots,k)$$
>
> $\quad$ 都有解(解数记为$\rho(m_i)$).
>
> $\quad$ 且$\rho(m)=\rho(m_1)\rho(m_2)\cdots\rho(m_k)$.

证明:

$\quad$ 当然是用CRT直接推出来就可以了.因此直接省略! <span style="float: right"> $\blacksquare$ </span>

而该定理也在Halberstam的第一章中出现了,并且这个积性的性质起了非常重要的作用,否则$\omega_0(d)$的构造就出大问题了.

##### 模数是素数的情况

一次同余式的要点基本上已经探索完毕了,接下来马上赶到战场的是----高次同余式(当然得是整系数的多项式).

接下来设$\color{red}{f=a_n x^n+a_{n-1}+\cdots+a_1x+a_0\in \mathbb{Z}[x]}$,并且其中$n>0$.

那么就有如下Lagrange定理:

> **定理4(Lagrange's Theorem)**:
>
> $\quad$ $p$是一个素数,并且有$a_n \not\equiv 0\ \textrm{mod}\ p$,则
>
> $$f(x) \equiv 0\ \textrm{mod}\ p$$
>
> $\quad$ 最多只有$n$个解.

证明:

$\quad$ 该定理的证明实际上便是对次数$n$进行归纳.

$\quad$ 反证,假设同余式有$n+1$个解:$x_0,x_1,\cdots,x_n$.

$\quad$ 那么可知:

$$f(x)-f(x_0)=(x-x_0)g(x) \equiv 0\ \textrm{mod}\ p$$

$\quad$ 即可得到$n-1$次多项式$g(x)$有$n$个解,与归纳假设矛盾.从而证得Lagrange定理.<span style="float: right"> $\blacksquare$ </span>

当然Lagrange定理也有其他的表示形式,例如:

> **定理4.1(反面形式拉格朗日):**
>
> $\quad$ $p$是素数,如果同余式
>
> $$f(x) \equiv 0\ \textrm{mod}\ p$$
>
> $\quad$ 有大于$n$个解,那么可得:
>
> $\quad$ $q$是$f(x)$的一个fixed divisor.或者说:$p|a_i\ (i=0,1,\cdots,n)$.

以及以下形式,出现在Halberstam的第一章中:

> **定理4.2(一般形式拉格朗日):**
>
> $\quad$ 对于任意的一个$n$次整系数多项式$f(x)$,可知:
>
> $$f(x) \equiv 0\ \textrm{mod}\ p$$
>
> $\quad$ 的解数要么为$p$,要么就不会超过$n$个.

##### 模数是素数幂的情况

最后只需考虑模数为素数幂$p^a$的情况,那么最后一块拼图也顺利完成!而在这情况下,与其说是一个定理,更像是一个算法.因为它就是从模数为$p,\ p^2,\ \cdots,\ p^{a-1}$的解里慢慢筛选出来的.具体的表述如下:

> **定理5:**
>
> $\quad$ 设$x \equiv x_1\ \textrm{mod}\ p$是以下同余式的解:
>
> $$f(x) \equiv 0\ \textrm{mod}\ p$$
>
> $\quad$ 且$p \nmid f'(x_1)$,则下面同余式的解:
>
> $$f(x) \equiv 0\ \textrm{mod}\ p^a,\ n>0,\ p^a \nmid a_n$$
>
> $\quad$ 蕴含在前一式的解中.即:
>
> $$x=x_a+p^at_a,\ x_a \equiv x_1\ \textrm{mod}\ p$$

证明:

$\quad$ 略了略了~ <span style="float: right"> $\blacksquare$ </span>

以下直接给出一个例子,跟着算一遍就知道是怎么一回事了,还是很simple的,就是稍微complex了一点(~~迫真~~).

例如:

$\quad$ 要算以下同余式的解:

$$f(x)=x^3-4x^2+5x-6 \equiv 0\ \textrm{mod}\ 27$$

$\quad$ 那么我们就要逐步地对模数为$3,\ 9$开始处理.

$\quad$ 首先可知:$f(x) \equiv 0\ \textrm{mod}\ 3$的解只有一个,即$x \equiv 0\ \textrm{mod}\ 3$.

$\qquad$ 且有$f'(0) \not\equiv 0\ \textrm{mod}\ 3$(如果枚举的话感觉不需要?).

$\quad$ 因此对于同余式$f(x) \equiv 0\ \textrm{mod}\ 9$的解**可能**为$x \equiv 0/3/6\ \textrm{mod}\ 9$.

$\quad$ 筛选得到$f(x) \equiv 0\ \textrm{mod}\ 9$的唯一解为$x \equiv 3\ \textrm{mod}\ 9$.

$\qquad$ 且有$f'(3) \not\equiv 0\ \textrm{mod}\ 9$(如果枚举的话感觉不需要?).

$\quad$ 因此对于同余式$f(x) \equiv 0\ \textrm{mod}\ 27$的解**可能**为$x \equiv 3/12/21\ \textrm{mod}\ 27$.

$\quad$ 筛选得到$f(x) \equiv 0\ \textrm{mod}\ 27$的唯一解为$x \equiv 3\ \textrm{mod}\ 27$.<span style="float: right"> $\square$ </span>

#### 总结

目前我看到的Halberstam第一章主要用到的初等数论知识就是以上这些了.而下一项该更新的就是Halberstam第一章的内容,接下来是对Latex代码水平的一次巨大考验了.

<center>
<img src="/image/elementary number theory 1/T1.jpg" width="30%">
</center>

下次目标----Halberstam第一章,趁势杀之,片甲不留!!!

以及张益唐的论文也该看了.😵我打算看完Halberstam第二章后,这个也该步入正题才行了.

总之,杀杀杀!!!不过接下来先爽适几天,回来之后继续更新!😋

<center>
<img src="/image/elementary number theory 1/T2.jpg" width="30%">
</center>

#### 参考资料

[1] 柯召, 孙琦. 数论讲义, 上册, 第二版[M]. 高等教育出版社, 2001.

[2] 潘承洞, 潘承彪. 初等数论, 第三版[M]. 北京大学出版社, 2013.