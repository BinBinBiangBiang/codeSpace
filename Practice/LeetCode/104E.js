// 104. 二叉树的最大深度
// 已解答
// 简单
// 相关标签
// 相关企业
// 给定一个二叉树 root ，返回其最大深度。

// 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

 

// 示例 1：



 

// 输入：root = [3,9,20,null,null,15,7]
// 输出：3
// 示例 2：

// 输入：root = [1,null,2]
// 输出：2
 

// 提示：

// 树中节点的数量在 [0, 104] 区间内。
// -100 <= Node.val <= 100


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
//   public:
//       int maxDepth(TreeNode* root) {
//           if(root == nullptr){
//               return 0;
//           }
//           int left = maxDepth(root->left);
//           int right = maxDepth(root->right);
//           return max(left,right)+1;
//       }
//   };

// // 层次遍历计算最大深度
// class Solution {
//   public:
//       int maxDepth(TreeNode* root) {
//           int result = 0;
//           queue<TreeNode*> que;
//           if(root != NULL) que.push(root);
//           while(!que.empty()){
//               int size = que.size();
//               result++;
//               while(size--){
//                   TreeNode* node = que.front();
//                   que.pop();
//                   if(node->left) que.push(node->left);
//                   if(node->right) que.push(node->right);
//               }
//           }
//           return result;
//       }
//   };