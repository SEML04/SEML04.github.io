---
title: 算术几何读书笔记(Quantitative Arithmetic of Projective Varieties) -- 数论与几何的深度交叉
mathjax: true
date: 2025-08-31 19:57:58
categories:
    - 丢番图几何
tags:
    - Diophantine Geometry
    - Analytical Number Theory
    - Manin's Conjecture
    - Waring's Problem
    - Vinogradov's Mean Value Theorem
---

#### 引言

博客更新辣!一看上次更新,还是在四个月前.除了爽玩之外,也还是参加了中科院的暑校学习了一些丢番图问题的知识.于是终于打算开始学习Tim Browning的这本*Quantitative Arithmetic of Projective Varieties*${[1]}$.

在看这本书之前,还没有意识到这些数论问题和几何之间的联系原来有这么深,因此很值得记录一下,免得一段时间下来进度为负然后被薄纱.

此处先记录该书的第一章内容,以及本章后的习题(都还蛮简单的).由于第一章其实是Intro性质的,涉及到了很多开放性的问题,但成书又是在2006年左右,因此我也简单收集了一下这些问题的最新进展,或许这些进展又能反过来带来新的想法,而这就在后面的某段时间可以看看了.

再补充说明一下,与筛法读书笔记基本翻译原文的风格不同,我尽量以极简风格来记录这些内容.话说到此处打住,接下来要狠狠启动了!😎

#### 高度有界的整点的分布

##### Birch定理

假设$f \in \mathbb{Z}[x_1, \cdots, x_n]$是一个$n$元$d$次的整系数形式,记它的非零整点集为
$$S_f \coloneqq \{ \mathbf{x} = (x_1, \cdots, x_n) \in \mathbb{Z}^n \setminus \{ 0 \} : f(\mathbf{x}) = 0 \},$$
但是我们更关心的是$S_f$中高度有界的有理点,也就是
$$N(f;B) := \#\{ x \in S_f : \| x \| \le B \}, \quad(1)$$
其中$\|\cdot\|$是无穷范数,更具体而言就是
$$\begin{split}
    \|\cdot\| : \mathbb{R}^n & \to \mathbb{R} \\
    \mathbf{x} & \mapsto \max_{1\le i \le n} |x_i|.
\end{split}$$

而对于$N(f;B)$的估计,有以下定理:
> **Thm 1(Birch; P4):**
>
> $\quad$ Suppose $f \in \mathbb{Z}[x_1, \cdots, x_n]$ is a non-singular homogeneous polynomial of degree $d$ in $n > (d-1)2^d$ variables. Assume that $f(\mathbf{x})=0$ has non-trivial solutions in $\mathbb{R}$ and each $p$-adic field $\mathbb{Q}_p$. Then there is a constant $c_f>0$ such that
>
> $$N(f;B) \sim c_f B^{n-d}, \quad (2)$$
>
> $\quad$ as $B \to \infty.$

其中围绕"$f(\mathbf{x})=0$ has non-trivial solutions in $\mathbb{R}$ and each $p$-adic field $\mathbb{Q}_p$",$n > (d-1)2^d$和non-singular这些条件能很**容易**得构造出几个反例.在后面我将简单补充一些目前对于Birch定理的一些改进,感觉也是一大块很值得深挖的内容.

##### 一些简单的反例

下面的例子1将说明在$\mathbb{Q}$的局部域中有非零解的重要性.

> **例1**
>
> $\quad$ 取$n$元$2d$次形式
>
> $$f_0 := x_1^2d + \cdots + x_n^{2d},$$
>
> $\quad$ 显然$S_{f_0} = \emptyset$,因此不满足$(2)$.

设$K$是一个$d$次数域,$\omega_1, \cdots, \omega_d$是其代数整数环$\mathcal{O}_K$的一组整基,记
$$\mathbf{N}(y_1,\cdots,y_d) := N_{K/\mathbb{Q}}(y_1\omega_1 + \cdots + y_d\omega_d),$$
可知$\mathbf{N}(y_1, \cdots, y_d)$是一个$d$次整系数的范形式(norm form).而对于这样子的norm form,也有很多有意思的东西值得研究,比如Tim Browning的这篇论文${[2]}$.

