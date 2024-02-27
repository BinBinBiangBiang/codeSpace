// LCR 145. 判断对称二叉树
// 已解答
// 简单
// 相关标签
// 相关企业
// 请设计一个函数判断一棵二叉树是否 轴对称 。

 

// 示例 1：



// 输入：root = [6, 7, 7, 8, 9, 9, 8]
// 输出：true
// 解释：从图中可看出树是轴对称的。
// 示例 2：



// 输入：root = [1, 2, 2, null, 3, null, 3]
// 输出：false
// 解释：从图中可看出最后一层的节点不对称。


// 提示：

// 0 <= 节点个数 <= 1000

// 注意：本题与主站 101 题相同：https://leetcode-cn.com/problems/symmetric-tree/



// C++:

// /**
//  * Definition for a binary tree node.
//  * struct TreeNode {
//  *     int val;
//  *     TreeNode *left;
//  *     TreeNode *right;
//  *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
//  *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
//  *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
//  * };
//  */
// class Solution {
//   private:
//       bool compare(TreeNode*  left,TreeNode* right){
//           if(left == NULL && right != NULL) return false;
//           else if(left != NULL && right == NULL) return false;
//           else if(left == NULL && right == NULL) return true;
//           else if(left->val != right->val) return false;
  
//           bool outside = compare(left->left,right->right);
//           bool inside = compare(left->right,right->left);
//           bool result = outside && inside;
//           return result;
//       }
//   public:
//       bool checkSymmetricTree(TreeNode* root) {
//           if(root == NULL) return true;
//           return compare(root->left,root->right);
//       }
//   };