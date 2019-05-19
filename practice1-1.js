/*
1．	Implement exercise 2.3-7.
*/
function mergeSort(arr, l, r) {
  let mid = Math.floor((l+r)/2)
  if (l < r) {
    mergeSort(arr, l, mid)
    mergeSort(arr, mid+1, r)
    merge(arr, l, mid, r)
  }
}
function merge(arr, l, m, r) {
  let i = l, j = r
  while(i < j) {
    debugger
    while(i < m) {
      if (arr[i] > arr[m]) {
        break
      }
      i++
    }
    while(j > m) {
      if (arr[j] < arr[m]) {
        break
      }
      j--
    }
    if (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      i++
      j--
    }
  }
}

function binarySearch(arr, val) {
  let low = 0, high = arr.length - 1, mid
  while(low < high) {
    mid = Math.floor((low + high) / 2) + 1
    debugger
    if (arr[mid] > val) {
      high = mid - 1
    } else {
      low = mid
    }
  }
  return arr[mid]
}

function findSum(arr, sum) {
  mergeSort(arr, 0, arr.length - 1)
  console.log(arr)
  arr = arr.sort((a, b) => {
    if (a > b) return 1
    else return -1
  })
  for (let i = 0; i < arr.length; i++) {
    if (binarySearch(arr, sum - arr[i])) {
      return true
    }
  }
  return false
}

let arr = [5, 2, 3, 1, 7, 9, 10]
console.log(arr)
console.log(findSum(arr, -10))