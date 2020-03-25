let numbers = [2, 3, 5, 4, 3, 2, 6, 7]

function find_repeat_number(numbers) {
  let mid = Math.floor(numbers.length / 2);
  let low = 1;
  let high = numbers.length - 1;

  while (1) {
    let left = 0
    let right = 0
    console.log(`low: ${low}, mid: ${mid}, high: ${high}`)
    for (let i = 0, len = numbers.length; i < len; i++) {
      if (numbers[i] <= mid && numbers[i] >= low) left++;
      else if (numbers[i] > mid && numbers[i] <= high) right++
    }
    if (left > (mid - low + 1)) {
      if (mid === low) return mid;
      high = mid;
      mid = Math.floor((low + high) / 2);
    } else if (right > (high - mid)){
      if (mid + 1 === high) return high;
      low = mid;
      mid = Math.floor((low + high) / 2);
    }
    console.log(`left: ${left}, right: ${right}`)
    left = right = 0
  }
}

console.log(find_repeat_number(numbers))