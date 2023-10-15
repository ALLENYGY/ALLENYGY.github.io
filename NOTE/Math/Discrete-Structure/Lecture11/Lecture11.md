# Graph Theory

## Graph

* Definition:
  A graph G =$(V,E)$ is a pair and consists of two sets V and E such that
  * $V$ is the set of vertices and
  * $E$ is the set of edges.
* V cannot be empty, E cannot be empty.
* A vertex can also be called an endpoint (node).
* Each edge has one or two vertices.

### Simple Graph

* A graph is a simple graph if:
  * each edge connects two different vertices and
  * where no two edges connect the same pair of vertices.

>简单图是一种没有自环和重复边的图。也就是说，在简单图中，每条边连接两个不同的点，且同一对顶点之间只有一条边。

### Multigraph

* A multigraph is a graph that may have multiple edges connecting the same pair of vertices.
* If there are m different edges associated to the same unordered pair of vertices.

>Multigraph（多重图）是一种有重复边的图。也就是说，在Multigraph中，两个顶点之间可以有多条边。
>在图论中，Multiplicity（重数）指的是一条边在一个图中出现的次数。在简单图中，每条边的重数为1，而在Multigraph中，一条边的重数可以大于1。

### Loop

* A loop is an edge that connects one vertex to itself.
* Graphs that may include loops, and possibly multiples edges connecting the same pair of vertices are called pseudo-graph.(伪图)

>在图论中，Loop（自环）是一条连接同一个顶点的边。自环的两个端点是同一个顶点。在简单图中不存在自环，但在Multigraph中可以存在自环。自环的重数为自环的数量。

## Directed Graph

* A directed graph (V, E) consists of a nonempty set V and a set of directed edges E.
* The edge (u, v) in a directed graph starts at u and ends at u.
* The edge (v, u) starts at v and ends at u.
* The edges in an undirected graph have no direction.

## Degree

### Undirected

* The degree of a vertex in an undirected graph is the number of edges connected with it except that a loop at a vertex contribute twice to the degree of that vertex.
* Denoted by $deg(v)$ where v is a vertex.

### Directed

* In-Degree and Out-Degree
* The in-degree of a vertex (u) in a directed graph is the number of edges that end at this vertex, denoted by $deg^-(v)$.
The out-degree of a vertex in a directed graph is the number of edges that start at this vertex, denoted by $deg^+(v)$

#### Handshaking Theorem

* Theorem: For an undirected graph $G=(V,E)$
$$2|E|=\sum_{v \in V}{deg(v)}$$

#### Odd Degree Theorem

* Theorem: An undirected graph has an even number of vertices of odd degree.
(奇度点个数偶数)
* Theorem: In a directed graph $G=(V,E)$
$$|E|=\sum_{v \in V}{deg^+(v)}=\sum_{v \in V}{deg^-(v)}$$

## Some Special Simple Graphs

### Complete Graphs

* A complete graph is a simple graph in which there is an edge between each pair of distinct vertices, denoted by $K_n$ where n is the number of nodes in the graph.

![CompleGraph](D:\Note\Image\Math\DiscreteStructure\Lecture11\CompleteGraph.png)

### Cycle

* A cycle is a graph that contains n $(n\geq 3)$ vertices $\{v_1, V_2, ..., V_n-1,V_n\}$ and n edges $(v_1, V_2), (v_2, V_3), ..., (u_{n-1}, V_{n}), (U_n, V_1),$ denoted by $C_n$ where n is the number of nodes in the graph.

![Cycle](D:\Note\Image\Math\DiscreteStructure\Lecture11\Cycle.png)

### Wheel

* A wheel $W_n$ is obtained by adding an additional vertex to the cycle $C_n$, for n > 3, and connect this new vertex to each of the vertices in $C_n$, by new edges.

![Wheel](D:\Note\Image\Math\DiscreteStructure\Lecture11\Wheel.png)

### Cube

* A cube of dimension n $(Q_n)$ is a simple graph of $2^n$ vertices, where each vertex represents a bit string of length n. Two vertices are adjacent if and only if they differ by one bit.

![Cube](D:\Note\Image\Math\DiscreteStructure\Lecture11\Cube.png)

## Complete Bipartite Graphs

* A simple graph $G = (V, E)$ is called bipartite if its vertex set V can be partitioned into two disjoint set $V_1$, and $V_2$, such that every edge in the graph connects a vertex in $V_1$, and a vertex in $V_2$,
* $V_1$ and $V_2$, are called a bipartite of the vertex set V of G.

![Bipartite Graph](D:\Note\Image\Math\DiscreteStructure\Lecture11\BipartiteGraph.png)

### Theorem

* Theorem: A simple graph G = (V, E) is bipartite if and only if it ispossible to color each vertex with one of two colors so that noadiacent vertices have the same color.

## Subgraphs and Proper Subgraphs

* A subgraph H = (W, F) of graph G = (V, E) is made up of vertices $W \subseteq V$ and edges $F \subseteq E$
* A subgraph H of G is a proper subgraph if $H \neq G$

![Subgraphs](D:\Note\Image\Math\DiscreteStructure\Lecture11\Subgraphs.png)

![Union](D:\Note\Image\Math\DiscreteStructure\Lecture11\Union.png)