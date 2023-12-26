# $B^+\ Tree$

## M-ary Search tree

- Binary search tree has one key to decide which of the two branches to take
- M-ary search tree needs M-1 keys to decide which branch to take

- M-ary search tree should be balanced in some way.
  - We don’t want an M-ary search tree to degenerate to a linked list, or even a binary search tree
- Thus, require that each node is at least half full!

## Definition

- A B+ tree of order M
- Each internal node has at most M children (M-1 keys)
- Each internal node, except the root, has between $\lceil \frac{M}{2} \rceil -1$ and $M-1$ keys
Each leaf has between $\lceil \frac{L}{2} \rceil $ and $L$ keys and corresponding data items

---

- A $B^+-tree$ of order M (M>3) is an M-ary tree with the following properties:
- The data items are stored in leaves
- The root is either a leaf or has between two and M children
- The non-leaf nodes store up to M-1 keys to guide the searching; key i represents the smallest key in subtree i+1
- All non-leaf nodes (except the root) have between $\lceil \frac{M}{2}\rceil$ and M children
- All leaves are at the same depth and have between $\lceil \frac{L}{2}\rceil$ and L data items, for some L (usually L << M, but we will assume M=L in most examples)

- Keys in internal Nodes
- key i in an internal node is the smallest key in its i+1 subtree (i.e. right subtree of key i)

---

## Insertion Procedure

1. Suppose that we want to insert a key K and its associated record.
2. Search for the key K using the search procedure. This will bring us to a leaf x
3. Insert K into x

Insert Into Leaf

- If leaf x contains < L keys, then insert K into x (at the correct position in node x)
- If x is already full (i.e. containing L keys) then split x
  - Cut x off from its parent
  - Insert K into x, pretending x has space for K. Now x has L+1 keys.
  - After inserting K, split x into 2 new leaves $x_L$ and $x_R$, with $x_L$ containing the $\lfloor \frac{L+1}{2} \rfloor$ smallest keys, and $x_R$ containing the remaining  $\lceil\frac{L+1}{2}\rceil$ keys.  Let J be the minimum key in $x_R$
  - Make a copy of J to be the parent of $x_L$ and $x_R$, and insert the copy together with its child pointers into the old parent of x.

Insert Into Internal Node *When leaf is Full and Internal Node is also Full*

To insert a key K into a full internal node x:

- Cut x off from its parent
- Insert K and its left and right child pointers into x, pretending there is space.  Now x has M keys (and M+1 pointers).
- Split x into 2 new internal nodes $x_L$ and $x_R$, with $x_L$ containing the $( \lceil \frac{M}{2} \rceil -1)$  smallest keys, and $x_R$ containing the $\lfloor \frac {M}{2} \rfloor$ largest keys.  Note that the ${\lceil \frac{M}{2} \rceil}^{th}$ key J is not placed in $x_L$ or $x_R$
Make J the parent of xL and xR, and insert J together with its child pointers into the old parent of x.
