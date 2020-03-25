const BinaryTreeNode = require('./binaryTree').BinaryTree;

const root = new BinaryTreeNode(8);
root.left = new BinaryTreeNode(6);
root.right = new BinaryTreeNode(10);
root.left.left = new BinaryTreeNode(5);
root.left.right = new BinaryTreeNode(7);
root.right.left = new BinaryTreeNode(9);
root.right.right = new BinaryTreeNode(11);
/*


                    8
              6         10
            5   7     9   11 
*/
// 后序遍历结果：5 7 6 9 11 10 8
// 后序遍历结果：5 7 6
// 后序遍历结果：6 9 11
// 非后序遍历结果： 7 4 6 5

function postSequenceOfBST(seq) {
  function postSequenceOfBSTCore(seq, start, end) {
    if (end - start <= 2) return true;
    let bigIndex = smallerIndex = -1;
    for(let i = start; i < end; i++) {
      // 如果当前节点小于根节点
      if (seq[i] < seq[end]) {
        // 如果在之前节点出现过比根节点大的节点，则此树为非二叉搜索树
        if (bigIndex !== -1) {
          return false;
        } else {
          smallerIndex = i;
        }
      } else {
        if (bigIndex === -1) bigIndex = i;
      }
    }
    debugger
    if (smallerIndex === -1 || bigIndex === -1) {
      return postSequenceOfBSTCore(seq, start, end-1);
    } else {
      return postSequenceOfBSTCore(seq, start, bigIndex-1) && postSequenceOfBSTCore(seq, bigIndex, end-1);
    }
  }
  return postSequenceOfBSTCore(seq, 0, seq.length-1);
}
console.log(postSequenceOfBST([7,4,6,5]))