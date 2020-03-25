const Node = require('./ListNode').ListNode

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
    this.mins = []
  }
  push(val) {
    let node = new Node(val);
    if (!this.top) {
      this.top = node;
      this.mins.push(node)
    } else {
      if (this.mins[0].val >= node.val) {
        this.mins.unshift(node)
      } else {
        this.mins.push(this.mins[0])
      }
      node.next = this.top;
      this.top = node;
    }
  }
  pop() {
    let top = this.top
    if (this.pop === null) return null
    this.mins.pop()
    this.top = this.top.next
    return top
  }
  min() {
    return this.mins[0]
  }
}

const stack = new Stack()
stack.push(10)
stack.push(2)
stack.push(2)
stack.push(4)
stack.push(5)
stack.push(1)
stack.push(3)
console.log(stack.min().val)
console.log(stack.pop().val)
console.log(stack.min().val)
console.log(stack.pop().val)
console.log(stack.min().val)
console.log(stack.pop().val)
console.log(stack.pop().val)