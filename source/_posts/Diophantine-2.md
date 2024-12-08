---
title: 丢番图逼近之二 -- 用连分数的方法求解Pell方程
mathjax: true
date: 2024-10-25 23:29:24
categories:
    - 丢番图逼近
tags:
    - Number Theory
    - Algebraic Number Theory
    - Continued Fractions
    - Pell Equation
---

#### 引言

上一篇的连分数主要也只是一个科普内容,还有一些内容不便于放在上篇里边,于是加在本文中.

由于本文并不像上一篇那样会面向学高数的同学,因此本文不会那么通俗,而是会比较严肃一点.

#### Pell方程

形如$x^2-dy^2=\pm 1$的二元二次不定方程便称为佩尔(Pell)方程,**其中$d$为不含平方因子的正整数**(毕竟我们要研究的是Pell方程的所有有理整数解).

最早碰到这个问题还是高中阶段,兜兜转转又要面对它了,而且还有可能出现在我初等数论的考试中😫.当初面对的还只是$x^2-2y^2=1$这种比较仁慈的Pell方程的解(恶心的下面马上就能见到了),但是我也只是计算机枚举法求出的几个特殊值,还是算法代师Anon Xau通过"神经网络深入学习"总结出来了递推公式orz.

但是!过去软糯的我已经死啦!现在是更软糯的我!~~拥有代数数论和连分数知识的我已经无往不利了!~~

利用代数数论的知识能够得到Pell方程解的结构,而利用连分数这个利器,求解这类一般的Pell方程已经成一个消磨时间的打趣罢了.

#### Pell方程解的结构

##### Dirichlet单位定理

在代数数论中,有如下事实:

> **定理1(Dirichlet单位定理):** 设$K$为$n$次数域,$K$到$\mathbb{C}$中有$r_1$个实嵌入,有$r_2$对复嵌入,则:
$K$中单位群$U_k=W_K \times V_K$,其中$W_K$是单位根群,$V_K$是秩为$r=r_1+r_2-1$的自由Abel群.

其中**单位群$U_K$是$\mathcal{O}_K$的可逆元的集合**,而$W_K$和$V_K$就是定理中所说的含义.

并且由定理条件可知,存在元素$\gamma\in K$,使得$K=Q(\gamma)$.且可知$\gamma$在$\mathbb{Q}$上的极小多项式$f(x)$也一定是$n$次多项式.所以在$\mathbb{C}$中有$f(x)=\alpha(x-\gamma_1)(x-\gamma_2)\cdots(x-\gamma_n)$.于是$K$到$\mathbb{C}$中的嵌入则由$\gamma_i$确定,即:

$$\sigma_i:K=\mathbb{Q}(\gamma)\to\mathbb{Q}(\gamma_i)\hookrightarrow\mathbb{C}$$

因此,若$\gamma_i$为实(复)数,则称$\sigma_i$为实(复)嵌入.

回到Pell方程$x^2-dy^2=\pm 1$,我们考虑实二次域$K=\mathbb{Q}(\sqrt{d})$,因此Pell方程的有理整数解即为$\mathcal{O}_K$中范数为$\pm 1$的元素.而根据Dirichlet单位定理可知,实二次域的单位群$U_K=\\{\pm \varepsilon^n | n\in\mathbb{Z}\\}$(因为秩为$1$),其中$\varepsilon$也被称作$K$的基本单位(一般取大于$1$的那个,毕竟只差正负号而已).

由于$\mathcal{O}_{\mathbb{Q}(\sqrt{d})}$的结构与$d$有着直接的关系,因此以下需要对不同的$d$来讨论Pell方程的解的结构.

##### $d \equiv 2,3\ (\textrm{mod}\ 4)$的情况

这种情况一般而言比较简单,因为$\mathcal{O}_{\mathbb{Q}(\sqrt{d})}=\mathbb{Z}[\sqrt{d}]$.因此我们知道$\varepsilon=a+b\sqrt{d}(a,b\in\mathbb{Z})$的形式.然后再根据$N(\varepsilon)$取值是$1$还是$-1$进行分类讨论即可.因此我们可以得到以下的定理(虽然感觉作为定理还不够强,但是无所谓了,反正在这里是由我做主!).

