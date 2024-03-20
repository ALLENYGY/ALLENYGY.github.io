---
Create Time: 1st February 2024
Title: "[[Recursion-BinaryTree]]"
Author:
  - AllenYGY
tags:
  - NOTE
  - Algorithm
theme: 递归
---

# **Recursion-BinaryTree**

## [二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

刚开始直接左右节点分别遍历，取最小值
没考虑根节点只有一个分支的情况
```cpp
class Solution {
public:
	int minDepth(TreeNode* root) {
		if(root==nullptr) return 0;
		int left = minDepth(root->left);
		int right = minDepth(root->right);	
		return min(left,right)+1;	
	}
};
```
每一层的情况递归时没有加一
```cpp
class Solution {
public:
	int minDepth(TreeNode* root) {
		if(root->left==nullptr&&root->right==nullptr) return 1;
		else if(root->left==nullptr&&root->right!=nullptr) 					return minDepth(root->right);
		else if(root->left!=nullptr&&root->right==nullptr) 					return minDepth(root->left);
		else 
			return 
				min(minDepth(root->right),minDepth(root->left));
	}
};
```

```cpp
class Solution {
public:
	int minDepth(TreeNode* root) {
		if(root==nullptr)return 0;
		if(root->left==nullptr && root->right==nullptr) 
			return 1;
		int m1=minDepth(root->right);
		int m2=minDepth(root->left);
		if(root->left==nullptr||root->right==nullptr) 
			return m1+m2+1;
		return min(m1,m2)+1;
	}
};
```

## [路径总和](https://leetcode.cn/problems/path-sum/)

#Experience 
叶子节点的定义
```cpp
node->left==nullptr&&node->right==nullptr
```

```cpp
class Solution {
public:
	bool hasPathSum(TreeNode* root, int targetSum) {
		if(root==nullptr)return false;
		if(root->left==nullptr&&root->right==nullptr) 
			return targetSum==root->val;
		bool l = hasPathSum(root->left,targetSum-root->val);
		bool r = hasPathSum(root->right,targetSum-root->val);
		return l||r;
	}
};
```


## [路径总和 II](https://leetcode.cn/problems/path-sum-ii/)

#achievement
第一次独立写出，递归，回溯？哈哈哈哈

```cpp
class Solution {
vector<vector<int>> res;
vector<int> v;
public:
	void dfs(TreeNode* root, int targetSum) { 
		if(root==nullptr) return ;
		if(root->left==nullptr&&root->right==nullptr)
			if(targetSum==root->val){
				v.push_back(root->val);
				res.push_back(v);
				v.pop_back();
			}
		if(root->left){
			v.push_back(root->val);
			dfs(root->left,targetSum-root->val);
			v.pop_back();
		}
		if(root->right){
			v.push_back(root->val);
			dfs(root->right,targetSum-root->val);
			v.pop_back();
		}
}

	vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
    	if(root==nullptr)return {};
    	dfs(root,targetSum);
    	return res; 
    }

};
```

## [求根节点到叶节点数字之和](https://leetcode.cn/problems/sum-root-to-leaf-numbers/)

```cpp
class Solution {
vector<vector<int>>res;
vector<int>v;
public:
	void dfs(TreeNode* root){
		if(root->left==nullptr&&root->right==nullptr){	
			v.push_back(root->val);
            res.push_back(v);
            v.pop_back();
		}
        if(root->left){
            v.push_back(root->val);
            dfs(root->left);
            v.pop_back();
		}			
		if(root->right){
			v.push_back(root->val);
            dfs(root->right);
            v.pop_back();	
		}	
	}

    int sumNumbers(TreeNode* root) {
    	if(root==nullptr)return 0;
	    dfs(root);
	    int ans=0;
        for(auto row:res){
        	int tmp=0;
        	for(int num:row){
        		tmp=((tmp*10)+num);
    		}	
	    	ans+=tmp;
    	}
    	return ans;
	}
};
```
官解简洁写法
```cpp
class Solution { 
public: 
	int dfs(TreeNode* root, int prevSum) {
		if (root == nullptr) { return 0; } 
		int sum = prevSum * 10 + root->val; 
		if (root->left == nullptr && root->right == nullptr){ 				return sum;
		} else { 
			return dfs(root->left, sum) + dfs(root->right,sum);
		} 
	} 
	int sumNumbers(TreeNode* root) {
		 return dfs(root, 0); 
	} 
};
```

## [二叉树的所有路径](https://leetcode.cn/problems/binary-tree-paths/)

#Experience 
把变量当作参数传递进函数，则不需要回溯变量

```cpp
class Solution {
public:
	void construct_paths(TreeNode* root, string path, vector<string>& paths) {
    	if (root != nullptr) {
    		path += to_string(root->val);
    		if (root->left == nullptr && root->right == nullptr) { // 当前节点是叶子节点
    			paths.push_back(path); // 把路径加入到答案中
    		} else {
    			path += "->"; // 当前节点不是叶子节点，继续递归遍历
    			construct_paths(root->left, path, paths);
    			construct_paths(root->right, path, paths);
    		}
    	}
    
    }
	vector<string> binaryTreePaths(TreeNode* root) {
		vector<string> paths;
		construct_paths(root, "", paths);
		return paths;
	}
};
```

