// 快速排序

// 选取第一个元素作为临界点，比如 4
// 把这个元素挪到排好序他在的位置
// 这时 4 之前的元素都是 < 4,4 之后都是 > 4
// 然后对小于4，大于4的子数组分别使用快速排序

// 临界点一开始的位置 l，值为 v ,初始位置为 0
// 临界点排好序后，分界点的位置为 j
// 左侧 [l+1...j] < v
// 右侧 [j+1...i-1] > v
// 当前访问的元素 i

const utils = {
    swap(array, a, b) {
      [array[a], array[b]] = [array[b], array[a]]
    },
    randomNum() {
      return Math.floor(Math.random() * 100)
    },
    randomArray() {
      return Array.from(Array(this.randomNum()), _ => this.randomNum())
    }
  }
  
  function partition(array, start, end) {
    let j = start
    let index = Math.floor(Math.random()*(end -start + 1) + start)
    utils.swap(array, index, end)
    let pivot = array[end]
    for (let i = start; i <= end; i++) {
      if (array[i] <= pivot) {
        utils.swap(array, i, j++)
      }
    }
    return j - 1
  }
  
  function quickSort(array, start = 0, end = array.length -1) {
    if (end - start < 1) return array
    let pivotIndex = partition(array, start, end)
    quickSort(array, start, pivotIndex - 1)
    quickSort(array, pivotIndex + 1, end)
    return array
  }
  let array = utils.randomArray()
  console.log(quickSort(array))