> **定理2:** 当$d\equiv 2,3\ (\textrm{mod}\ 4)$时,设$\varepsilon=a+b\sqrt{d}>1$是$K=\mathbb{Q}(\sqrt{d})$的基本单位,令$a_n+b_n\sqrt{d}:=(a+b\sqrt{d})^n$.
>
> (1) 如果$N(\varepsilon)=1$:
>
> $\quad$ a. $x^2-dy^2=-1$不存在有理整数解.
>
> $\quad$ b. $x^2-dy^2=1$的有理整数解为$\\{(\pm a_n,\pm b_n) | n\in \mathbb{Z}\\}$.
>
> (2) 如果$N(\varepsilon)=-1$:
>
> $\quad$ a. $x^2-dy^2=-1$的有理整数解为$\\{(\pm a_{2n+1},\pm b_{2n+1}) | n\in \mathbb{Z}\\}$.
>
> $\quad$ b. $x^2-dy^2=1$的有理整数解为$\\{(\pm a_{2n},\pm b_{2n}) | n\in \mathbb{Z}\\}$.

当然对于另一种情况也是类似的考虑,只不过需要多转一个弯而已,比起其他代数里面的"一个弯",这个简直可以说是友好至极了🤠.

##### $d \equiv 1\ (\textrm{mod}\ 4)$的情况

在这种情况下,$\mathcal{O}_{\mathbb{Q}(\sqrt{d})}=\mathbb{Z}[(\sqrt{d}+1)/2]$,因此$K$中的整数都只能表示为$(a+b\sqrt{d})/2,\ a\equiv b\ (\textrm{mod}\ 2)$的形式.

从而$\varepsilon=(a+b\sqrt{d})/2$是$K=\mathbb{Q}(\sqrt{d})$中的单位,等价于$a^2-db^2=\pm 4$.

因此便有了和前一种情况的**第一处不同**,此处应该令$a_n+b_n\sqrt{d}:=2\varepsilon^n$,首先得到得到的也是$x^2-dy^2=\pm 4$的有理整数解的结构:

> **引理1:** 当$d\equiv 1\ (\textrm{mod}\ 4)$时,设$\varepsilon=\dfrac{1}{2}(a+b\sqrt{d})>1$是$K=\mathbb{Q}(\sqrt{d})$的基本单位,令$\dfrac{1}{2}(a_n+b_n\sqrt{d}):=\varepsilon^n$.
>
> (1) 如果$N(\varepsilon)=1$:
>
> $\quad$ a. $x^2-dy^2=-4$不存在有理整数解.
>
> $\quad$ b. $x^2-dy^2=4$的有理整数解为$\\{(\pm a_n,\pm b_n) | n\in \mathbb{Z}\\}$.
>
> (2) 如果$N(\varepsilon)=-1$:
>
> $\quad$ a. $x^2-dy^2=-4$的有理整数解为$\\{(\pm a_{2n+1},\pm b_{2n+1}) | n\in \mathbb{Z}\\}$.
>
> $\quad$ b. $x^2-dy^2=4$的有理整数解为$\\{(\pm a_{2n},\pm b_{2n}) | n\in \mathbb{Z}\\}$.

可以发现的是,该引理和定理2是高度相似的,也只有$a_n$和$b_n$构造方式上的一点点不同(而其他地方我甚至都是把定理2直接copy过来的).

因此,对于$x^2-dy^2=\pm 1$问题的有理整数解而言,现在也只差凌门一脚了.而这也是和前一种情况的**第二处不同**,即我们需要考虑基本单位$\varepsilon=(a+b\sqrt{d})/2$中$a$和$b$的奇偶性(但两者奇偶性相同,因此讨论的情况也并不多).

