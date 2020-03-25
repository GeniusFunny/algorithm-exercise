const maze = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const maps = []
const direcX = [0, 0, -1, 1]
const direcY = [1, -1, 0, 0]
for(let i = 0; i < maze.length; i++) {
  maps[i] = []
  for(let j = 0; j < maze[i].length; j++) {
    maps[i][j] = Number.MAX_SAFE_INTEGER;
  }
}
class Queue {
  constructor() {
    this.queue = [];
    this.index = 0;
  }
  enqueue(val) {
    this.queue.push(val);
  }
  dequeue() {
    return this.queue[this.index++];
  }
  isLast() {
    return this.index && this.index  === this.queue.length
  }
  has(val) {
    return this.queue.some(item => item.x === val.x && item.y === val.y);
  }
}

function bfs(start) {
  const queue = new Queue();
  queue.enqueue(start);
  maps[start.x][start.y] = 0;
  while(!queue.isLast()) {
    const current = queue.dequeue();
    for (let i = 0; i < direcX.length; i++) {
      let newX = current.x+direcX[i];
      let newY = current.y+direcY[i];
      if (newX >= 0 && newX <= 4 && newY >= 0 && newY <= 4 && !queue.has({x: newX, y: newY}) && maze[newX][newY] === 0) {
        queue.enqueue({x: newX, y: newY});
        maps[newX][newY] = Math.min(maps[current.x][current.y]+1, maps[newX][newY]);
      }
    }
  }
  console.table(maps)
}
bfs({x: 0, y: 4})