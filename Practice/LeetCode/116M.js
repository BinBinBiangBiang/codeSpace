// 116. 填充每个节点的下一个右侧节点指针
// 已解答
// 中等
// 相关标签
// 相关企业
// 给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

// struct Node {
//   int val;
//   Node * left;
//   Node * right;
//   Node * next;
// }
// 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

// 初始状态下，所有 next 指针都被设置为 NULL。

 

// 示例 1：



// 输入：root = [1, 2, 3, 4, 5, 6, 7]
// 输出：[1,#, 2, 3,#, 4, 5, 6, 7,#]
// 解释：给定二叉树如图 A 所示，你的函数应该填充它的每个 next 指针，以指向其下一个右侧节点，如图 B 所示。序列化的输出按层序遍历排列，同一层节点由 next 指针连接，'#' 标志着每一层的结束。
// 示例 2:

// 输入：root = []
// 输出：[]


// 提示：

// 树中节点的数量在[0, 212 - 1] 范围内
//   - 1000 <= node.val <= 1000


// 进阶：

// 你只能使用常量级额外空间。
// 使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。


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