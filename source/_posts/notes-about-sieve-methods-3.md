---
title: 筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子
mathjax: true
date: 2024-11-23 23:54:43
categories:
    - 筛法
tags:
    - Sieve methods
    - The sieve of Erathosthenes-Legendre
    - Sifting function
---

#### 引言

经过了亿点点的时间,Halberstam的第一章终究还是看完了!~~只不过确实拖得有点久了~~

虽然已经在二潘的『哥德巴赫猜想』一书中简单看了Selberg筛法,自以为已经对筛法的思想有所入门.但是在看了Halberstam的第一章后,才发现我有很多忽略掉的细节和动机.而这些内容,也都是作者有意提及,让我突然意识到,竟然还有这种考量!

不愧是『筛法圣经』,收获颇丰!更让我想要把整本书都看完了,虽然现在只看完了1/10(~~会看完的~~).而第二章的内容则更是充实,这一章便已经又占去了整本书的1/6更多.**可能**是组合筛法并没有和后续内容有很多的配合,所以关于组合筛法要说的东西都浓缩在这一章中.

而张益唐关于素数间隙的工作主要便用到了组合筛法以及加权的想法,而细节方面,我后续还会仔细阅读原始论文的.这又是一个大工程了,应该还要翻译与之相关的一篇文献出来,但是以我的英语水平,我争取翻译出完整的句子来😇.

更新这一篇章应该也要一段时间了,虽然说目前还是以介绍符号为主,但是值得学习的内容还真不少.废话少说,直接开冲!🤠

#### 前置(但不简单)的一些知识点

筛法筛法,当然得有一个被筛集合,以及一个筛子,和描述筛子大小的一个量.因此我们有以下符号来进行描述(数学符号定义属性大爆发):

> 被筛集合是关于整数的有限集合,即Sifted Sequence,记作$\mathscr{A}$;
>
> 筛集合是关于素数的无限集合,即Sifting Set,记作$\mathfrak{P}$;
>
> 筛子的大小由$z$来决定,并且定义$\displaystyle{P(z):=\prod_{\substack{p<z \\\\ p\in \mathfrak{P}}} p}$;
>
> 给出上面的符号后,便可以定义出筛选后元素的个数:
>
> $$S(\mathscr{A};\mathfrak{P},z):=|\\{ a:a\in\mathscr{A},(a,P(z))=1 \\}|$$

可以发现的是,筛函数给出的只是筛选后元素的个数,一个数又能说明什么呢?但实际上,我们如果能知道筛函数的上界和正的下界,那么很多问题将会有极大的突破,而在最后一节,利用Eratosthenes-Legendre筛法能得到素数分布的一个粗略的上界估计,其中函数$\pi(x)$表示小于$x$的素数个数,考虑$x\ge 2$:

> $$\pi(x) \ll \dfrac{x}{\log\log x}$$

当然,从初等数论的方法还能得到$\pi(x)$的更精确的上下界,而这个我也会提上日程的,~~应该很快,大概吧~~:

> $$\displaystyle{\\left(\frac{\log 2}{3}\\right)\frac{x}{\log x} < \pi(x) < \\left(6\log 2\\right)\frac{x}{\log x}}$$

以及Legendre本人提出了一个渐近公式:

> $$\displaystyle{\pi(x) \sim \frac{x}{\log x-1.08366}}$$

这个1.08366很明显是凑出来的,但是Gauss给出了另一个更简单,更精细的渐近公式:

> $$\displaystyle{\pi(x) \sim \textrm{li}(x)=\int_0^x \frac{\textrm{d}t}{\log t}}$$

需要注意的是$\displaystyle{\textrm{Li}(x)=\int_2^x \dfrac{\textrm{d}t}{\log t}}$,和$\textrm{li}(x)$还是有所差别的,而我就经常没有注意到大小写的不同😭.

Gauss的这个渐近公式,在本书中直接作为定理使用(虽然这个本来就已经被称为素数定理了).当然还被直接拿来使用的大定理,还有Dirichlet定理.而这里才给出Dirichlet定理的两个更强结论(也是在第一章的Notes里出现的,我之前也完全不知道😫):

