# Tree

- Basic Concepts
- Binary Trees
- Binary Search Trees

## Basic Concepts

A tree is a collection of nodes

- The collection can be empty
- (recursive definition) If not empty, a tree consists of a distinguished node r (the root), and zero or more nonempty subtrees $T_1, T_2, ...., T_k$, each of whose roots are connected by a directed edge from root

Concept

- Root and Leaf
- Child and Parent
  - Every node except the root has one parent
  - A node can have an zero or more children
  - A leaf node has no children
- Sibling
  nodes with same parent

Path

- a sequence of edges

Length of a path
Depth of a node

- length of the unique path to the root

Height of a node

- length of the longest path to a leaf

Tree height

- the height of the root
- the depth of the deepest leaf

Ancestor and descendant

- If there is a path from n1 to n2
- n1 is an ancestor of n2, n2 is a descendant of n1
- Proper ancestor and proper descendant

## Perfect Binary Tree

A perfect binary tree is the tree where a node can have 0 or 2 children and all leaves are at the same depth

<img src="https://cdn.jsdelivr.net/gh/ALLENYGY/ImageSpace@master/IMAGE/DSA/Tree/PerfectBinaryTree.png"/>
