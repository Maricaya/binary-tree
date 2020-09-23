class MaxHeap {
  data = ['-']
  count = 0
  constructor(arr) {
    if (arr && arr.length > 0) {
      this.data = [...this.data, ...arr]
    }
    this.count = this.data.length - 1
  }
  MaxHeap() {}
  size () {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  swap(a, b) {
    const temp = this.data[a]
    this.data[a] = this.data[b]
    this.data[b] = temp
  }
  insert(item) {
    // 放在队尾
    this.data[this.count + 1] = item;
    this.count++
    this.shiftUp(this.count);
  }
  shiftUp(k) {
    // 父节点 < 当前节点，不符合最大堆定义，交换位置
    // 有索引，就要考虑索引越界的问题 k > 1    
    while(k > 1 && this.data[parseInt(k/2)] < this.data[k]) {
      this.swap(parseInt(k/2), k)
      k = parseInt(k/2);
    }
  }
  // 从堆中取出最大值
  extractMax() {
    if (this.count > 0) {
      const ret = this.data[1];
      this.swap(1, this.count);
      this.data.pop()
      this.count--;
      this.shiftDown(1)
      return ret;
    }
  }
  shiftDown(k) {
    // 完全二叉树中，只要有左子节点就说明这个节点是父节点
    while( 2*k <= this.count ) {
      console.log('111', k)
      let j = 2*k // 在此轮循环中，data[k] 和 data[j] 交换位置
      if(j + 1 <= this.count && this.data[j+1] > this.data[j]) {
        j += 1;
      }
      if (this.data[k] >= this.data[j]) {
        break;
      }
      this.swap(k, j);
      // 交换之后，k 就成了 j
      k = j;
    }
  }
}

// 我们已经实现了最大堆，接下来的堆排序就很简单了。
function heapSort(arr) {
  const heap = new MaxHeap();
  const length = arr.length;
  // 依次将 arr 中的数据传入 heap
  for (let i = 0; i < length; i++) {
    heap.insert(arr[i])
  }
  for (let i = 0; i < length; i++) {
    arr[i] = heap.extractMax();
  }
  return arr
}
console.log(heapSort([1, 7, 99, 2, 66]))
