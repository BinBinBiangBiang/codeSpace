// 257. 二叉树的所有路径
// 已解答
// 简单
// 相关标签
// 相关企业
// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

 
// 示例 1：


// 输入：root = [1, 2, 3, null, 5]
// 输出：["1->2->5", "1->3"]
// 示例 2：

// 输入：root = [1]
// 输出：["1"]


// 提示：

// 树中节点的数目在范围[1, 100] 内
//   - 100 <= Node.val <= 100

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
//       void calcutatePath(TreeNode* node,vector<int>& path,vector<string>& result){
//           path.push_back(node->val);
//           if(node->left == NULL && node->right == NULL){
//               string str;
//               for(int i = 0;i < path.size()-1 ;i++){
//                   str += to_string(path[i]);
//                   str += "->";
//               }
//               str += to_string(path[path.size()-1]);
//               result.push_back(str);
//               return;
//           } 
  
//           if(node->left){
//               calcutatePath(node->left,path,result);
//               path.pop_back();
//           }   
//           if(node->right){
//               calcutatePath(node->right,path,result);
//               path.pop_back();
//           }
//       }
//   public:
//       vector<string> binaryTreePaths(TreeNode* root) {
//           vector<int> path;
//           vector<string> result;
//           if(root == NULL) return result;
//           calcutatePath(root,path,result);
//           return result;
//       }
//   };