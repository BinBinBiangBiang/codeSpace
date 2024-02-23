// 145. 二叉树的后序遍历
// 已解答
// 简单
// 相关标签
// 相关企业
// 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

 

// 示例 1：


// 输入：root = [1, null, 2, 3]
// 输出：[3, 2, 1]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]


// 提示：

// 树中节点的数目在范围[0, 100] 内
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
// class Solution {
//   public:
//       vector<int> postorderTraversal(TreeNode* root) {
//           vector<int> result;
//           stack<TreeNode*> st;
//           if(root == NULL) return result;
//           st.push(root);
//           while(!st.empty()){
//               TreeNode* cur = st.top();
//               st.pop();
//               result.push_back(cur->val);
//               if(cur->left != NULL) st.push(cur->left);
//               if(cur->right != NULL) st.push(cur->right);
//           }
//           reverse(result.begin(),result.end());
//           return result;
//       }
//   };