const BinaryTreeNode = require('./binaryTree').BinaryTree;

function layerTravel(root) {
  const queue = []
  queue.push(root);
  while(queue.length) {
    let node = queue.shift();
    console.log(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}
function preOrder(root) {
  if (!root) return;
  console.log(root.val)
  if (root.left) preOrder(root.left);
  if (root.right) preOrder(root.right);
}
function inOrder(root) {
  if (!root) return;
  if (root.left) inOrder(root.left);
  console.log(root.val)
  if (root.right) inOrder(root.right);
}
function postOrder(root) {
  if (!root) return;
  if (root.left) inOrder(root.left);
  if (root.right) inOrder(root.right);
  console.log(root.val)
}
const root = new BinaryTreeNode(8);
root.left = new BinaryTreeNode(6);
root.right = new BinaryTreeNode(10);
root.left.left = new BinaryTreeNode(5);
root.left.right = new BinaryTreeNode(7);
root.right.left = new BinaryTreeNode(9);
root.right.right = new BinaryTreeNode(11);

exports.layerTravel = layerTravel;
exports.preOrder = preOrder;
// layerTravel(root);
// preOrder(root);
// inOrder(root);
// postOrder(root);
