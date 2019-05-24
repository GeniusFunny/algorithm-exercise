function maxSum(arr) {
  const dp = [], len = arr.length
  dp[0] = Infinity * -1
  for (let i = 1; i <= len; i++) {
    dp[i] = Math.max(dp[i-1] + arr[i-1], arr[i-1])
  }
  return Math.max(...dp)
}

let arr = [-2, 11, -4, 13, -5, -2]

console.log(maxSum(arr))