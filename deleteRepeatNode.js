const { buildList, printList } = require('./util')


function deleteRepeatNode(head) {
  if (head === null) return;
  let current = head;
  while(current !== null) {
    if (current.next) {
      if (current.val === current.next.val) {
        current.next = current.next.next
        current = current.next
      } else {
        current = current.next
      }
    }
  }
}

const head = buildList()
head.next.val = 1
head.next.next.val = 4
head.next.next.next.next.next.next.next.next.val = 8
deleteRepeatNode(head)
printList(head)
// deleteNode(head, head.next.next)