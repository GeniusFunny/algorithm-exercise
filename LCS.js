/*
最长公共子序列
状态方程：
         = 0 ,  i=j=0
c[i, j]  = c[i-1,j-1] + 1,   a[i] = b[j]
         = max(c[i, j-1], c[i-1, j])    a[i] != b[j]
*/

function LCS(strA, strB) {
  let dp = {};
  let lenA = strA.length;
  let lenB = strB.length;

  dp['-1,-1'] = 0
  for(let i = 0; i < lenA; i++) {
    dp[`${i},-1`] = 0;
  }
  for(let i = 0; i < lenB; i++) {
    dp[`-1,${i}`] = 0;
  }

  for(let i = 0; i < lenA; i++) {
    for(let j = 0; j < lenB; j++) {
      if(strA[i] === strB[j]) {
        dp[`${i},${j}`] = dp[`${i-1},${j-1}`] + 1;
      } else {
        dp[`${i},${j}`] = Math.max(dp[`${i},${j-1}`], dp[`${i-1},${j}`]);
      }
    }
  }
  return dp[`${lenA-1},${lenB-1}`];
}

console.log(LCS('ABCBDAB', 'BDCABA'))

