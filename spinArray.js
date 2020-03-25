// [0, 1, 1 ,1 ,1] ---> [1,1,1,0,1] [0,1,2,2,2]
// [1, 2, 3, 4 ,5] ---> [3, 4, 4, 2, 3]
function spinArray(arr) {
  if (!arr && !arr.length) return undefined;
  const len = arr.length;
  if (arr[0] < arr[len-1]) return arr[0];
  if (arr[0] >= arr[len-1]) {
    let start = 0;
    let end = len-1;
    let mid = Math.floor((start + end)/2);
    while(end - start > 0) {
      if(arr[start] > arr[mid] ) {
        // 上半区出现start > mid，最小元素一定出现在此区域
        end = mid;
        mid = Math.floor((start + end) / 2);
        continue;
      }
      if (arr[mid] > arr[end]) {
        // 下半区出现mid > end，最小元素一定出现在此区域
        start = mid+1;
        mid = Math.floor((start + end) / 2);
        continue;
      }
      if (arr[start] === arr[mid]) {
        // mid = start, 说明此区域元素必定都相等，所以可以将start设置为mid
        start = mid;
      }
      if (arr[end] === arr[mid]) {
        // mid = end，元素可能是先升后降，所以将end-1或mid+1
        end -= 1;
      }
      mid = Math.floor((start + end) / 2);
    }
    return arr[start];
  }
}
const arr = [1,1,1,0,1];
console.log(spinArray(arr))