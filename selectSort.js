function selectSort(arr) {
  const len = arr.length;
  for(let i = len - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
}
let arr = [3, 2, 1, 5, 3, 7, 10, 12, 4, 6, 13, 15, 24, 2, 4, 7, 0, 200]
selectSort(arr)