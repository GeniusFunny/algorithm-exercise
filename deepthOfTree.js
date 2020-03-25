const BinaryTreeNode = require('./binaryTree').BinaryTree;

const root = new BinaryTreeNode(8);
// root.left = new BinaryTreeNode(6);
// root.right = new BinaryTreeNode(10);
// root.left.left = new BinaryTreeNode(5);
// root.left.right = new BinaryTreeNode(7);
// root.right.left = new BinaryTreeNode(9);
// root.right.right = new BinaryTreeNode(11);
// root.right.right.right = new BinaryTreeNode(11);
// root.right.right.right.right = new BinaryTreeNode(11);
// root.right.right.right.right.right = new BinaryTreeNode(11);
// root.right.right.right.right.right.left = new BinaryTreeNode(11);

function deepOfTree(root) {
  if (!root) return 0;
  return Math.max(deepOfTree(root.left)+1, deepOfTree(root.right)+1);
}
console.log(deepOfTree(root))