/*
2．	Solve the 8-Queen problem using back-tracking algorithm.
*/

function eightQueen() {
  const N = 8
  const chessboard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]

  function settleQueen(y) {
    if (y === N)
      return true
    for (let i = 0; i < N; i++) {
      for (let x = 0; x < N; x++)
        chessboard[x][y] = 0
      if (check(i, y)) {
        chessboard[i][y] = 1
        if (settleQueen(y+1))
          return true
      }
    }
    return false
  }

  function check(x, y) {
    for (let i = 0; i < y; i++) {
      if (chessboard[x][i])
        return false
      if (x-1-i >= 0 && chessboard[x-1-i][y-1-i]) 
        return false
      if (x+1+i < N && chessboard[x+1+i][y-1-i])
        return false
    }
    return true
  }
  settleQueen(0)
  console.table(chessboard)
  return chessboard
}

eightQueen()