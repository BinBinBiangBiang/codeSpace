// 102. 二叉树的层序遍历
// 已解答
// 中等
// 相关标签
// 相关企业
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

 

// 示例 1：


// 输入：root = [3, 9, 20, null, null, 15, 7]
// 输出：[[3], [9, 20], [15, 7]]
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
var levelOrder = function(root) {
  let result = [];
  if(!root) return result;
  let queue = [];
  queue.push(root);
  while(queue.length){
      let size = queue.length;
      // let arr = [];
      result.push([]);
      for(let i = 0;i<size;i++){
          const node = queue.shift();
          // arr.push(node.val);
          result[result.length-1].push(node.val)
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
      }
  }
  return result;
};