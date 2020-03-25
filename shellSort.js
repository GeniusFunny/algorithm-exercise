function shellSort(arr, gapArr) {
  const len = arr.length;
  for(let k = 0; k < gapArr.length; k++) {
    let gap = gapArr[k];
    for(let i = gap; i < len; i++) {
      for(let j = i; j >= 0; j -= gap) {
        if (arr[j] < arr[j-gap]) {
          let temp = arr[j];
          arr[j] = arr[j-gap];
          arr[j-gap] = temp;
        }
      }
    }
  }
}

let arr = [49, 38, 65, 97, 26, 13, 27, 49, 55, 4]
shellSort(arr, [5, 2, 1])