> **例2**
>
> $\quad$ 取$d^2$元$d$次形式
>
> $$f_1 := \mathbf{N}(x_1, \cdots, x_d) + p\mathbf{N}(x_{d+1}, \cdots, x_{2d}) + \cdots + p^{d-1}\mathbf{N}(x_{d^2-d+1}, \cdots, x_{d^2}),$$
>
> $\quad$ 而$f_1(\mathbf{x}=0)$当且仅当$\mathbf{x}=\mathbf{0}$,从而$S_{f_1} = \emptyset$,因此不满足(2).

解答:

$\quad$ 假设存在$\mathbf{x} = (x_1, \cdots, x_{d^2}) \in \mathbb{Z}^{d^2}$使得$f_1(\mathbf{x}) = 0$,且$\gcd(x_1, \cdots. x_{d^2}) = 1$.

$\quad$ 于是在$\text{mod }p$的意义下,得到有
$$\mathbf{N}(x_1, \cdots, x_d) \equiv 0 \pmod{p},$$
$\quad$ 由于$p \mid \mathbf{N}(\mathbf{y})$当且仅当$p \mid \mathbf{y}$(这个是**练习1**的结论),于是
$$p \mid \gcd(x_1, \cdots, x_d).$$
    
$\quad$ 从而再设
$$(x_1, \cdots, x_d) = p(x_1', \cdots, x_d').$$
$\quad$ 于是在$\text{mod }p^2$的意义下,最终得到有
$$p \mid \gcd(x_{d+1}, \cdots, x_{2d}).$$
$\quad$ 以此类推便可以得到$p \mid (x_1, \cdots, x_{d^2})$,与假设矛盾,因此不存在非零整解.$\square$

例子2貌似仍然是在说定理1成立的必要条件是在$p$-adic域中有非零解,但是再细看$f_1$的构造,可以知道的是,如果变量数不够大的话,我们便**可能构造**出一个$f$使得其没有非平凡解,更详细地可以见${[3]}$.因此在定理中,条件$n > (d-1)2^d$是重要的,但是仍然是可以优化的.

接下来的两个$S_f \neq \emptyset$的例子将说明non-singular的重要性,同样地,其也可以适当地得到改进.打头的是一个很简单的例子:

> **例3**
>
> $\quad$ 取$n$元$d$次形式
>
> $$f_2 := x_1^d - x_2(x_3^{d-1} + \cdots + x_n^{d-1}).$$
>
> $\quad$ 由于$f_2(0,0,a_3,\cdots,a_n) = 0$,从而$\#S_f \gg B^{n-2}$与(2)并不符合.

利用例子2中的$f_1$我们还可以构造出以下这个简单但又不太简单的例子:

> **例4**
>
> $\quad$ 当$n > d^2$时,可选择任意$d^2$个$\mathbb{Q}$线性无关的线性形式$L_1, \cdots, L_{d^2} \in \mathbb{Z}[x_1, \cdots, x_n]$.
>
> $\quad$ 取$n$元$d$次形式
>
> $$f_3 := f_1(L_1(x_1, \cdots, x_n), \cdots, L_{d^2}(x_1, \cdots, x_n)),$$
>
> $\quad$ 于是$\#S_f + 1 = \#\{ \mathbf{x} \in \mathbb{Z}^n : L_1(\mathbf{x}) = \cdots = L_{d^2}(\mathbf{x}) = 0 \} \asymp B^{n-d^2}$,显然也是与(2)不符合的.

而上面的这两个例子都是由于其有着large singular locus所导致的,因此non-singular并能很好的排除这一点.

##### 本原整点的计数

