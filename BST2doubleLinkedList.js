const { bst } = require('./trees')
/*
        5
    3       7
  2   4    6  8
*/

function convert(root) {
  let last = null;
  convertNode(root, last);
  let head = last;
  while(head && head.left !== null) head = head.left;
  return head;
}
function convertNode(node, last) {
  if (!node) return;
  let current = node;
  if (node.left) convertNode(node.left, last)
  current.left = last;
  if (last) last.right = current;
  last = current;
  if (node.right) convertNode(node.right, last);
}

convert(bst)