// LCR 124. 推理二叉树
// 已解答
// 中等
// 相关标签
// 相关企业
// 某二叉树的先序遍历结果记录于整数数组 preorder，它的中序遍历结果记录于整数数组 inorder。请根据 preorder 和 inorder 的提示构造出这棵二叉树并返回其根节点。



// 注意：preorder 和 inorder 中均不含重复数字。

 

// 示例 1：



// 输入: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]

// 输出: [3, 9, 20, null, null, 15, 7]
 

// 示例 2:

// 输入: preorder = [-1], inorder = [-1]

// 输出: [-1]


// 提示:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
//   - 3000 <= preorder[i], inorder[i] <= 3000
// inorder 均出现在 preorder
// preorder 保证 为二叉树的前序遍历序列
// inorder 保证 为二叉树的中序遍历序列


// C++:

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
//       TreeNode* traversal(vector<int>& preorder,vector<int>& inorder){
//           if(preorder.size() == 0) return NULL;
  
//           int rootValue = preorder[0];
//           TreeNode* root = new TreeNode(rootValue);
          
//           if(preorder.size() == 1) return root;
  
//           int initialIndex;
//           for(initialIndex = 0 ;initialIndex < inorder.size();initialIndex++){
//               if(inorder[initialIndex] == rootValue){
//                   break;
//               }
//           }
  
//           // 切割中序数组
//           vector<int> leftInorder(inorder.begin(),inorder.begin() + initialIndex);
//           vector<int> rightInorder(inorder.begin() + initialIndex + 1,inorder.end());
  
//           // 切割前序数组
  
//           // 舍弃已经用过的值
//           preorder.erase(preorder.begin());
  
//           vector<int> leftPreorder(preorder.begin(),preorder.begin() + leftInorder.size());
//           vector<int> rightPreorder(preorder.begin() + leftInorder.size(),preorder.end());
  
//           root->left = traversal(leftPreorder,leftInorder);
//           root->right = traversal(rightPreorder,rightInorder);
  
//           return root;
//       }
  
//   public:
//       TreeNode* deduceTree(vector<int>& preorder, vector<int>& inorder) {
//           if(preorder.size() == 0){
//               return NULL;
//           }
//           return traversal(preorder,inorder);
//       }
//   };