const BinaryTreeNode = require('./binaryTree').BinaryTree;

const mirrorSymmetryTree = new BinaryTreeNode(8);
const nonMirrorSymmetryTree = new BinaryTreeNode(7);
const bst = new BinaryTreeNode(5);
bst.left = new BinaryTreeNode(3);
bst.right = new BinaryTreeNode(7);
bst.left.left = new BinaryTreeNode(2);
bst.left.right = new BinaryTreeNode(4);
bst.right.left = new BinaryTreeNode(6);
bst.right.right = new BinaryTreeNode(8)

mirrorSymmetryTree.left = new BinaryTreeNode(6)
mirrorSymmetryTree.right = new BinaryTreeNode(6)

mirrorSymmetryTree.left = new BinaryTreeNode(7)

exports.nonMirrorSymmetryTree = nonMirrorSymmetryTree;
exports.mirrorSymmetryTree = mirrorSymmetryTree;
exports.bst = bst;