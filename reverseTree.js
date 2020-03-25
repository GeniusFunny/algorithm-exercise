
const BinaryTreeNode = require('./binaryTree').BinaryTree;
const { preOrder, layerTravel } = require('./layer_travel')

const root = new BinaryTreeNode(8);
root.left = new BinaryTreeNode(6);
root.right = new BinaryTreeNode(10);
root.left.left = new BinaryTreeNode(5);
root.left.right = new BinaryTreeNode(7);
root.right.left = new BinaryTreeNode(9);
root.right.right = new BinaryTreeNode(11);
// root.right.right.right = new BinaryTreeNode(12);
// root.right.right.right.right = new BinaryTreeNode(13);
// root.right.right.right.right.right = new BinaryTreeNode(14);
// root.right.right.right.right.right.left = new BinaryTreeNode(15);


function reverse(root) {
  if (!root) return null;
  if (root.left) reverse(root.left);
  if (root.right) reverse(root.right);
  let temp = root.left;
  root.left = root.right
  root.right = temp;
}

// layerTravel(root)
reverse(root);
console.log('\n')
layerTravel(root)