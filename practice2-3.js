/*
3．	Longest Common Substring. The following are some instances.
a)	X: xzyzzyx   Y: zxyyzxz
b)	X:MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCALLAAQANKESSSESFISRLLAIVAD
Y:MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCTLLAAQANKENSNESFISRLLAIVAG

*/

function longestCommonSubstring(A, B) {
  const lenA = A.length
  const lenB = B.length
  const map = {}

  for (let i = 0; i <= lenB; i++) {
    map[`0-${i}`] = 0
  }
  for (let i = 0; i <= lenA; i++) {
    map[`${i}-0`] = 0
  }
  let max = '0-0'
  for (let i = 1; i <= lenA; i++) {
    for (let j = 1; j <= lenB; j++) {
      if (A[i-1] === B[j-1]) {
        map[`${i}-${j}`] = map[`${i - 1}-${j - 1}`] + 1
      } else {
        map[`${i}-${j}`] = 0
      }
      if (map[max] <= map[`${i}-${j}`])
        max = `${i}-${j}`
    }
  }
  let indexs = max.split('-')
  console.log(A.slice(indexs[0] - map[max], indexs[0]))
}

const strA = 'xzyzzyx'
const strB = 'zxyyzxz'
console.log(strA, strB)
longestCommonSubstring(strA, strB)