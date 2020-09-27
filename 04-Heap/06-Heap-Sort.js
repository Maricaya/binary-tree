// 原地堆排序
// 一个数组就是一个堆
// 通过 heapify 把一个数组构建成最大堆
// 在这个最大堆中，第一个元素的位置，就是最大值
// 它应该放在数组最末尾，把它和最末位的数据交换位置
// 但这是，整个数组前半部分就不再是最大堆了。
// 对数组首位进行 shift down 操作，再次变为最大堆
// 。。。
// 数组索引从 0 开始，所以对应的 parent/child 也有所改变
// parent(i) = (i-1)/2
// left child(i) = 2*i + 1
// right child(i) = 2*i + 2
// 最后一个非叶子节点的索引 (count-1)/2 
// 上面都是整除

// O(nlogn)

function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]]
}
function __shiftDown(arr, n, k) {
    while (2 * k + 1 < n) {
        let j = 2 * k + 1;
        // 在此轮循环中，arr[k] 和 arr[j] 交换位置
        if(j + 1 < n && arr[j+1] > arr[j] ) {
            j+=1;
        }
        if(arr[k] >= arr[j]) {
            break;
        }
        swap(arr, k, j)
        k = j;
    }
}

function heapSort(arr) {
    const n = arr.length
    // heapify
    for (let i = parseInt((n - 1) / 2); i >= 0; i--) {
        __shiftDown(arr, n, i)
    }
    // 交换位置
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i)
        __shiftDown(arr, i, 0)
    }
    return arr
}

console.log(heapSort([1, 2, 99, 8, 66]))
