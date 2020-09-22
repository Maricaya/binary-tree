class MaxHeap {
  data = ['-']
  count = 0
  constructor(arr) {
    this.data = [...this.data, ...arr]
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
}

const maxheap = new MaxHeap([1]);
maxheap.insert(99)
for (let index = 0; index < 2; index++) {
  maxheap.insert(parseInt(Math.random() * 100));  
}
console.log('maxheap', maxheap)
