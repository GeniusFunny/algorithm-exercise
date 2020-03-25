const { nonMirrorSymmetryTree, mirrorSymmetryTree } = require('./trees')
function kthOfBST(root, k) {
  let numbers = []
  kthOfBSTCore(root, k)
  function kthOfBSTCore(root, k) {
    if (!root) return;
    if (root.left) {
      kthOfBSTCore(root.left, k--)
    }
    numbers.push(root.val)
    if (root.right) {
      kthOfBSTCore(root.right, k--)
    }
  }
  return numbers[k-1]
}
function kthOfBST2(root, k) {
  if (!root || !k) return null;
  function kthOfBST2Core(root) {
    let target = null;
    if (root.left) target = kthOfBST2Core(root.left, k);
    if (!target) {
      if (k === 1) target = root;
      k--
    }
    if (target == null && root.right) {
      target = kthOfBST2Core(root.right, k)
    }
    return target;
  }
  return kthOfBST2Core(root, k);
}
// console.log(kthOfBST(bst, 3))
console.log(kthOfBST2(bst, 3).val)