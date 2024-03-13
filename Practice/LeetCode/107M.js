// 107. 二叉树的层序遍历 II
// 已解答
// 中等
// 相关标签
// 相关企业
// 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

 

// 示例 1：


// 输入：root = [3, 9, 20, null, null, 15, 7]
// 输出：[[15, 7], [9, 20], [3]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]


// 提示：

// 树中节点数目在范围[0, 2000] 内
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
// class Solution {
//   public:
//       vector<vector<int>> levelOrderBottom(TreeNode* root) {
//           vector<vector<int>> result;
//           queue<TreeNode*> que;
//           if(root == NULL) return result;
//           que.push(root);
//           while(!que.empty()){
//               int size = que.size();
//               vector<int> curArr;
//               while(size--){
//                   TreeNode* node = que.front();
//                   que.pop();
//                   curArr.push_back(node->val);
//                   if(node->left) que.push(node->left);
//                   if(node->right) que.push(node->right);
//               }
//               result.push_back(curArr);
//           }
//           reverse(result.begin(),result.end());
//           return result;
//       }
//   };


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const result = [];
  if(!root) return result;
  const queue = [];
  queue.push(root);
  while(queue.length){
      let size = queue.length;
      result.unshift([]);
      for(let i = 0 ;i < size ;i++){
          let node = queue.shift();
          result[0].push(node.val);
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
  }
  return result;
};