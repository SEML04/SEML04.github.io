---
title: 筛法读书笔记(哥德巴赫猜想 by 潘承洞) -- 特征与Gauss和
mathjax: true
date: 2024-11-03 00:41:46
categories:
    - 筛法
tags:
    - Sieve Methods
    - Goldbach's Conjecture
    - Character
    - Gauss Sum
---

#### 引言

这一篇博客将记录一些我读『哥德巴赫猜想』第一章内容的一些知识点.大概可能应该只是抄一些定理命题(~~数学类博客的通病~~),以及一些自己的片面见解,(~~但是有可能会出错~~).但是如果在后面的学习中发现有错误或者是新的领悟,我还是会在这边做补充修改的.不会直接修改,而是保留我原来的想法.

本文的主要参考资料为: ***哥德巴赫猜想,第二版 by 潘承洞 & 潘承彪***

第一章可以说也是性质的罗列,但是我基本上也都是跟着证明了一遍.其中模$q$特征的构造我还是主要参考二潘的『初等数论』,这里边对特征的构造更详细一些,但我应该也是会拆掉脚手架,直接摆一个让人莫名其妙的构造式了.(混沌邪恶!😈)

虽然说本文将只是知识点的罗列,但感觉最后的篇幅应该也不会短,只希望一篇能够解决就行.后续我觉得也不应该是学完一章才更一次博客,而是每周定时更新一次更好.

#### 特征的定义

此处直接给出模$q$特征的表达式,详细的推导过程见参考资料[2].但是定义还是得写一遍:

> **定义1:** 设$q\ge 1$,而$\chi(n)$是定义在$\mathbb{Z}$上的不恒为$0$的算术函数.则称$\chi(n)$为模$q$的**Dirichlet特征**,记作$\chi_q$或者$\chi(n;q)$或者$\chi\ \textrm{mod}\ q$,如果满足以下条件:
>
> $\quad$ (1) $\chi(n)=0$,若$(n,q)>1$;
>
> $\quad$ (2) $\chi(n+q)=0,\ \forall n\in \mathbb{Z}$;
>
> $\quad$ (3) $\chi(mn)=\chi(m)\chi(n),\ \forall m,n\in \mathbb{Z}$.

以上的确是给出了特征的定义,但是还没有具体的取值.但是在考虑那之前,我们先考虑以下模$q$的乘法群的结构.记$q=2^l p_1^{l_1} \cdots p_s^{l_s}$,则可以知道乘法群$(\mathbb{Z}/q\mathbb{Z})^*$的结构(此处先考虑$\ l\ge 2$):

> $$(\mathbb{Z}/q\mathbb{Z})^* \cong \mathbb{Z}/2\mathbb{Z} \oplus \mathbb{Z}/2^{l-2}\mathbb{Z} \oplus \mathbb{Z}/\varphi(p_1^{l_1})\mathbb{Z} \oplus \cdots \oplus \mathbb{Z}/\varphi(p_s^{l^s})\mathbb{Z}$$
>
> $$n \mapsto (\gamma_{-1}(n),\gamma_{0}(n),\gamma_{1}(n),\cdots,\gamma_{s}(n))$$
>
> $\quad$ 其中$\varphi$便是Euler函数,$\gamma$表示的是映射后的元素在该循环群里的**阶(order)**.而这个在后面$\chi$的表达式中很重要.

注意到$(\mathbb{Z}/2^l\mathbb{Z})^* \cong \mathbb{Z}/2\mathbb{Z} \oplus \mathbb{Z}/2^{l-2}\mathbb{Z}$.因此模$2^l$的乘法群可能需要两个生成元(实际上可由$\overline{1}$和$\overline{5}$生成).

并且Dirichlet character与群表示论中的representation也有联系(而不是群表示论中的character😉).