> 假设$(l,k)=1$,可知$\\{al+k\\}$中包含有无数的素数,并且有以下定量的描述:
>
> $$\displaystyle{\sum_{\substack{p<x \\\\ p \equiv l\ \textrm{mod}\ k}} \frac{1}{p} = \frac{1}{\varphi(k)}\log\log x + O_k(1)}$$
>
> 并且还有以下一个更强的陈述:
>
> $$\displaystyle{\pi(x;k,l) \sim \frac{\textrm{li}(x)}{\varphi(k)} + O(x\textrm{e}^{-c\sqrt{\log x}})}$$

#### Sifted Sequence

##### 想法与符号

接下来就正式进入筛法的内容了(没想到吧,扯了这么久才入题呢😋)!首先便是从被筛集合Sifted Sequence开始,但是很快就会发现,这可以说是本章最难的一块(没想到吧,我也没想到,一个Sifting Sequence是本章的重点笔墨😭).

此处再重新强调一下Sifted Sequence是什么:

> Sifted Sequence指的是一个**有限的整数序列**(不需要是正数和非异的):
>
> $$\mathscr{A} = \\{ a: \cdots \\}$$
>
> 以及在后续中会发现,我们常常需要处理对$\mathscr{A}$模$d$的情况:
>
> $$\mathscr{A}_d = \\{ a: a\in\mathscr{A},\ a\equiv 0\ \textrm{mod}\ d \\}$$

前面我们已经知道,我们更关注的是集合中元素的个数,但是基本上我们遇到的情况,具体的元素个数是无法显式表达的(否则也就没有什么事了),因此我们不得不寻找另外的方式去尽可能的接近$|\mathscr{A}_d|$,其中$|\mathscr{A}|=|\mathscr{A}_1|$.此处我们已经窥见得:**对$\mathscr{A}_d$似乎是更具有一般性的**.

而我们***最主要的想法***就是:

<center>
用$\color{red}X(>1)$去接近$|\mathscr{A}|$

而对于$|\mathscr{A}_d|$,我们利用<span style="color: red">积性函数</span>$\color{red}\omega_0(d)$去接近

具体而言就是$|\mathscr{A}_d|$差不多为$\dfrac{w_0(d)}{d}X$,此时便需要有$\color{red}\mu(d)\neq 0$

再记误差为$r_d:=|\mathscr{A}_d|-\dfrac{w_0(d)}{d}X,\ if\ \mu(d)\neq 0$,因此$r_d$越小,说明拟合程度也就越好
</center>

而$\omega_0(p)$需要是积性函数的原因可能有很多,以下是我个人的一些理解,也不一定准确嗷:

$\quad$ 1.只有是积性函数我们才能用更少的精力去拟合筛函数,因为数论函数大多处理的也是积性的,这样才能利用上算术基本定理(即使这样也逃不掉复杂的计算,麻😫).

$\quad$ 2.在后面可以发现的是,我们总可以选取合适的$X$和$\omega_0(p)$使得误差控制在一个暂且可以接受的范围(但如何缩小误差也是筛法的一个重点与难点😫).

因此我们也需要$d$是没有平方因子的(squarefree),即$\mu(d)\neq 0$,后续差不多都是考虑这种情况,但我还是尽量都加上这个条件.

##### 一些『简单』的例子

###### 例子1

> 假设:
>
> $$\mathscr{A}=\\{ n:x-y<n\le x \\}$$
> 
> 则可得到的是:
>
> $$X=y,\ \omega_0(p)=1\ for\ every\ p$$
>
> $$|r_d|\le 1\ \ if\ \mu(d)\neq 0$$

简略推导如下:

$\quad$ 因为有:

$$\displaystyle{|\mathscr{A}_d|=\\left|\\left\\{m:\frac{x-y}{d}<m\le \frac{x}{d}\\right\\}\\right|=\frac{y}{d}+\theta},\ \ |\theta|\le 1$$

$\quad$ 于是便可得到$X,\ \omega_0(d)$以及$r_d$.

$\quad$ 与此同时,为了保证$X>1$,我们需要有$1<y\le x$. <span style="float: right">$\square$</span>

$\ $

其中需要注意的是,后续中(例子5以及例子6)会有一个符号$\vartheta$,其和$\theta$有一些区别,主要为:

