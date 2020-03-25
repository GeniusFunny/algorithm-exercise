const BinaryTree = require('./binaryTree').BinaryTree;

function buildBinaryTree(preOrder, inOrder) {
  const length = preOrder.length;
  function buildBinaryTreeCore(preOrderStart, preOrderEnd, inOrderStart, inOrderEnd) {
    const rootValue = preOrder[preOrderStart];
    const root = new BinaryTree(rootValue)
    //只有一个节点
    if (preOrderStart === preOrderEnd) {
      if (inOrderStart === inOrderEnd && preOrder[preOrderStart] === inOrder[inOrderStart]) return root;
      else {
        console.log('fuck')
        return null;
      }
    }
    // 计算出跟节点在中序遍历序列的位置
    let rootPositionOfInOrder = inOrderStart;
    for(let i = inOrderStart; i < inOrderEnd; i++) {
      if (rootValue === inOrder[i]) {
        rootPositionOfInOrder = i;
      }
    }
  
    let leftLength = rootPositionOfInOrder - inOrderStart; // 计算出左子树的长度
    let leftPreOrderEnd = preOrderStart + leftLength; // 在先序序列里标记最后一个左子树节点
    if (leftLength > 0) {
      root.left = buildBinaryTreeCore(preOrderStart+1, leftPreOrderEnd, inOrderStart, inOrderStart-1);
    }
    if (leftLength < preOrderEnd - preOrderStart) {
      root.right = buildBinaryTreeCore(leftPreOrderEnd+1, preOrderEnd, rootPositionOfInOrder+1, inOrderEnd)
    }
    return root;
  }
  if (preOrder === null || inOrder === null) return null;
  return buildBinaryTreeCore(0, length-1, 0, length-1);
}