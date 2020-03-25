const { buildList, printList } = require('./util');
const ListNode = require('./ListNode').ListNode

function mergetList(listA, listB) {
  if (!listA) return listB;
  if (!listB) return listA;
  if (!listA || !listB) return null;

  let currentA = listA;
  let currentB = listB;
  let listC = null;
  let currentC = listC;

  while(currentA && currentB) {
    if (currentA.val <= currentB.val) {
      if (!listC) {
        listC = new ListNode(currentA.val);
        currentC = listC;
      } else {
        let node = new ListNode(currentA.val);
        currentC.next = node;
        currentC = currentC.next;
      }
      currentA = currentA.next;
    } else {
      if (!listC) {
        listC = new ListNode(currentB.val);
        currentC = listC;
      } else {
        let node = new ListNode(currentB.val);
        currentC.next = node;
        currentC = currentC.next;
      }
      currentB = currentB.next;
    }
  }
  while(currentA) {
    let node = new ListNode(currentA.val);
    currentC.next = node;
    currentC = currentC.next;
    currentA = currentA.next;
  }
  while(currentB) {
    let node = new ListNode(currentB.val);
    currentC.next = node;
    currentC = currentC.next;
    currentB = currentB.next;
  }
  return listC;
}

const listA = buildList();
const listB = buildList();
listB.val = 0;
listA.next.val = 3;
listB.next.next.next.val = 5;
const listC = mergetList(listA, listB);
printList(listC);