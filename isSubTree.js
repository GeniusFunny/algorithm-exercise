function hasSubTree(treeA, treeB) {
  if ( !treeA || !treeB) return false;
  let result = false;
  if (treeA.val === treeB.val) {
    result = doesTreeAHasTreeB(treeA, treeB);
  }
  if (!result) result = hasSubTree(treeA.left, treeB);
  if (!result) result = hasSubTree(treeA.right, treeB);
  
  return result;
  
}

function doesTreeAHasTreeB(treeA, treeB) {
  if (!treeB) return true; // 如果treeB为空，则直接返回true
  if (!treeA) return false; // 若treeA不存在，则直接返回false

  if (treeA.val !== treeB.val) return false; // 若首节点不同，直接返回fasle
  
  return doesTreeAHasTreeB(treeA.left, treeB.left) && doesTreeAHasTreeB(treeA.right, treeB.right); // 当前节点相同，继续判断子节点
}