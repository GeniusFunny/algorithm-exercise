const { preOrder, layerTravel } = require('./layer_travel')

class BinaryTreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
    this.parent = null
  }
}
const root = new BinaryTreeNode(1);
root.parent = null;

root.left = new BinaryTreeNode(2);
root.left.parent = root;

root.right = new BinaryTreeNode(3);
root.right.parent = root;

root.left.left = new BinaryTreeNode(4);
root.left.left.parent = root.left;

root.left.right = new BinaryTreeNode(5);
root.left.right.parent = root.left;

root.right.left = new BinaryTreeNode(6);
root.right.left.parent = root.right;

root.right.right = new BinaryTreeNode(7);
root.right.right.parent = root.right;

root.left.right.left = new BinaryTreeNode(8);
root.left.right.left.parent = root.left.right;

root.left.right.right = new BinaryTreeNode(9);
root.left.right.right.parent = root.left.right;

function findNextTreeNode(root, node) {
  if (!root || !node) return null;
  // 如果有右子树
  if (node.right) {
    console.log('有右子树')
    let leftNode = node.right;
    while(true) {
      if (leftNode.left) leftNode = leftNode.left
      else return leftNode;
    }
  }
  else if(node.right && node.parent.left === node) return node.parent;
  else {
    // 无右子节点且为父节点的右节点
    let parent = node.parent;
    while(true) {
      if (!parent.parent) return null;
      if (parent === parent.parent.left) return parent.parent
      else parent = parent.parent
    }
  }
}

console.log(findNextTreeNode(root, root.left.right.right).val)

/*

              1
        2          3
    4     5     6     7
        8   9        1  2

4 2 8 5 9 1 6 3 7
*/
