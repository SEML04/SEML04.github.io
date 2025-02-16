%局中:
<center> 内容居中 </center>



% 末尾加$\square$:
<span style = "float: right"> $\square$ </span>



% markdown改变颜色:
<span style="color: rgb(230,51,51)"> 最主要的想法 </span>



% latex改变颜色:
$${\color{red} x^2 + y^2 = z^2}$$



% 多行数学公式:
$$\begin{split}
    \log(n!) & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \left\lfloor \dfrac{n}{p^k} \right\rfloor \log p \\ 
    & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \left( \dfrac{n}{p^k} + O(1) \right) \log p \\ 
    & = \displaystyle\sum_{p \le n}\sum_{k = 1}^{K(p)} \dfrac{n}{p^k} \log p + \sum_{p \le n}\sum_{k = 1}^{K(p)} O(1) \log p \\
    & = \displaystyle\sum_{p \le n} \frac{n}{p} \log p + \sum_{p \le n}\sum_{k = 2}^{K(p)} \dfrac{n}{p^k} \log p + \sum_{p \le n}\sum_{k = 1}^{K(p)} O(1) \log p
\end{split} \quad (3.3)$$



% butterfly的标签
{% label 定理1 blue %}