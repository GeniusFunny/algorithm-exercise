function insertSort(arr) {
  const len = arr.length;
  for(let i = 1; i < len; i++) {
    for(let j = i; j >= 0; j--) {
      if (arr[j] < arr[j-1]) {
        let temp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = temp;
      }
    } 
  }
}
let arr = [3, 2, 1, 5, 3, 7, 10, 12, 4, 6, 13, 15, 24, 2, 4, 7, 0, 200]
insertSort(arr)