> **定理3:** 当$d\equiv 1\ (\textrm{mod}\ 4)$时,设$\varepsilon=\dfrac{1}{2}(a+b\sqrt{d})>1$是$K=\mathbb{Q}(\sqrt{d})$的基本单位,令$\dfrac{1}{2}(a_n+b_n\sqrt{d}):=\varepsilon^n$.
>
> (1) 如果$N(\varepsilon)=1$:
>
> $\quad$ a. $x^2-dy^2=-1$不存在有理整数解.
>
> $\quad$ $b_1$. 如果$a\equiv b\equiv 0\ (\textrm{mod}\ 2)$,则:
>
> <center>$x^2-dy^2=1$的有理整数解为$\{(\pm\dfrac{1}{2} a_n,\pm\dfrac{1}{2} b_n) | n\in \mathbb{Z}\}$</center>
>
> $\quad$ $b_2$. 如果$a\equiv b\equiv 1\ (\textrm{mod}\ 2)$,则:
>
> <center>$x^2-dy^2=1$的有理整数解为$\{(\pm\dfrac{1}{2} a_{3n},\pm\dfrac{1}{2} b_{3n}) | n\in \mathbb{Z}\}$</center>
>
> (2) 如果$N(\varepsilon)=-1$:
>
> $\quad$ $a_1$. 如果$a\equiv b\equiv 0\ (\textrm{mod}\ 2)$,则:
>
> <center>$x^2-dy^2=-1$的有理整数解为$\{(\pm\dfrac{1}{2} a_{2n+1},\pm\dfrac{1}{2} b_{2n+1}) | n\in \mathbb{Z}\}$</center>
>
> $\quad$ $a_2$. 如果$a\equiv b\equiv 1\ (\textrm{mod}\ 2)$,则:
>
> <center>$x^2-dy^2=-1$的有理整数解为$\{(\pm\dfrac{1}{2} a_{6n+3},\pm\dfrac{1}{2} b_{6n+3}) | n\in \mathbb{Z}\}$</center>
>
> $\quad$ $b_1$. 如果$a\equiv b\equiv 0\ (\textrm{mod}\ 2)$,则:
>
> <center>$x^2-dy^2=1$的有理整数解为$\{(\pm\dfrac{1}{2} a_{2n},\pm\dfrac{1}{2} b_{2n}) | n\in \mathbb{Z}\}$</center>
>
> $\quad$ $b_2$. 如果$a\equiv b\equiv 1\ (\textrm{mod}\ 2)$,则:
>
> <center>$x^2-dy^2=1$的有理整数解为$\{(\pm\dfrac{1}{2} a_{6n},\pm\dfrac{1}{2} b_{6n}) | n\in \mathbb{Z}\}$</center>

这个定理看上去比较吓人,但实际上也确实比较吓人了.其中$3n$的操作实际上就是将$1/2$消去,从而得到有理整数解.其实如果对代数数论的概念比较熟悉之后,以上两个定理都还是比较容易理解的了.

##### 基本单位的大小估计

上面只得到了Pell方程解的结构,虽然已经可以通过手动改变$y$的值,来找到$K=\mathbb{Q}(\sqrt{d})$的基本单位.但是有可能遇到以下情况:$\mathbb{Q}(\sqrt{97})$的基本单位为$\varepsilon_{97}=62809633+6377352\sqrt{97}$,这要一个一个一个一个$y$去试可能真会趋势了.实际上$97$还并不是最恶心的一个,$61$才是,$\mathbb{Q}(\sqrt{61})$的基本单位是$1766319049+226153980\sqrt{61}=3.5326\cdots\times 10^9$.

事实上,对该问题基本单位的上界的估计也是有一些结果的.而最后的估计式由华罗庚给出:

> $$h_K\cdot\log\varepsilon_d<\frac{1}{2}\sqrt{d}\log d+\sqrt{d}\ \ (K=\mathbb{Q}(\sqrt{d}))$$

其中$\log\varepsilon_d$即为$K$的regulator,$h_K$即为$K$的类数,故$h_K\ge 1$.(**这些内容忘得差不多了😥,之后也写一篇才行!**)

取$d=61$,得到$\log\varepsilon_{61}<\dfrac{1}{2}\sqrt{61}\log 61+\sqrt{61}=23.8637\cdots$,即$\varepsilon_{61}<2.3114\cdots\times 10^{10}$.因此对于确定基本单位的大小仍然是一个很复杂的课题.但是也有特殊情况,其基本单位很简单:

> 当$d=t^2+4(t\in\mathbb{Z})$无平方因子,则$\mathbb{Q}(\sqrt{d})$的基本单位为$\varepsilon=\frac{1}{2}(t+\sqrt{t^2+4})$.
>
> 当$d=t^2-4(t\in\mathbb{Z}_{\ge 5})$无平方因子,则$\mathbb{Q}(\sqrt{d})$的基本单位为$\varepsilon=\frac{1}{2}(t+\sqrt{t^2-4})$.

#### 利用连分数求基本单位

##### $P_k$与$Q_k$

在上一篇中介绍有$Lagrange$定理,即:

> **定理4(Lagrange定理):** 循环连分数和二次无理数是一一对应的.

在Fatfish提供的证明二中,引入了**两个新的符号$P_k$和$Q_k$**,对我们后续的计算中更方便.以下直接记录下符号的意义,省去了推导过程.

$\quad$ 设$d$是一个无平方因子的正整数,它的连分数展开如下:

$$\sqrt{d}=[a_0;a_1,a_2,\cdots]=[a_0;a_1,a_2,\cdots,a_{k-1},r_k]$$

