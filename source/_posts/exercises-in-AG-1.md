---
title: 从零开始的代数几何训练 -- Prevarieties (Görtz & Wedborn)
mathjax: true
date: 2026-10-19 16:46:28
categories:
    - 代数几何
tags:
    - Algebraic Geometry
    - Exercise
    - Görtz & Wedborn
---

#### 写在开始之前

距离上一篇博客更新, 已经是一年多了.

但这一年里, 发生的事也是相当多, 首当其冲的就是AI对数学研究方式的冲击了. 这里我也不再多加赘述, 毕竟未来发展如何也说不好🤔. 但对我这种基础不牢但是奇思妙想很多的人来说, 或许还是个机遇.

我用AI来学习和科研也并不少, 但是总是会有一种--"我真学会了吗"--的软绵绵的不踏实感. 当AI告诉我某一步是这么来的, 某一个结论是对的, 这时就像是看到Fermat定理被认为是正确的, 和我没什么关联, 没有一种实感. 但如果说Goldbach's Conjecture或者Prime Twins Conjecture, 那我则会更有兴致, 毕竟这个是我真的深入了解并学习过的, 我知道一些重要的中间结论和构造, 也有很多之前未能解答的疑问.

为了能够去认识和理解更多的知识和内容, 有一个比较扎实的代数几何基础还是必不可少的. 因此现在我将进入古法数学阶段了🤗, 将慢慢手搓代数几何的习题了. 

主要用于练习的教材是: <span style="color: red">Görtz和Wedhorn的两本小红书</span>上的习题. 此外Hortshorne也可能会练一练(毕竟小红书上主要对应的是其2,3章内容, 但第4,5章内容也很值得一练的). 借博客的形式逼自己多学一点点~

<center>
<img src="/image/exercises-in-AG-1/T1.png" width="50%">

既然被通缉了, 拍个照先吧!
</center>

#### Exercises

Remark: 下面内容来源于Görtz和Wedborn的 *Algebraic Geometry I: Schemes* 的Chapter 1 -- Prevarieties. 尽可能的将所有习题都过一遍, 但肯定有写错的和不会的, 仅供我个人学习和记录🙇.

##### Exercise 1.1. (Hilbert's basis theorem)

> Let $A$ be a noetherian ring. Show that the polynomial ring $A[T]$ is again noetherian.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 对任意$A[T]$中的理想$\mathfrak{b}$, 需证明其是有限生成的.
$\quad$ 令$\mathfrak{a}_i = \{ \text{lc}(f) : f \in \mathfrak{b}, \deg f = i \} \cup \{0\}$. 容易知道的是, $\mathfrak{a}_i$是$A$中的理想, 以及有 
$$\mathfrak{a}_0 \subset \mathfrak{a}_1 \subset \cdots \subset \mathfrak{a}_n \subset \cdots.$$
$\quad$ 由于$A$是Noether的, 于是存在$n$, 使得$\mathfrak{a}_n = \mathfrak{a}_{n+1}$, 且$\mathfrak{a}_i (0 \le i \le n)$都是有限生成的.

$\quad$ 可以知道的是, 对任意$f = \sum_{i=0}^{N} a_i T^i \in \mathfrak{b}$, 记$\text{trun}_{\ge n}(f) := \sum_{i=n}^{N} a_i T^i$. 则显然$\text{trun}_{\ge n}(f) \in A[T] \mathfrak{a}_n$.
$\quad$ 进而便有: $f \in A[T] \mathfrak{a}_n + A[T] \mathfrak{a}_{n-1} + \cdots + A[T] \mathfrak{a}_0$. 即$\mathfrak{b} \subset \langle \mathfrak{a}_0, \cdots, \mathfrak{a}_n \rangle_{A[T]}$. <span style="float: right"> $\blacksquare$ </span>

</div>


##### Exercise 1.2

> Show that $I(\mathbb{A}^n(k)) = 0$ without using Hilbert's Nullstellensatz.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 也就是要证明代数闭域上的零多项式只能是$0$. 假设$I(\mathbb{A}^n(k)) \neq 0$, 那么存在非零多项式$f \in k[T_1, \cdots, T_n]$, 可以零化整个$\mathbb{A}^n(k)$.
$\quad$ 当$n=1$时, 很明显是矛盾的, 因此$I(\mathbb{A}^1(k)) = 0$. 然后通过归纳法即可推至任意的正整数的情况. <span style="float: right"> $\blacksquare$ </span>