> $\quad$ 可知群表示论里的representation是如下的同态:
>
> $$\rho: (\mathbb{Z}/q\mathbb{Z})^* \to \mathbb{C}^*$$
>
> $\quad$ 因此我们将$\rho$周期延拓到$\mathbb{Z}$上,并且在未定义的地方令其值等于$0$.则我们其实便得到了一个模$q$的Dirichlet特征.而反过来每一个Dirichlet特征都可以对应一个$(\mathbb{Z}/q\mathbb{Z})^*$上的representation.

最后,在以上的铺垫后,其实便也可以得到了$\chi$具体的表达式.先记: $c_{-1}= \left\{\begin{array}{ll} 1, & l=1,\\ 2, & l\ge 2,\end{array}\right.$ $\ c_0= \left\{\begin{array}{ll}  1, & l=1,\\  2^{l-2}, & l\ge 2,\end{array}\right.$ $c_j=\varphi(p_j^{l_j})$.以及$\gamma$为循环群中的阶.则:

> **定义2:** 若$q=2^l p_1^{l_1} \cdots p_s^{l_s}$,则***模$q$特征的表达式***为:
>
> $$\chi(n;q)= \left\{\begin{array}{ll}  \textrm{e}\left(\dfrac{m_{-1}\gamma_{-1}}{c_{-1}}\right) \textrm{e}\left(\dfrac{m_0\gamma_0}{c_0}\right) \cdots \textrm{e}\left(\dfrac{m_s\gamma_s}{c_s}\right) & (n,q)=1\ \\  0 & (n,q)>1\ \end{array}\right.$$
>
> $\quad$ 其中$\textrm{e}(z)=\textrm{e}^{2\pi i\cdot z}$,而$m_j\ (j=-1,0,\cdots,s)$是可以任意取值的整数.

实际上$m_j$的有效取值也就是$1,2,\cdots,c_j$.因此我们可以知道,所有$\chi\ \textrm{mod}\ q$的个数为$\varphi(q)$.

#### 主特征与原特征

在特征中,我们更关注的是以下两类特征,即主特征(principle character)与原特征(primitive character),其分别对应的则是平凡表示以及~~不可约表示~~最小的限制表示(毕竟不可约还是针对于$GL_n(V)$中$V$的维数,放在此处还是不太严谨).接下来给出两者的明确定义:

> **定义3(主特征):** 称$\chi_q$是主特征,记作$\chi_q^0$,即:
>
> $$\chi_q^0(n)= \left\{\begin{align*} & 1, & (n,q)=1,\\ & 0, & (n,q)>1.\end{align*}\right.$$

主特征这个东西看上去很简单,感觉并不会有什么有意思的东西(一开始我也是这么认为的),但是在原特征和Gauss sum中,它的作用也是不平凡的.以及它还是**连接模$q$既约剩余类和模$q$全体特征的桥梁**.

> **定义4(原特征):**
> 
> $\quad$ 称$\chi_q$是原特征,如果满足:$\forall d<q,\ d|q,\ \exists n_0\equiv 1\ \textrm{mod}\ q,\ (n_0,q)=1$,使得$\chi_q(n_0)\neq 1$.

例如:

$\quad$ 若$\chi_8(1)=1,\ \chi_8(3)=1,\ \chi_8(5)=-1,\ \chi_8(7)=-1$.则$\chi_8$便是一个模8的原特征.

但是从非原特征的角度,我们就更能够理解为什么说原特征对应的是~~不可约表示~~最小的限制表示了.

> **命题0:**
>
> $\quad$ 若$\chi_q$不是原特征,则$\exists q'<q,\ \forall n_1\equiv n_2\ \textrm{mod}\ q',$使得$\chi_q(n_1)=\chi_q(n_2)$.
>
> $\quad$ 而且其必然对应一个唯一的原特征$\chi_{q^*}^*$.记作:$\chi_q\Leftrightarrow\chi_{q^*}^*$.

例如:

$\quad$ 若$\chi_8(1)=1,\ \chi_8(3)=-1,\ \chi_8(5)=1,\ \chi_8(7)=-1$.则$\chi_8$不是一个模8的原特征.

$\quad$ 而其对应的原特征为$\chi_4^*(1)=1,\ \chi_4^*(3)=-1$.

在非原特征$\chi_q$和与之对应的原特征$\chi_{q^*}^*$之间,有着一下很重要的关系,将在Gauss sum中有着重要的作用:

让$q_1$为与$q^*$有相同的素因子,并且是$q$的最大整除数.即满足以下条件:

$$p|q_1 \Rightarrow p|q^*,\ q_1|q,\ (q/q_1, q^*)=1$$

(本来不想用这个的,因为初看确实一头雾水,但是想要严谨说明就是这样子了😫)

再记$q_2=q/q_1$,于是很容易验证可知:

> **命题1:**
>
> $$\chi_q(n)=\chi_{q_1}(n)\chi_{q_2}^0(n)=\chi_{q^*}^*(n)\chi_{q_2}^0(n)$$

最后以一个命题结束这一部分的记录:

> **命题2:** 若$\chi_q$是一个实的原特征,则$q=2^lp_1\cdots p_s$.

#### 关于特征的两个重要定理

以下的两个结论体现了***模$q$既约剩余类和模$q$全体特征之间的对偶关系***.同时也体现出了特征在解析数论中的重要意义,以及它称之为『特征函数』的原因.而证明过程其实就是分组求和,比较繁琐,但是结论却很优美.

> **定理1:** 设$q\ge 1$,$\chi$是一个模$q$的特征.则:
>
> $${\sum_{n\ \textrm{mod}\ q}}'\chi(n) = \left\{\begin{align*} & \varphi(q), & \chi=\chi^0\ \textrm{mod}\ q, \\ & 0, & \chi\neq\chi^0\ \textrm{mod}\ q. \end{align*}\right.$$
>
> $\quad$ 其中,${\sum\limits_{n\ \textrm{mod}\ q}}'$表示的含义是$\sum\limits_{\substack{n=1 \\ (n,q)=1}}^q$.

以下定理更是在Dirichlet定理的证明中发挥重要作用:

> **定理2:** 设$q\ge 1$,则:
>
> $$\sum_{\chi\ \textrm{mod}\ q}\chi(n) = \left\{\begin{align*} & \varphi(q), & n\equiv 1\ \textrm{mod}\ q, \\ & 0, & n\not\equiv 1\ \textrm{mod}\ q. \end{align*}\right.$$
>
> $\quad$ 以及可以有以下更一般的推论:
>
> $$\sum_{\chi\ \textrm{mod}\ q}\overline{\chi}(a)\chi(n) = \left\{\begin{align*} & \varphi(q), & n\equiv a\ \textrm{mod}\ q, \\ & 0, & n\not\equiv a\ \textrm{mod}\ q. \end{align*}\right.$$

#### Gauss sum以及两种特殊情况

首先,定义Gauss sum如下:

> **定义5(Gauss sum):** 设$\chi(n)$是模$q$的特征,$m$为一个整数,称
>
> $$G_{\chi}(m)=\sum_{h=1}^q \chi(h)\textrm{e}\left(\dfrac{mh}{q}\right)$$
>
> $\quad$ 为**关于特征$\chi$的Gauss sum**.

而关于Gauss sum有如下的重要定理,基本上可以说是以下所有定理和命题的起点,它为特征的分解提供了理论依据.而关于Gauss sum的证明思路基本上都是分组后再算.首先先是***关于Gauss sum的一些简单易证的性质***:

> **定理3:** 
>
> $\quad$ (1) $G_{\chi}(m_1)=G_{\chi}(m_2)$,若$m_1\equiv m_2\ \textrm{mod}\ q$.
>
> $\quad$ (2) $G_{\chi}(-m)=\chi(-1)G_{\chi}(m)$.
>
> $\quad$ (3) $G_{\overline{\chi}}(m)=\chi(-1)\overline{G_{\chi}(m)}$.
>
> $\quad$ (4) $G_{\chi}(m)=\overline{\chi}(m)G_{\chi}(1)$,若$(m,q)=1$.(但是对于$m$和$q$不互素的情况则复杂很多,定理7和定理8都在讨论这种情况).

以及下面的定理给***Gauss sum的分解***提供了理论基础.然后再结合命题1有奇效,尤其是定理6的证明.

> **定理4:** 如果$q=q_1q_2$且$(q_1,q_2)=1$,则
>
> $$G_{\chi}(m)=\chi_1(q_2)\chi_2(q_1)G_{\chi_1}(m)G_{\chi_2}(m)$$

##### 特殊形式1 -- $\ C_q(m)$

当考虑主特征的Gauss sum,即$G_{\chi_q^0}$的时候,我们便得到了**Gauss sum的第一种特殊形式,简记为$C_q(m)$**.即:

$$C_q(m)=\sum_{\substack{h=1 \\ (h,q)=1}}^q \textrm{e}\left(\dfrac{mh}{q}\right)$$

$C_q(m)$是关于$q$的积性函数,即$C_{q_1 q_2}(m)=C_{q_1}(m)C_{q_2}(m)$,以及对于$C_q(m)$有如下结论:

> **定理5:** 若$p$是素数,$l\ge 1$,则:
>
> $$C_{q^l}(m)=\left\{\begin{align*} & p^l-p^{l-1}, & p^l|m, \\
& -p^{l-1}, & p^{l-1}||m, \\
& 0, & p^{l-1}\not\mid m, \\
\end{align*}\right.$$
>
> $\quad$ 容易验证其就等于:
>
> $$C_{p^l}(m)=\mu\left(\dfrac{p^l}{(m,p^l)}\right)\varphi(p^l)\varphi^{-1}\left(\dfrac{p^l}{(m,p^l)}\right)$$
>
> $\quad$ 其中$\mu$是Mobius函数.在由于$C_q,\ \varphi,\ \mu$积性的性质,便可得到一般情况下的结论:
>
> $$C_{q}(m)=\mu\left(\dfrac{q}{(m,q)}\right)\varphi(q)\varphi^{-1}\left(\dfrac{q}{(m,q)}\right)$$

当考虑$(m,q)=1$时,上述的结论更简单易记,因此便得到下面的推论:

> **推论1:** 当$(m,q)=1$时,有$C_q(m)=\mu(q)$.
>
> $\quad$ 事实上,直接根据定理3的(4)还可以得到,$C_q(m)=C_q(1)=\tau(\chi^0)$.

上面的结论也得到了在$(m,q)=1$的情况下,这***两种特殊形式之间的联系***.

##### 特殊形式2 -- $\ \tau(\chi)$

其次,当我们让$m=1$时,这便得到了**Gauss sum的第二种特殊形式,简记为$\tau(\chi)$**,即:

$$\tau(\chi)=\sum_{h=1}^q \chi(h)\textrm{e}\left(\dfrac{h}{q}\right)$$

接下来的三个定理将说明原特征的重要意义,以及$\tau(\chi^*)$的中心地位.

首先便是$\tau(\chi)$都可以转换为对$\tau(\chi^*)$的讨论.

> **定理6:** 若$\chi_q \Leftrightarrow \chi_{q^*}^*$,则
>
> $$\tau(\chi)=\chi^* \left(\dfrac{q}{q^*}\right) \mu \left(\dfrac{q}{q^*}\right) \tau(\chi^*)$$

正如前面对定理4的说明一样,可以知道的是$\tau(\chi)=\chi_{q^*}^*(q_2)\mu(q_2)\tau(\chi_{q_1})$,接着再证明原特征的一个性质即可.

$$\tau(\chi_{q_1})=\left\{\begin{align*} & \tau(\chi_{q^*}^*), & q_1=q^*, \\
& 0, & q_1\neq q^*. \end{align*}\right.$$

而接下来的两个定理,都是***围绕定理3的(4)展开***的,也就是问:如果$(m,q)>1$,那么还有$G_{\chi}(m)=\overline{\chi}(m)\tau(\chi)$成立吗?这样我们就只需要考虑$\tau(\chi)$的性质了.

但是上面的这个结论其实只对原特征成立(原特征的重要地位再次体现!),但是由于定理6的存在,对于非原特征也还是可以转化为前者的情况(原特征!!!yyds!!!).因此我们实际上只需要考虑的是$\tau(\chi*)$的性质.

> **定理7:** 设$\chi$是**原特征**,则当$(m,q)>1$时,总有$G_{\chi}(m)=0$成立.
>
> $\quad$ 即当$\chi$为原特征时,有:
>
> $$G_{\chi}(m)=\overline{\chi}(m)\tau(\chi)$$

但是当$\chi$为非原特征的时候,这时候的结论就特别恐怖了,但其实循规蹈矩,慢慢磨就行,因为思路还是很清楚的.

> **定理8:** 设$\chi_q$为非原特征,而$\chi_q\Leftrightarrow\chi_{q^*}^*$,在$(m,q)>1$时,有
>
> $\quad$ 若$q^\ast=\dfrac{q_1}{(m,q_1)}$,则
>
> $$G_{\chi}(m) = \overline{\chi}^\ast\left(\dfrac{m}{(m,q)}\right) \chi^\ast\left(\dfrac{m}{q^\ast(m,q)}\right) \mu\left(\dfrac{m}{q^\ast(m,q)}\right) \varphi(q) \varphi^{-1}\left(\dfrac{m}{(m,q)}\right) \tau(\chi^\ast)$$
>
> $\quad$ 若$q^\ast\neq\dfrac{q_1}{(m,q_1)}$,则
>
> $$G_{\chi}(m)=0$$

如果想把$q^\ast=\dfrac{q_1}{(m,q_1)}$时的情况写地简单一点,即一个稍微短一点的中间式,那也是可以的(虽然也看不出有简单到哪里去🤣).即有:

$$G_\chi(m) = \chi^\ast(q_2)C_{q_2}(m) \cdot \dfrac{q_1}{q*}\overline{\chi}^\ast\left(\dfrac{m}{(m,q_1)}\right)\tau(\chi^\ast)$$

显然根据上面三个定理,我们也已经能够发现在$\chi$为原特征时,研究$\tau(\chi)$的重要意义.而我们也还是有以下的一个定理,稍微展示了$\tau(\chi)$的结构.

> **定理9:** 若$\chi_q$是原特征,则可知:
>
> $$|\tau(\chi)|=\sqrt{q}$$

于是再结合定理6便可以得到以下推论:

> **推论2:** 对任意一个模$q$的特征$\chi$(不一定是原特征),则:
>
> $$|\tau(\chi)|\le\sqrt{q}$$

#### 总结

关于『特征与Gauss和』的内容就记录至此了,其实内容还是蛮多的,虽然基本上没有记录任何证明过程,但是毕竟也还是加入了很多我个人的理解(还不一定都是对的).总之这一块任务已经解决完毕了,接下来也要开始下一项的任务了--圣经第一章!

以及还有一些内容可能也得总结记录一下.比如:

1. 代数数论中的regulator以及类数的内容,尤其是类数,还是代数数论中的重要研究对象.

2. 交换代数的内容,这个在代数几何课上也频繁地用到这边的结论,但我只是简单地掠过,没有做过多少习题,还是很吃力的.

这些在后边都得开始弄起来才行了.😫😫😫

#### 参考资料

[1] 潘承洞, 潘承彪. 哥德巴赫猜想, 第二版[M]. 科学出版社, 2011. P15-P23.

[2] 潘承洞, 潘承彪. 初等数论, 第三版[M]. 北京大学出版社, 2013. P450-P468.

[3] Dirichlet character. Wikipedia[Z]. https://en.wikipedia.org/wiki/Dirichlet_character. 25 Oct 2024.