---
Create Time: 28th February 2024
Title: "[[AVL]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - DataStructure
  - AVL
  - Algorithm
created: 2024-01-16
updated: 2024-03-22
---
# [[AVL]]

- 二叉搜索树，在插入和删除时可能失衡
- 如在插入和删除时旋转，始终令其保持平衡，则成为自平衡点二叉搜索树
- AVL是自平衡二叉搜索树的实现之一

## Unbalance Situation

- LL *一次右旋*
  - 失衡节点左边高
  - 失衡节点左孩子左边高
- LR *失衡节点左子树左旋，再右旋*
  - 失衡节点左边高
  - 失衡节点左孩子右边高
- RL *失衡节点右子树右旋，再左旋*
  - 失衡节点右边高
  - 失衡节点右孩子左边高
- RR *一次左旋*
  - 失衡节点右边高
  - 失衡节点右孩子右边高