</div>


##### Exercise 1.3

> Determine all irreducible Hausdorff spaces. Determine all noetherian Hausdorff spaces. Show that a topological space is noetherian if and only if every open subspace is quasi-compact.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.4

> Show that the underlying topological space $X$ of a prevariety is a $T1$-space (i.e., for all $x, y \in X$ there exist open neightborhoods $U$ of $x$ and $V$ of $y$ with $y \not\in U$ and $x \notin V$).

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.5

> (a) Consider the twisted cubic curve $C = \{ (t,t^2,t^3); t \in k \} \subseteq \mathbb{A}^3(k)$. Show that $C$ is an irreducible closed subset of $\mathbb{A}^3(k)$. Find generators for the ideal $I(C)$.
> (b) Let $V = V(X^2-YZ, XZ-X) \subseteq \mathbb{A}^3(k)$. Show that $V$ consists of three irreducible components and determine the corresponding prime ideals.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.6

> Let $f \in k[X_1, \cdots, X_n]$ be a non-constant polynomial. Write $f = \prod_{i=1}^r f_i^{n_i}$ with irreducible polynomial $f_i$ such that $(f_i) \neq (f_j)$ for all $i \neq j$ and integers $n_i \ge 1$. Show that $\text{rad}(f) = (f_1\cdots f_r)$ and that the irreducible components of $V(f) \subseteq \mathbb{A}^n(k)$ are the closed subsets $V(f_i), i = 1, \cdots, r$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.7

> Let $f \in k[T_1]$ be a non-constant polynomial. Show that
> $$X_1 := V(T_2-f) \subset \mathbb{A}^2(k)$$
> is isomorphic to $\mathbb{A}^1(k)$ and show that $X_2 := V(1-fT_2) \subset \mathbb{A}^2(k)$ is isomorphic to $\mathbb{A}^1(k) \setminus \{x_1,\cdots,x_n\}$ for some $n \ge 1$. Show that $X_1$ and $X_2$ are not isomorphic.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.8

> Show that the affine Algebraic set $V(Y^2-X^3+X) \subset \mathbb{A}^2(k)$ is irreducible and in particular connected. Sketch the set $\{(x,y) \in \mathbb{R}^2 : y^2=x^3-x\}$ and show that it is not connected with respect to the analytic topology on $\mathbb{R}^2$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.9

> Describe the union of the $n$ coordinate axes in $\mathbb{A}^n(k)$ as an algebraic set.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.10

> Identifying $\mathbb{A}^1(k) \times \mathbb{A}^1(k)$ and $\mathbb{A}^2(k)$ as sets, show that the Zariski topology on $\mathbb{A}^2(k)$ is strictly finer than the product topology.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.11

> We identify the space $M_2(k)$ of $2 \times 2$-matrices over $k$ with $\mathbb{A}^4(k)$ (with coordinates $a, b, c, d$). A matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in M_2(k)$ is nilpotent if $A^2 = 0$ or, equivalently, if its determinant and trace are zero. Thus if
> $$\mathfrak{a} := (a^2+bc, d^2+bc, (a+d)b, (a+d)c), \quad \mathfrak{b} = (ad-bc, a+d),$$
> we have that
> $$V(\mathfrak{a}) = V(\mathfrak{b}) = \{ A \in M_2(k) ;\ A \text{ nilpotent} \}.$$
> Show that $\operatorname{rad}\mathfrak{a} = \mathfrak{b}$ and that $V(\mathfrak{b})$ is an irreducible closed affine cone in $M_2(k) = \mathbb{A}^4(k)$ (the so-called *nilpotent cone*).

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.12

> (a) Let $\operatorname{char} k \neq 2$ and let $Z_1 = V(U(T-1)-1)$ and $Z_2 = V(Y^2-X^2(X+1))$ be closed subsets of $\mathbb{A}^2(k)$. Show that $(t,u) \mapsto (t^2-1, t(t^2-1))$ defines a bijective morphism $Z_1 \to Z_2$ which is not an isomorphism.
> (b) Show that the morphism $\mathbb{A}^1(k) \to V(Y^2-X^3) \subset \mathbb{A}^2(k)$, $t \mapsto (t^2,t^3)$ is a bijective morphism that is not an isomorphism.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.13

