const ListNode = require('./ListNode').ListNode
console.log(ListNode)

function kToLast(head, k) {
  if (k < 1 || !head) return;
  let currentA = currentB = head
  let index = 1;
  while(index < k && currentA) {
    currentA = currentA.next;
    index++;
  }
  if (!currentA && index < k) return;
  while(currentA) {
    if (currentA.next === null) {
      return currentB.val
    }
    currentA = currentA.next
    currentB = currentB.next
  }
}

const head = new ListNode(1);
let current = head
for(let i = 2; i < 10; i++) {
  let node = new ListNode(i);
  current.next = node
  current = current.next
}
for (let i = 0; i < 20; i++) {
  console.log(kToLast(head, i))
}
