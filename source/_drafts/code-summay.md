% 局中:
<center> 内容居中 </center>



% HTML粗体与换行
<center><b>很可怕吗?是的很可怕.</b><br></center>



% 局中公式,末尾加注释
<div style="display: flex; align*-items: center; justify-content: space-between; width: 100%;">  <span style="margin: 0 auto;">$0 \le \dfrac{\omega(p)}{p} \le 1 - \dfrac{1}{A_1}$</span>  <span style="float: right;">$(\Omega_1)$</span></div>



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



% 制作表格 Markdown版
|$\vartheta$|$k$|$\ell$|$h(k)$|
|----|----|----|----|
|$1$|$7$|$1$|$20$|
|$0.95$|$8$|$1$|$26$|
|$0.90$|$9$|$1$|$30$|
|$0.85$|$11$|$1$|$36$|
|$0.80$|$16$|$1$|$60$|
|$0.75$|$21$|$2$|$84$|
|$0.70$|$31$|$2$|$140$|
|$0.65$|$51$|$3$|$252$|
|$0.60$|$111$|$5$|$634$|
|$0.55$|$421$|$10$|$2956^*$|



% 制作表格 HTML版 https://blog.csdn.net/jxy_1995/article/details/130097325
<table>
    <capital>如何在Markdown里面画这样的表格：</capital>
    <tr>
        <th>普通表头</th>
        <th align="right"><i>斜体表头而且居右</i></th>
        <td colspan=2>表头横向合并单元格</td>
        <th width="80px">限制列宽为80px超出会自动换行</th>
    </tr>
    <tr>
        <th>左边也可以有表头</th>
        <td bgcolor=#ffffcc>涂个颜色</td>
        <td><mark>高亮文本</mark>但不全高亮</td>
        <td><b>有时候加粗</b><i>有时候斜体</i></td>
        <td width="20px">20px小于80px服从80px列宽命令无效</td>
    </tr>
    <tr>
        <td>表头不一定是一整行或者一整列的</td>
        <td rowspan=2>纵向合并单元格要注意<br>下一行少一个单元格<br>字太多必要时我会换行</td>
        <td rowspan=2 colspan=2>单元格也可以从两个方向合并</td>
        <td rowspan=2 width="10%">百分比和像素是可以混用的具体服从哪个取决于哪个大</td>
    </tr>
        <td align="left"> 简单做个居左 </td>
    </tr>
</table>