/*
4．	All-pairs shortest paths. The adjacency matrix is as same as that of problem 3.(Use Floyd or Johnson’s algorithm)
*/
function allPairsShortestPaths(graph, start, end) {
  const dist = [], len = graph.length
  graph = graph.map(row => row.map(item => item === 0 ? Infinity : item))
  for (let i = 0; i < len; i++) {
    dist[i] = [...graph[i]]
  }
  for (let k = 0; k < len; k++) {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }
  console.table(dist)
  return dist[start][end]
}

const graph = [
  [0, -1, 3, 0, 0],
  [0, 0, 3, 2, 2],
  [0, 0, 0, 0, 0],
  [0, 1, 5, 0, 0],
  [0, 0, 0, -3, 0]
]

console.log(allPairsShortestPaths(graph, 1, 4))