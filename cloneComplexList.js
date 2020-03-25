class ComplexListNode {
  constructor(val = 0) {
    this.val = val
    this.next = null
    this.sibling = null
  }
}
function buildComplexList() {
  const head = new ComplexListNode(0);
  let current = head;
  for(let i = 1; i < 11; i++) {
    const node = new ComplexListNode(i);
    current.next = node;
    current = current.next;
  }
  current = head;
  let temp = head;
  for(let i = 0; i < 5; i++) {
    let j = i;
    while(j-- >= 0 && temp) {
      temp = temp.next;
    }
    current.sibling = temp;
    current = current.next;
  }
  return head;
}

function cloneComplexList(head) {
  if (!head) return null;
  let current = head;
  while(current) {
    let node = new ComplexListNode(current.val);
    node.next = current.next
    current.next = node;
    current = current.next.next;
  }
  current = head;

  while(current) {
    if (current.sibling) {
      current.next.sibling = current.sibling.next;
    }
    current = current.next.next;
  }
  current = head; 

  let cloned = head.next; 
  let clonedCurrent = cloned;
  while(current) {
    clonedCurrent = current.next; 
    current.next = current.next.next; 

    if (!current) break; 

    clonedCurrent.next = current.next;
    current = current.next;
    clonedCurrent = clonedCurrent.next; 
  }
  return cloned;
}

const complexList = buildComplexList();
const complexListCloned = cloneComplexList(complexList);
let current = complexListCloned;

while(current) {
  // console.log(current.val)
  if (current.sibling) {
    console.log(current.val, current.sibling.val)
  }
  current = current.next
}