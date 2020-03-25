const { nonMirrorSymmetryTree, mirrorSymmetryTree } = require('./trees')

function mirrorSymmetry(root) {
  if (!root) return true;
  function mirrorSymmetryCore(left, right) {
    if (!left && !right) return true; // null === null
    if (left && right && left.val === right.val) {
      return mirrorSymmetryCore(left.left, right.right) && mirrorSymmetryCore(left.right, right.left);
    } else {
      return false;
    }
  }
  return mirrorSymmetryCore(root.left, root.right);
}

console.log(mirrorSymmetry(mirrorSymmetryTree));
console.log(mirrorSymmetry(nonMirrorSymmetryTree));
