/*
3．	Single-source shortest paths. The following is the adjacency matrix, vertex A is the source.
     A   B   C   D   E
A       -1   3
B           3    2    2
C
D       1   5
E                -3
*/
function singleSourceShortestPaths(graph, source) {
  graph = graph.map(row => row.map(item => item === 0 ? Infinity : item))
  const len = graph.length
  const dist = []
  for (let i = 0; i < len; i++) {
    dist[i] = [...graph[i]]
  }
  console.table(dist)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (graph[i][j] !== Infinity) {
        if (dist[source][i] + graph[i][j] < dist[source][j]) {
          dist[source][j] = dist[source][i] + graph[i][j]
        }
      }
    }
  }
  console.table(dist)
}


const graph = [
  [0, -1, 3, 0, 0],
  [0, 0, 3, 2, 2],
  [0, 0, 0, 0, 0],
  [0, 1, 5, 0, 0],
  [0, 0, 0, -3, 0]
]

singleSourceShortestPaths(graph, 0)