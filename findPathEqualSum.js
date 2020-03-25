const { nonMirrorSymmetryTree, mirrorSymmetryTree, bst } = require('./trees')
function findPathEqualSum(root, sum) {
  let current = 0;
  let path = [];

  function findPathEqualSumCore(node, sum) {
    let target = false;
    if (node === null) return false;

    path.push(node.val);
    current += node.val;
    if (current === sum && !node.left && !node.right) {
      return true;
    }
    if (node.left) target = findPathEqualSumCore(node.left, sum);
    if (target) return true;
    if (node.right) target = findPathEqualSumCore(node.right, sum);
    if (target) return true;
    path.pop();
    current -= node.val;
    return false;
  }
  findPathEqualSumCore(root, sum)
}
findPathEqualSum(bst, 12);

/*
        5
    3       7
  2   4    6  8
*/