// 111. 二叉树的最小深度
// 已解答
// 简单
// 相关标签
// 相关企业
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

 

// 示例 1：


// 输入：root = [3, 9, 20, null, null, 15, 7]
// 输出：2
// 示例 2：

// 输入：root = [2, null, 3, null, 4, null, 5, null, 6]
// 输出：5


// 提示：

// 树中节点数的范围在[0, 105] 内
//   - 1000 <= Node.val <= 1000



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
// // class Solution {
// // public:
// //     int minDepth(TreeNode* root) {
// //         queue<TreeNode*> que;
// //         int result = 0;
// //         if(root != NULL) que.push(root);
// //         while(!que.empty()){
// //             int size = que.size();
// //             result++;
// //             while(size--){
// //                 TreeNode* node = que.front();
// //                 que.pop();
// //                 if(node->left) que.push(node->left);
// //                 if(node->right) que.push(node->right);
// //                 if(!node->left && !node->right){
// //                     return result;
// //                 }
// //             }
// //         }
// //         return result;
// //     }
// // };


// class Solution {
//   public:
//       int minDepth(TreeNode* root) {
//           if(root == NULL) return 0;
//           if(root->left == NULL && root->right == NULL){
//               return 1;
//           }
//           int min_depth = INT_MAX;
//           if(root->left != NULL){
//               min_depth = min(minDepth(root->left),min_depth);
//           }
//           if(root->right != NULL){
//               min_depth = min(minDepth(root->right),min_depth);
//           }
//           return min_depth + 1;
//       }
//   };