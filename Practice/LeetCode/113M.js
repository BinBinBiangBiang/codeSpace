// 113. 路径总和 II
// 已解答
// 中等
// 相关标签
// 相关企业
// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

// 叶子节点 是指没有子节点的节点。

 

// 示例 1：


// 输入：root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], targetSum = 22
// 输出：[[5, 4, 11, 2], [5, 8, 4, 5]]
// 示例 2：


// 输入：root = [1, 2, 3], targetSum = 5
// 输出：[]
// 示例 3：

// 输入：root = [1, 2], targetSum = 0
// 输出：[]


// 提示：

// 树中节点总数在范围[0, 5000] 内
//   - 1000 <= Node.val <= 1000
//   - 1000 <= targetSum <= 1000



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
//       vector<vector<int>> result;
//       vector<int> path;
//       void traversal(TreeNode* root,int targetSum){
//           if(root->left == NULL && root->right == NULL && targetSum == 0){
//               result.push_back(path);
//               return;
//           }
//           if(root->left == NULL && root->right == NULL && targetSum != 0){
//               return;
//           }
//           if(root->left){
//               path.push_back(root->left->val);
//               targetSum -= root->left->val;
//               traversal(root->left,targetSum);
//               targetSum += root->left->val;
//               path.pop_back();
//           }
//           if(root->right){
//               path.push_back(root->right->val);
//               targetSum -= root->right->val;
//               traversal(root->right,targetSum);
//               targetSum += root->right->val;
//               path.pop_back();
//           }
//           return;
//       }
  
//   public:
//       vector<vector<int>> pathSum(TreeNode* root, int targetSum) {
//           result.clear();
//           path.clear();
//           if(root == NULL) return result;
//           path.push_back(root->val);
//           traversal(root,targetSum - root->val);
//           return result;
//       }
//   };