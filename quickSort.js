function quickSort(arr) {
  function partition(arr, left, right) {
    let pivot = arr[right];
    let i = left, j = right;
    while(i <= j) {
      while(arr[i] < pivot) i++
      while(pivot < arr[j]) j--
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++
        j--
      }
    }
    return i;
  }
  function qSort(arr, left, right) {
    let pivot
    if (left < right) {
      pivot = partition(arr, left, right);
      if (left < pivot-1) qSort(arr, left, pivot-1)
      if (right > pivot) qSort(arr, pivot, right)
    }
  }
  qSort(arr, 0, arr.length-1)
}
let arr = [3, 5, 1, 6, 4, 7, 2] // [3,5,1,2,4,7,6]
quickSort(arr)
console.log(arr)