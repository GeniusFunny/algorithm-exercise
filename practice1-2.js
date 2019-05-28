/*
2．	Implement priority queue.
*/

function Item(value, priority) {
  this.value = value
  this.priority = priority
}

function PriorityQueue() {
  this.items = []
}

PriorityQueue.prototype = {
  insert(item) {
    let index = this.items.findIndex(priorityItem => priorityItem.priority <= item.priority)
    if (index === -1) {
      if (this.items.length) {
        this.items.push(item)
      } else {
        this.items.unshift(item)
      }
    } else {
      this.items.splice(index, 0, item)
    }
  },
  pull() {
    this.items.splice(0, 1)
  },
  peek() {
    return this.items[0]
  },
  clear() {
    this.items = []
  },
  print() {
    this.items.forEach(item => console.log(item))
  }
}

let priority_queue = new PriorityQueue()

let item1 = new Item('A', 10)
let item2 = new Item('B', 9)
let item3 = new Item('C', 11)
let item4 = new Item('D', 8)

priority_queue.insert(item1)
priority_queue.insert(item2)
priority_queue.insert(item3)
priority_queue.insert(item4)

priority_queue.print()