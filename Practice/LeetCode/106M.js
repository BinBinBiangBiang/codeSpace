// 106. 从中序与后序遍历序列构造二叉树
// 已解答
// 中等
// 相关标签
// 相关企业
// 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

 

// 示例 1:


// 输入：inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
// 输出：[3, 9, 20, null, null, 15, 7]
// 示例 2:

// 输入：inorder = [-1], postorder = [-1]
// 输出：[-1]


// 提示:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
//   - 3000 <= inorder[i], postorder[i] <= 3000
// inorder 和 postorder 都由 不同 的值组成
// postorder 中每一个值都在 inorder 中
// inorder 保证是树的中序遍历
// postorder 保证是树的后序遍历


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