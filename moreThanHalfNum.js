/*
随机选择一个元素，然后调整数字的顺序，比它小的在左边，比它大的在右边

- 调整后，判断此数字下标
  - 若小于n/2，则中位数在它右边
  - 若大于n/2，则中位数在它左边
  - 若等于n/2，则其就是中位数
*/
// function moreThanHalfNum(arr) {
//   const len = arr.length;

// }
function moreThanHalfNumber(arr) {
  if (!arr.length) return;
  let count = 0;
  let currentNumber = arr[0];
  const len = arr.length;
  for(let i = 0; i < len; i++) {
    if (arr[i] === currentNumber) count++
    else {
      count--
      if (count === 0) {
        currentNumber = arr[i];
        count++;
      }
    }
  }
  return currentNumber;
}

let a = [1, 2, ,3 ,4 ,4,1 ,1 ,2 ,2 ,2 ,2, 2, ,2 ,2, ,2, ,2, 4 ,4 ,4, ,4 ,4, 4, ,4, ,4, ,4, 4 ]
console.log(moreThanHalfNumber(a))