> Show that for $n \ge 2$ the open subprevariety $\mathbb{A}^n(k) \setminus \{0\} \subset \mathbb{A}^n(k)$ is not an affine variety. Is $\mathbb{A}^1(k) \setminus \{0\}$ affine?

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.14

> Let $X$ be a prevariety and let $Y$ be an affine variety. Show that the map
> $$\operatorname{Hom}(X,Y) \to \operatorname{Hom}_{(k\text{-Alg})}(\Gamma(Y),\Gamma(X)), \quad f \mapsto f^* : \varphi \mapsto \varphi \circ f,$$
> is bijective. Deduce that $\operatorname{Hom}(X,\mathbb{A}^n(k)) = \Gamma(X)^n$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.15

> Let $n \ge 1$ be an integer. We identify $M_n(k)$ with the affine space $\mathbb{A}^{n^2}(k)$. Show that the subset $\operatorname{GL}_n(k) \subset M_n(k)$ is an open affine subvariety. Describe its coordinate ring $\Gamma(\operatorname{GL}_n(k))$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.16

> Let $X$ be a prevariety. Define on the set of all pairs $(U,f)$, where $\emptyset \neq U \subseteq X$ open and $f \in \Gamma(U)$, an equivalence relation by setting $(U,f) \sim (V,g)$ if there exists $\emptyset \neq W \subseteq U \cap V$ open such that $f|_W = g|_W$. Define the structure of a field extension of $k$ on the set of equivalence classes and show that this field extension is naturally isomorphic to the function field of $X$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.17

> Let $k = \mathbb{C}$. Show that the Zariski topology on $\mathbb{A}^1(\mathbb{C}) = \mathbb{C}$ is coarser than the complex analytic topology. Show that the exponential function, sine, and cosine, considered as functions $\mathbb{A}^1(\mathbb{C}) \to \mathbb{A}^1(\mathbb{C})$, are not continuous for the Zariski topology (and in particular not morphisms of affine varieties).

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.18

> Let $f \in k[X_0,\cdots,X_n]$ be homogeneous. Show that
> $$D_+(f) = \{ x \in \mathbb{P}^n(k) ;\ f(x) \neq 0 \}$$
> is an open subset of $\mathbb{P}^n(k)$ and that the open subsets of this form are a basis for the topology of $\mathbb{P}^n(k)$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.19

> Formulate and prove a projective analogue of Exercise 1.6.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.20

> Let $K$ be a field.
> (a) Assume that $K$ is infinite. Show that $f \in K[X_0,\cdots,X_n]$ is homogeneous of degree $d$ if and only if $f(\lambda x_0,\cdots,\lambda x_n) = \lambda^d f(x_0,\cdots,x_n)$ for all $x_0,\cdots,x_n \in k$, $0 \neq \lambda \in K$.
> (b) Let $\mathfrak{a} \subseteq K[X_0,\cdots,X_n]$ be an ideal. Show that the following assertions are equivalent.
> $\quad$ (i) The ideal $\mathfrak{a}$ is generated by homogeneous elements.
> $\quad$ (ii) For every $f \in \mathfrak{a}$ all its homogeneous components are again in $\mathfrak{a}$.
> $\quad$ (iii) We have $\mathfrak{a} = \bigoplus_{d \ge 0} \mathfrak{a} \cap K[X_0,\cdots,X_n]_d$.
> An ideal satisfying these equivalent conditions is called *homogeneous*.
> \(c\) Show that intersections, sums, products, and radicals of homogeneous ideals are again homogeneous.
> (d) Show that a homogeneous ideal $\mathfrak{p} \subseteq K[X_0,\cdots,X_n]$ is a prime ideal if and only if $fg \in \mathfrak{p}$ implies $f \in \mathfrak{p}$ or $g \in \mathfrak{p}$ for all homogeneous elements $f$ and $g$.
> (e) Show that every homogeneous ideal $\mathfrak{a} \subsetneq K[X_0,\cdots,X_n]$ is contained in the homogeneous ideal $(X_0,\cdots,X_n)$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.21

