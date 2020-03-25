function judgeStackSequence(pushSequence = [], popSequence = []) {
  // 如果栈顶就是待出栈序列元素，则直接出栈
  // 若栈顶不是待出栈序列元素，则将待入栈序列元素入栈，直到待出栈元素入栈
  // 若入栈序列全部入栈，仍栈顶仍不是出栈序列待出栈序列，则判断出栈序列不是该入栈序列的弹出序列
  let stack = [];
  if (!pushSequence.length || !popSequence) return false;
  while(popSequence.length) {
    console.log(stack[stack.length-1], popSequence[0])
    if (stack[stack.length-1] === popSequence[0]) {
      popSequence.shift()
      stack.pop()
    } else {
      if (!pushSequence.length) break;
      stack.push(pushSequence.shift())
    }
  }
  return popSequence.length ? false : true;
}

let pushSequence = [1, 2, 3, 4, 5];
let popSequence = [5, 4, 3, 2, 1];

console.log(judgeStackSequence(pushSequence, popSequence))