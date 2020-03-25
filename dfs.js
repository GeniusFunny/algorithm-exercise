const maze = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const marked = []
const direcX = [0, 1, 0, -1]
const direcY = [-1, 0, 1, 0]
let flag = 0;
for (let i = 0; i < maze.length; i++) {
  marked[i] =[]
}
// 方向顺序：左下右上
function dfs(startPositon, endPosition) {
  marked[startPositon.x][startPositon.y] = true;
  if (startPositon.x === endPosition.x && startPositon.y === endPosition.y) {
    console.log('OJBK')
    flag = 1;
    return;
  }
  // 左
  for (let i = 0; i < direcX.length; i++) {
    let newX = startPositon.x + direcX[i];
    let newY = startPositon.y + direcY[i];
    if (newX >= 0 && newX <= 4 && newY >= 0 && newY <= 4 && !flag && !marked[newX][newY]&& maze[newX][newY] === 0) {
      if (i === 0) console.log('左')
      if (i === 1) console.log('下')
      if (i === 2) console.log('右')
      if (i === 3) console.log('上')
      marked[newX][newY] = true;
      console.log(newX, newY)
      dfs({x: newX, y: newY}, endPosition);
      marked[newX][newY] = false;
      console.log(`${newX}，${newY}回退`)
    }
  }
}
dfs({x:0, y:4}, {x: 4, y: 0})