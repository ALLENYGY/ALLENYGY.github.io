# Graph Theory- Representing graph and connectivity

## Representing Graphs

### Adjacency matrix

* Mostly used for the graph with many edges (dense graph);

### Adjacency table (list)

* Mostly used for the graph with few edges (sparse graph).

![Represent Graph](D:\Note\Image\Math\DiscreteStructure\Lecture12\Representing-Graph.png)

## Graph Isomorphism(图同构)

The simple graphs $G_1=(V_1,E_1)$ and $G_2=(V_2,E_2)$ are isomorphic if

* There is a bijection (1-1, onto) $f: V_1->v_2$ such that:
* $\forall a, b\in V_1 ((a,b)\in E_1 \leftrightarrow (f(a),f(b)\in E_2))$.
* Graphic invariants are the things that isomorphic graphs must have in common
  * the same number of vertices,
  * the same number of edges,
  * the degrees of corresponding vertices are the same,
  * same graph type,
  * same number, and types, of sub-graphs.

## Graph Connectivity

### Path

A path of length n from vertex u to vertex v is a sequence of n edges $e_1, e_2, ..., e_n$ such that $e_1$, starts at u and $e_n$ ends at v.

### Circuit

A circuit is a path that begins and ends at the same vertex in graph.

![Circuit](D:\Note\Image\Math\DiscreteStructure\Lecture12\Circuit.png)

#### Simple path/circuit

* A simple path or circuit does not pass through the same edge twice or more.(不经过同样的边两次以上).

![Simple Circuit](D:\Note\Image\Math\DiscreteStructure\Lecture12\SimpleCircuit.png)

### Graph Connectedness

* Undirected Graph
  * An undirected graph is connected if there is a path between every pair of distinct vertices.
* Directed Graph
  * A directed graph is strongly connected if there is a path from a to b and from b to a whenever a and b are vertices in the graph.
  * A directed graph is weakly connected if, after all the arrows are removed, the undirected graph is connected.

## Euler Path/Circuit

* An Euler path in G is a simple path containing every edge of G.（不需回到起点）
* An Euler circuit in a graph G is a simple circuit containing every edge of G.(回到起点)

* Theorem: （欧拉路径）
  * A connected multi-graph has an Euler path (not an Euler circuit) iff it has exactly 2 vertices of odd degree. （两个奇度点）
* Theorem: （欧拉回路）
  * A connected multi-graph has an Euler circuit if and only if each vertex has even degree. （无奇度点）

## Hamilton Path/Circuit

* A Hamilton path is a path that traverses each vertex in G exactly once.
* A Hamilton circuit is a circuit that traverses each vertexin G exactly once.

### How to find the Hamilton circuits? Some sufficient conditions can help

* Ore's theorem
 If for every pair of nonadjacent vertices u and v in the simple graph G with n vertices, $deg(u) + deg(u) > n$, then G has a Hamilton circuit.
* Dirac's theorem
 If the degree of each vertex is great than or equals n/2 in the connected simple graph G with n vertices where n > 3 then G has a Hamilton circuit.

## Planar Graphs

* A graph is planar if it can be drawn in the plane without any edges crossing
* The drawing is called a planar representation of the graph.

## Euler’s Formula

* In a planar representation of G
  * e: number of edges
  * v: number of vertices
  * r: number of regions
  * r=e-v+2

![Euler's Formula](D:\Note\Image\Math\DiscreteStructure\Lecture12\Euler-formula.png)

* There are three ways to determine if a graph is not a planargraph.
  * If G is a connected planar simple graph with e edges and v vertices with v > 3, then e ≤ 3v - 6
    * That is, if e > 3v- 6, G is not a planar graph
  * lf G is a connected planar simple graph, then G has a vertex of degree not exceeding 5
  * If G has no vertex of degree below 5, G is not a planargraph.
  * If G is a connected simple graph where v > 3 and nocircuits of length 3, then e < 2v - 4. if v > 3 and no circuits of length 3 and e > 2v - 4then G is not a planar graph.

>对于一个连通的简单平面图G，如果它有e条边和v个顶点，其中v > 3，则e ≤ 3v - 6。也就是说，如果e > 3v - 6，则G不是平面图。
>如果一个连通的简单平面图G没有度数小于5的顶点，则G不是平面图。
>对于一个简单图G，如果它是连通的，v > 3，并且没有长度为3的回路，则e < 2v - 4。
>如果v > 3，没有长度为3的回路，并且e > 2v - 4，则G不是平面图。