> Let $\mathfrak{a} \subseteq k[X_0,\cdots,X_n]$ be a homogeneous ideal (Exercise 1.20) and set
> $$V_+(\mathfrak{a}) := \{ x \in \mathbb{P}^n(k) ;\ f(x) = 0 \text{ for all homogeneous } f \in \mathfrak{a} \}.$$
> Show that the maps $\mathfrak{a} \mapsto V_+(\mathfrak{a})$ and $Z \mapsto C(Z)$ define bijections between the following sets.
> (1) The set of homogeneous radical ideals $\mathfrak{a} \subseteq k[X_0,\cdots,X_n]$ with $\mathfrak{a} \neq (X_0,\cdots,X_n)$.
> (2) The set of closed subspaces $Z$ of $\mathbb{P}^n(k)$.
> (3) The set of closed affine cones $C \subseteq \mathbb{A}^{n+1}(k)$ such that $C \neq \{0\}$.
> If $Z \subseteq \mathbb{P}^n(k)$ is a closed subset we denote by $I_+(Z)$ the corresponding homogeneous ideal. Show that $I_+(Z) = I(C(Z))$ and deduce that the following assertions are equivalent.
> $\quad$ (i) $Z$ is irreducible.
> $\quad$ (ii) $I_+(Z)$ is a prime ideal.
> $\quad$ (iii) $C(Z)$ is irreducible.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.22

> Let $L_1$ and $L_2$ be two disjoint lines in $\mathbb{P}^3(k)$.
> (a) Show that there exists a change of coordinates such that $L_1 = V_+(X_0,X_1)$ and $L_2 = V_+(X_2,X_3)$.
> (b) Let $Z = L_1 \cup L_2$. Determine the homogeneous radical ideal $\mathfrak{a}$ such that $V_+(\mathfrak{a}) = Z$ (Exercise 1.21).

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.23

> Let $Z \subseteq \mathbb{P}^n(k)$ be a projective variety and let $\mathfrak{p} \subset k[X_0,\cdots,X_n]$ be the corresponding homogeneous prime ideal (Exercise 1.21). Show that the function field $K(Z)$ is isomorphic to the ring of rational functions $f/g$, where $f,g \in k[X_0,\cdots,X_n]$ are homogeneous of the same degree, $g \notin \mathfrak{p}$, modulo the ideal of $f/g$ with $f \in \mathfrak{p}$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.24

> Let $n \ge 1$ be an integer. We identify $\mathbb{A}^n(k)$ with the open subprevariety $U_0 = \{ (x_0 : \cdots : x_n) \in \mathbb{P}^n(k) ;\ x_0 \neq 0 \}$ of $\mathbb{P}^n(k)$. For $f \in k[T_1,\cdots,T_n]$ of degree $d$ let $\bar{f}$ be its homogenization in $k[X_0,\cdots,X_n]_d$ (with respect to $X_0$).
> Let $X = V(\mathfrak{a}) \subseteq \mathbb{A}^n(k)$ be an affine algebraic set and define $\bar{\mathfrak{a}} \subseteq k[X_0,\cdots,X_n]$ as the ideal generated by the elements $\bar{f}$ for $f \in \mathfrak{a}$. Let $\bar{X}$ be the closure of $X$ in $\mathbb{P}^n(k)$.
> (a) Show that $X$ is irreducible if and only if $\bar{X}$ is irreducible.
> (b) Show that $\bar{X} = V_+(\bar{\mathfrak{a}})$ (notation of Exercise 1.21).
> \(c\) Find generators $f_1,\cdots,f_r$ for the ideal $I(C)$ of the twisted cubic curve $C$ (Exercise 1.5) such that $\bar{f}_1,\cdots,\bar{f}_r$ do not generate $\overline{I(C)}$.
> (d) Show that $X \mapsto \bar{X}$ defines a bijection between the set of non-empty closed subvarieties $X$ of $\mathbb{A}^n(k)$ and closed subvarieties $Z$ of $\mathbb{P}^n(k)$ with $Z \cap \mathbb{A}^n(k) \neq \emptyset$.
> The closed subset $\bar{X}$ of $\mathbb{P}^n(k)$ is called the *projective closure* of $X$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.25

