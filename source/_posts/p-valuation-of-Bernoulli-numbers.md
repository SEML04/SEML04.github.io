---
title: 论文阅读 -- On irregular prime power divisors of the Bernoulli numbers (Kellner)
mathjax: true
date: 2025-09-25 17:29:47
categories:
    - 论文阅读
tags:
    - Number Theory
    - Bernoulli Numbers
    - p-adic Zeta Function
    - Kummer Congruence
    - Paper Reading
---

#### 引言

最近学习了一点关于Bernoulli number关于p-valuation下的一些结论,其甚至能与p-adic zeta function的零点联系起来,感觉十分神奇,因此记录一下.

主要的内容参考的是Kellner于2005年的这篇论文:[https://arxiv.org/pdf/math/0409223](https://arxiv.org/pdf/math/0409223)$^{[1]}$,而关于p-adic zeta function和Kummer Congruence等更细节的内容也参考了Washington的*Introduction to cyclotomic fields*$^{[2]}$的第四章和第五章.

内容不是很多,也只是简单记录一些有意思的知识点,不太涉及到过多的计算和证明啥的了(~~相对而言Kellner的这篇论文的证明不是很让人头疼的了~~).总而言之,Anon队长,博客更新!

<center>
<img src="/image/p-valuation-of-Bernoulli-numbers/T1.jpg" width="30%">
</center>

#### Bernoulli number的一些性质

##### Bernoulli number的定义

关于Bernoulli number的很多奇妙深刻的性质,在[The Bernoulli number page](https://bernoulli.org)$^{[3]}$上有着比较全面的介绍,而这里主要记录几个常用的性质,从Wikipedia上抄了一些下来.

首先是Bernoulli number的定义,历史上Bernoulli是在考虑幂和公式的时候认识到了这一组特殊的数.利用Bernoulli number有
$$\sum_{k=1}^n k^m = \frac{1}{m}(B_0n^{m+1} + \binom{m+1}{1}B_1^+ n^m + \binom{m+1}{2}B_2n^{m-1} + \cdots + \binom{m+1}{m}B_m n),$$

此处的$B_1^+ = +1/2$,但现在一般记$\color{red} B_1 = B_1^- = -1/2$,在这个条件下上式会变成
$$\sum_{k=1}^n k^m = \frac{1}{m}(B_0n^{m+1} - \binom{m+1}{1}B_1^+ n^m + \binom{m+1}{2}B_2n^{m-1} + \cdots + (-1)^m\binom{m+1}{m}B_m n).$$

Bernoulli number有以下的递推式:
$$\begin{align*}
    \sum_{k=0}^m \binom{m+1}{k} B_k & = \sigma_{m,0}, \\
    \sum_{k=0}^m \binom{m+1}{k} B_k^+ & = m+1.
\end{align*}$$
以及就是Louis Saalschutz给出的显式公式,对于$m \ge 1$:
$$\begin{align}
    B_m & = \sum_{k=0}^m \frac{1}{k+1} \sum_{j=0}^k \binom{k}{j} (-1)^j j^m, \\
    B_m^+ & = \sum_{k=0}^m \frac{1}{k+1} \sum_{j=0}^k \binom{k}{j} (-1)^j (j+1)^m 
\end{align}$$

而现代Bernoulli number $B_n$是由下面的生成函数所定义
$$\frac{t}{e^t-1} = \sum_{n=0}^{\infty} B_n \frac{t!}{n!},$$
其中$B_1 = -1/2.$当然从$B_1^+$出发也是有生成函数的,但这里就不再介绍了.再引入Dirichlet特征$\chi$,还可以定义得到广义的Bernoulli number $B_{n,\chi}$,这在Washington的书上也有更详细的介绍,但由于与本篇主要内容不是很紧密,因此也只是先略过了.毕竟本篇还是论文阅读hhh.

##### Bernoulli number与zeta function不得不说的一二事

这是很神奇的一件事,Bernoulli number竟然能够很自然地出现在Dirichlet zeta function中,而一看到出现有zeta function,就知道Bernoulli number也会有着非常丰富的性质了.此处我们也只考虑平凡特征,其实也就是Riemann zeta function中的情况.

由Euler product,可以推出Riemann zeta function与Bernoulli number之间的联系:

> **定理1:**
>
> $\quad$ 对于正偶数$n$,有
>
> $$\zeta(n) = -\frac{1}{2} \frac{(2\pi i)^n}{n!} B_n,$$
>
> $\quad$ 对于所有的正整数$n$,有
>
> $$\begin{align} \zeta(1-n) = -\frac{B_n}{n} =: \color{red}{\hat{B}(n)}. \tag{1}\label{zeta & bernoulli} \end{align}$$

然后就是在考虑Bernoulli number的p-valuation中非常有用的Kummer Congruence定理.

> **定理2(Kummer Congruence):**
>
> $\quad$ 如果正偶数$m,n$满足$m \equiv n \not\equiv 0 \mod{p-1}$,则
>
> $$\begin{align} \frac{B_m}{m} \equiv \frac{B_n}{n} \mod{p}. \tag{2}\label{kummer} \end{align}$$
>
> $\quad$ 更一般地,如果正偶数$m,n$满足$m \equiv n \mod{\varphi(p^r)}$,则
>
> $$\begin{align} (1-p^{m-1})\frac{B_m}{m} \equiv (1-p^{n-1})\frac{B_n}{n} \mod{p^{r}}. \tag{3}\label{kummer plus} \end{align}$$

既然叫做Kummer Congruence(Kummer也太强大了,不愧是代数数论的奠基人之一),那么这个定理用一些代数数论的工具能够得出来了,但是在Washington的书中是利用p-adic zeta function中的一个定理,直接推论而得出的.但这里我还是打算从已有的这些知识框架,来构造出p-adic zeta function,这是也正是Kellner的这篇文章的章节安排.

**利用高超的观察力发现**,在Riemann zeta function中,Euler product是能够推出$\zeta(s)$在$\mathbb{Z}_{<0}$的取值与$B_n$相关,也就是(\ref{zeta & bernoulli}),进而有Kummer Congruence成立.但是如果直接将Riemann zeta function挪到$\color{green} \mathbb{Z}_p$上的时候会发现,虽然Euler product还存在,但是(\ref{zeta & bernoulli})不再成立了,这就很坏了.

因此Kubota-Leopoldt p-adic zeta function事实上是一种**插值**的想法,在每一个$\mathbb{Z}_{\le 0}$的值与$B_n$有关,再利用Kummer Congruence将$\zeta_p$可以延拓到整个$\mathbb{Z}$上,以及进一步地,可以到$\mathbb{Z}_p$上.因此根据(\ref{kummer plus})就得到了$\zeta_p(s)$的定义,但是会发现在同一个$p$下会有一些互不相同的p-adic zeta function,具体地就是

> **定义1:**
>
> $\quad$ 令$p$是一个素数,对于$n \ge 1$,定义
>
> $$\zeta_p(1-n) := (1-p^{n-1})\zeta(1-n) = -(1-p^{n-1})\hat{B}(n).$$
>
> $\quad$ 对于$p \ge 5$以及$s_1 \in \{2, 4, \cdots, p-3\}$,${t_v}_{v \ge 0}$是一列p-valuation收敛于$s$的非负整数,定义
>
> $$\zeta_{p,s_1}: \mathbb{Z}_p \to \mathbb{Z}_p, \quad \zeta_{p,s_1}(s) := \lim_{t_v \to s} \zeta_p(1-(s_1 + (p-1)t_v)),$$
>
> $\quad$ 而对于$p = 2$以及$s_1 = 0$,定义
>
> $$\zeta_{p,s_1}: \mathbb{Z}_p\setminus\{0\} \to \mathbb{Q}_p, \quad \zeta_{2,0}(s) := \lim_{t_v \to s} \zeta_2(1-(p-1)t_v).$$

其中每一个$s_1$会对应于同一个$p$下不同的p-adic zeta function,在Washington的书中是用Teichmuller特征$\omega$描述的,换言之$\zeta_{p,s_1}(s)$就是Washington书中的$L_p(s, \omega^{1-s_1})$,这样的好处是我们可以进而再考虑带上Dirichlet特征$\chi$后的p-adic zeta function.

**值得一说的是**,p-adic zeta function并没有Dirichlet zeta function中关于$Re(s) = 1/2$的对称性,其在$\mathbb{Z}_p$中的零点也被证明是有限的,并且后面会见到它和Bernoulli number又有着十分惊奇的联系.当然其也可以延拓到$C_p$中考虑,零点确实也有无限个,但是其性质仍然与Riemann zeta function的零点性质截然不同,后面就要考虑一类irregular p-adic zeta的唯一零点的含义.此外更多的内容这里也就不再瞎说八道了,如果之后要用到的话再去学习了.🙊

<center>
<img src="/image/p-valuation-of-Bernoulli-numbers/T2.jpg" width="30%">
</center>

##### regular and irregular prime的定义和性质

现在我们来分析一下$B_n$的p-valuation性质,而这也是Kellner论文的核心内容.对于$B_n$的分母$\text{denom}(B_n)$,现在已经是完全弄懂了,是根据下面的这个定理:

> **定理3:**
>
> $\quad$ 对于任意的**正偶数**$n$,有
>
> $$\begin{align} B_n + \sum_{p-1 \mid n} \frac{1}{p} \in \mathbb{Z}. \tag{4}\label{denom} \end{align}$$
>
> $\quad$ 也就是说
>
> $$\text{denom}(B_n) = \prod_{p-1 \mid n} p.$$

而对于$B_n$的分子$\text{numer}(B_n)$的考虑则是一个相当困难的问题,而这就涉及到了regular与irregular的区别.Kummer证明了,当$p$是一个regular prime时,Fermat大定理是成立的.其中regular与irregular的定义是:

> **定义2:**
>
> $\quad$ 设$p$是一个素数,称$p$是一个regular prime,如果对于$2 \le p \le p-3$,都有
>
> $$p \nmid \text{numer}(B_l).$$
>
> $\quad$ 若存在$2 \le l \le p-3$使得$p \mid \text{numer}(B_l)$,则称$p$是一个irregular prime,称$(p,l)$是一个irregular pair.

现在**开始进入论文正题**:知道$p$是一个<span style="color: rgb(230,51,51)">regular prime</span>时$B_n$的p-valuation.若$p-1 \mid n$时,则根据(\ref{denom})有$v_p(B_n) = -1$;而当$p-1 \nmid n$时,则由(\ref{kummer})和regular prime的定义知$v_p(B_n) = 0$.

而当$p$是一个<span style="color: rgb(230,51,51)">irregular prime</span>时,若$p-1 \mid n$,仍然有$v_p(B_n) = -1$;若$p-1 \nmid n$,且$(p,n)$不是irregular pair,则由(\ref{kummer})和irregular prime的定义知$v_p(B_n) = 0$;但是当$p-1 \nmid n$,且$(p,n)$恰好是irregular pair时,这个时候的讨论就复杂多了,根据前面的知识,我们知道的是$v_p(B_n) \ge 1$,那么$v_p(B_n)$具体是多少呢?其是否是有界的呢?而Kellner就给出了部分答案,而且这个答案是非常漂亮的.

#### 论文主体内容

##### 补充一些所需的定义

这里直入{% label 主题 blue %}:<span style="color: green">对一定条件下的irregular prime(对目前发现的所有irregular pair都满足),Bernoulli number的p-valuation是无上界的.且其对应的p-adic zeta funciton与一列有关联的irregular pairs又有着紧密的关系.</span>证明所需要的一些引理放在最后再抄,下面主要是记录一些文章里的突破和逻辑.

下面再给出一些定义来更好地描述我们的命题.

> **定义3:**
>
> $\quad$ 设$p$是一个奇素数,$n,l$是正整数,定义the set of irregular pair of order $n$为
>
> $${\color{red}\Psi_n^{\text{irr}}} := \{(p,l) : p^n \mid \hat{B}(l), p \text{ is an odd prime}, 2 \le l \le \varphi(p^n), 2 \mid l\}.$$
>
> $\quad$ 对于一个素数$p$,定义the index of irregular pairs of order $n$为
>
> $${\color{red}i_n(p)} := \#\{(p,l) : (p,l) \in \Psi_n^{\text{irr}}\}.$$
>
> $\quad$ 特别地,当$n=1$时,有下面的一个更直接的定义等价形式(也是很显然的):
>
> $$i(p) = i_1(p) = \#\{ (p,l) \text{ is an irregular pair} : l = 2, 4, \cdots, p-3 \}.$$

上面定义中$2 \le l \le \varphi(p^n)$是十分重要的,根据(\ref{kummer plus}),有一个显然的同态
$$\lambda_n: \Psi_{n+1}^{\text{irr}} \to \Psi_n^{\text{irr}}, (p,l) \mapsto (p,l \mod{\varphi(p^n)}),$$
这也称$(p,l) \text{ is {\color{red}related} to } (p,l \mod{\varphi(p^n)})$.

自然地,当$n > m$时,利用$\lambda_{n-1}, \lambda_{n-2}, \cdots, \lambda_m$,也可以得到$(p,l_n) \in \Psi_n^{\text{irr}} \text{ is related to } (p,l_m) \in \Psi_m^{\text{irr}}$的定义.

下面再给出一个对$\Psi_n^{\text{irr}}$中的irregular pair $(p,l)$一个等价(Kellner称两者为associated的)的定义,不仅记录下来方便,并且其p-integer部分的特征也更加明显,在p-adic view一节中用起来也很便捷.

> **定义4:**
>
> $\quad$ 令$(p,l) \in \Psi_n^{\text{irr}}, n \ge 1$,记
>
> $$(p,s_1,s_2,\cdots,s_n) \in {\color{red}\hat{\Psi}_n^{\text{irr}}}, \text{ where } l = \sum_{v=1}^n s_v \varphi(p^{v-1}),$$
>
> $\quad$ 由$l$的一些特征进而可知,$s_1 \in \{2, 4, \cdots, p-3\}$.以及从$\lambda_n$自然诱导得到
>
> $$\hat{\lambda}_n : \hat{\Psi}_{n+1}^{\text{irr}} \to \hat{\Psi}_n^{\text{irr}}, \quad (p,s_1,\cdots,s_n,s_{n+1}) \mapsto (p,s_1,\cdots,s_n).$$

于是可以发现的是,当$n$趋于无穷大时,在这种定义下可以很容易地发现$l$可以分出一个p-integer的部分,也就是
$$l = s_1 + (p-1) \sum_{v = 2}^{\infty} s_v p^{v-2} =: s_1 + (p-1) {\color{red}\chi_{(p,l)}},$$
其中$\chi_{(p,l)}$就是一个p-integer.

最后再定义一个与"条件"息息相关的一个概念:

> **定义5:**
>
> $\quad$ 若$(p,l) \in \Psi_n^{\text{irr}}, n \ge 1$,定义
>
> $${\color{red}\Delta_{(p,l)}} \equiv p^{-n}\left( \hat{B}(l + \varphi(p^n)) - \hat{B}(l) \right) \mod{p}.$$
>
> $\quad$ 如果$\Delta_{(p,l)} = 0$,则称$\Delta_{(p,l)}$是singular的.进一步地,定义
>
> $$\Delta_p = \prod_{v = 1}^{i(p)} \Delta_{(p,l_v)}, (p,l_v) \in \Psi_1^{\text{irr}}.$$
>
> $\quad$ 则所有的$\Delta_{(p,l)}$是nonsingular的当且仅当$\Delta_p \neq 0$,因此再定义
>
> $$\Delta(p) := \left\{ \begin{align*} & 1, & \Delta_p \neq 0, \\ & 0, & \Delta_p = 0. \end{align*} \right.$$

##### irregular pair对应的p-valuation情况

有了前面一整节的定义,现在便可以将{% label 主题 blue %}可以明确的表示为:<span style="color: green">对于每一个$(p,l_1) \in \Psi_1^{\text{irr}}$,只要$\Delta_{(p,l_1)} \neq 0$,那么对于任意$n \ge 1$,都有唯一的一个related irregular pair $(p,l_n) \in \Psi_n^{\text{irr}}$.并且$\zeta_{p,l}(s)$唯一的零点就是$s = \chi_{(p,l)}$.</span>下面再拆碎了,以论文中的定理形式写出来.

事实上,根据引理3和引理4的组合拳,可以得到

> **定理4:**
>
> $\quad$ 令$(p,l_1) \in \Psi_1^{\text{irr}}$.若$\Delta_{(p,l_1)} \neq 0$,则存在唯一的一组序列$(l_n)_{n \ge 1}$以及相应的$(s_n)_{n \ge 1}$满足
>
> $$(p,l_n) \in \Psi_n^{\text{irr}}, \quad (p,s_1,\cdots,s_n) \in \hat{\Psi}_n^{\text{irr}},$$
>
> $\quad$ 且有
>
> $$\begin{align*} l_n \le l_{n+1} \le \varphi(p^{n+1}), \quad \lim_\limits{n \to \infty} l_n = \infty. \end{align*}$$
>
> $\quad$ 进一步地,还可以得到
>
> $$\Delta_{(p,l_1)} = \cdots = \Delta_{(p,l_n)} = \cdots.$$
>
> $\quad$ 且如果$\Delta_p = 1$,则还有
>
> $$\begin{align} i(p) = i_2(p) = \cdots = i_n(p) = \cdots. \tag{5} \label{delta_p=1} \end{align}$$

上面对$\Delta_{(p,l)} \neq 0$的情况介绍完了,然后下面就是对$\Delta_{(p,l)} = 0$的情况的介绍了.

> **定理5:**
>
> $\quad$ 令$(p,l_n) \in \Psi_n^{\text{irr}}, n \ge 1$,且$\Delta_{(p, l_n)} = 0$,则有下面的两种情况:
>
> $\qquad$ $(1)$ 若$(p,l_n) \not\in \Psi_{n+1}^{\text{irr}}$,则不存在$n+1$阶与更高阶的related irregular pair.
>
> $\qquad$ $(2)$ 若$(p,l_n) \in \Psi_{n+1}^{\text{irr}}$,则存在$p$个$n+1$阶的related irregular pairs $(p,l_{n+1, j}) \in \Psi_{n+1}^{\text{irr}}$,其中$l_{n+1, j} = l_n + j\varphi(p^n), j = 0, 1, \cdots, p$,且满足$\Delta_{p,l_{n+1,j}} = 0$.

事实上,(\ref{delta_p=1})处$\Delta_p = 1$的条件对**目前发现的**所有irregular pair都成立,但是否对于所有的irregular pair都成立仍然是open的,但是Kellner猜想这是对的,于是有

> **猜想($\Delta$-Conjecture):**
>
> $\quad$ 对于所有的irregular prime $p$,满足下面这些彼此等价的性质:
>
> $\qquad$ $(1)$ $\Delta_{(p,l)}$对于所有的irregular pair $(p,l) \in \Psi_1^{\text{irr}}$都是nonsingular的,
>
> $\qquad$ $(2)$ $\Delta_p = 1,$
>
> $\qquad$ $(3)$ $i(p) = i_2(p) = \cdots = i_n(p) = \cdots.$

##### irregular pair对应p-adic zeta function的零点

现在从p-adic的观点观察,事实上就是该考虑p-adic zeta function的零点的含义了.首先下面的定理给出了**零点的存在性**.

> **定理6:**
>
> $\quad$ 令$(p,l) \in \Psi_1^{\text{irr}}$,且$\Delta_{(p,l)} \neq 0$,翻译引理2定义得到一组序列$(l_n)_{n \ge 1}$为$l_1 = l$,以及
>
> $$l_{n+1} = l_n + \varphi(p) \psi_n\left( \frac{\zeta(1-l_n)}{p\Delta_{(p,l)}} \right) = l_n + \varphi(p^n) \psi_1\left( \frac{\zeta(1-l_n)}{p^n\Delta_{(p,l)}} \right).$$
>
> $\quad$ 其中$\psi_n : \mathbb{Z}_p \to Z$使得$x-\psi_n(x) \in p^n \mathbb{Z}_p$,即$\psi(x)$就是$x$的"小数"部分.于是有
>
> $$\begin{align*} \zeta(1-l_n) \in p^n \mathbb{Z}_p, \quad \lim_\limits{n \to \infty} |\zeta(1-l_n)|_p = 0. \end{align*}$$

于是便可以利用下面定理得到一类p-adic zeta function**零点的含义**,也就是论文的另一个重点了.当然这也并没有涵盖所有的p-adic zeta funciton.

> **定理7:**
>
> $\quad$ 令$(p,l) \in \Psi_1^{\text{irr}}$,且$\Delta_{(p,l)} \neq 0$,则p-adic zeta function $\zeta_{p,l}(s)$有一个唯一的零点$s = \chi_{(p,l)}.$

Kellner在论文的第四节中,在假设$\Delta$-Conjecture成立的情况下,利用p-adic zeta function还推出了很多结论,这里只记载一个更强的Kummer congruence.

> **定理8(Kummer Congruence Plus):**
>
> $\quad$ 假设$\Delta$-Conjecture成立,令$(p,l) \in \Psi_1^{\text{irr}}$,且$\Delta_{(p,l)} \neq 0$,再令$s,t \in \mathbb{Z}_p$,则有
>
> $$|\zeta_{p,l}(s) - \zeta_{p,l}(t)|_p = |p(s-t)|_p.$$
>
> $\quad$ 进一步地,当$s \neq t$时,可以得到
>
> $$\frac{\zeta_{p,l}(s) - \zeta_{p,l}(t)}{p(s-t)} \equiv - \Delta_{(p,l)} \mod{p\mathbb{Z}_p},$$
>
> $\quad$ 以及
>
> $$\zeta_{p,l}'(s) \equiv -p \Delta_{(p,l)} \mod{p^2\mathbb{Z}_p}.$$

统筹本节的内容,可以得到下面的一个推论:

> **推论8.1:**
>
> $\quad$ 假设$\Delta$-Conjecture成立,令$(p,l) \in \Psi_1^{\text{irr}}$,且$\Delta_{(p,l)} \neq 0$.于是$\zeta_{p,l}(s)$在$s = \chi_{(p,l)}$处有一个唯一的简单零点.进一步地,对于$s \in \mathbb{Z}_p$,有
>
> $$\zeta_{p,l}(s) = p(s - \chi_{(p,l)}) \zeta_{p,l}^*(s),$$
>
> $\quad$ 其中$\zeta_{p,l}^*(s)$是在$\mathbb{Z}_p$上的连续函数,且满足$\zeta_{p,l}^*(s) \equiv -\Delta_{(p,l)} \mod{p\mathbb{Z}_p}$,因此还有
>
> $$|\zeta_{p,l}(s)|_p = |p(s - \chi_{(p,l)})|_p.$$

##### 开始抄引理!

首先是一个最核心的一个引理$^{[5]}$,基本可以推出整篇文章的所有结论.

> **引理1(Carlitz):**
>
> $\quad$ 令$k,m,n,p,r,\omega \in \mathbb{N}$,其中$m$是偶数,$p$是素数且$p-1 \nmid m$,$\omega = k\varphi(p^n)$.于是有
>
> $$\begin{align} \sum_{v=0}^{r} \binom{r}{v} (-1)^v (1 - p^{m+v\omega-1}) \hat{B}(m+v\omega) \equiv 0 \mod{p^{nr}}. \tag{6}\label{6} \end{align}$$

然后便有下面的推论可以去掉(\ref{6})中的Euler factor:

> **推论1.1:**
>
> $\quad$ 令$(p,l) \in \Psi_n^{\text{irr}}, n \ge 1$,以及$k,m,r,\omega \in \mathbb{N}, r > 1$,且$\omega = k\varphi(p^n)$,对于$j \ge 0$令$m = l + j\varphi(p^n)$,于是有
>
> $$\begin{align} \sum_{v=0}^{r} \binom{r}{v} (-1)^v p^{-n} \hat{B}(m+v\omega) \equiv 0 \mod{(p^{m-1}, p^{n(r-1)})}. \tag{7}\label{7} \end{align}$$

需要注意的是,(\ref{7})中的$\text{mod}{(p^{m-1}, p^{n(r-1)})}$并不是模最大公因子,而是同时满足这两个模式.

> **引理2:**
>
> $\quad$ 令$p$是一个奇素数,$n$是一个正整数.记$(\alpha_v)_{v \ge 0}$是一列p-integers,但是对于每一个$v \in \mathbb{N}_0$而言$\alpha_v \in \mathbb{Q}$,如果
>
> $$\alpha_v - 2\alpha_{v+1} + \alpha_{v+2} \equiv 0 \mod{p^n},$$
>
> $\quad$ 则称该序列是模$p^n$下equidistant的(也就是$\alpha_v - \alpha_{v+1}$在模$p^n$下均相等).若$\alpha_0 \not\equiv \alpha_1 \mod{p}$时,则在$0 \le s < \varphi(p^n)$中恰有一个元素使得$\alpha_s \equiv 0 \mod{p^n}$,其中
>
> $$s \equiv -\alpha_0(\alpha_1 - \alpha_0)^{-1} \mod{p^n}.$$

这个引理其实很简单,但是根据引理2却可以得到下面的这两个十分强大的引理.

> **引理3:**
>
> $\quad$ 令$(p,l) \in \Psi_n^{\text{irr}}, n \ge 1$,以及一组序列$(\alpha_j)_{j \ge 0}$使得
>
> $$\alpha_j \equiv p^{-n} \hat{B}(l + j\varphi(p^n)) \mod{p}.$$
>
> $\quad$ 于是知$\Delta_{(p,l)} \equiv \alpha_1 - \alpha_0 \mod{p}$,则有下面的三种情况:
>
> $\qquad$ $(1)$ 若$\Delta_{(p,l)} = 0$且$\alpha_0 \not\equiv 0 \mod{p}$,则不存在$n+1$阶与更高阶的related irregular pairs.
>
> $\qquad$ $(2)$ 若$\Delta_{(p,l)} = 0$且$\alpha_0 \equiv 0 \mod{p}$,则所有的$(p,l+v\varphi(p^n))\in \Psi_{n+1}^{\text{irr}}$都是$n+1$阶的related irregular pairs.
>
> $\qquad$ $(3)$ 若$\Delta_{(p,l)} \neq 0$,则存在唯一的一个$n+1$阶的related irregular pair.更准确地,$s \equiv -\alpha_0\Delta_{(p,l)}^{-1} \mod{p}$,有$(p, l+s\varphi(p^n)) \in \Psi_{n+1}^{\text{irr}}$.

这个引理其实就可以<span style="color: green">将$\Psi_n^{\text{irr}}$中的每一个irregular pair (当然,得有$\Delta_{(p,l)} \neq 0$)唯一地提升到$\Psi_{n+1}^{\text{irr}}$中.</span>这也几乎就是整篇文章的核心了,但是还差一点,也就是提升后$\Delta_{(p,l')} \neq 0$是否仍然保持?非常nice的是,下面这个引理就是在说这件事.

> **引理4:**
>
> $\quad$ 令$(p,l_n) \in \Psi_n^{\text{irr}}, n \ge 1$,且$\Delta_{(p,l_n)} \neq 0$.则存在唯一的一个related irregular pair $(p,l_{n+1}) \in \Psi_{n+1}^{\text{irr}}$,满足$\Delta_{(p,l_{n+1})} = \Delta_{(p,l_n)}$.

而Kellner论文中第二节中剩下的一些引理就是更细致地确定$\Psi_{n+k}^{\text{irr}}$中的irregular pair,我虽然也是看完了,但为了篇幅,就不再继续记录了,目前所记录的引理和前面章节中介绍的定理已经帮助我对这个问题有了一个比较深的认识了.

#### 总结

飞速解决蘸豆!读起来爽了!彻底的升华!!!~~可能是因为这篇论文的证明部分还是比较简单🥵~~

当然,我这里的摘抄中是没有涉及到一点证明的,以及还有很多文中的定理我直接省略了.但是和原论文相比,本文还是把其结构全部打散重排了一下,也代表一个我的学习历程吧.

经过暑假的"培训",现在我~~Maybe,可能,大概,貌似~~更会读论文了,现在也该重新捡起Tim Browning的论文开始库库看了.到时候也照样做一个简单的摘记,可能就和本文的流程差不多吧.

除了论文之外,其实还有不少书想学😭.但是现在有点理解"哪里不会点哪里"的一个方法了,希望能在尽量少的时间里多学一点.总之学学学!!!全面开战!!!

<center>
<img src="/image/p-valuation-of-Bernoulli-numbers/T3.jpg" width="30%">
</center>

#### 参考资料

[1] Kellner B. On irregular prime power divisors of the Bernoulli numbers[J]. Mathematics of computation, 2007, 76(257): 405-441.

[2] Washington L C. Introduction to cyclotomic fields[M]. Springer Science & Business Media, 2012.

[3] ~. The Bernoulli number page[Z]. https://bernoulli.org/.

[4] Wikipedia. Bernoulli number[Z]. https://en.wikipedia.org/wiki/Bernoulli_number.

[5] Carlitz L. Some theorems on Kummer’s congruences[J]. 1953.