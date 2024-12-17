---
title: 筛法读书笔记(Sieve Methods by Halberstam) -- 筛函数与一些经典筛法例子
mathjax: true
date: 2024-12-2 23:54:43
categories:
    - 筛法
tags:
    - Sieve Methods
    - Sieve of Erathosthenes-Legendre
    - Sifting Function
---

#### 引言

经过了亿点点的时间,Halberstam的第一章终究还是看完了!~~只不过确实拖得有点久了~~

虽然已经在二潘的『哥德巴赫猜想』一书中简单看了Selberg筛法,自以为已经对筛法的思想有所入门.但是在看了Halberstam的第一章后,才发现我有很多忽略掉的细节和动机.而这些内容,也都是作者有意提及,让我突然意识到,竟然还有这种考量!

不愧是『筛法圣经』,收获颇丰!更让我想要把整本书都看完了,虽然现在只看完了1/10(~~会看完的~~).而第二章的内容则更是充实,这一章便已经又占去了整本书的1/6更多.**可能**是组合筛法并没有和后续内容有很多的配合,所以关于组合筛法要说的东西都浓缩在这一章中.

而张益唐关于素数间隙的工作主要便用到了组合筛法以及加权的想法,而细节方面,我后续还会仔细阅读原始论文的.这又是一个大工程了,应该还要翻译与之相关的一篇文献出来,但是以我的英语水平,我争取翻译出完整的句子来😇.

更新这一篇章应该也要一段时间了,虽然说目前还是以介绍符号为主,但是值得学习的内容还真不少.废话少说,直接开冲!🤠

#### 前置(但不简单)的一些知识点

放在最前面的前面,是***关于常数的一些默认的规定***:

<center> 
$A,A_i(\ge 1)$是与$X$和$z$无关的常数 

$B_i,C_i$则会是与$A_i,\kappa,\alpha$(后续会知道的,因为我现在也不知道)相关的常数
</center>

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

$\quad$ 因此当$\color{red}{p \not\mid a_1a_2\cdots a_g}$时,可以得到的是$F_0(n) \equiv 0\ \textrm{mod}\ q$有$g$个的根(计入重数).

$\quad$ 而要求$\color{red}{p \not\mid E}$,则可以保证有$g$个各不相同的根,并且几乎所有的素数都是满足这个条件的(这也是为什么引入判别式$E$,而不是仅仅声明无重根的原因).

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
> 其中还需要满足:
>
> $$(l,k) = 1,\ ab \neq 0,\ (a,b)=1,\ 2 \mid ab$$
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
> 其中$l'$将在推导中给出具体含义.

简略推导如下:

$\quad$ 设$\mu(d) = 1$,则有:

$$\displaystyle{ |\mathscr{A}_d| = \\{ p : p \le x, p \equiv l\ \textrm{mod}\ k, ap+b \equiv 0\ \textrm{mod}\ d \\} }$$

$\quad$ 因此此时需要对两个同余式进行考虑,那么我们就需要尝试使用**CRT**来处理,但在此之前,我们得需要考虑条件.

$\ \ $ **Step 1(简单情况):**

$\quad$ 首先对$ap+b \equiv 0\ \textrm{mod}\ d$进行处理,其有解的**必要**条件是$(a,d) \mid b$.此处不是充要条件,因为解要求是素数.

$\quad$ 但是还有条件$(a,b)=1$.因此可知:

$\qquad$ 1. 若$(a,d) > 1$,则此时$(a, d) \not\mid b$,因此$ap+b \equiv 0\ \textrm{mod}\ d$也必然没有解.

$\qquad$ 2. 若$(a,d) = 1$,则此时$ap+b \equiv 0\ \textrm{mod}\ d$也可以表示为:

$$\color{red}{p = -a^{-1}b\ \textbf{mod}\ d} \tag{3.2.5.1}$$

