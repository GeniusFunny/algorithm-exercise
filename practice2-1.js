/*
1．	Matrix-chain product. The following are some instances.
a)	<3, 5, 2, 1,10>
b)	<2, 7, 3, 6, 10>
c)	<10, 3, 15, 12, 7, 2>
d)	<7, 2, 4, 15, 20, 5>

*/

function matrix_chain(arr, start, end) {
  const len = arr.length - 1 // 矩阵个数
  const s = {}, p = {}

  for (let i = 1; i <= len; i++) {
    p[`${i}:${i}`] = s[`${i}:${i}`] = 0
  }

  for (let l = 2; l <= len; l++) {
    for (let j = 1; j <= len - l + 1; j++) {
      p[`${j}:${j+l-1}`] = Infinity
      for (let k = j; k <= j + l - 1; k++) {
        let temp = p[`${j}:${k}`] + p[`${k+1}:${j+l-1}`] + arr[j-1] * arr[k] * arr[j+l-1]
        if (temp < p[`${j}:${j+l-1}`]) {
          p[`${j}:${j+l-1}`] = temp
          s[`${j}:${j+l-1}`] = k
        }
      }
    }
  }
  console.log(s)
  matrix_path(s, start, end)
  return p[`${start}:${end}`]
}
function matrix_path(s, start, end) {
  let k = s[`${start}:${end}`]
  if (start !== k && end !== k) {
    matrix_path(s, start, k)
    matrix_path(s, k + 1, end)
  }
  console.log(k)
}

let arr = [30, 35, 15, 5, 10, 20, 25]
console.log(matrix_chain(arr, 2, 5))