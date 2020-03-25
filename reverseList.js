const { printList, buildList } = require('./util')

// function reverseList(head) {
//   if (!head) return null;
//   let reverseHead = null;
//   let current = head;
//   while(current.next) {
//     current.next.prev = current
//     current = current.next
//   }
//   head.prev = current;
//   reverseHead = current;

//   while(current.prev) {
//     current.next = current.prev;
//     current = current.prev;
//     delete current.next.prev;
//   }
//   head.next = null;
//   return reverseHead;
// }
function reverseList(head) {
  if (!head) return null;
  let reverseHead = null;
  let current = head;
  let prev = null;
  while(current) {
    let next = current.next // 保留指向下一节点的引用
    if (!current.next) reverseHead = current // 如果后面没有节点，则此节点就是尾节点

    current.next = prev // 当前节点指向之前的节点，首节点指向null
    prev = current // 将之前的节点引用指向当前节点
    current = next // 前进到下一节点
  }
  head.next = null;
  return reverseHead;
}

let test = buildList();
test = reverseList(test)
printList(test)
