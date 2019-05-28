/*
4．	Give a divide and conquer algorithm for the following problem: 
you are given two sorted lists of size m and n, and are allowed unit time access to the ith element of each list. 
Give an O(lg m + lgn) time algorithm for computing the kth largest element in the union of the two lists. 
(For simplicity, you can assume that the elements of the two lists are distinct).
*/

function selectK(A, a_l, a_r, B, b_l, b_r, k) {
  if (A[0] > A[1]) A = A.reverse()
  if (B[0] > B[1]) B = B.reverse()

  let a_mid = Math.floor((a_r - a_l) / 2) + a_l
  let b_mid = Math.floor((b_r - b_l) / 2) + b_l
  let a_len = A.length - 1
  let b_len = B.length - 1

  if (a_l > a_r) {
    return B[b_l + k - 1]
  }
  if (b_l > b_r) {
    return A[a_l + k - 1]
  }
  if (A[a_mid] <= B[b_mid]) {
    if (a_len - a_mid + b_len - b_mid + 1 >= k) {
      return selectK(A, a_mid + 1, a_r, B, b_mid, b_r, k)
    } else {
      return selectK(A, a_l, a_mid, B, b_l, b_mid - 1, k - (a_r - a_mid) - (b_r - b_mid + 1))
    }
  } else {
    if (a_len - a_mid + b_len - b_mid + 1 >= k) {
      return selectK(A, a_mid, a_r, B, b_mid + 1, b_r, k)
    } else {
      return selectK(A, a_l, a_mid - 1, B, b_l, b_mid, k - (b_r - b_mid) - (a_r - a_mid + 1))
    }
  }
  
}
let A = [1, 3, 5, 7, 9].reverse()
let B = [2, 4, 6, 8, 10].reverse()
console.log('两个有序数组')
console.log(A, B)
console.log('查询第2大的元素')
console.log(selectK(A, 0, A.length - 1, B, 0, B.length - 1, 2))