$$0 \le \vartheta \le 1,\ -1 \le \theta \le 1$$

###### 例子2

> 假设:
>
> $$\mathscr{A}=\\{n:x-y < n \le x,\ n \equiv l\ \textrm{mod}\ k\\}$$
>
> 则可得到的是:
>
> $$X = \dfrac{y}{k},\ \omega_0(p) = 1\ for\ p \not\mid k$$
>
> $$r_d \le w_0(d)\ \ if\ \mu(d)\neq 0$$

简略推导如下:

$\quad$ 因为有:

$$\displaystyle{ |\mathscr{A}_d| = \\left| \\left\\{ m: \frac{x-y}{d} < m \le \frac{x}{d},\ dm \equiv l\ \textrm{mod}\ k \\right\\} \\right| }$$

$\quad$ 其中可知,$dm \equiv l\ \textrm{mod}\ k$有解当且仅当$(d,k)|l$,并且此时同余式在$\mathbb{Z}/k\mathbb{Z}$中恰有$(d,k)$个解.

$\quad$ 因此可得:

$$\displaystyle{ |\mathscr{A}_d| = \omega_0(d)\\left( \frac{y}{dk} + \theta \\right) },\ |\theta| \le 1$$

$\quad$ 于是得出:

$$\omega_0(d) = \\left\\{ \begin{matrix} 0 & if\ (d,k) \not\mid l \\\\ (d,k) & if\ (d,k) | l \end{matrix} \\right.$$

$\quad$ 与此同时,为了保证$X>1$,我们需要有$1 \le k < y \le x$. <span style="float: right">$\square$</span>

$\ $

至此仍然是牛刀小试,下面开始才是真正的考验.

<center>
<img src="/image/notes-about-sieve-methods-3/T1.jpg" width="30%">
</center>

###### 例子3

> 假设$F$是一个$g$次的整系数多项式:
>
> $$\mathscr{A}=\\{ F(n):x-y<n\le x \\}$$
> 
> 记$\rho(d)=\rho_F(d)$为$F \equiv 0\ \textrm{mod}\ d$的解数(由初等数论的知识可知其为积性函数).
>
> 则可得到的是:
>
> $$X = y,\ \omega_0(d) = \rho(d)\ if\ \mu(d) \neq 0$$
>
> $$|r_d| \le \omega_0(d)\ \ if\ \mu(d)\neq 0$$

简略推导如下:

$\quad$ 将讨论$F(n)$的数量转换为对$n$数量的讨论,于是有:

$$\displaystyle{ |\mathscr{A}_d| = \\left| \\left\\{ n:x-y < n \le x,\ F(n) \equiv 0\ \textrm{mod}\ d \\right\\} \\right| = \rho(d) \\left( \frac{y}{d} + \theta \\right) },\ |\theta| \le 1$$

$\quad$ 与此同时,为了保证$X>1$,我们需要有$1 < y \le x$. <span style="float: right">$\square$</span>

$\ $

值得注意的是,根据Lagrange定理,$\rho(p)=p$或者$\rho(p) \le g$,也即:

$$\rho(p) \le g,\ if \rho(p) < p$$

此外还有一些比较奇妙的性质:

$$\sum_{p < x} \rho(p) \sim k\dfrac{x}{\log x}$$

以及:

$$\sum_{p < x}\dfrac{\rho(p)}{p}\log p = k\log x+O_F(1)$$

###### 例子4

该例子是例子3的一个特殊情况,即考虑$F_0$作为**无重根**的分裂多项式,具体如下:

$$F_0(n) := \prod_{i=1}^{g} (a_i n + b_i),\ (a_i, b_i) = 1$$

其中$(a_i, b_i)=1$使得$F_0$没有fixed divisor,而无重根则还可以用**判别式**来更严格地说明:

$$E := \prod_{i=1}^{g}a_i \prod_{1 \le r < s \le g}(a_r b_s - a_s b_r) \neq 0$$

实际上,在后边马上就能看到,利用判别式$E$这一概念其实不仅仅是为了说明无重根的(直接说无重根不是更省事吗),而是可以更加方便地讨论筛除后的元素个数的情况.


> 假设:
>
> $$\mathscr{A}=\\{ F_0(n):x-y<n\le x \\}$$
> 
> 则根据例3便可直接得到:
>
> $$X = y,\ \omega_0(d) = \rho(d)\ if\ \mu(d) \neq 0$$
>
> $$|r_d| \le \omega_0(d)\ \ if\ \mu(d)\neq 0$$
>
> 但是和例3不同的是,在此处我们能有**更强的结论**:
>
> <center> 几乎对于所有的$p$而言,$\rho(p) = g$ </center>
>
> <center> 更具体而言就是,在满足$\mu(d) \neq 0$以及$(d,E)=1$的条件下,$\rho(d) = g^{\upsilon(d)}$ </center>
>
> 其中,$\upsilon(d)$表示$d$的素因子的个数(由于$\mu(d)\neq 0$,因此不可能有重数).

简略推导如下:

$\quad$ 在此处中,我们来解释为什么几乎对所有的素数而言,都有$\rho(p)=g$.

$\quad$ 由于没有fixed divisor,因此在$p > g$的情况下,总有:$\rho(p) \le g$.

$\quad$ 与此同时,单看$\\{ n : a_i n + b_i \equiv 0\ \textrm{mod}\ p\\}$可知,在$p \not\mid a_i$的情况下有唯一解.

$\quad$ 因此当$\mathbf{p \not\mid a_1a_2\cdots a_g}$时,可以得到的是$F_0(n) \equiv 0\ \textrm{mod}\ q$有$g$个的根(计入重数).

$\quad$ 而要求$\mathbf{p \not\mid E}$,则可以保证有$g$个各不相同的根,并且几乎所有的素数都是满足这个条件的(这也是为什么引入判别式$E$,而不是仅仅声明无重根的原因).

$\quad$ 详细写出我们便得到有:

$$\rho(p) \\left\\{ \begin{matrix} = g & (p,E) = 1 \\\\ < g & (p,E)>1 \end{matrix} \\right.$$

$\quad$ 利用积性便可以得到$\rho(d)\ \mu(d) \neq 0$的情况:

$$\rho(d) \\left\\{ \begin{matrix} = g^{\upsilon(d)} & (d,E)=1 \\\\ < g^{\upsilon(d)} & (d,E)>1 \end{matrix} \\right.$$ 

$\quad$ 而$r_d$就是例3中所给. <span style="float: right"> $\square$ </span>

例3和例4已经开始让人汗流浃背了,但是接下来才是重头戏.

<center> <img src="/image/notes-about-sieve-methods-3/T2.jpg" width="30%"> </center>

###### 例子5

> 假设:
>
> $$\mathscr{A}=\\{ ap+b : p \le x, p \equiv l\ \textrm{mod}\ k \\}$$
>
> 则可以得到的是:
>
> $$X = \dfrac{\textrm{li}(x)}{\varphi(k)}$$
>
> $$\displaystyle{\omega_0(d) = \\left\\{
    \begin{matrix} 
        0 & (ab,d) > 1\ or\ (d,k) \not\mid al+b \\\\
        \frac{d}{\varphi(d)}\varphi((d,k)) & (ab,d)=1\ and\ (d,k) \mid al+b
    \end{matrix} 
\\right.}$$
>
> $$\displaystyle{r_d = |\mathscr{A}_d| - \frac{\omega_0(d)}{d}X \\left\\{
    \begin{matrix} 
        \le \upsilon(d) & (ab,d) > 1\ or\ (d,k) \not\mid al+b \\\\
        = \pi(x;[d,k],l') - \frac{1}{\varphi{[d,k]}}\textrm{li}(x) & (ab,d)=1\ and\ (d,k) \mid al+b
    \end{matrix} 
\\right.}$$
>
> 其中$l'$将在推导中给出.

简略推导如下:






#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P1-P11.

[2] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P15-P23.

[3] 柯召, 孙琦. 数论讲义, 上册, 第二版[M]. 高等教育出版社, 2001.

[4] 潘承洞, 潘承彪. 初等数论, 第三版[M]. 北京大学出版社, 2013.

[5] [英]Hardy, [英]Wright. 哈代代数[M]. 张明尧, 张凡. 人民邮电出版社, 2021.