# Tree

* A tree is a connected undirected simple graph that contains no simple circuits.

## Rooted Trees

* A rooted tree is a tree in which one node has been designated the root.
* Every edge is directed away from the root.
* Given a vertex 𝑣 in a rooted tree 𝑇:
  * Parent: unique vertex 𝑢 such that (𝑢, 𝑣) is an edge (in the direction from root to 𝑣)
  * Child: any vertex for which 𝑣 is a parent
  * Siblings : vertices with the same parent
  * Ancestors : all vertices from root to 𝑣 (except itself)
  * Descendants : vertices with 𝑣 as an ancestors
* A vertex of a tree is called a leaf if it has no children.
* Vertices that have children are called internal vertices.

>Rooted Trees（有根树）是一种基础的数据结构，它由若干个节点和连接这些节点的边组成。它们通常用于表示层次结构，例如文件系统、网站导航、家谱等。根据定义，每个树都有一个根节点，它是唯一的，并且没有父节点。每个节点可以有零个或多个子节点，每个子节点都连接到其父节点。树的节点可以表示任何对象，可以是简单的值（例如数字或字符串），也可以是更复杂的对象或数据结构。节点可以具有任意数量的子节点，但每个节点最多只能有一个父节点。

## Game Trees

* A Game (State) Tree models the different possible outcomes in a game.
  * Vertices: positions (states) in a game.
  * Edges: legal moves from one position (state) to another.
  * Leaves: Final positions (states) of a game.
* eg: Tic-Tac-Toe

## m-ary Trees

* A rooted tree is called 𝑚-ary if every internal vertex has no more than 𝑚 children (maximum is 𝑚).
* It is called full if every internal (non-leaf) vertex has exactly 𝑚 children.
* A 2-ary tree is called a binary tree. If 𝑣 is an internal vertex of a binary tree, it has at most two children. The first we call the left child and the second the right child.
* If vertex 𝑣 is in a tree 𝑇, the sub-tree with root 𝑣 is the tree consisting of 𝑣 and all its descendants.

>m-ary Tree是一种树形数据结构，它的每个节点最多有m个子节点。m通常被称为树的度。当m=2时，m-ary Tree就是二叉树；当m=3时，m-ary Tree就是三叉树。m-ary Tree常用于计算机科学中的搜索和排序算法，例如B树和B+树，它们被广泛应用于数据库和文件系统的实现中。在m-ary Tree中，节点的度数可以任意，而不像二叉树那样只能是2，因此m-ary Tree可以更灵活地表达数据结构和算法的特点。

## Balanced Tree

The level of a node is the length of the path from the root to the node (The level of the root is defined to be zero).

* The height of a tree is maximum level of node.
* A rooted 𝑚-ary tree with height ℎ is called balanced if all leaves are at levels ℎ or ℎ − 1.

### Tree Traversal

* Rooted trees are used to store information.
  * We often need to do some operation on the vertices in such a tree.
  * A tree traversal (遍历) is an algorithm designed to “visit” each node in the tree.
* Traversal Algorithms
  * Pre-order traversal
  * In-order traversal
  * Post-order traversal

#### Pre-order Traversal

* 先序遍历可以想象为，一个小人从一棵二叉树根节点为起点，沿着二叉树外沿，逆时针走一圈回到根节点，路上遇到的元素顺序，就是先序遍历的结果

![Pre-order](D:\Note\Image\Math\DiscreteStructure\Lecture13\Pre-orderTraversal.png)

#### In-order Traversal

* 中序遍历可以看成，二叉树每个节点，垂直方向投影下来（可以理解为每个节点从最左边开始垂直掉到地上），然后从左往右数，得出的结果便是中序遍历的结果

![In-order](D:\Note\Image\Math\DiscreteStructure\Lecture13\In-orderTraversal.png)

#### Post-order Traversal

* 后序遍历就像是剪葡萄，我们要把一串葡萄剪成一颗一颗的。

还记得我上面提到先序遍历绕圈的路线么？（不记得翻上面理解）

就是围着树的外围绕一圈，如果发现一剪刀就能剪下的葡萄（必须是一颗葡萄）（也就是葡萄要一个一个掉下来，不能一口气掉超过1个这样），就把它剪下来，组成的就是后序遍历了。

![Post-order](D:\Note\Image\Math\DiscreteStructure\Lecture13\Post-orderTraversal.png)

### Spanning Trees

* A spanning tree of a connected undirected graph 𝐺 is a subgraph of 𝐺 that contains all of 𝐺’s vertices and enough of its edges to form a tree.
* To obtain a spanning tree from a connected undirected graph with cycles.
* Remove edges until there are no cycles.
* There are two algorithms for constructing spanning trees.
  * Depth-First Search (Back-tracking)
  * Breadth-First Search
  
#### Depth-First Search (DFS)

* Depth-First Search (DFS) proceeds along a path from a vertex 𝑣 as deeply into the graph as possible before backing up (back tracking).

* To create a depth-first search (DFS) spanning tree
  * Traverse the graph using a depth-first search and mark the edges that you follow.
  
  * After the traversal is complete, the graph’s vertices and marked edges form the spanning tree.
  
    ![DFS](D:\Note\Image\Math\DiscreteStructure\Lecture13\DFS.png)

#### Breadth-First Search(BFS)

* Breadth-First Search (BFS) visits every vertex adjacent to a vertex v that it can before visiting any other vertex.
* To create a breath-first search (BFS) spanning tree
  * Traverse the graph using a bread-first search and mark the edges that you follow.
  * When the traversal is complete, the graph’s vertices and marked edges form the spanning tree.
  
  ![BFS](D:\Note\Image\Math\DiscreteStructure\Lecture13\BFS.png)

### Minimum Spanning Trees

* A minimum spanning tree in a connected weighted graph is a spanning tree that has the smallest possible sum of weights of edges.
  * There may be several different minimum spanning trees for a particular graph. But the minimum weight is unique.

#### Prim’s Algorithm

1. Initially, starts from an empty (no vertices, no edges) sub minimum spanning tree 𝑇.

2. Randomly put a vertex 𝑣 into 𝑇.

3. Among all the edges (𝑢, 𝑠) such that 𝑢 is in 𝑇 and 𝑠 is not in 𝑇, find the one of the minimum weight. And add the edge and the endpoint to 𝑇.

4. Repeat Step 3 for 𝑛 − 1 iterations (because a tree has 𝑛 − 1 edges).

   ![Prim](D:\Note\Image\Math\DiscreteStructure\Lecture13\Prim's Algorithm.png)

#### Kruskal’s Algorithm

1. Initially, starts from a subgraph of all vertices but no edges.

2. Find the edge with the smallest weight.

3. If adding the smallest edge to the subgraph does not create any cycle, add it. (To maintain the tree property.)

4. Otherwise, this edge is not in the MST. So, discard the edge.

5. Repeat steps 2-4 until for 𝑛 − 1 iterations (because a tree has 𝑛 − 1 edges).

   ![Kruskal](D:\Note\Image\Math\DiscreteStructure\Lecture13\Kruskal's Algorithm.png)
