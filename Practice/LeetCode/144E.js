// 144. 二叉树的前序遍历
// 已解答
// 简单
// 相关标签
// 相关企业
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

 

// 示例 1：


// 输入：root = [1, null, 2, 3]
// 输出：[1, 2, 3]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：


// 输入：root = [1, 2]
// 输出：[1, 2]
// 示例 5：


// 输入：root = [1, null, 2]
// 输出：[1, 2]


// 提示：

// 树中节点数目在范围[0, 100] 内
//   - 100 <= Node.val <= 100


// 进阶：递归算法很简单，你可以通过迭代算法完成吗？


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
// // private:
// //     void firstBL(TreeNode* cur , vector<int>& vec){
// //         if(cur == NULL){
// //             return ;
// //         }
// //         vec.push_back(cur->val);
// //         firstBL(cur->left,vec);
// //         firstBL(cur->right,vec);
// //     }
// // public:
// //     vector<int> preorderTraversal(TreeNode* root) {
// //         vector<int> result;
// //         firstBL(root,result);
// //         return result;
// //     }
// // };

// class Solution {
//   public:
//       vector<int> preorderTraversal(TreeNode* root) {
//           vector<int> result;
//           stack<TreeNode*> st;
//           if(root == NULL) {
//               return result;
//           }
//           st.push(root);
//           while(!st.empty()){
//               TreeNode* node = st.top();
//               st.pop();
//               result.push_back(node->val);
//               if(node->right != NULL){
//                   st.push(node->right);
//               }
//               if(node->left != NULL){
//                   st.push(node->left);
//               }
//           }
//           return result;
//       }
//   };