// 429. N 叉树的层序遍历
// 已解答
// 中等
// 相关标签
// 相关企业
// 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。

// 树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。

 

// 示例 1：



// 输入：root = [1, null, 3, 2, 4, null, 5, 6]
// 输出：[[1], [3, 2, 4], [5, 6]]
// 示例 2：



// 输入：root = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]
// 输出：[[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]]


// 提示：

// 树的高度不会超过 1000
// 树的节点总数在[0, 10 ^ 4] 之间


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
//       vector<vector<int>> levelOrder(TreeNode* root) {
//           vector<vector<int>> result;
//           queue<TreeNode*> que;
//           if(root == NULL) return result;
//           que.push(root);
//           while(!que.empty()){
//               int size = que.size();
//               vector<int> vec;
//               while(size--){
//                   TreeNode* cur = que.front();
//                   que.pop();
//                   vec.push_back(cur->val);
//                   if(cur->left) que.push(cur->left);
//                   if(cur->right) que.push(cur->right);
//               }
//               result.push_back(vec);
//           }
//           return result;
//       }
//   };