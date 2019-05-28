/*
  2．	Longest Common Subsequence (LCS). The following are some instances.
a)	X: xzyzzyx   Y: zxyyzxz
b)	X:MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCALLAAQANKESSSESFISRLLAIVAD
Y:MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCTLLAAQANKENSNESFISRLLAIVAG

*/
function longestCommonSubsequence(A, B) {
  console.log(A)
  console.log(B)
  const lenA = A.length
  const lenB = B.length
  const map = {}, path = {}

  for (let i = 0; i <= lenB; i++) {
    map[`0-${i}`] = 0
  }
  for (let i = 0; i <= lenA; i++) {
    map[`${i}-0`] = 0
  }
  // ABCBDAB
  // BDCABA
  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      if (A[i-1] === B[j-1]) {
        map[`${i}-${j}`] = map[`${i - 1}-${j - 1}`] + 1
        path[`${i}-${j}`] = '左上'
      } else if (map[`${i - 1}-${j}`] >= map[`${i}-${j - 1}`]) {
        map[`${i}-${j}`] = map[`${i - 1}-${j}`]
        path[`${i}-${j}`] = '上'
      } else {
        map[`${i}-${j}`] = map[`${i}-${j- 1}`]
        path[`${i}-${j}`] = '左'
      }
    }
  }
  console.log(map[`${lenA}-${lenB}`])
  printLCS(path, A, lenA, lenB)
}

function printLCS(path, X, i, j) {
  if (i === 0 || j === 0) return
  if (path[`${i}-${j}`] === '左上') {
    printLCS(path, X, i - 1, j - 1)
    console.log(X[i-1])
  } else if (path[`${i}-${j}`] === '上') {
    printLCS(path, X, i - 1, j)
  } else {
    printLCS(path, X, i, j - 1)
  }
}
const strA = 'xzyzzyx'
const strB = 'zxyyzxz'
longestCommonSubsequence(strA, strB)