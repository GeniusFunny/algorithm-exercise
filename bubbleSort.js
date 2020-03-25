/*
  冒泡排序
*/

function bubbleSort(arr) {
  // 遍历数组，若当前元素大于右边的元素，则二者交换位置，较大的元素继续往后比较
  // 若当前元素小于右边的元素，则以右边的元素开始继续往后方比较
  // 表现：大元素逐渐冒泡到数组后方
  const len = arr.length;
  for(let i = len; i > 0; i--) {
    for(let j = 1; j < i; j++) {
      if (arr[j] < arr[j-1]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j]
        arr[j] = temp;
      }
    }
  }
  console.log(arr)
}
let arr = [3, 2, 1, 5, 3, 7, 10, 12, 4, 6, 13, 15, 24, 2, 4, 7, 0, 200]
bubbleSort(arr)