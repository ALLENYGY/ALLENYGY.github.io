# Assignment8

##  Question1

This graph is directed. Because the adjacency matrix is not symmetric

![Q1](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Question1.png)

## Question2

$$
\begin{array}{c|lll}
{↓}&{a}&{b}&{c}&{d}&{e}&{f}&{g}&{h}\\
\hline
{a}&{0}&{1}&{0}&{1}&{0}&{1}&{0}&{0}\\
{b}&{1}&{0}&{1}&{0}&{1}&{0}&{0}&{0}\\
{c}&{0}&{1}&{0}&{1}&{0}&{0}&{0}&{1}\\
{d}&{1}&{0}&{1}&{0}&{0}&{0}&{1}&{0}\\
{e}&{0}&{1}&{0}&{0}&{0}&{1}&{0}&{1}\\
{f}&{1}&{0}&{0}&{0}&{1}&{0}&{1}&{0}\\
{g}&{0}&{0}&{0}&{1}&{0}&{1}&{0}&{1}\\
{h}&{0}&{0}&{1}&{0}&{1}&{0}&{1}&{0}\\
\end{array} \tag{2}
$$
$$
\begin{array}{c|lll}
{↓}&{1}&{7}&{6}&{4}&{8}&{2}&{3}&{5}\\
\hline
{1}&{0}&{1}&{0}&{1}&{0}&{1}&{0}&{0}\\
{7}&{1}&{0}&{1}&{0}&{1}&{0}&{0}&{0}\\
{6}&{0}&{1}&{0}&{1}&{0}&{0}&{0}&{1}\\
{4}&{1}&{0}&{1}&{0}&{0}&{0}&{1}&{0}\\
{8}&{0}&{1}&{0}&{0}&{0}&{1}&{0}&{1}\\
{2}&{1}&{0}&{0}&{0}&{1}&{0}&{1}&{0}\\
{3}&{0}&{0}&{0}&{1}&{0}&{1}&{0}&{1}\\
{5}&{0}&{0}&{1}&{0}&{1}&{0}&{1}&{0}\\
\end{array} \tag{3}
$$
$\therefore$ $\{(a,1),(b,7),(c,6),(d,4),(e,8),(f,2),(g,3),(h,5)\}$
$\therefore$ The two graphs are isomorphic.

## Question3

* Base Case (n = 1):
For a cube of dimension n = 1, we have 2 vertices connected by an edge. We can easily divide these two vertices into two separate sets, forming a bipartite graph.
For a cube of dimension n = 2, we have 4 vertices connected by an edge. We can easily divide these two vertices into two separate sets like $S1=\{A,D\}, S2=\{B,D\}$ forming a bipartite graph. 
* Inductive Hypothesis:
  Assume that a cube $Q_n$ of dimension k is bipartite, where k ≥ 1.
* Inductive Step:
  Now we need to show that a cube $Q_{n+1}$ is also bipartite. Consider a cube $Q_{n+1}$, which is obtained by adding one layer of vertices to the cube $Q_n$. Let's call this additional layer "L". Each vertex in layer L is connected to exactly one vertex in the cube $Q_n$. Now, we can divide the vertices of $Q_n$ into two sets, S₁ and S₂. 
  Next, we assign each vertex in layer L to the opposite set of its connected vertex in $Q_n$. In other words, if a vertex in L is connected to a vertex in S₁, we assign it to S₂, and vice versa. This assignment ensures that no two vertices within the same set (S₁ or S₂) are adjacent, including the newly added layer L.
  Therefore, we have successfully divided the vertices of $Q_{n+1}$ into two sets, S₁ and S₂, such that no two vertices within the same set are adjacent. Hence, by induction, we can conclude that a cube $Q_{n+1}$ of dimension n is bipartite for n ≥ 1.
* This completes the proof.

## Question4
a)

![Q4](https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/Question4.png)

It's clear that the graph is planar. it can be drawn in the plane without any edges crossing
b) It has Euler Circuit cause the thorem A connected multi-graph has an Euler circuit if and 
only if each vertex has even degree. The vertex in the graph all has 4 edges. Therefore, it must have Euler Circuit.
c) It has Hamilton Circuits such that 1->2->3 ->4 ->5 ->6->1

## Question5
Consider the following graph G = (V, E), where V = {1, 2, 3, 4} and E = {(1, 2), (2, 3), (3, 4), (4, 1), (1, 3)}. 
This graph satisfies the condition that for any two non-adjacent vertices u and v in G, $\deg(u) + \deg(v) \geq n.$ 
For example, if we take u = 1 and v = 4, then $\deg(1) + \deg(4) = 3 + 2 = 5 \geq 4 = n.$ 
However, this graph does not have a Hamilton circuit.
Therefore, we have shown that the converse of Ore's theorem is false by providing a counterexample.