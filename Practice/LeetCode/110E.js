110. 平衡二叉树
已解答
简单
相关标签
相关企业
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：


输入：root = [3, 9, 20, null, null, 15, 7]
输出：true
示例 2：


输入：root = [1, 2, 2, 3, 3, null, null, 4, 4]
输出：false
示例 3：

输入：root = []
输出：true


提示：

树中的节点数在范围[0, 5000] 内
  - 104 <= Node.val <= 104


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
  private:
      int getHeight(TreeNode* node){
          if(node == NULL) return 0;
          int left = getHeight(node->left);
          if(left == -1) return -1;
          int right = getHeight(node->right);
          if(right == -1) return -1;
          if(abs(right - left) > 1){
              return -1;
          }else{
              return 1 + max(left,right);
          }
      }
  public:
      bool isBalanced(TreeNode* root) {
          int height = getHeight(root);
          if(height == -1){
              return false;
          }else{
              return true;
          }
      }
  };