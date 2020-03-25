class Queue {
  constructor() {
    this.stackA = []
    this.stackB = []
  }
  appendTail(node) {
    this.stackA.push(node);
  }
  deleteHead() {
    if (this.stackB.length) {
      return this.stackB.pop();
    } else {
      for(let i = 0, len = this.stackA.length; i < len; i++) {
        this.stackB.push(this.stackA.pop())
      }
      return this.stackB.pop();
    }
  }
}
const queue = new Queue()
queue.appendTail(1)
queue.appendTail(2)
queue.appendTail(3)
queue.appendTail(4)
console.log(queue.deleteHead())
console.log(queue.deleteHead())
queue.appendTail(5)
queue.appendTail(6)
queue.appendTail(7)
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())