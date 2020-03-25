const { buildList, printList } = require('./util')


function deleteNode(head, nodeToBeDeleted) {
  if (!nodeToBeDeleted || !head) return;
  // 如果删除的不是尾节点，当前节点直接改为下一节点，，O(1)
  if (nodeToBeDeleted.next) {
    nodeToBeDeleted.val = nodeToBeDeleted.next.val
    nodeToBeDeleted.next = nodeToBeDeleted.next.next
  } else {
    // 如果被删除节点是尾节点, O(n)
    let current = head
    while(current.next !== nodeToBeDeleted) {
      current = current.next
    }
    current.next = null
  }
}

const head = buildList()

deleteNode(head, null)
deleteNode(head, head)
printList(head)
// deleteNode(head, head.next.next)