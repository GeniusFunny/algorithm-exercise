function findGreatestSumOfSubArray(arr) {
  const len = arr.length;
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < len; i++) {
    if(sum <= 0) sum = arr[i];
    else
      sum += arr[i]
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum
}

function findGreatestSumOfSubArrayDP(arr) {
  const len = arr.length;
  let dp = [];
  dp[0] = arr[0]
  let max = Number.MIN_SAFE_INTEGER;
  for(let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i-1] + arr[i], arr[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}

let arr = [1, -2, 3, 10, -4, 7, 2, -5]
console.log(findGreatestSumOfSubArray(arr),findGreatestSumOfSubArrayDP(arr))
