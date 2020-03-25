const ListNode = require('./ListNode')
function listPrint(node) {
  if (!node) return;
  if (node.next) {
    listPrint(node.next);
    console.log(node.val)
  } else {
    console.log(node.val);
  }
}
const head = new ListNode(1)
listPrint(head);