但我们<span style="color: rgb(230,51,51)">更关心的</span>其实是projective rational points的分布.记$V$是一个$\mathbb{P}^{n-1}$中的projective variety,对于$\mathbb{P}^{n-1}$中的有理点$x = [\mathbf{x}]$,我们选取这样的一个代表元$(x_1, \cdots, x_n) \in \mathbb{Z}^n$,且$\gcd(x_1, \cdots, x_n) = 1$,定义
$$H(x) := \max_{1 \le i \le n} | x |,$$
给定一个locally closed subset$U \subseteq V$,定义
$$N_U(B) := \#\{ x \in U(\mathbb{Q}) : H(x) \le B \}. \quad (3)$$


在后文中也是基本都是在考虑计数函数$N_U(B)$,比如很重要的Manin猜想,便是猜测对于很多情况的projective variety $V$,可以选取出一个恰当的闭子集$U$,使得有这样的一个渐近估计式成立
$$N_U(B) \sim cB^{a}(\log B)^b, \quad (4)$$
事实上,根据目录来看,整本书基本上就是在围绕这个猜想展开的.

在这里,我们先简单记录一下$N_V(B)$与$N(f;B)$之间的关系,而这个联系就是——容斥原理.因此利用Mobius函数$\mu$,我们可以很容易地得到有
$$N_V(B) = \frac{1}{2} \sum_{k=1}^{\infty} \mu(k) N(f; k^{-1}B). \quad (5)$$

