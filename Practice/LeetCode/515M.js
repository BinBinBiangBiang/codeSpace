515. 在每个树行中找最大值
已解答
中等
相关标签
相关企业
给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。



示例1：



输入: root = [1, 3, 2, 5, 3, null, 9]
输出: [1, 3, 9]
示例2：

输入: root = [1, 2, 3]
输出: [1, 3]


提示：

二叉树的节点个数的范围是[0, 104]
  - 231 <= Node.val <= 231 - 1

C++:

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
  public:
      vector<vector<int>> levelOrder(TreeNode* root) {
          vector<vector<int>> result;
          queue<TreeNode*> que;
          if(root == NULL) return result;
          que.push(root);
          while(!que.empty()){
              int size = que.size();
              vector<int> vec;
              while(size--){
                  TreeNode* cur = que.front();
                  que.pop();
                  vec.push_back(cur->val);
                  if(cur->left) que.push(cur->left);
                  if(cur->right) que.push(cur->right);
              }
              result.push_back(vec);
          }
          return result;
      }
  };