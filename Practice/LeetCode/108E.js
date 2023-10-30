// 108.给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。

// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var sortedArrayToBST = function (nums) {
  if (!nums.length) {
      return null;
  }

  // 找到序列中点：
  const headIndex = Math.floor(nums.length / 2);

  // 实例化节点头部
  const head = new TreeNode(nums[headIndex]);
  let left = headIndex - 1;
  let right = headIndex + 1;
  // 因为是有序升序列表，则当前头部索引的左侧应该都在树的左子树，同理右子树
  if (left >= 0) {
      // 左侧有节点，对左侧节点进行递归，形成左子树
      head.left = sortedArrayToBST(nums.slice(0, headIndex));
  }
  if (right < nums.length) {
      // 右侧有节点，对右侧节点递归，形成右子树
      head.right = sortedArrayToBST(nums.slice(right));
  }
  // 返回节点
  return head;
};

let nums = [-10,-3,0,5,9];

console.log(sortedArrayToBST(nums));