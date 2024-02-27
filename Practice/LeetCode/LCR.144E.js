// LCR 144. 翻转二叉树
// 已解答
// 简单
// 相关标签
// 相关企业
// 给定一棵二叉树的根节点 root，请左右翻转这棵二叉树，并返回其根节点。

 

// 示例 1：



// 输入：root = [5, 7, 9, 8, 3, 2, 4]
// 输出：[5, 9, 7, 4, 2, 3, 8]


// 提示：

// 树中节点数目范围在[0, 100] 内
//   - 100 <= Node.val <= 100


// 注意：本题与主站 226 题相同：https://leetcode-cn.com/problems/invert-binary-tree/

// C++:

// /**
//  * Definition for a binary tree node.
//  * struct TreeNode {
//  *     int val;
//  *     TreeNode *left;
//  *     TreeNode *right;
//  *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
//  * };
//  */
// class Solution {
//   private:
//       TreeNode* reverseNode(TreeNode* root){
//           if(root == NULL) return 0;
//           swap(root->left,root->right);
//           reverseNode(root->left);
//           reverseNode(root->right);
//           return root;
//       }
//   public:
//       TreeNode* mirrorTree(TreeNode* root) {
//           reverseNode(root);
//           return root;
//       }
//   };