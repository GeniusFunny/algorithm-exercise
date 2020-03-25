const { buildList, printList } = require('./util')

function getMeetingNode(head) {
  if (!head) return null
  let slow = head;
  let fast = head.next;
  while(slow !== null && fast !== null) {
    if (slow === fast) return fast;
    slow = slow.next;
    fast = fast.next;

    if (fast) {
      fast = fast.next
    }
  }
  return null
}
function entryNodeOfLoop(head) {
  let meetingNode = getMeetingNode(head);
  let nodesOfLoop = 0;
  if (head === null || meetingNode === null) return;
  let current = meetingNode;
  while(current !== null) {
    current = current.next;
    nodesOfLoop++;
    if (current === meetingNode) break;
  }
  let nodeA = head;
  for(let i = 0; i < nodesOfLoop; i++) {
    nodeA = nodeA.next
  }
  let nodeB = head;
  while(nodeA !== nodeB) {
    nodeA = nodeA.next
    nodeB = nodeB.next
  }
  return nodeA;
}


const head = buildList();
head.next.next.next.next.next.next.next.next.next = head.next.next.next
// 9-> 4
// 1 - > 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 