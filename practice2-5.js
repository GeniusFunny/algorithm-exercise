/*
5．	Shortest path in multistage graphs. Find the shortest path from 0 to 15 for the following graph.
A multistage graph is a graph (1) G=(V,E) with V partitioned into K >= 2 disjoint subsets such that if (a,b) is in E, then a is in Vi , and b is in Vi+1 for some subsets in the partition; and (2) | V1 | = | VK | = 1.

*/
function shortestPath(graph, start, end) {
  const dist = [], len = graph.length
  for (let i = 0; i < len; i++) {
    dist[i] = []
    for (let j = 0; j < len; j++) {
      dist[i][j] = graph[i][j]
    }
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
  return dist[start][end]
}
let arr = []
for (let i = 0; i < 16; i++) {
  arr[i] = Array(16).fill(Infinity)
}

arr[0][1] = 5
arr[0][2] = 3
arr[1][3] = 1
arr[1][4] = 3
arr[1][5] = 6
arr[2][4] = 8
arr[2][5] = 7
arr[2][6] = 6
arr[3][7] = 6
arr[3][8] = 8
arr[4][3] = 7
arr[4][8] = 5
arr[5][8] = 3
arr[5][9] = 3
arr[6][8] = 8
arr[6][9] = 4
arr[7][10] = 2
arr[7][11] = 2
arr[8][11] = 1
arr[8][12] = 3
arr[9][11] = 3
arr[9][12] = 3
arr[10][13] = 3
arr[10][14] = 5
arr[11][13] = 5
arr[11][14] = 2
arr[12][13] = 6
arr[12][14] = 6
arr[13][15] = 4
arr[14][15] = 3 
console.log(shortestPath(arr, 0, 15))