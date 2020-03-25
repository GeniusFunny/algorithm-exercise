function heapSort(arr) {
  let heapSize = arr.length;
  buildHeap(arr);
  while(heapSize > 1) {
    heapSize--;
    [arr[0], arr[heapSize]] = [arr[heapSize], arr[0]]
    heapify(arr, heapSize, 0)
  }
  function buildHeap(arr) {
    // 处理有子节点的节点
    for(let i = Math.floor(arr.length / 2); i >= 0; i--) {
      heapify(arr, heapSize, i)
    }
  }
  // 保证 arr[parent] > arr[parent*2+1]与arr[parent*2+2]
  function heapify(arr, heapSize, i) {
    let left = 2*i+1, right = 2*i+2;
    let largest = i;

    if (left < heapSize && arr[left] > arr[largest]) largest = left;
    if (right < heapSize && arr[right] > arr[largest]) largest = right;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      // 交换根节点与最大节点的位置，根节点的值可能小于其子节点 需要再来一次heapify
      heapify(arr, heapSize, largest)
    }
  }
}
let arr = [3,5,1,6,4,7,2]
heapSort(arr)
console.log(arr)