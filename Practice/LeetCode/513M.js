// 513. 找树左下角的值
// 已解答
// 中等
// 相关标签
// 相关企业
// 给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

// 假设二叉树中至少有一个节点。

 

// 示例 1:



// 输入: root = [2, 1, 3]
// 输出: 1
// 示例 2:



// 输入: [1, 2, 3, 4, null, 5, 6, null, null, 7]
// 输出: 7


// 提示:

// 二叉树的节点个数的范围是[1, 104]
//   - 231 <= Node.val <= 231 - 1

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

// // 递归解决
// // class Solution {
// // public:
// //     int maxDepth = INT_MIN;
// //     int result;

// //     void traversal(TreeNode* node,int depth){
// //         if(node->left == NULL && node->right == NULL){
// //             if(depth > maxDepth){
// //                 maxDepth = depth;
// //                 result = node->val;
// //             }
// //             return;
// //         }
// //         if(node->left){
// //             depth++;
// //             traversal(node->left,depth);
// //             depth--;
// //         }
// //         if(node->right){
// //             depth++;
// //             traversal(node->right,depth);
// //         }
// //         return;
// //     }

// //     int findBottomLeftValue(TreeNode* root) {
// //         traversal(root,0);
// //         return result;
// //     }
// // };


// // 层次遍历
// class Solution {
//   private:
//       int findResult(TreeNode* node){
//           queue<TreeNode*> que;
//           int result = 0;
//           if(node != NULL){
//               que.push(node);
//           }
//           while(!que.empty()){
//               int size = que.size();
//               for(int i = 0;i<size;i++){
//                   TreeNode* curNode = que.front();
//                   que.pop();
//                   if(i == 0) result = curNode->val;
//                   if(curNode->left) que.push(curNode->left);
//                   if(curNode->right) que.push(curNode->right);
//               }
//           }
//           return result;
//       }
//   public:
//       int findBottomLeftValue(TreeNode* root) {
//           return findResult(root);
//       }
//   };