$\qquad\quad\ \ $ 于是$(b, d) \mid q$.因此当$(b, d) > 1$时,那么此时$p$也就至多$\upsilon(d)$个(更精细地,应该是至多一个).

$\quad$ 因此我们得到了以下两种简单情况下$|\mathscr{A}_d|$的估计:

$$\displaystyle{ |\mathscr{A}_d| = \\left\\{
    \begin{matrix}
        \vartheta\upsilon(b) & (a,d) = 1\ and\ (b,d) > 1 \\\\
        0 & (a,d) > 1
    \end{matrix}
\\right. } \tag{3.2.5.2}$$

$\quad$ 其中$0 \le \vartheta \le 1$.

$\ \ $ **Step 2(重头戏):**

$\quad$ 接着便是处理上述讨论中跳过的$(a,d)=1$且$(b,d)=1$,也就是${(ab,d)=1}$的情况.

$\quad$ 通过将$ap+b \equiv 0\ \textrm{mod}\ d$化为(5.1),这下我们就可以心安理得地使用CRT了.

$\quad$ 而CRT便告诉我们,$q \equiv l\ \textrm{mod}\ k,\ q \equiv -a^{-1}b\ \textrm{mod}\ d$有解 $\Leftrightarrow (d,k) \mid l + a^{-1}b$,即$(d,k) \mid al+b$.

$\quad$ 因此在$\color{red}(ab,d)=1,\ (d,k) \mid al+b$的情况下,可以得到:

$$\displaystyle{ |\mathscr{A}_d| = |\\{ p : p \le x, p \equiv l'\ \textrm{mod}\ [d,k] \\}| = \pi(x, [d,k], l') \sim \frac{1}{[d,k]}\textrm{li}(x) }$$

$$\displaystyle{ \begin{align} 
    |\mathscr{A}_d| 
    & = |\\{ p : p \le x, p \equiv l'\ \textrm{mod}\ [d,k] \\}| \\\\
    & = \pi(x, [d,k], l') \\\\
    & \sim \frac{1}{\varphi([d,k])}\textrm{li}(x) \\\\
    & = \frac{1}{d} \frac{d}{\varphi(d)} \varphi((d,k)) \frac{\textrm{li}(x)}{\varphi(k)} \tag{3.2.5.3}
\end{align} } $$

$\ \ $ **Step 3(总结):**

$\quad$ 此时根据(3.2.5.1)和(3.2.5.3)和定义,便可以给出$X,\ \omega_0(d)$以及$r_d$的表达式.并且,要让$X > 1$,那么对$x$的要求为:$\varphi(k) < \textrm{li}(x)$. <span style="float: right"> $\square$ </span>

$\ $

但是现在还没有结束!我们还可以考虑一下例5的特殊情况,也就是$(abk, d) = 1$的情况.此时有:

$$\omega_0(d) = \frac{d}{\varphi(d)}$$

$$r_d = \pi(x; dk, l') - \frac{1}{dk}\textrm{li}(x)$$

前面也说过,只有$r_d$尽可能的小,那么我们的筛法才算有效.那么对于上面选取出来的$X$和$\omega_0(d)$,我们的筛法是不是有效的呢?

现在定义一个**误差上界**:

> 定义:
> 
> $$E(x,q) = \mathop{\textrm{max}}\limits_{\substack{2 \le y \le x}}\ \mathop{\textrm{max}}\limits_{\substack{1 \le l' \le q \\\\ (l', q)=1}} \\left| \pi(y; q, l') - \frac{1}{\varphi(q)}\textrm{li}(y) \\right| \tag{3.2.5.4}$$


这东西到底特殊在哪呢,竟然能独享尊号(3.2.5.4)?原因在于:

$$|r_d| \le E(x, dk)$$

并且在第三章中,引理3.3便会告诉我们:$E(x,q)$相对于$q$而言,就是很小的.这个就告诉了我们以上的筛法是有效的,这可就太重要了!

###### 例子6

接下来再对例5进行推广!将$\mathscr{A}$中的$ap+b$换成$F(p)$(~~开始窒息~~).

其中$F$是次数为$g$的整系数多项式,$\color{red}\rho(d)$的定义也与例3一致,即:

$$\rho(d) = |\\{m : F(m) \equiv 0\ \textrm{mod}\ d\\}| \tag{3.2.6.1}$$

但在推导过程中,会出现两个与$\rho$相关的函数,为了推导过程的简洁,先将定义摆放至此,进一步的性质将放在推导结束后的部分.

如果要求(3.2.6.1)中的解还必须和$d$互素,这样就得到了$\color{red}\rho_1(d)$,即:

$$\rho_1(d) = |\\{m : F(m) \equiv 0\ \textrm{mod}\ d, (m,d) = 1\\}| \tag{3.2.6.2}$$

接着,再要求(3.2.6.2)中的解还要像$\mathscr{A}$有类似的结构,即模$(d,k)$下与$l$同余(当然,此处的$k$和$l$是根据$\mathscr{A}$已经提前给定了),那么这样就得到了$\color{red}\rho_1^*(d)$,即:

$$\rho_1^*(d)  = |\\{m : F(m) \equiv 0\ \textrm{mod}\ d, m \equiv l\ \textrm{mod}\ (d,k), (m,d) = 1\\}| \tag{3.2.6.3} $$

> 假设:
>
> $$\mathscr{A}=\\{ F(p) : p \le x, p \equiv l\ \textrm{mod}\ k \\}\ where\ (l,k) = 1$$
>
> 则可得到的是:
>
> $$X = \frac{\textrm{li}(x)}{\varphi(k)}$$
>
> $$\omega_0(d) = \rho_1^*(d) \varphi((d,k)) \frac{d}{\varphi(d)}$$
>
> $$|r_d| \le \rho(d)\\{ E(x,[d,k]) + 1 \\}$$

简略推导如下:

$\quad$ 仍然设$\mu(d) \neq 0$,则有:

$$\begin{align}
    |\mathscr{A}\_d| 
    & = |\\{ p : p \le x, p \equiv l\ \textrm{mod}\ k, F(p) \equiv 0\ \textrm{mod}\ d \\}| \\\\ 
    & = \sum_{\substack{m = 1 \\\\ F(m) \equiv 0\ \textrm{mod}\ d}}^d |\\{ p : p \le x, p \equiv l\ \textrm{mod}\ k, p \equiv m\ \textrm{mod}\ d \\}|
\end{align}$$

$\quad$ 接下来就是对这$\rho(d)$项进行分析,将摸鱼的项给剔除掉.这里和例5中的讨论方式差不多:

$\qquad$ 1. 考虑同余式$p \equiv m\ \textrm{mod}\ d$,有$(m,d) \mid p$.

$\qquad\quad\ \ $ 因此在$(m,d) > 1$时,此时对应的项则至多为$1$.鉴定为:摸鱼项!

$\qquad$ 2. 其次仍然是CRT的使用,它告诉我们的是,$\\{ p : p \le x, p \equiv l\ \textrm{mod}\ k, p \equiv m\ \textrm{mod}\ d \\}$有解 $\Leftrightarrow (d,k) \mid m-l$,即$m \equiv l\ \textrm{mod}\ (d,k)$.

$\qquad\quad\ \ $ 因此若$m \not\mid l\ \textrm{mod}\ (d,k)$,则其对应的项为$0$.鉴定为:拉去小孩那桌!

$\quad$ 因此我们可以得到:

$$|\mathscr{A}\_d| = \sum_{\substack{m = 1 \\\\ (m,d) = 1 \\\\ F(m) \equiv 0\ \textrm{mod}\ d \\\\ m \equiv l\ \textrm{mod}\ (d,k)}}^{d} \pi(x; [d,k], h) + \vartheta \rho(d)$$

$\quad$ 其中$0 \le \vartheta \le 1$,并且$h$是利用CRT得到的,类似与例5中的$l'$.

$\quad$ 因此利用积性函数$\rho_1^*(d)$便可以得到一个简便的形式:

$$|\mathscr{A}_d| \approx \frac{\rho_1^*(d)}{\varphi([d,k])} \textrm{li}(x)$$

$\quad$ 于是便可以得到$X$和$\omega_0(d)$的表达式.同时再利用(3.2.5.4)以及$\rho_1^*(d)$与$\rho(d)$的关系,便可以得到$|r_d|$的估计式,而这个估计式也说明了我们的筛法是有效的. <span style="float: right"> $\square$ </span>

$\ $

可以发现的是,例6的推导过程看着虽然唬人,但其本质还是例5的推导思路.接下来该说的就是推导过程中$\rho_1^*(d)$与$\rho(d)$的关系了.

简而言之(其实都还比较好验证的,可能是经历例5例6磨练后的结果吧):

> 对$\rho_1(p)$进行考虑便得到:
>
> $$\rho_1(p) = \\left\\{     \begin{matrix}        \rho(p) & p \not\mid F(0) \\\\        \rho(p)-1 & p \mid F(0)    \end{matrix}\\right.$$
>
> 对于$\mu(d) \neq 0$的$d$,利用$\rho_1(d)$的积性便可以得到了.并且还可以得到下面的关系:
>
> $$\rho_1^*(d) = \rho_1\\left(\frac{d}{(d,k)}\\right)$$

模仿在例4中的操作,在$\mu(d) \neq 0$且$\rho(p) < p$的条件下,可得到:

$$\rho_1(d) \le \rho(d) \le g^{\upsilon(d)}$$

终于!要开始进入新的一节了!其实熬过了这一节那六个『简单』的例子,接下来的内容可以说是相当友好的了.主要就是根据实际情况,我们需要对前面的符号进行一点点的调整,具体就是:$\omega_0(d) \to \omega(d)$,以及$r_d \to R_d$.但是在调整之前,对Sifting Set也还有几句话需要提及.

<center> <img src="/image/notes-about-sieve-methods-3/T3.jpg" width="30%"> </center>

#### Sifting Set & Sifting Function

在筛法中,最重要的就是要***减少无效计算,提高筛法的效率***,而以下很多处理乍一感觉是『多此一举』,『徒增难度』的,但是从实际操作上来说,我们为了更准确的结果,而不得不舍弃一些易操作性.

那么,下面正式进入新的一节的内容!(终于不用处理一堆一堆的同余式了!!!🥳)

##### 关于Sifting Set的一些补充

在筛法中,常常会给出一个足够大的正整数$K$,那么Sifting set $\mathfrak{P}$往往不会选择全体素数,而一般会取:

$$\mathfrak{P} = \mathfrak{P}_K := \\{ p : p \not\mid K \\}$$

而全体素数的集合往往记作$\mathfrak{P}_1$,而为了简便,定义Sifting set在全体素数中的补集为$\overline{\mathfrak{P}}$,即:

$$\overline{\mathfrak{P}} = \mathfrak{P}_1 \setminus \mathfrak{P} $$

接下来,对于任意实数$z \ge 2$,我们定义:

$$P(z) := \prod_{\substack{p < z \\\\ p \in \mathfrak{P}}}$$

而$P(z)$的重要性在于,对于$a \in \mathscr{A}$,如果$(a, P(z)) > 1$,那么$a$就将被筛掉;但如果$(a, P(z)) = 1$,那么$a$就在尺度为$z$的筛法下存活了下来.这个在开头便有提到,同时看二潘『哥德巴赫猜想』引言中的例子就有了更深的了解,因此不再展开了.

对于特殊的问题,Sifting set也会有点特殊.比如考虑素因子都是$4k+1$形的数,则可令$\mathfrak{P}' = \\{ p : p = 4k+3 \\}$.

##### 对Sifting Function的一些修改

###### Sifting Function再出现!

其实Sifting function在很前边就已经出镜过了,即:

$$S(\mathscr{A}; \mathfrak{P}, z) := \\{ a : a \in \mathscr{A}, (a, P(z)) = 1 \\} \tag{4.2.1.1}$$

同时,在第三节中,已经能够看到$\mathscr{A}_d$的重要性了(有时$|\mathscr{A}|$还得通过$\mathscr{A}_d$来获取信息),因此还有:

$$S(\mathscr{A}_d; \mathfrak{P}, z) := \\{ a : a \in \mathscr{A}_d, (a, P(z)) = 1 \\} \tag{4.2.1.2}$$

这里将(4.2.2)单独写一行,是为了强调其条件,那就是:

$$\mu(d) \neq 0, (d, P(z)) = 1, (d, \overline{\mathfrak{P}}) = 1$$

###### 根据问题修改Sifting Function

对某些问题而言,我们可能得对Sifting function做一些修改,使得我们能够得到更精细的结论.例如以与孪生素数猜想相近的一个例子:

$$S(\\{ n(n+2) : n \le x \\}; \mathfrak{P}\_1, z) := \\left|\\left\\{ n(n+2) : n \le x, \\left(n(n+2), \prod_{p < z}p\\right) = 1 \\right\\}\\right|$$

利用这个Sifting function,实际上也只能得到类似于『$a + b \le 5$』的这样的结论.但是,如果将它的表达形式稍作修改:

$$S(\\{ p + 2 : p \le x \\}; \mathfrak{P}\_1, z) := \\left|\\left\\{ p : z-2 \le p \le x, p + 2 = p' \\right\\}\\right|$$

那么这样我们就能进一步得到更精细的结果,类似于『$1 + 3$』这样的结论,这无疑是很重要的成果.

###### Sifting Function新符号的引入

以及在引入$S(\mathscr{A}_d; \mathfrak{P}, z)$后,我们也需要进一步对$\omega_0(d)$和$r_d$做一定的调整了,修改后记作$\omega(d)$和$R_d$,其中对$\omega_0(d)$的修改是比较容易的:

$$\omega(p) = \\left\\{ 
    \begin{matrix}
        \omega_0(p) & p \in \mathfrak{P} \\\\
        0 & p \in \overline{\mathfrak{P}}
    \end{matrix}
\\right.$$

并且令$\omega(1) = 1$,于是对于$\mu(d) \neq 0$而言,得到:

$$\omega(d) = \prod_{p \mid d}\omega(d)$$

那么$r_d$也得跟着改变,在$\mu(d) \neq 0$的情况下,其定义仍然是:

$$R_d := |\mathscr{A}_d| - \frac{\omega(d)}{d} X$$

因此可知发现的是,在$(d, \overline{\mathfrak{P}}) > 1$的情况下,$R_d$并不代表余项,此时其值就是$|\mathscr{A}_d|$.但是在筛法的过程中,这个往往并不会纳入考虑的范畴,因此对实际操作而言,反而还会提高效率.因为引入$\omega(d)$后就不需要注意$(d, \overline{\mathfrak{P}}) = 1$的这个条件了.

###### 一些很重要的条件

现在我们还需要对$\omega(d)$和$R_d$提一定的要求,***而这些条件在后续会不断出现!***

首先是对于某个合适的常数$A_1$有以下这个很基本的条件:

> 假设:
>
> <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;">$0 \le \dfrac{\omega(p)}{p} \le 1 - \dfrac{1}{A_1}$</span>  <span style="float: right;">$(\Omega_1)$</span></div>
>
> 变形后就是更常见的形式:
>
> <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;">$1 \le \dfrac{1}{1-(\omega(p)/p)} \le A_1$</span>  <span style="float: right;">$(\Omega_1)$</span></div>

条件$(\Omega_1)$的作用便是控制$\omega(d)$的构造,限制余项的增长.当然这个条件一般也只要求对足够大的素数都成立即可.

在Legendre对$\pi(x)$的估计式中,还有以下两个很强的条件:

> 假设:
>
> <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;">$\omega(p) \le A_0$</span>  <span style="float: right;">$(\Omega_0)$</span></div>
>
> 以及在$\mu(d) \neq 0$,并且$(d,\overline{\mathfrak{P}}) = 1$的情况下,假设:
>
> <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;">$|R_d| \le \omega(d)$</span>  <span style="float: right;">$(R)$</span></div>

容易知道的是,$(\Omega_0)$是比$(\Omega_1)$更强的条件.并且条件(R)实际上也是对余项进行了控制.

在满足$(R)$和$(\Omega_1)$的情况下:

$$|R_d| \le A_0^{\upsilon(d)}$$

从而可以得到的是:

$$\begin{align}
    \sum_{d \mid P(z)} |R_d| 
    & \le \sum_{d \mid P(z)} A_0^{\upsilon(d)} \\\\ 
    & = \prod_{p \mid P(z)}(1 + A_0) \\\\ 
    & \le (1 + A_0)^{\pi(z)} \\\\
    & \le (1 + A_0)^z
\end{align} \tag{4.2.4.1}$$

而这个估计式在最后一节中就会用到,这也就是为什么Erathosthenes筛法基本无效的原因了.

###### 定义一些常用的结构式

本节的最后一块内容,也是一个铺垫性的工作,那就是对后续将会频繁出现的式子,我们索性给它们一个固定的符号,其实也是为了后面表述的简单而不得不做的事了(数学符号定义属性大爆发第二集):

> 定义$W(z)$:
>
> $$W(z) := \prod_{p < z}\\left( 1 - \frac{\omega(p)}{p} \\right) \tag{4.2.5.1}$$
>
> 同样的在$\mu(d) \neq 0$时,定义$g(d)$:
>
> $$g(d) := \frac{\omega(d)}{d \prod\limits_{p \mid d}(1 - (\omega(p) / p))} \tag{4.2.5.2}$$

很明显,$W(z)$以及$g(d)$将会和$(\Omega_1)$等条件息息相关.因此$g(d)$也会频频出现,因此也还有一些关于$g(d)$的式子常常出现.

> 定义$G(z)$:
>
> $$G(z) := \sum_{d < z} \mu^2(d) g(d) \tag{4.2.5.3}$$
>
> 定义$G(x,z)$:
>
> $$G(x,z) := \sum_{\substack{d < x \\\\ d | P(z)}} g(d) \tag{4.2.5.4}$$

容易知道,在$z \ge x$时,$G(x,z) = G(x)$.因此更特殊地有:$G(z,z) = G(z)$.

最后还有一个关于素数的重要乘积式:

> 定义$V(z)$:
>
> $$V(z) := \prod_{p < z}\\left( 1-\frac{1}{p} \\right) \tag{4.2.5.5}$$

#### Sieve of Erathosthenes-Legendre

接下来也是Halberstam第一章的最后一节内容了!!!(当然,得去掉NOTES部分)

在这一节中,最重要的就是定理1了,后面就是对定理1的一个最简单直接的应用:Legendre对$\pi(x)$的一个上界估计.

假设$\mu(q) \neq 0,(q, P(z))=1$.利用Mobius函数,我们能对Sifting function有以下的操作:

$$\begin{align}
    S(\mathscr{A}\_q; \mathfrak{P}, z)
    & = \sum_{a \in \mathscr{A}\_q}\ \sum_{\substack{d \mid a \\\\ d \mid P(z)}} \mu(d) \\\\ 
    & = \sum_{d \mid P(z)} \mu(d) \sum_{\substack{a \in \mathscr{A} \\\\ a \equiv 0\ \textrm{mod}\ qd}} 1 \\\\
    & = \sum_{d \mid P(z)} \mu(d) |\mathscr{A}\_{qd}| \\\\
    & = \sum_{d \mid P(z)} \mu(d) \\left\\{ \frac{\omega(qd)}{qd} X + R_{qd} \\right\\}
\end{align}$$

再利用$\omega(d)$是一个积性函数,并且有:

$$\sum_{d \mid P(z)} \mu(d) \frac{\omega(d)}{d} = \prod_{\substack{p < z \\\\ p \in \mathfrak{P}}} \\left( 1 - \frac{\omega(p)}{p} \\right) = \prod_{\substack{p < z}} \\left( 1 - \frac{\omega(p)}{p} \\right)$$

因此结合上面两个式子便可以得到:

> **定理1.1**:
>
> $$S(\mathscr{A}\_q; \mathfrak{P}, z) = \frac{\omega(q)}{q} X W(z) + \theta \sum_{d \mid P(z)} |R_{qd}|$$
>
> $\quad$ 如果还满足条件$(R)$和$(\Omega_0)$的话,利用$(4.2.4.1)$即有:
>
> $$S(\mathscr{A}; \mathfrak{P}, z) = X W(z) + \theta (1 + A_0)^z$$
>
> $\quad$ 其中$|\theta| \le 1$.

因此从上面便可以看到,只有在$z$很小的情况下,余项$(1+A_0)^z$才能被控制在可接受的范围内.

实际上,当$z > \dfrac{\log X}{\log 2} \log\log X$时,我们已经不能得到有效的结果了.

接下来我们来看定理1.1的应用,即Legendre对$\pi(x)$的上界估计:

$\quad$ 取$\mathscr{A} = \\{ n : n \le x\\}$,以及Sifting set为$\mathfrak{P}_1$,于是:

$$\begin{align}
    S(\\{ n : n \le x\\}; \mathfrak{P}\_1, z)
    & = \\left| \\left\\{ n : n \le x,\\left( n, \prod_{p < z} p \\right) = 1 \\right\\} \\right| \\\\
    & \le x \prod_{p < z} \\left( 1 - \frac{1}{p} \\right) + 2^z \\\\
    & = x V(z) + 2^z
\end{align}$$

$\quad$ 与此同时,容易得知:$V(z) \ll \dfrac{1}{\log z}$,因此有:

$$\pi(x) \le S(\\{ n : n \le x\\}; \mathfrak{P}\_1, z) + z \ll \frac{x}{\log z} + 2^z$$

$\quad$ 最后取$z = \log x$便可以得到:

$$\pi(x) \ll \frac{x}{\log\log x}$$

$\quad$ 从而得到了Legendre的结果.<span style="float: right"> $\square$ </span>

#### 总结

至此,Halberstam的第一章内容顺利结束!起飞!!!

<center>
<img src="/image/notes-about-sieve-methods-3/T4.jpg" width="30%">
</center>

只能说本次工程巨大,代码达到了700行,用时也特别特别久(~~虽然中间休整了一周~~).😥

但是接下来的任务也还不少.比如说Halberstam的第二章也该开始了;以及接下来要看孪生素数猜想方面的三篇重要论文;以及期末考试.😫😫😫

接下来应该也要多线作战了.GPY这篇论文的翻译应该可以提上日程了,毕竟也看了差不多1/4了.以及Halberstam的书确实写得好,想继续学习.其中初等数论可能确实得加以训练才行了.

总之,冲就完了!!!

<center>
<img src="/image/notes-about-sieve-methods-3/T5.jpg" width="30%">
</center>

#### 参考资料

[1] Halberstam, Richert. Sieve Methods[M]. Dover Publications, 2011. P1-P11.

[2] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P15-P23.

[3] 柯召, 孙琦. 数论讲义, 上册, 第二版[M]. 高等教育出版社, 2001.

[4] 潘承洞, 潘承彪. 初等数论, 第三版[M]. 北京大学出版社, 2013.

[5] [英]Hardy, [英]Wright. 哈代代数[M]. 张明尧, 张凡. 人民邮电出版社, 2021.