function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const rootVal = preorder[0];
  const root = new TreeNode(rootVal);

  const rootIndex = inorder.indexOf(rootVal);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
  const rightPreorder = preorder.slice(1 + leftInorder.length);

  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}

const preorder = [3, 5, 6, 2, 7, 4, 1, 0, 8];
const inorder = [6, 5, 7, 2, 4, 3, 0, 1, 8];

const treeRootFromPreIn = buildTree(preorder, inorder);
printTree(treeRootFromPreIn);