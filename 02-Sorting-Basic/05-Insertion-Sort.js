// 1. 从 1 开始，因为在插入排序中，第一位是有序的
function insertionSort(arr) {
  const n = arr.length
  for (let i = 1; i < n; i++) {
    // 2.寻找元素 arr[i] 合适的插入位置
    // 从后向前插入
    // 插入排序可以提前终止内存循环 
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) {
        [arr[j], arr[j-1]] =  [arr[j-1], arr[j]]
      }
      else {break;}
    }
  }
  return arr
}

console.log(insertionSort([5, 9, 100, 1, 0]))
/* 
  插入算法的优势
  - 当数据比较大，而且基本是有序的情况下
  - 插入排序速度会非常快
*/
