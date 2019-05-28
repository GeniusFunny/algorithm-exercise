function mergeSort(arr) {
  return mergeSortRec(arr)
}

function mergeSortRec(arr) {
  const len = arr.length
  if (len === 1) {
    return arr
  }
  const mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, len)
  return merge(mergeSortRec(left), mergeSortRec(right))
}

function merge(left, right) {
  let result = [],
    il = 0,
    ir = 0
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++])
    } else {
      result.push(right[ir++])
    }
  }
  while (il < left.length) {
    result.push(left[il++])
  }
  while (ir < right.length) {
    result.push(right[ir++])
  }
  return result
}

function binarySearch(arr, val, i) {
  let low = 0, high = arr.length - 1, mid
  while(low < high) {
    mid = Math.floor((low + high) / 2) + 1
    if (arr[mid] > val) {
      high = mid - 1
    } else {
      low = mid
    }
  }

  return arr[mid] === val && i !== mid
}

function findSum(arr, sum) {
  console.log('需要查询的数组', arr)
  console.log('x为:', sum)
  arr = mergeSort(arr)
  for (let i = 0; i < arr.length; i++) {
    if (binarySearch(arr, sum - arr[i], i)) {
      return true
    }
  }
  return false
}