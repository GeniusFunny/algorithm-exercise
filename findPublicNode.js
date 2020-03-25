function findPublicNode(listA, listB) {
  if (listA === null || listB === null) return null;
  let currentA = currentB = null;
  let lenA = lenB = 0;
  let diff = 0;

  while(currentA) {
    lenA++;
    currentA = currentA.next;
  }
  while(currentB) {
    lenB++;
    currentB = currentB.next;
  }
  let diff = lenA - lenB;
  currentA = listA;
  currentB = listB;
  if (diff > 0) {
    // list A更长
    while(diff-- > 0) currentA = currentA.next
  } else if (diff === 0) {
    diff = Math.abs(diff);
    while(diff-- > 0) currentB = currentB.next
  } else {
    return listA;
  }
  while(currentA && currentB) {
    if (currentA === currentB) return currentA;
  }
  return null
}