利用(5),我们就很容易可以得到
> **Thm 2:**
>
> $\quad$ Let $n \ge 2$ and let $H: \mathbb{P}^{n-1}(\mathbb{Q}) \to \mathbb{R}_{>0}$ be the height function metrized by the choice of norm $|z| = \max_{1 \le i \le n}|z_i|$. Then we have
>
$$N_{\mathbb{P}^{n-1}}(B) = \frac{2^{n-1}}{\zeta(n)}B^n + O_n(B^{n-1}(\log B)^{b_n}),$$
>
> $\quad$ where
>
> $$b_n := \left\{\begin{matrix} 1, & \text{if } n = 2, \\ 0, & \text{if } n > 2. \end{matrix}\right.$$

如果再结合Thm 1,我们还能得到
$$N_V(B) \sim \overline{c}_f B^{n-d},$$
令$c_f$仍然是Thm 1中的常系数,则
$$\overline{c}_f  = \frac{1}{2} \zeta(n-d)^{-1} c_f.$$
而这个的证明将在**练习2**中稍微写一点,事实上和Thm 2的证明是完全一样的,因此上面也就没有给出Thm 2的证明了.

##### Birch定理的推广

Birch定理,也就是Thm 1的证明用到了Hardy-Littlewood圆法,争取早点能了解一下圆法的基本形式嗷.而该定理是Birch在1961年给出的,在这么长一段时间里,也是得到了进一步的推广,下面稍微记录一些,或许之后细看论文时能get到一些新的角度.

在局部域有非平凡解的条件几乎是不可质疑的,或许也有一般的结论可以将无平凡解的情况也包含进去,此处我也没有再去深挖了.

但是"$n > (d-1)2^d$"的这个条件倒是得到了相当大的改进.对于三次型,也就是$d=3$时,Heath-Brown${[4]}$(太权威了!)在1983年证明了$n \ge 10$便有(2)成立,但是仍然还有着未解决的猜想:

> **猜想1:**
>
> $\quad$ 对于$n$元$d$次形式$f$,当$d=3$时,只要$n \ge 7$,便有(2)成立.

而对于一般的$d$的讨论,其又与Vinogradov's Mean Value Theorem有着深刻的联系(这个到后面章节再说),总之貌似只需要$n \ge C\cdot d^2$便能有(2)成立.

而对于non-singular条件的放弱,也由W. M. Schmidt${[5][6]}$(看来真得学学才行了)给出了突破性的进展,他证明了只要singular locus的维数不要太大,那么仍然有(2)的结论成立.

除此之外,还可以将Thm 1推广至方程组以及非齐次方程的情况,其中后者更加复杂一些,我这里还是先聚焦于单个齐次方程的处理,因此这部分就没有记录更多内容.

#### 丢番图几何与解析数论的交叉

在2.4节,我们发现Birch定理的推广可能与一些解析数论问题有关,但事实上,也有很多解析数论问题也可以用丢番图几何的角度去分析.本章除了是Browning书上给出的情况之外,仍然是收集了目前已有的一些进展与突破.

##### Paucity Results

仿照Fermat猜想的形式,Euler曾猜想
$$x_1^k + \cdots + x_{k-1}^k = x_k^k$$
没有非平凡解.当$k=3$时,其就是Fermat猜想的一个特例,并且正是Euler给出了这种情况下的证明.但是!由于计算机的发展,Elkies发现了$k=4$时的无穷多组反例,Lander和Parkin发现了$k=5$时的最小反例.

对于Euler猜想进行一些修正,便有这样的一个仍然开放的猜想:
> **猜想2(Lander-Parkin-Selfridfe猜想):**
>
> $\quad$ 如果有
>
> $$\sum_{i = 1}^n x_i^k = \sum_{j = 1}^m y_j^k,$$
>
> $\quad$ 那么有
>
> $$n+m \ge k.$$

这里再考虑LPS猜想的一个特例,也就是考虑
$$x_1^d + x_2^d = x_3^d + x_4^d \quad (6)$$
的非平凡解数,有猜想:
> **猜想3:**
>
> $\quad$ 当$d \ge 5$时,(6)没有非平凡解.

假设(6)中$x_1^d + x_2^d = x_3^d + x_4^d = n \le x$的解数为$\nu_d(x)$,我们想要证明的是对于任意$d \ge 5$和任意的$x > 0$,(6)只有平凡解.但事实上这很困难,我们只能估计得到$\nu_d(x)$的上界,比如一个平凡的上界$x^{2/d+\varepsilon}$.而Salberger${[7]}$则得到有:
$$\nu_d(x) \ll_{d,\varepsilon} x^{3d^{-\frac{3}{2}} + \varepsilon}.$$
并且貌似这个结果已经是非常好的一个结果了.在2020年,Castryck,Cluckers,Dittmann,Nguyen去掉了Salberger结果中的$B^\varepsilon$项.

##### Waring's Problem

而Waring问题也能与丢番图几何联系起来.这里有<span style="color: rgb(230,51,51)">两个略有不同的概念</span>:对于**任意**正整数,其都可以表示为至多$g(k)$个$k$次幂的和；对于**充分大**的正整数,其都可以表示为至多$G(k)$个$k$次幂的和.Hilbert证明了对于任意$k$而言$g(k)$的存在性,但是$g(k)$与$G(k)$的准确值难度差别还是很大的.

例如我们已经可知的是$g(2)=G(2)=4$,而这也对应于Lagrange四平方和定理,以及$g(4)=19$,而$G(4)=16$.而当$k=3$时便有所不同了,Wirferich和Dickson证明了$g(3) = 9$,然而$G(3)$却仍未确定下来,其取值范围为$4 \le G(3) \le 7$,而普遍猜想$G(3)$就是$4$.

目前对于$G(k)$最好的上界仍然是
$$G(k) \le k(\log k + \log\log B + O_k(1)),$$
而这也与Vinogradov's Mean Value Theorem有着很紧密的联系.此外通过一个很简单的讨论(**练习1.4**)可以知道的是
$$g(k) \ge 2^k + \left[ \left( \frac{3}{2} \right)^{k} \right] - 2,$$
可以看到$g(k)$和$G(k)$的估计式的差别还是特别大.那么Waring问题和丢番图问题又有什么联系呢？

在处理Waring问题的过程中,要利用到圆法来处理
$$x_1^k + \cdots + x_s^k = x_{s+1}^k + \cdots + x_{2s}^k.$$
但如果承认Manin猜想,便可以得到上式在$0 \le x_1, \cdots, x_{2s} \le B$时有$O_{k,s,\varepsilon}(B^{2s-k+\varepsilon})$数量的非负整数解,于是便可以得到$G(k)$的一个极强的估计式
$$G(k) \le \max\{ 2k+1, \Gamma_0(k) \},$$
其中$\Gamma_0(k)$是使得$x_1^k + \cdots + x_s^k = n$在$\mathbb{Q}_p^s$中有非平凡解的最小的$s$,也就是确保上式的局部可解性.

##### Vinogradov's Mean Value Theorem

在前面的内容中就有几处已经和这个定理已经扯上了关系,该定理的作用在指数和求和中也发挥了重要的作用,而且这也是Intro部分介绍的问题中有重大突破的一个定理,因此后面应该要仔细研究研究才行.

考虑由如下的一组方程定义的projective variety $V_{k,s} \subset \mathbb{P}^{2s-1}$:
$$x_1^j + \cdots + x_s^j = x_{s+1}^j + \cdots + x_{2s}^j,\ (1 \le j \le k).\quad (7)$$
再记其在$0 \le x_1, \cdots, x_{2s} \le B$时的非负整数解的数量为$N_{k,s}(B)$.

容易知道的是(7)有以下这些**平凡解**
$$\{x_1, \cdots, x_s\} = \{ x_{s+1}, \cdots, x_{2s} \},$$
因此显然有$N_{k,s}(B) \gg B^s$,但是还不够,我们还需要再考虑其**非平凡解**数量的影响.

记$\mathcal{H} := \{ \mathbf{h} \in \mathbb{Z}^k : |h_j| \ll B^{j}, j=1,\cdots,k \}$,以及
$$\mathcal{U}_{\mathbf{h}}(k,s) := \{ \mathbf{x} \in \mathbb{Z}^{2s} : 0 \le x1, \cdots, x_{2s} \le B, \sum_{i=1}^{s} (x_j^k - x_{s+j}^k) = h_j, j = 1, \cdots, k \}.$$

于是有下面的估计${[8, eq 7.4]}$(应该不是很平凡,要利用到很多指数和的知识):
$$B^{2s} \ll \sum_{\mathbf{h}\in\mathcal{H}}\#\mathcal{U}_{\mathbf{h}}(k,s) \ll \sum_{\mathbf{h}\in\mathcal{H}}N_{k,s}(B) \ll B^{\frac{k(k+1)}{2}}N_{k,s}(B),$$
因此我们最终得到了如下的估计式:
$$N_{k,s}(B) \gg  B^s ＋ B^{2s-\frac{k(k+1)}{2}}. \quad (8)$$

而长期的一个Main Conjecture,但是现在已经得到证明,其表述如下:
> **Thm 3(Vinogradov's Mean Value Theorem):**
>
> $\quad$ 对于任意的$\varepsilon > 0$,有
> 
> $$N_{k,s}(B) \ll  B^s ＋ B^{2s-\frac{k(k+1)}{2} + \varepsilon}. \quad (9)$$

结合(8)和(9)来看,这也就是在说$N_{k,s}(B)$的上下界是很窄的,也就是说上面的估计式是非常准确的.而这个定理的证明有着两种方法,一种是Bourgain,Demeter和Guth${[9]}$在2016年给出的,另一种是Wooley${[10]}$在2019年给出的,或许这两种方法我后面都可以值得看一看.

总之,无论从什么方面来看,这个定理以及其相关的内容应该是很值得学习的一块了,加入我的必看清单(~~虽然我并没有必看清单,也不知道什么时候开始看~~).

##### Small Solutions

现在令$n \ge 3$,$f \in \mathbb{Z}[x_1, \cdots, x_n]$是一个$d \ge 2$次形式,且其范数$\|f\|$取作$f$系数绝对值的最大值.这一节的内容将聚焦于,当$S_f \neq \emptyset$时的最小正整数解的性质,更具体地,定义$\Lambda_n(f)$为最小的一个正整数$\lambda$,使得存在$\mathbf{x}\in S_f$,有$|\mathbf{x}| = \max_{1\le i\le n} |x_i| \le \lambda$.

当$d=2$,取$f=Q$是一个不定二次型,Cassels${[11]}$证明了
\begin{equation}\label{Cassels}
    \Lambda_n(Q) \ll_n \|Q\|^{\frac{n-1}{2}}, \quad (10)
\end{equation}
并且右侧的确是最优的,用
$$Q_0(\mathbf{x}) := x_1^2 - (x_2-cx_1)^2 - \cdots - (x_n-cx_{n-1})$$
便可以验证.但是对于**足够一般**的二次型而言,其判别式$\Delta \asymp \|Q\|^n$,在这种情况下,Browning和Dietmann${[12]}$给出了(10)的进一步优化,他们证明了
$$\Lambda_n(Q) \ll_{\varepsilon, n} \|Q\|^{\frac{n-1}{2}} \left( \frac{\|Q\|^{n+\varepsilon}}{|\Delta|^{\frac{1}{2}(n-5-\alpha_n)}} \right)^{\frac{1}{n-3-\alpha_n}},$$
其中$\varepsilon$是任意大于$0$的实数,而
$$\alpha_n = \begin{cases}
    1, & \text{if } n \text{ is even}, \\
    0, & \text{if } n \text{ is odd}.
\end{cases}$$
在这个命题的证明之中,便利用到了丢番图几何的一些结论,很直接的就是对于一个从$\mathbb{R}^n$到$\mathbb{R}_{\ge 0}$的有界紧支集函数$\omega$,需要去估计
$$N_{\omega}(Q;B) := \sum_{\substack{\mathbf{x} \in \mathbb{Z}^n \\ Q(x) = 0}} \omega(B^{-1}\mathbf{x})$$
的渐近估计式,当然这里也是用的圆法得出的.

而对于$d=3$的一个$n$元三次型$C$而言,那么就复杂了许多.当变量数$n$**充分多**的时候,Pitman${[13]}$证明了
$$\Lambda_n(C) \ll_{\varepsilon, n} \|C\|^{\frac{25}{6}+\varepsilon}.$$
如果变量数很少的时候,在$n \ge 17$时,Browning,Dietmann和Elliot${[14]}$证明了
$$\Lambda_n(C) \ll_{\varepsilon, n} \| C \|^{ 3.6 \times 10^5 + \varepsilon}.$$
当然,对于两种情况下,Browning,Heath-Brown,Wooley,Mormon等人也给出了进一步的优化,但这里就不进一步记录了.

##### Divisor Problems

丢番图几何中的问题有一些最后就划归为了除数问题最终得以解决,而这个问题在解析数论中也是一个很自然很重要的问题.我们定义一般形式下的估计式为
\begin{equation}\label{divisor formula}
    D(X; \varphi, F) := \sum_{a,b\le X}\varphi(F(a,b)), \quad (11)
\end{equation}
其中$\varphi$是一个合适的数论函数,例如下面的例子中我们将取$\varphi(n) = \tau(n) = \sum_{d|n} 1$,而$F \in \mathbb{Z}[x_1, x_2]$是一个二元$d$次的无重根形式.

书中说$d=1,2$时是容易估计的,我没算不知道嗷.对于$d=3$的情况就开始复杂起来了,Greaves${[15]}$利用**指数和**证明了
$$D(X;\tau,F) = c_FX^2\log X + c_F'X^2 + O_{\varepsilon,F}(X^{\frac{27}{14}+\varepsilon}).$$
然后Daniel${[16]}$利用"**数的几何**"(geometry of number)证明了$d=4$时的情况为
$$D(X;\tau,F) = c_FX^2\log X + O_F(X^2\log\log X).$$
并且Daniel还将Greaves的结果优化至$\frac{15}{8}$.

对于除数问题仍然是一个相当困难的问题,在2020年Frei和Sofos${[17]}$才第一次(应该是吧)将除数问题推广到更一般的数域上进行研究.总之,除数问题,指数和的一些相关技术以及所谓的"数的几何"听上去都挺有意思的,也加入必读清单了,争取早花点时间了解了解.

#### 第一章练习题!

接下来是第一章的几个习题,基本上都比较简单,也就只简单记一下想法,毕竟现在也写的够长了.

> **练习1.1:**
>
> $\quad$ Let $K$ be a number field of degree $d$ over $\mathbb{Q}$, with integral basis $\omega_1, \cdots, \omega_d$. Let $p$ be a rational prime such that the ideal $(p)$ is prime in the ring of integers $\mathcal{O}_K$. For any $\alpha = y_1\omega_1 + \cdots + y_d\omega_d \in \mathcal{O}_K$, show that $p \mid N_{K/\mathbb{Q}}(\alpha)$ if and only if $p \mid \alpha$.

解答:

$\quad$ 很显然当$p\mid\alpha$时会有$p\mid N_{K/\mathbb{Q}}(\alpha)$.而反过来稍微会复杂一点,注意到$(p)$是$\mathcal{O}_K$中的素理想,因此$\mathcal{O}_K / p\mathcal{O}_K \cong \mathbb{F}_{p^d}$,在这个情况下,有
$$N_{K/\mathbb{Q}}(\alpha) \pmod{p} = N_{\mathbb{F}_{p^d} / \mathbb{F}_p}(\overline{\alpha}) = \overline{\alpha} \cdot \overline{\alpha}^p \cdot \overline{\alpha}^{p^2} \cdot \cdots \cdot \overline{\alpha}^{p^{d-1}} = \overline{\alpha}^{\frac{p^d-1}{p-1}}.$$
$\quad$ 因此$p \mid N_{K/\mathbb{Q}}(\alpha)$等价于$\overline{\alpha} = 0$,即$\alpha \in (p)$,于是有$p\mid\alpha$,因此得证.$\square$

> **练习1.2**
>
> $\quad$ Let $V \subset \mathbb{P}^{n-1}$ be a hypersurface defined by a non-singular form $f$ of degree $d$, with $n > (d-1)2^d$. Mimicking the proof of Theorem 2, use Theorem 1 to deduce that
>
> $$N_V(B) \sim \overline{c}_f B^{n-d},$$
>
> $\quad$ where 
>
> $$\overline{c}_f = \frac{c_f}{2\zeta(n-d)}.$$

解答:

$\quad$ 利用(2)和(5),可以得到有
$$\begin{array}{ll}        
    N_V(B) & = \frac{1}{2} \sum_{k=1}^{\infty} \mu(k) N(f; k^{-1}B) \\ \\
    & \sim \frac{1}{2} \sum_{k=1}^{\infty} \mu(k) c_f k^{-(n-d)} B^{n-d} \\ \\
    & = \frac{1}{2} c_f B^{n-d} \sum_{k=1}^{\infty} \frac{\mu(k)}{k^{n-d}} \\ \\
    & = \frac{1}{2} c_f B^{n-d} \prod_{p} \left(1 - \frac{1}{p^{n-d}}\right) \\ \\
    & = \frac{c_f}{2 \zeta(n-d)} B^{n-d}.
\end{array}$$
$\quad$ 从而得证.$\square$


> **练习1.3:**
>
> $\quad$ Establish the trivial bound $\nu_d(x) \ll_{d,\varepsilon} x^{2/d+\varepsilon}$.

解答:

$\quad$ 这也确实是一个很平凡的上界,注意
$$\nu_d(x) = \#\{ n \in \mathbb{N}_{\le x} : n = a^d+b^d = m^d+n^d\}.$$
$\quad$ 很显然,有以下估计
$$\nu_d(x) \le \#\{ n \in \mathbb{N}_{\le x} : n = a^d+b^d\} \le \#\{a \in \mathbb{N}: a^d \le x\} \cdot \#\{b \in \mathbb{N}: b^d \le x\} \ll x^{2/d+\varepsilon}.$$
$\quad$ 从而得证.$\square$

> **练习1.4:**
>
> For $k \in \mathbb{N}$, let $g(k)$ be the least number of $k$th powers needed to represent every positive integer as a sum of $k$th powers. By considering the integer
>
> $$n = 2^k \left[ \left( \frac{3}{2} \right)^{k} \right] - 1,$$
>
> deduce that
>
> $$g(k) \ge 2^k + \left[ \left( \frac{3}{2} \right)^{k} \right] - 2.$$

解答:

$\quad$ 由于$2^k < n < 3^k$,因此$n$只能分解为$0^k, 1^k, 2^k$的和,而最有效率的分解方式也仅仅只是:
$$n = 2^k \left(\left[ \left( \frac{3}{2} \right)^{k} \right] - 1\right) + 1^k (2^k - 1),$$
$\quad$ 因此得证.$\square$


#### 总结

目前第一章的内容就记录到这,后面还有非常非常多的东西等我去学,简单做一个规划吧.首先是Browning的这本书可以继续深入学习,第二章应该会过得比较快,毕竟在前段时间已经和它打过不少照面了.其次是后面这么多的参考文献可以再了解了解,其中比较感兴趣的是${[2][9][15][16]}$这几篇,空闲时候可以翻一翻.然后还有很多其他的内容啦,比如代数几何,丢番图逼近(说起来${[6]}$也可以看看),椭圆曲线,Riemann zeta函数等,都要花时间(~~怎么上个研究生这么多事啊,真学不过来了😭~~).

以及我的电脑坏了,不知道什么时候才来上传到爱音学报上,悲!

Remark:时隔半个月(9.19)后的补充:终于是给传上了!😭

#### (待)参考资料

[1] Browning T D. Quantitative arithmetic of projective varieties[M]. Springer Science \& Business Media, 2009.

[2] Browning T D, Matthiesen L. Norm forms for arbitrary number fields as products of linear polynomials[C]//Annales Scientifiques de l'Ecole Normale Superieure. 2017, 50(6): 1383-1446.

[3] Wikipedia. Quasi-algebraically closed field[Z]. https://en.wikipedia.org/wiki/Quasi-algebraically_closed_field.

[4] Heath-Brown D R. Cubic forms in ten variables[J]. Proceedings of the London Mathematical Society, 1983, 3(2): 225-257.

[5] Schmidt W M. The density of integer points on homogeneous varieties[J]. 1985.

[6] Schmidt W M. Diophantine approximations and Diophantine equations[M]. Springer, 2006.

[7] Salberger P. On the density of rational and integral points on algebraic varieties[J]. 2007.

[8] Vaughan R C. the Hardy-Littlewood method[M]. Cambridge: Cambridge University Press, 2003.

[9] Bourgain J, Demeter C, Guth L. Proof of the main conjecture in Vinogradov's mean value theorem for degrees higher than three[J]. Annals of Mathematics, 2016: 633-682.

[10] Wooley T D. Nested efficient congruencing and relatives of Vinogradov's mean value theorem[J]. Proceedings of the London Mathematical Society, 2019, 118(4): 942-1016.

[11] Cassels J W S. Bounds for the least solutions of homogeneous quadratic equations[C]//Mathematical Proceedings of the Cambridge Philosophical Society. Cambridge University Press, 1955, 51(2): 262-264.

[12] Browning T D, Dietmann R. On the representation of integers by quadratic forms[J]. Proceedings of the London Mathematical Society, 2008, 96(2): 389-416.

[13] Pitman J. Cubic inequalities[J]. Journal of the London Mathematical Society, 1968, 1(1): 119-126.

[14] Browning T D, Dietmann R, Elliott P. Least zero of a cubic form[J]. Mathematische Annalen, 2012, 352(3): 745-778.

[15] Greaves G. On the divisor-sum problem for binary cubic forms[J]. Acta arithmetica, 1970, 17: 1-28.

[16] Daniel S. On the divisor-sum problem for binary forms[J]. 1999.

[17] Frei C, Sofos E. Generalised divisor sums of binary forms over number fields[J]. Journal of the Institute of Mathematics of Jussieu, 2020, 19(1): 137-173.