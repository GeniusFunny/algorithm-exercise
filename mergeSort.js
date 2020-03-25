// function mergeSort(arr) {
//   let aux = [] // 辅助数组
//   function innerMergeSort(arr, left, right) {
//     if (right - left > 1) {
//       let mid = Math.floor((right + left) / 2);
//       console.log(left, mid, right)
//       innerMergeSort(arr, left, mid);
//       innerMergeSort(arr, mid+1, right);
//       merge(arr, left, mid, right);
//     } else if(right - left === 1) {
//       if (arr[left] > arr[right]) [arr[left], arr[right]] = [arr[right], arr[left]]
//     }
//   }
//   function merge(arr, left, mid, right) {
//     let i = left, j = mid+1
//     for(let k = left; k <= right; k++)
//       aux[k] = arr[k]
//     for(let k = left; k <= right; k++) {
//       if (i > mid) arr[k] = aux[j++] // 左半边用尽（取用右半边的元素）
//       else if(j > right) arr[k] = aux[i++] // 右半边用尽（取用左半边的元素）
//       else if(aux[i] < aux[j]) arr[k] = aux[i++] // 左半边当前元素小于右半边当前元素（取用左半边的元素）
//       else arr[k] = aux[j++] // // 左半边当前元素大于右半边当前元素（取用右半边的元素）
//     }
//   }
//   innerMergeSort(arr, 0, arr.length-1)
// }
function mergeSort(arr) {
  function innerMergeSort(arr) {
    const len = arr.length;
    if (len === 1) return arr;
    let mid = Math.floor(len / 2), left = arr.slice(0, mid), right = arr.slice(mid, len);
    return merge(innerMergeSort(left), innerMergeSort(right));
  }
  function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    const leftLength = left.length;
    const rightLength = right.length;
    while(i < leftLength && j < rightLength) {
      if (left[i] < right[j]) result.push(left[i++])
      else result.push(right[j++])
    }
    while(i < leftLength) {
      result.push(left[i++])
    }
    while(j < rightLength) {
      result.push(right[j++])
    }
    return result;
  }
  return innerMergeSort(arr)
}


const arr = [5, 3, 6, 1, 7, 4, 2]

console.log(mergeSort(arr))