## [统计二叉树中好节点的数目](https://leetcode.cn/problems/count-good-nodes-in-binary-tree/)

```cpp
class Solution {
public:
	int goodNodes(TreeNode* root,int mx=INT_MIN) {
		if(root==nullptr) return 0;
		int left = goodNodes(root->left,max(mx,root->val));
		int right = goodNodes(root->right, max(mx,root->val));
		return left+right+(mx<=root->val);
	}
};
```

## [二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)
#Experience 
先遍历右子树并根据深度决定是否记录该节点
```cpp
class Solution {
vector<int>ans;
public:
	void dfs(TreeNode* root,int depth){
		if(depth==ans.size()) ans.push_back(root->val);
		if(root->right) dfs(root->right,depth+1);
		if(root->left) dfs(root->left,depth+1);
	}
	vector<int> rightSideView(TreeNode* root) {
		if(root==nullptr)return {};
		dfs(root,0);
		return ans;
	}
};
```

## [相同的树](https://leetcode.cn/problems/same-tree/)
#Experience 
开始的时候犹豫当前节点判断，左子树判断和右子树判断
后来发现并列就好了
```cpp
class Solution {
public:
	bool isSameTree(TreeNode* p, TreeNode* q) {
		if(p==nullptr||q==nullptr)return (p==q);
		return (p->val==q->val)&&(isSameTree(p->left,q->left))&&(isSameTree(p->right,q->right));
	}
};
```
## [对称二叉树](https://leetcode.cn/problems/symmetric-tree/)
```cpp
class Solution {
public:
	bool isSame(TreeNode* p,TreeNode *q){
		if(p==nullptr||q==nullptr)return (p==q);
		return (p->val==q->val)&&isSame(p->left,q->right)&&isSame(p->right,q->left);
	}
	bool isSymmetric(TreeNode* root) {
		return isSame(root->left,root->right);
	}
};
```
## [平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)
```cpp
class Solution {
public:
	int get_height(TreeNode *node){
		if(node==nullptr)return 0;
		int leftH = get_height(node->left);
		if(leftH==-1) return -1;
		int rightH = get_height(node->right);
		if(rightH==-1||abs(leftH-rightH)>1)return -1;
		return max(leftH,rightH)+1;
	}
	bool isBalanced(TreeNode* root) {
		return get_height(root)!=-1;
	}
};
```
## [翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)
```cpp
class Solution {
public:
	TreeNode* invertTree(TreeNode* root) {
		if(root==nullptr)return nullptr;
		root->left=invertTree(root->left);
		root->right=invertTree(root->right);
		TreeNode*tmp=root->left;
		root->left=root->right;
		root->right=tmp;
		return root;
	}
};
```
## [根到叶路径上的不足节点](https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths/)
#Experience 
- 我理解到，只能先删叶子节点
判断叶子节点
```cpp
if (root->left == root->right) 
```
- 如果 limit > 0 说明从根到叶子的路径和小于 limit，删除叶子，否则不删除
- 如果有儿子没被删除，就不删 root，否则删 root
判断是否存在子节点
```CPP
if(root->left || root->right)
```

```cpp
class Solution {
public:
	TreeNode* sufficientSubset(TreeNode* root, int limit) {
		limit -= root->val;
		if (root->left == root->right) 
			return limit > 0 ? nullptr : root;
		if(root->left) root->left = sufficientSubset(root->left, limit);
		if(root->right) root->right = sufficientSubset(root->right, limit);
		return root->left || root->right ? root : nullptr;
	}
};
```

## [二叉树中的最长交错路径](https://leetcode.cn/problems/longest-zigzag-path-in-a-binary-tree/)

```cpp
class Solution {
	int ans = 0; // 用于记录最大长度的全局变量
	void getlongestZigZag(TreeNode* root, bool is_left, int len) {
    	if (root == nullptr) {
    	    ans = max(ans, len); // 更新最大长度
    	    return;
        }   
        // 递归地在左右子树中查找交错路径
        if (is_left) {
    	// 如果当前方向是左，那么我们要在右子树中继续找交错路径，并且长度加一
    	    getlongestZigZag(root->right, false, len + 1); // 向右走
    	    getlongestZigZag(root->left, true, 1); // 重新开始计数
        } else {
        // 如果当前方向是右，那么我们要在左子树中继续找交错路径，并且长度加一
     		getlongestZigZag(root->left, true, len + 1); // 向左走
         	getlongestZigZag(root->right, false, 1); // 重新开始计数
    	}	
	}
public:
	int longestZigZag(TreeNode* root) {
		getlongestZigZag(root->left, true, 1); // 当我们从根节点向左移动时，路径长度变为1
		getlongestZigZag(root->right, false, 1); // 同理，当我们从根节点向右移动时，路径长度变为1
		return ans -1; // 因为长度是从1开始的，我们需要减去1
	}
};
```