$\quad$ 而$r_k$也是循环连分数,从而也是二次无理数,实际上也和$\sqrt{d}$有关,即我们可以记:

$$r_k = \dfrac{P_k+\sqrt{d}}{Q_k}$$

$\quad$ 当然,因为$r_k=[a_k,r_{k+1}]=a_k+\frac{1}{r_{k+1}}$,我们也可以推出关于$\{P_k\}$和$\{Q_k\}$的递推式.即:

$$P_{k+1}=a_k Q_k - P_k^2$$

$$Q_{k+1} = \dfrac{D-P_k^2}{Q_k}+a_k^2Q_k-2a_kP_k$$

~~但是看这推导式,不如不看.~~总之在最后计算基本单位的时候,我们也只是用到了连分数展开的第一个循环而已,因此手撕就差不多够了,即使是61这个数(Fermat自己说是比较人性化的选了个比较小的数).

例如:

$$
\begin{align}
    \sqrt{7} 
    & = [2;r_1] & where\ r_1 = \dfrac{2+\sqrt{7}}{3} \\\\
    & = [2;1,r_2] & where\ r_2 = \dfrac{1+\sqrt{7}}{2} \\\\
    & = [2;1,1,r_3] & where\ r_3 = \dfrac{1+\sqrt{7}}{3} \\\\
    & = [2;1,1,1,r_4] & where\ r_4 = \dfrac{2+\sqrt{7}}{1} \\\\
    & = [2;1,1,1,4,r_5] & where\ r_5 = \dfrac{2+\sqrt{7}}{3} \\\\
    & = [2;\overline{1,1,1,4}]
\end{align}
$$

通过这种暴力手撕的方式,我们也能够得到$P_k$和$Q_k$的值了.但我们也只需要一个循环里的值就够了.

##### 基本单位的确定

以下两个定理,能够说明Pell方程的有理整数解和连分数的渐近分数之间的关系:

> **定理5:** 记$x^2-dy^2=s$,其中$|s|<\sqrt{d}$,则$\dfrac{x}{y}$一定是$\sqrt{d}$的渐近分数.
>
> **定理6:** 设$\sqrt{d}$的渐近分数为$\dfrac{p_k}{q_k}$,则$p_k^2-dq_k^2 = (-1)^{k+1}Q_{k+1}$.即$|N(p_k+q_k\sqrt{d})|=Q_{k+1}$.

那么我们确定基本单位的方法基本上已经很明确了:

$\quad$ 对于Pell方程$x^2-dy^2=1$而言($-1$也是同样的方法):

$\quad$ 先计算出$\sqrt{d}$的连分数展开和一个循环.

$\quad$ 然后计算得到$P_k$和$Q_k$的值.着重观察的是$Q_k=1$的情况,即范数等于$\pm 1$的一个单位(而且就是基本单位).

$\quad$ 然后利用定理2或者定理3得到Pell方程的所有解.

例如: 对于$x^2-7y^2=1$而言,发现$Q_4=1$,且$[2;1,1,1]=\dfrac{8}{3}$.因此我们得到了一个范数为$(-1)^4=1$的基本单位$8+3\sqrt{7}$,最后使用定理2即可.

最后来看一下Fermat所选取的两个比较人性化的数61和109到底有何特别之处,让我们先对$\sqrt{61}$和$\sqrt{109}$进行连分数展开:

$$\sqrt{61} = [7;\overline{1,4,3,1,2,2,1,3,4,1,14}]$$

这里展开的循环节足足11位!而还有糕手!109更是重量级!它的循环节有15位!

$$\sqrt{109} = [10;\overline{2,3,1,2,4,1,6,6,1,4,2,1,3,2,20}]$$

因此这两个数对应的Pell方程的超大的基本单位,就能从这两个连分数展开中窥见一斑.因此Fermat这个糟老头子信不了一点.🤬

从19号开始写到25号写完本文,而且最后连分数里边还有一些内容被我很快的跳过去了,比如Legender判别准则来判断渐近分数,Liouville超越数这种十分逼近有理数的数,以及太超前的辛钦定理.这些内容之后可以再回过头来看一看,还是很神奇的.

#### 参考资料

[1] 冯克勤.代数数论[M].哈尔滨:哈尔滨工业大学出版社,2018

*参考第三章2.2节-实二次域的基本单位,Pell方程*

[2] FatFish.连分数入门[Z]:超理论坛.https://chaoli.club/index.php/2756?see_lz=1

*又是FatFish的帖子,主要参考3.2-Lagrange定理以及3.5-Pell方程*