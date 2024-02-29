// 105. 从前序与中序遍历序列构造二叉树
// 已解答
// 中等
// 相关标签
// 相关企业
// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

 

// 示例 1:


// 输入: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
// 输出: [3, 9, 20, null, null, 15, 7]
// 示例 2:

// 输入: preorder = [-1], inorder = [-1]
// 输出: [-1]


// 提示:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
//   - 3000 <= preorder[i], inorder[i] <= 3000
// preorder 和 inorder 均 无重复 元素
// inorder 均出现在 preorder
// preorder 保证 为二叉树的前序遍历序列
// inorder 保证 为二叉树的中序遍历序列


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
//       TreeNode* traversal(vector<int>& inorder , vector<int>& postorder){
//           if(postorder.size() == 0) return NULL;
  
//           // 后续遍历数组最后一个元素，就是当前的中间结点
//           int rootValue = postorder[postorder.size()-1];
//           TreeNode* root = new TreeNode(rootValue);
  
//           // 叶子节点
//           if(postorder.size() == 1) return root;
  
//           // 找到中序遍历的切割点
//           int delimiterIndex;
//           for(delimiterIndex = 0; delimiterIndex < inorder.size();delimiterIndex++){
//               if(inorder[delimiterIndex] == rootValue){
//                   break;
//               }
//           }
  
//           // 切割中序数组
//           vector<int> leftInorder(inorder.begin(),inorder.begin() + delimiterIndex);
//           vector<int> rightInorder(inorder.begin() + delimiterIndex + 1,inorder.end());
  
//           // postorder 舍弃末尾元素
//           postorder.resize(postorder.size()-1);
  
//           // 切割后续数组
//           // 依然是左闭右开，注意这里使用了左中序数组的大小作为切割点
//           // [0,leftInorder.size)
//           vector<int> leftPostOrder(postorder.begin(),postorder.begin() + leftInorder.size());
//           // [leftInorder.size,postInorder.size)
//           vector<int> rightPostOrder(postorder.begin() + leftInorder.size(),postorder.end());
  
//           root->left = traversal(leftInorder,leftPostOrder);
//           root->right = traversal(rightInorder,rightPostOrder);
  
//           return root; 
//       }
  
//   public:
//       TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
//           if(inorder.size() == 0) return NULL;
//           return traversal(inorder,postorder);
//       }
//   };