const ListNode = require('./ListNode').ListNode
const BinaryTree = require('./binaryTree').BinaryTree;
function buildList() {
  const head = new ListNode(1);
  let current = head;
  for (let i = 2; i < 10; i++) {
    let node = new ListNode(i);
    current.next = node;
    current = node;
  }
  return head;
}
function printList(node) {
  let current = node;
  while(current) {
    console.log(current.val);
    current = current.next;
  }
}

function buildBinarytree(data = [], mode = 'x') {
  if (mode === 'x') {

  }
}

exports.buildBinarytree = buildBinarytree;
exports.buildList = buildList;
exports.printList = printList;
