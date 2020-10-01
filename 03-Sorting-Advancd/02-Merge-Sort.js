// Ologn 比 n^2 快多少？
// merget sort
// 首先数组分一半
// 左边排序/右边排序
// 归并

// O(NlogN)
// 通过二分法达到 logN 的层级
// 每一层 O(N) 的算法搞事情

// 归并过程 merge
// 下面问题来了，我们怎么合并两个有需数组呢？
// 多使用了存储空间
// 但是，在现在的计算机中，时间的效率要比空间效率重要的多

const utils = {
    randomNum() {
      return Math.floor(Math.random() * 100)
    },
    randomArray() {
      return Array.from(Array(this.randomNum()), _ => this.randomNum())
    }
  }
  
  function merge(left, right) {
    let result = []
    let i = 0, j = 0
    while(i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i])
        i++
      } else {
        result.push(right[j])
        j++
      }
    }
    // 剩下的
    if (i < left.length) {
      result.push(...left.slice(i))
    } else {
      result.push(...right.slice(j))
    }
    return result
  }
  
  function mergeSort(array) {
    if (array.length < 2) {
      return array
    }
    let m = Math.floor(array.length / 2)
    let left = mergeSort(array.slice(0, m))
    let right = mergeSort(array.slice(m))
    return merge(left, right)
  } 
  
  let array = utils.randomArray()
  console.log(mergeSort(array))
  