> An *affine subspace* $H \subseteq \mathbb{A}^n(k)$ of *dimension* $m$ is a subset of the form $v+W$, where $v \in k^n$ and $W \subseteq k^n$ is a subvector space of dimension $m$.
> (a) Show that affine subspaces are closed subvarieties of $\mathbb{A}^n(k)$.
> (b) Show that attaching to $H$ its projective closure $\bar{H}$ in $\mathbb{P}^n(k)$ (Exercise 1.24) defines an injection of the set of affine subspaces of dimension $m$ of $\mathbb{A}^n(k)$ into the set of linear subspaces of dimension $m$ of $\mathbb{P}^n(k)$. Determine the image of this injection.
> \(c\) Determine those affine algebraic sets in $\mathbb{A}^{n+1}(k)$ that are affine cones of linear subspaces of $\mathbb{P}^n(k)$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.26

> Let $Y,Z$ be linear subspaces of $\mathbb{P}^n(k)$. Show that $Y \cap Z$ is again a linear subspace of dimension $\ge \dim(Y)+\dim(Z)-n$. Deduce that $Y \cap Z$ is always non-empty if $\dim(Y)+\dim(Z) \ge n$.
> Conversely let $Y_1,\cdots,Y_r \subseteq \mathbb{P}^n(k)$ be finitely many linear subspaces and let $0 \le d \le n$ be an integer such that $\max_i \dim(Y_i)+d < n$. Show that there exists a linear subspace $Z$ of $\mathbb{P}^n(k)$ of dimension $d$ such that $Y_i \cap Z = \emptyset$ for all $i = 1,\cdots,r$. Deduce that for any finite subset $X \subset \mathbb{P}^n(k)$ there exists a hyperplane $Z$ of $\mathbb{P}^n(k)$ such that $X \cap Z = \emptyset$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.27

> Let $Y$ be a quasi-projective variety. Show that every finite subset of $Y$ is contained in an open affine subvariety of $Y$.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.28

> Let $n \ge 0$ be an integer. Let $G$ be the affine variety $\operatorname{GL}_{n+1}(k)$ (Exercise 1.15) and let $L_0 \subset k^{n+1}$ be a fixed one-dimensional subvector space. Show that the map $G \to \mathbb{P}^n(k)$, $g \mapsto g(L_0)$ is a surjective morphism of prevarieties.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.29

> Let $X$ be an affine variety.
> (a) Show that any morphism $\mathbb{P}^n(k) \to X$ is constant.
> (b) Let $Z$ be a prevariety such that every morphism $Z \to \mathbb{P}^1(k)$ has a closed image (we will see in Corollary 13.41 that this is the case if $Z$ is a projective variety). Show that every morphism $Z \to X$ is constant.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>


##### Exercise 1.30

> Let $n,d > 0$ be integers. Let $M_0,\cdots,M_N \in k[X_0,\cdots,X_n]$ be all monomials in $X_0,\cdots,X_n$ of degree $d$.
> (a) Define a $k$-algebra homomorphism $\theta : k[Y_0,\cdots,Y_N] \to k[X_0,\cdots,X_n]$ by $Y_i \mapsto M_i$ and let $\mathfrak{a} = \operatorname{Ker}\theta$. Show that $\mathfrak{a}$ is a homogeneous prime ideal (Exercise 1.20). Let $V_+(\mathfrak{a}) \subseteq \mathbb{P}^N(k)$ be the projective variety defined by $\mathfrak{a}$ (Exercise 1.21).
> (b) Consider the morphism
> $$v_d : \mathbb{P}^n(k) \to \mathbb{P}^N(k), \quad (x_0 : \cdots : x_n) \mapsto (M_0(x_0,\cdots,x_n) : \cdots : M_N(x_0,\cdots,x_n)),$$
> and show that $v_d$ induces an isomorphism $\mathbb{P}^n(k) \cong V_+(\mathfrak{a})$ of prevarieties. Is $V_+(\mathfrak{a})$ a linear subspace of $\mathbb{P}^N(k)$?
> \(c\) Let $f \in k[X_0,\cdots,X_n]$ be homogeneous of degree $d$. Show that $v_d(V_+(f))$ is the intersection of $V_+(\mathfrak{a})$ and a linear subspace of $\mathbb{P}^N(k)$.
> The morphism $v_d$ is called the *$d$-Uple embedding* or *$d$-fold Veronese embedding*.

<div style="border: 1px solid #888; padding: 12px 12px 4px; border-radius: 6px;">

证明:
$\quad$ 1

</div>

