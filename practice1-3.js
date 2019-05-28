/*
3．	Implement Quicksort and answer the following questions. (1) How many comparisons will Quicksort do on a list of n elements that all have the same value? (2) What are the maximum and minimum number of comparisons will Quicksort do on a list of n elements, give an instance for maximum and minimum case respectively.
*/
function bubbleSort(arr, l, r) {
  for (let i = r; i >= l; i--) {
    for (let j = l; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}
function quickSort(arr, l, r) {
  const privot = arr[l]
  let i = l, j = r
  while (true) {
    while(true) {
      if (arr[j] > privot && i < j) {
        j--
      } else {
        break
      }
    }

    while (true) {
      if (arr[i] <= privot && i < j) {
        i++
      } else {
        break
      }
    }

    if (i < j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      j--
    } else {
      arr[l] = arr[i]
      arr[i] = privot
      break
    }
  }
  if (r - l <= 20) {
    bubbleSort(arr, l, i - 1)
    bubbleSort(arr, i + 1, r)
  } else {
    quickSort(arr, l, i - 1)
    quickSort(arr, i + 1, r)
  }
}

let arr = []
for (let i = 0; i < 20; i++) {
  arr.push(Math.floor(Math.random() * 100))
}
console.log(arr)
quickSort(arr, 0, arr.length - 1)
console.log(arr)