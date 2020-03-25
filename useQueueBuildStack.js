class Stack {
  constructor() {
    this.queueA = []
    this.queueB = []
    this.flag = true // true表示往队列A入队，false表示往队列B入队，初始为true
  }
  static popHelper(from, to) {
    for (let i = 0, len = from.length; i < len - 1; i++) {
      to.push(from.shift())
    }
    return from.shift()
  }
  push(node) {
    if (this.flag) {
      this.queueA.push(node)
    } else {
      this.queueB.push(node)
    }
  }
  pop() {
    this.flag = !this.flag
    return this.flag ? Stack.popHelper(this.queueB, this.queueA) : Stack.popHelper(this.queueA, this.queueB)
  }
}

const stack = new Stack()
stack.push(1)
console.log(stack.pop())
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())
stack.push(5)
stack.push(6)
stack.push(7)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

// 1 4 7 6 5 3 2